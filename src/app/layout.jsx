import React from "react";

import { Work_Sans } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const work_header = Work_Sans({
  weight: ["900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const work_bread = Work_Sans({
  weight: ["500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Finsens",
  description: "Finsens - Grafisk design, scenografi og speak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {" "}
        <link rel="icon" href="/FIN.png" />
      </Head>
      <body className={`${work_header.className} bg-blue m-0`}>
        <header className="w-full">
          <Navbar />
        </header>
        <main className="w-full py-16 flex justify-center">{children}</main>
        <footer className="w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
