"use client";

import React, { useLayoutEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div className="scroll-stack-wrapper relative w-full">
    <div
      className={`scroll-stack-card relative box-border w-full origin-top rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] will-change-transform ${itemClassName}`.trim()}
    >
      {/* Clipping lives on a separate, non-transformed layer so the browser
          doesn't have to recompute the rounded-corner mask every scroll
          frame on top of the JS-driven transform — that combo is what was
          causing the visible flicker while scrolling. Positioned with
          inset-0 (not h-full) so its height is always definite, regardless
          of the outer card's flex/min-height sizing. */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {children}
      </div>
    </div>
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 40,
  itemScale = 0.03,
  itemStackDistance = 20,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const wrappersRef = useRef<HTMLElement[]>([]);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);
  const scrollIdleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const endElementRef = useRef<HTMLElement | null>(null);
  // Wrapper offsets are read once per layout change instead of once per scroll
  // frame — reading getBoundingClientRect() in the same loop that writes
  // card.style.transform forces a synchronous reflow on every one of the 12
  // cards, every frame, which is what made scrolling this section janky.
  const metricsRef = useRef<{ wrapperTops: number[]; endTop: number }>({
    wrapperTops: [],
    endTop: 0,
  });
  const pointerEventsBlockedRef = useRef(false);

  // While actively scrolling, the pinned/stacking cards translate underneath
  // a stationary mouse cursor. That constantly toggles :hover on whichever
  // card the pointer happens to be over, firing the group-hover scale /
  // color transitions repeatedly — which is what reads as "flicker" while
  // scrolling. Disabling pointer events for the duration of the scroll (and
  // briefly after) stops that hover churn without affecting the intentional
  // hover effect once the user is actually still.
  const markScrollActivity = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    if (!pointerEventsBlockedRef.current) {
      el.style.pointerEvents = "none";
      pointerEventsBlockedRef.current = true;
    }
    if (scrollIdleTimeoutRef.current) clearTimeout(scrollIdleTimeoutRef.current);
    scrollIdleTimeoutRef.current = setTimeout(() => {
      if (scrollerRef.current) scrollerRef.current.style.pointerEvents = "";
      pointerEventsBlockedRef.current = false;
    }, 140);
  }, []);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value as string);
    },
    []
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement,
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller,
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const measure = useCallback(() => {
    metricsRef.current = {
      wrapperTops: wrappersRef.current.map((wrapper) => getElementOffset(wrapper)),
      endTop: endElementRef.current ? getElementOffset(endElementRef.current) : 0,
    };
  }, [getElementOffset]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || !wrappersRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const { wrapperTops, endTop: endElementTop } = metricsRef.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = wrapperTops[i];
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jTriggerStart = wrapperTops[j] - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) {
            topCardIndex = j;
          }
        }
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : "";

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
  ]);

  const setupScroll = useCallback(() => {
    if (useWindowScroll) {
      let ticking = false;
      const onScroll = () => {
        markScrollActivity();
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateCardTransforms();
            ticking = false;
          });
          ticking = true;
        }
      };
      const onResize = () => {
        measure();
        updateCardTransforms();
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onResize, { passive: true });
      updateCardTransforms();

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
      };
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector(".scroll-stack-inner") as HTMLElement,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenis.on("scroll", () => {
        markScrollActivity();
        updateCardTransforms();
      });

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);
      lenisRef.current = lenis;
    }
  }, [updateCardTransforms, useWindowScroll, markScrollActivity, measure]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const wrappers = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-wrapper")
        : scrollerRef.current?.querySelectorAll(".scroll-stack-wrapper") ?? []
    ) as HTMLElement[];

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? []
    ) as HTMLElement[];
    
    wrappersRef.current = wrappers;
    cardsRef.current = cards;
    endElementRef.current = (
      useWindowScroll ? document : scrollerRef.current!
    ).querySelector(".scroll-stack-end");
    const transformsCache = lastTransformsRef.current;

    wrappers.forEach((wrapper, i) => {
      if (i < wrappers.length - 1) {
        wrapper.style.marginBottom = `${itemDistance}px`;
      }
    });

    cards.forEach((card) => {
      card.style.willChange = "transform";
      card.style.transformOrigin = "top center";
      card.style.transform = "translateZ(0)";
    });

    measure();
    const teardownScroll = setupScroll();

    // Card art loads lazily and fonts swap in after first paint, both of which
    // shift the cached wrapper offsets — re-measure instead of re-reading them
    // every frame.
    const resizeObserver = new ResizeObserver(() => {
      measure();
      updateCardTransforms();
    });
    if (scrollerRef.current) resizeObserver.observe(scrollerRef.current);
    if (useWindowScroll) resizeObserver.observe(document.body);

    return () => {
      teardownScroll?.();
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (scrollIdleTimeoutRef.current) {
        clearTimeout(scrollIdleTimeoutRef.current);
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      wrappersRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    useWindowScroll,
    setupScroll,
    measure,
    updateCardTransforms,
  ]);

  return (
    <div
      className={`relative w-full ${useWindowScroll ? '' : 'overflow-y-auto overflow-x-visible'} ${className}`.trim()}
      ref={scrollerRef}
    >
      {/* Reduced paddingBottom from 90vh to 30vh to remove the massive gap */}
      <div className="scroll-stack-inner pt-8" style={{ paddingBottom: '10vh' }}>
        {children}
        <div className="scroll-stack-end h-px w-full" />
      </div>
    </div>
  );
};

export default ScrollStack;