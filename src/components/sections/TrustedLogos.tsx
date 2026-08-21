import Image from "next/image";
import { cn } from "@/lib/utils";

export type ClientLogo = {
  id: string | number;
  name: string;
  src: string;
  width?: number;
  height?: number;
};

// Below this count, duplicating logos to fake an infinite scroll just makes
// the same logo repeat right next to itself — show a plain static row instead.
const MIN_LOGOS_FOR_MARQUEE = 6;

function LogoTile({ logo }: { logo: ClientLogo }) {
  return (
    <div className="flex h-10 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105 md:h-12">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width ?? 300}
        height={logo.height ?? 150}
        unoptimized={logo.src.startsWith("http")}
        className="h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}

export function TrustedLogos({
  logos,
  showHeading = true,
}: {
  logos?: ClientLogo[];
  showHeading?: boolean;
}) {
  // Sourced entirely from the Sanity "Trusted Logos" document — nothing to
  // show until at least one Client Logo is published there.
  const activeLogos = logos ?? [];

  if (activeLogos.length === 0) {
    return null;
  }

  const canMarquee = activeLogos.length >= MIN_LOGOS_FOR_MARQUEE;

  // Split the list into two rows for the marquee
  const half = Math.ceil(activeLogos.length / 2);
  const topRow = activeLogos.slice(0, half);
  const bottomRow = activeLogos.slice(half);

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-white",
        showHeading
          ? "border-y border-ink-150 bg-ink-50 py-16 md:py-20 lg:py-24"
          : "pb-20 pt-14 sm:pt-16 md:pb-18 lg:pt-18",
      )}
    >
      {showHeading && (
        <div className="section-container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
              Trusted by Ambitious Brands.
            </h2>
            <p className="mt-4 text-base text-ink-500">
              Driving growth and digital transformation for industry leaders.
            </p>
          </div>
        </div>
      )}

      {canMarquee ? (
        /* Marquee Wrapper */
        <div className="relative mx-auto w-full max-w-[100vw] overflow-hidden mask-fade-x">
          <div className="flex flex-col gap-12 md:gap-12">
            {/* Row 1 - Moving Left */}
            <div className="animate-marquee-left flex w-max">
              {[...topRow, ...topRow].map((partner, idx) => (
                <div
                  key={`top-${partner.id}-${idx}`}
                  className="group flex shrink-0 items-center justify-center px-4 sm:px-6 md:px-8 w-36 sm:w-44 md:w-48"
                >
                  <LogoTile logo={partner} />
                </div>
              ))}
            </div>

            {/* Row 2 - Moving Right */}
            <div className="animate-marquee-right flex w-max">
              {[...bottomRow, ...bottomRow].map((partner, idx) => (
                <div
                  key={`bottom-${partner.id}-${idx}`}
                  className="group flex shrink-0 items-center justify-center px-4 sm:px-6 md:px-8 w-36 sm:w-44 md:w-48"
                >
                  <LogoTile logo={partner} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Too few logos to loop cleanly — show them once, centered */
        <div className="section-container">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10">
            {activeLogos.map((partner) => (
              <div
                key={partner.id}
                className="group flex w-36 shrink-0 items-center justify-center sm:w-44 md:w-48"
              >
                <LogoTile logo={partner} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
