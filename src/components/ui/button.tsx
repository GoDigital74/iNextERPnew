"use client"

import { type MouseEvent, useState } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-brand-500 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.12)_inset,0_8px_20px_-6px_rgba(24,129,196,0.4)] hover:bg-brand-600 hover:shadow-[0_1px_0_0_rgba(255,255,255,0.14)_inset,0_10px_24px_-4px_rgba(24,129,196,0.45)]",
        outline:
          "border-ink-200 bg-white text-foreground hover:border-brand-300 hover:bg-brand-50 aria-expanded:bg-brand-50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-ink-150 aria-expanded:bg-ink-150",
        ghost:
          "hover:bg-ink-100 hover:text-foreground aria-expanded:bg-ink-100",
        destructive:
          "bg-destructive/10 text-red-600 hover:bg-destructive/15 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-brand-600 underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-[min(var(--radius-md),10px)] px-3 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5",
        lg: "h-12 gap-2 px-7 text-base has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-10",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Magnetic offset is capped so the button can't be dragged further than it
// visually reads as "attracted to the cursor" — beyond this it just looks broken.
const MAGNETIC_MAX_OFFSET = 10
const MAGNETIC_SPRING = { type: "spring" as const, stiffness: 150, damping: 12, mass: 0.3 }

function Button({
  className,
  variant = "default",
  size = "default",
  magnetic = false,
  showArrow = false,
  children,
  ...props
}: ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    /** Nudges the button toward the cursor on hover. */
    magnetic?: boolean
    /** Appends a trailing arrow that slides right on hover. */
    showArrow?: boolean
  }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!magnetic) return
    const rect = event.currentTarget.getBoundingClientRect()
    const relX = event.clientX - rect.left - rect.width / 2
    const relY = event.clientY - rect.top - rect.height / 2
    setOffset({
      x: Math.max(-MAGNETIC_MAX_OFFSET, Math.min(MAGNETIC_MAX_OFFSET, relX * 0.25)),
      y: Math.max(-MAGNETIC_MAX_OFFSET, Math.min(MAGNETIC_MAX_OFFSET, relY * 0.4)),
    })
  }

  const button = (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {showArrow && (
        <ArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
      )}
    </ButtonPrimitive>
  )

  if (!magnetic) return button

  return (
    <motion.div
      className="inline-block"
      animate={{ x: offset.x, y: offset.y }}
      whileTap={{ scale: 0.97 }}
      transition={MAGNETIC_SPRING}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {button}
    </motion.div>
  )
}

export { Button, buttonVariants }
