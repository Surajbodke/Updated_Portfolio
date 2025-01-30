"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Real Estate App ",
    desc: "Feb 2024 – Mar 2024\n• Developed a user-friendly and responsive frontend for a real estate app using React.\n• Integrated Google Maps API to enable location-based property search with real-time updates.\n• Built a real-time chat feature using Socket.io for seamless communication between users and agents.",
    img: "/RealEstate.png",
    link: "https://www.loom.com/share/bc8dc42e83164022aebd9a6cd0e61651?sid=04a24412-2f60-486a-a8b9-40b6fa87aa84",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Swoley-fit ",
    desc: "Aug 2024 – Sep 2024\n• Built with React and styled using Tailwind CSS, the app ensures a seamless user experience across various devices, adapting smoothly to different screen sizes.\n• Users can select workout preferences like body part focus and exercise solo or with friends for a tailored fitness experience.\n• Provides dynamic exercise suggestions to enhance user engagement and motivation in fitness routines.",
    img: "/SwoleyFit.png",
    link: "https://github.com/Surajbodke/swoley-fit",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Real-Time Collaborative Editor ",
    desc: "May 2024 – Jun 2024\n• Developed a real-time collaborative code editor with React and Socket.io for seamless user interaction.\n• Supports multiple languages including Java, Python, JavaScript, and C++.\n• Enhances productivity with real-time collaboration between users.",
    img: "/CodeEditor.png",
    link: "https://github.com/Surajbodke/Code_Editor",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col justify-center items-center gap-6 text-white">
                  <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl break-words whitespace-normal max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl text-center">
                    {item.title}
                  </h1>
                  <div className="relative w-72 h-48 md:w-80 md:h-56 lg:w-[400px] lg:h-[280px] xl:w-[500px] xl:h-[350px]">
                    <Image
                      src={item.img}
                      alt="Image"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-1 text-xs md:p-2 md:text-sm lg:p-4 lg:text-md bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Adjusted height for "Are you Interested?" section */}
      <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-8xl">Are you Interested?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Dev and Back-end Dev.
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
