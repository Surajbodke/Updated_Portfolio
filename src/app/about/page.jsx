"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/app/components/brain";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className=" h-full overflow-scroll lg:flex " ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 435 319"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46 210C48.7413 205.888 52.9946 202.79 56.3333 199.222C77.2545 176.864 95.7239 151.706 112.778 126.333C128.279 103.271 140.895 78.9384 149.111 52.3333C153.375 38.5276 157.556 20.5171 151.389 6.5C149.927 3.17733 146.544 -0.214871 143.389 3.55555C137.16 11 136.207 23.9532 136.167 33.0556C135.925 86.8458 162.816 133.36 194.333 174.667C202.103 184.849 211.788 196.267 214.222 209.333C217.354 226.149 204.785 242.069 194.667 253.889C177.256 274.228 155.546 292.078 130.778 302.667C102.029 314.957 61.5023 323.265 31.3333 311.222C-23.0811 289.501 10.3674 210.738 27.2222 175.333C33.6377 161.857 41.494 144.827 52.7222 134.222C59.602 127.725 63.5583 136.51 66.5555 142.111C81.971 170.917 100.995 197.151 122.778 221.556C133.408 233.465 145.147 246.847 161 251.667C179.479 257.284 201.981 254.036 216.889 241.5C241.811 220.543 257.282 186.348 253.056 153.944C252.746 151.568 252 144.437 252 146.833C252 154.136 253.611 161.567 254.556 168.778C255.044 172.504 254.386 187.988 258.222 190.778C261.217 192.956 268.102 167.783 268.444 166.722C270.354 160.797 272.467 154.938 274.333 149C275.582 145.028 278.745 157.306 279.222 158.444C281.888 164.801 284.74 171.584 289.556 176.667C291.233 178.438 296.637 183.044 299.444 182.556C302.568 182.012 304.717 175.087 305.5 172.889C309.243 162.385 311.101 151.079 312.833 140.111C314.61 128.857 315.517 94.6185 315 106C314.695 112.699 314.633 119.976 317 126.333C318.05 129.154 323.057 133.831 325.833 129.667C326.317 128.941 325.128 131.297 325.056 132.167C324.787 135.391 325 138.714 325 141.944C325 149.624 326.332 158.416 336.556 154C359.04 144.288 369.086 117.073 374.889 95.3333C375.855 91.7159 377 87.7024 377 83.8889C377 80.1621 375.731 91.2345 375 94.8889C374.17 99.0399 370.921 110.346 377 101.444C380.216 96.7356 380.983 94.853 385.222 98.7778C392.863 105.852 401.278 81.49 402.556 77.1111C403.952 72.322 405.179 79.5036 405.611 81C411.237 100.475 414.665 121.029 418.556 140.889C426.084 179.317 430.203 219.319 431.833 258.444C432.065 264.004 434.512 282.488 431 286"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILLS TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILLS LIST */}
            <div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className=" flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                C++
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                C
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                ReactJs
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                NodeJs
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                ExpressJs
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                MYSQL
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                GitHub
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                Postman
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                VsCode
              </div>

              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                Computer Networks
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                Operating Systems
              </div>
              <div className="rounded p-2 text-sm bg-black text-white cursor-pointer hover:bg-white hover:text-black">
                OOPS
              </div>
            </div>
            {/* SKILLS SCROLL SVGs */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48 "
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl "
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=""
            ></div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* PROJECT TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Real Estate App{" "}
                </div>
                {/* PROJECT DESC */}
                <div className="p-3 text-sm italic">
                  A real estate MERN stack app featuring integrated map and chat
                  functionalities for enhanced user interaction and property
                  exploration.{" "}
                </div>
                {/* PROJECT DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  Apr 2024 – May 2024{" "}
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* PROJECT TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Real-Time Collaborative Editor{" "}
                </div>
                {/* PROJECT DESC */}
                <div className="p-3 text-sm italic">
                  Developed a real-time collaborative editor using React and
                  Socket.io.{" "}
                </div>
                {/* PROJECT DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  SEP 2023 – OCT 2023{" "}
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* PROJECT TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  To-Do List{" "}
                </div>
                {/* PROJECT DESC */}
                <div className="p-3 text-sm italic">
                  Interactive to-do list application utilizing HTML, CSS, and
                  JavaScript for efficient task management.{" "}
                </div>
                {/* PROJECT DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  JAN 2024 - FEB 2024{" "}
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 "></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
