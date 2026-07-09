"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CLIENT_LOGOS = [
  { id: 1, name: "Agrawal Saree Center", src: "/clients/AgrawalSareeCenter.webp" },
  { id: 2, name: "Aisha Creation", src: "/clients/Aisha_Creation.webp" },
  { id: 3, name: "Bansal Saree NX", src: "/clients/Bansal Saree NX.webp" },
  { id: 4, name: "Bansal Group", src: "/clients/BANSAL_GROUP.webp" },
  { id: 5, name: "CSH", src: "/clients/CSH.webp" },
  { id: 6, name: "FR", src: "/clients/FR.webp" },
  { id: 7, name: "Logo Kamni", src: "/clients/LOGO KAMNI.webp" },
  { id: 8, name: "Mamta Saree", src: "/clients/MamtaSaree.webp" },
  { id: 9, name: "Neha Muzaffernagar", src: "/clients/Neha_Muzaffernagar.webp" },
  { id: 10, name: "Paridhan", src: "/clients/Paridhan.webp" },
  { id: 11, name: "Roop Milan", src: "/clients/roop milan 8x5a.pdf.webp" },
  { id: 12, name: "Samander Haritage", src: "/clients/SamanderHaritage.webp" },
  { id: 13, name: "Season Saree", src: "/clients/SeasonSaree.webp" },
  { id: 14, name: "Sheesh Mahal Saree Wala", src: "/clients/SheeshMahalSareeWala.webp" },
  { id: 15, name: "Shreeji Emporium", src: "/clients/SHREEJI EMPORIUM_page-0001.jpg.webp" },
  { id: 16, name: "Tana Bana", src: "/clients/TanaBana.webp" },
  { id: 17, name: "Tanjor", src: "/clients/Tanjor.webp" },
  { id: 18, name: "TIA", src: "/clients/TIA.webp" },
  { id: 19, name: "Utsav", src: "/clients/UTSAV.webp" },
  { id: 20, name: "Vandana", src: "/clients/vandana.webp" },
  { id: 21, name: "Vastrakala", src: "/clients/VASTRAKALA with logo black.webp" },
  { id: 22, name: "Wonder Bazar", src: "/clients/WonderBazar.webp" },
];


export function TrustedLogos() {
  // Split the hardcoded list into two rows for the marquee
  const half = Math.ceil(CLIENT_LOGOS.length / 2);
  const topRow = CLIENT_LOGOS.slice(0, half);
  const bottomRow = CLIENT_LOGOS.slice(half);

  return (
<section className="border-y border-slate-200 bg-slate-100 py-8 md:py-8 lg:py-14 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0A0A0A] md:text-4xl">
            Trusted by Ambitious Brands.
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Driving growth and digital transformation for industry leaders.
          </p>
        </motion.div>
      </div>

      {/* Marquee Wrapper */}
      <div
        className="relative mx-auto w-full max-w-[100vw] overflow-hidden"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex flex-col gap-10 md:gap-14">
          
          {/* Row 1 - Moving Left */}
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...topRow, ...topRow].map((partner, idx) => (
              <div
                key={`top-${partner.id}-${idx}`}
                className="group flex shrink-0 items-center justify-center px-4 sm:px-6 md:px-8 w-40 sm:w-48 md:w-56"
              >
                <div className="relative h-16 w-full md:h-20">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Row 2 - Moving Right */}
          <motion.div
            className="flex w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {[...bottomRow, ...bottomRow].map((partner, idx) => (
              <div
                key={`bottom-${partner.id}-${idx}`}
                className="group flex shrink-0 items-center justify-center px-4 sm:px-6 md:px-8 w-40 sm:w-48 md:w-56"
              >
                <div className="relative h-16 w-full md:h-20">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

