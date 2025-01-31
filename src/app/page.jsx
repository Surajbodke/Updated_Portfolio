"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-8 ">
        {/* IMAGE CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt=""
            fill
            className="object-contain"
            unoptimized
            priority
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
            Empowering the Future with Code: Crafting Digital Solutions with
            Full-Stack Expertise.
          </h1>
          {/* DESC */}
          <p className="text-base sm:text-lg md:text-xl text-center">
            Welcome to my digital space, where I combine my passion for coding
            with a strong foundation in full-stack development. From building
            real-time applications to creating seamless user experiences, my
            portfolio reflects my dedication to solving real-world problems
            through innovative and scalable solutions.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
            <Link href="/portfolio">
              <button className="p-3 sm:p-4 rounded-lg ring-1 ring-black bg-black text-white w-full sm:w-auto">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-3 sm:p-4 rounded-lg ring-1 ring-black w-full sm:w-auto">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
