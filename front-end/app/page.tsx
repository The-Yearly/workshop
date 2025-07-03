"use client";
import { Menu } from "lucide-react";
import amFoss from "@/public/amFoss.png";
import { useEffect, useState } from "react";
import amFoss2 from "@/public/amFOSS2.png";
import amritaLogo from "@/public/amrita.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "./components/timer";
import Schedule from "./components/schedule";

export default function WorkshopPage() {
  const currentSeats=5
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [showSeats, setShowSeats] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    console.log(isMobile);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let refresh = false;

    const handleScroll = () => {
      if (!refresh) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const scrollDelta = Math.abs(scrollY - lastScrollY);
          setIsScrolled(scrollY > 100);
          setShowNavBar(scrollY > 200);
          setShowSeats(scrollY > 600);
          if (scrollDelta > 50) {
            setLastScrollY(scrollY);
          }
          refresh = false;
        });
        refresh = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSeats, lastScrollY]);
  return (
    <div className="h-full bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f]">
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 transition-colors duration-300 ${
          isScrolled ? "backdrop-blur-lg py-4" : "backdrop-blur-sm"
        }`}
      >
        <Image
          src={amFoss}
          alt="amFoss Logo"
          className="w-30 h-14 md:w-44 md:h-20 object-fit"
        />
        <div className="flex space-x-5 items-center">
          <AnimatePresence>
            {showSeats && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`bg-gradient-to-r flex items-center justify-center w-42 md:w-32 h-10 font-Lalezar from-[#FF06E4] to-[#FF7B0A]  px-4 py-2 rounded-full font-bold text-md md:text-sm`}
              >
                Only {currentSeats} seats left!
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showNavBar ? (
              !isMobile ? (
                <motion.div
                  className="flex space-x-5 text-2xl font-Outfit"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <p>Register</p>
                  <p>FAQ's</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <Menu />
                </motion.div>
              )
            ) : (
              <motion.img
                src={amritaLogo.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 20, opacity: 0 }}
                alt="amFoss Logo"
                className="w-36 h-16 md:w-52 md:h-24 object-fit"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center flex-col flex items-center px-5 pt-32 pb-16 max-w-5xl mx-auto">
          <Image src={amFoss2} alt="amFoss 2 Logo" className="w-52 h-24 mr-5" />
          <h1 className="text-5xl md:text-9xl font-Lalezar mt-5 tracking-wider">
            WORKSHOP
          </h1>
          <p className="text-xl md:text-5xl font-Lekton mt-4 text-gray-300 ">
            Your First Step Into Tech Starts Here.
          </p>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: showSeats ? 0.3 : 1 }}
            transition={{ duration: 0.3 }}
            className={`mt-24 md:mt-60 text-2xl md:text-3xl transition-colors duration-300 font-Lalezar`}
          >
            Only
            <span className="bg-gradient-to-r from-[#FF06E4] to-[#FF7B0A] px-5 rounded-md font-bold mx-4">
              <span className="text-lg md:text-2xl">
                {currentSeats + " left"}
              </span>
            </span>
            left, register today!
          </motion.div>

          <motion.button
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.8 }}
            className="bg-gradient-to-r mt-15 from-[#FF06E4] to-[#FF7B0A] text-white px-10 py-4 rounded-xl font-Lalezar text-lg md:text-xl font-bold uppercase"
          >
            REGISTER NOW!
          </motion.button>
        </div>

        <div className="max-w-4xl mx-auto my-20 px-6 md:px-10">
          <h2 className="text-4xl font-bold mb-8 text-white">OUR AIM</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            The
            <span className="text-orange-500 font-bold">amFOSS Workshop</span>
            is designed to be the perfect starting point for students who are
            fresh out of school and curious about the world of computer science
            and software development. Whether you come from a technical
            background or not, this workshop will help you build a strong
            foundation in essential tools and skills needed to thrive in the
            tech world.
          </p>
        </div>

        <Schedule/>

        

        <div className="max-w-4xl mx-auto my-20 px-6 md:px-10">
          <h2 className="text-4xl font-bold mb-8 text-white">REGISTER TODAY</h2>
          <p className="text-lg leading-relaxed text-gray-300 mb-8">
            Don't miss this opportunity to kickstart your tech journey. Seats
            are filling up fast, and we want to ensure you get the personalized
            attention you deserve. Register now and take your first step into
            the exciting world of technology!
          </p>
          <div className="flex flex-col items-center">
            <Timer />
            <button className="bg-gradient-to-r mt-10 from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-lg font-bold uppercase ">
              SECURE YOUR SPOT NOW!
            </button>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
}
