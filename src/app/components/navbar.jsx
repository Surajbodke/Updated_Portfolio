"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "rgb(255,255,255)" },
  };
  const centerVariants = {
    closed: { rotate: 0 },
    opened: { opacity: 0, backgroundColor: "rgb(255,255,255)" },
  };
  const bottomVariants = {
    closed: { opacity: 1 },
    opened: { rotate: -45, backgroundColor: "rgb(255,255,255)" },
  };

  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: {
        ease: "linear",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="mr-1 text-white">R3D</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            F1Y
          </span>
        </Link>
      </div>
      {/* SOCIALS */}
      <div className="hidden md:flex justify-center gap-4 w-1/3">
        <Link href="https://github.com/Surajbodke">
          <Image
            src="/github.png"
            alt="GitHub"
            width={24}
            height={24}
            unoptimized
            priority
          />
        </Link>
        <Link href="https://leetcode.com/u/surajbodke/">
          <Image
            src="/leetcode.png"
            alt="LeetCode"
            width={24}
            height={24}
            unoptimized
            priority
          />
        </Link>
        <Link href="https://www.instagram.com/_.suraj._.25/">
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
            unoptimized
            priority
          />
        </Link>
        <Link href="https://www.linkedin.com/in/suraj-bodke">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
            unoptimized
            priority
          />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="z-[9999] absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className="cursor-pointer"
              >
                <Link href={link.url} onClick={() => setOpen(false)}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
