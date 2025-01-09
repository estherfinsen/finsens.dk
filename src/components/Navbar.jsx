"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Turn as Hamburger } from "hamburger-react";

import { Work_Sans } from "next/font/google";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <nav className="flex items-center gap-8 md:gap-24 lg:gap-32">
      <Link href="/" className="flex items-center">
        <p className={`${work_header.className} uppercase text-nav_mobile md:text-nav_ipad lg:text-nav text-red`}>E M D F </p>
      </Link>

      <div className="flex items-end z-30 scale-x-[1.3] scale-y-[1.3] md:scale-x-[2.9] md:scale-y-[2.9] pt-0.5 lg:scale-x-[4.6] lg:scale-y-[4.6]">
        <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? "#E3FFD9" : "#FF2626"} size={48} />
      </div>

      {isOpen && (
        <div className="w-full h-full bg-red z-20 absolute flex inset-0 justify-center items-center">
          <ul className="flex flex-col justify-center items-center self-center text-blue uppercase gap-6">
            <li onClick={() => setOpen(false)}>
              <Link href="/cases">
                <p className="hover:underline text-2xl">Cases</p>
              </Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link href="/speak">
                <p className="hover:underline text-2xl">about</p>
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link href="/kontakt">
                <p className="hover:underline text-2xl">contact</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
