import React from "react";
import Link from "next/link";
import { Work_Sans } from "next/font/google";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <div className="items-center mt-16 pb-10 bg-blue text-mocha uppercase">
      <div className="w-full h-3 bg-red mb-12"></div>
      <div className="w-full h-3 bg-red mb-12"></div>
      <div className="w-full h-3 bg-mocha mb-14"></div>
      <Link href="/" className="self-start pr-{-2}">
        <p className={`${work_header.className} text-nav_mobile md:text-footer_head_ipad lg:text-footer_head`}>Finsens</p>
      </Link>
      <div className="grid grid-cols-2 pt-10 text-footer_breads_mobile md:text-footer_breads_ipad lg:text-footer">
        <ul className="flex flex-col justify-start items-start gap-5 pl-1">
          <li>
            <Link className="hover:underline" href="tel:22174765">
              <p>tlf: 22 17 47 65</p>
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="mailto:rasmus@finsens.dk">
              <p>email: rasmus@finsens.dk</p>
            </Link>
          </li>
          <li>cvr: 33319924</li>
        </ul>

        <ul className="flex flex-col justify-start items-end gap-7 md:gap-9 lg:gap-5 pr-1 ">
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
        </ul>
      </div>
    </div>
  );
};

export default Footer;
