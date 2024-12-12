import Image from "next/image";
import Link from "next/link";
import logo_finsens from "../app/imgs/logo_finsens.png";
import React from "react";

export default function Logo() {
  return (
    <>
      <Link href="/" className="block">
        <Image src={logo_finsens} alt="Logo" width={100} height={50} className="w-auto h-auto max-w-[100px]" priority={true} />
      </Link>
    </>
  );
}
