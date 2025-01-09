import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";
import dataCases from "./dataCases";
import dataScenografi from "./dataScenografi";
import dataSpeak from "./dataSpeak";

const work_bread = Work_Sans({
  weight: ["500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <section className="w-full min-h-screen text-blue uppercase pt-2 text-running relative flex flex-col word-spacing-custom">
      <div>
        <Link href={"/cases"}>
          <div className="relative overflow-hidden w-full mb-8 py-0 bg-red hover:bg-blue hover:text-red hover:duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>
            <div className="relative flex animate-program-1 w-full">
              <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases cases</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
          </div>
        </Link>

        <Link href={"/scenografi"}>
          <div className="relative overflow-hidden w-full mb-8 py-0 bg-red hover:bg-blue hover:text-red hover:duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>
            <div className="relative flex animate-program-1 w-full">
              <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
          </div>
        </Link>

        <Link href={"/speak"}>
          <div className="relative overflow-hidden w-full mb-20 py-0 bg-red hover:bg-blue hover:text-red hover:duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>
            <div className="relative flex animate-program-1 w-full">
              <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
          </div>
        </Link>
      </div>

      <div className="relative mb-20 ">
        <Image src={"/imgs/kronhjort/kronhjort_cover.jpg"} alt={"kronhjort"} width={500} height={300} className="w-full " />

        <p className="absolute inset-0 flex justify-center items-center text-running md:text-footer_breads_ipad lg:text-hjort text-red bg-blue word-spacing-reset opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
          Finsens tilbyder skræddersyede løsninger inden for grafisk design, scenografi og speak. Vi skaber visuelle identiteter, der kommunikerer effektivt og æstetisk gennem branding, logo design og webdesign. Vores scenografiske arbejde tilpasser sig enhver event og teaterproduktion, hvor vi sørger for, at alt fra design til opsætning og lys skaber den rette stemning. Derudover tilbyder vi professionelle speak-tjenester til reklamer, præsentationer og e-learning, med fokus på høj lydkvalitet og den rette tone. Vi arbejder tæt sammen med vores kunder for at levere kreative, funktionelle løsninger, der styrker deres brand og visuelle udtryk.
        </p>
      </div>

      <p className="text-red pb-10 word-spacing-reset text-footer md:text-footer lg:text-headers">Nyeste projekter</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
        <Link href={"/cases"} className="relative group aspect-square overflow-hidden">
          <div className="relative w-full h-full">
            <Image src={dataCases[0]?.images[0].src || "/default-image.jpg"} alt={dataCases[0]?.images[0].alt || "Cases"} layout="fill" objectFit="cover" className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-80" />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="relative w-full h-full">
                <div className="flex animate-program-2 w-full h-full items-center justify-center">
                  {Array(10)
                    .fill("cases")
                    .map((word, i) => (
                      <span key={i} className="text-red uppercase tracking-widest whitespace-nowrap border-y-2 border-red py-2.5 px-4 bg-blue word-spacing-custom">
                        {word}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/scenografi"} className="relative group aspect-square overflow-hidden">
          <div className="relative w-full h-full">
            <Image src={dataScenografi[0]?.images[0].src || "/default-image.jpg"} alt={dataScenografi[0]?.images[0].alt || "Scenografi"} layout="fill" objectFit="cover" className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-80" />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="relative w-full h-full">
                <div className="flex animate-program-2 w-full h-full items-center justify-center">
                  {Array(10)
                    .fill("scenografi")
                    .map((word, i) => (
                      <span key={i} className="text-red uppercase tracking-widest whitespace-nowrap border-y-2 border-red py-2.5 px-4 bg-blue word-spacing-custom">
                        {word}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/speak"} className="relative group aspect-square overflow-hidden">
          <div className="relative w-full h-full">
            <Image src={dataSpeak[0]?.images[0].src || "/default-image.jpg"} alt={dataSpeak[0]?.images[0].alt || "Speak"} layout="fill" objectFit="cover" className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-80 bg-grey" />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="relative w-full h-full">
                <div className="flex animate-program-2 w-full h-full items-center justify-center">
                  {Array(10)
                    .fill("speak")
                    .map((word, i) => (
                      <span key={i} className="text-red uppercase tracking-widest whitespace-nowrap border-y-2 border-red py-2.5 px-4 bg-blue word-spacing-custom">
                        {word}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
