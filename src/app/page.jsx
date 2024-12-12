"use client"; // Markér komponenten som client-side

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

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
        <Link href={"/grafik"}>
          <div className="relative overflow-hidden w-full mb-8 py-0 bg-red hover:bg-blue hover:text-red hover:duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>
            <div className="relative flex animate-program-1 w-full">
              <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
          </div>
        </Link>

        <Link href={"/scenografi"}>
          <div className="relative overflow-hidden w-full mb-8 py-0 bg-red hover:bg-blue hover:text-red hover:duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>
            <div className="relative flex animate-program-1 w-full">
              <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
          </div>
        </Link>

        <Link href={"/speak"}>
          <div className="relative overflow-hidden w-full mb-12 py-0 bg-red hover:bg-blue hover:text-red hover:duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>
            <div className="relative flex animate-program-1 w-full">
              <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak speak</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
          </div>
        </Link>
      </div>

      <div>
        <Image src={"/imgs/kronhjort/kronhjort_cover.jpg"} alt={"kronhjort"} width={500} height={300} className="w-full pb-20" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full">
        {["grafik", "scenografi", "speak"].map((category) => (
          <Link key={category} href={`/${category}`} className="relative group aspect-square overflow-hidden">
            <div className="relative w-full h-full">
              <Image src={"/imgs/rasmus.jpg"} alt={category} layout="fill" objectFit="cover" className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-80" />
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="relative w-full h-full">
                  <div className="flex animate-program-2 w-full h-full items-center justify-center">
                    {Array(10)
                      .fill(category)
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
        ))}
      </div>
    </section>
  );
}
