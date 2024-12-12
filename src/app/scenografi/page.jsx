import { Work_Sans } from "next/font/google";
import Image from "next/image";
import dataScenografi from "../dataScenografi";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function scenografi() {
  const response = await fetch("https://jhgcdsutaztszxtyehtm.supabase.co/rest/v1/scenografi", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZ2Nkc3V0YXp0c3p4dHllaHRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTg0NTgsImV4cCI6MjA0NzU5NDQ1OH0.VVF1QVqChKO2sUcYjYOuaUFdGCe68Sj3B2ZxG05mQiI",
    },
  });

  const data = await response.json();
  console.log(data);

  return (
    <div className={`${work_header.className} text-red uppercase text-headers relative mb-16`}>
      <div className="relative overflow-hidden w-screen">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>

        <div className="relative flex animate-program-2 w-screen">
          <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi scenografi</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
      </div>

      <ul className="grid grid-cols-1 items-start gap-y-20 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-4 w-screen pt-20">
        {data.map((item, index) => {
          const alignClass = index % 3 === 0 ? "md:items-start" : index % 3 === 1 ? "md:items-center" : "md:items-end";

          return (
            <li key={item.id} className={`group flex ${alignClass} flex-col h-[400px] w-full`}>
              <a href={`/scenografi/${item.slug}`} className="block ">
                <div className="relative w-[400px] h-[400px] bg-grey overflow-hidden">
                  <Image src={dataScenografi.find((image) => image.id === item.id && image.images[0].name === "cover")?.images[0].src || "/default-image.jpg"} alt={dataScenografi.find((image) => image.id === item.id && image.images[0].name === "cover")?.images[0].alt || "Default alt text"} fill className="object-cover transition-transform-opacity duration-500 group-hover:opacity-80 group-hover:scale-110" />
                </div>

                <p className="mt-2 text-breads font-bold w-[300px] text-left pl-1">{item.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
