import React from "react";
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import dataGrafik from "@/app/dataGrafik";

const work_bread = Work_Sans({
  weight: ["500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function singleGrafik({ params }) {
  const { slug } = await params;
  const response = await fetch(`https://jhgcdsutaztszxtyehtm.supabase.co/rest/v1/grafik?slug=eq.${slug}`, {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2Nkc3V0YXp0c3p4dHllaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTg0NTgsImV4cCI6MjA0NzU5NDQ1OH0.VVF1QVqChKO2sUcYjYOuaUFdGCe68Sj3B2ZxG05mQiI",
    },
  });

  const res = await response.json();
  const data = res[0];
  const grafik = dataGrafik.filter((item) => item.id === data.id);

  return (
    <section className={`${work_header.className} text-red uppercase  text-headers relative`}>
      <div className="relative overflow-hidden w-screen">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>
        <div className="relative flex animate-program-2 w-screen">
          <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik grafik</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-screen px-0 pt-20 work_bread">
        <div className="md:col-start-1 md:row-start-1 relative w-full pb-[100%] overflow-hidden mt-3">
          <Image src={grafik[0].images[0].src} alt={grafik[0].images[0].alt || "Default alt text"} layout="fill" objectFit="cover" />
        </div>

        <div className="md:col-start-2 md:row-start-1 px-4 md:px-8 flex flex-col">
          <h1 className="text-footer md:text-footer lg:text-headers">{data.name}</h1>
          <p className="font-medium mt-4 text-running md:text-running lg:text-breads">{data.description}</p>
        </div>

        {grafik[0].images.slice(1).map((image, i) => (
          <div key={i} className="relative w-full pb-[100%] overflow-hidden">
            <Image src={image.src} alt={image.alt || `Image ${i + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
