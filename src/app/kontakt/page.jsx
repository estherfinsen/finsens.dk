import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function kontakt() {
  return (
    <section className={`${work_header.className} text-red uppercase relative`}>
      <div className="relative overflow-hidden w-screen">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red"></div>

        <div className="relative flex animate-program-2 w-screen">
          <p className="text-running flex-shrink-0 tracking-widest word-spacing-custom py-3">kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt kontakt</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red"></div>
      </div>

      <div className="md:grid md:grid-cols-2 pt-20">
        <div className="md:col-start-1 z-10 relative flex flex-col items-start ">
          <ul className="flex flex-col items-start gap-y-9 text-footer md:text-headers lg:text-headers">
            <li>
              <Link className="hover:underline" href="https://www.facebook.com/finsens.dk">
                <p>facebook</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="https://www.instagram.com/finsens.dk/?hl=da">
                <p>instagram</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="https://www.linkedin.com/in/rasmus-finsen-b8b22b6/?originalSubdomain=dk">
                <p>linkedin</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="tel:+45 22174765">
                <p>+45 22 17 47 65</p>
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="mailto:rasmus@finsens.dk">
                <p>rasmus@finsens.dk</p>
              </Link>
            </li>
            <li className="pb-9 md:pb-0 lg:pb-0">cvr: 33319924</li>
          </ul>
        </div>

        <div className="md:col-start-2 relative">
          <Image src={"/imgs/rasmus.jpg"} alt="foos" width="500" height="500" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
