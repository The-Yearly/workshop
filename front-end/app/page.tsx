"use client";
import { Menu, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import amFoss from "@/public/amFoss.png";
import { useEffect, useState } from "react";
import amFoss2 from "@/public/amFOSS2.png";
import amritaLogo from "@/public/amrita.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Timer from "./components/timer";
import Schedule from "./components/schedule";
import Link from "next/link";
import FAQgrid from "./components/faq";
export default function WorkshopPage() {
  const currentSeats = 5;
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [showSeats, setShowSeats] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [showSideMenu, setShowSideMenu] = useState(false);
  useEffect(() => console.log(showSideMenu), [showSideMenu]);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
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
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f]">
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 transition-colors duration-300 ${
          isScrolled ? "backdrop-blur-lg py-4" : "backdrop-blur-sm"
        }`}
      >
        <Image
          src={amFoss}
          alt="amFoss Logo"
          className="w-30 h-14 md:w-44 md:h-20 object-fill"
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
                  <Link href="/register">
                    <p>Register</p>
                  </Link>
                  <p
                    className="hover:cursor-pointer"
                    onClick={() => scrollToSection("schedule")}
                  >
                    Schedule
                  </p>
                  <p
                    className="hover:cursor-pointer"
                    onClick={() => scrollToSection("faq")}
                  >
                    FAQ&apos;s
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <button onClick={() => setShowSideMenu(!showSideMenu)}>
                    <Menu />
                  </button>
                </motion.div>
              )
            ) : (
              <motion.img
                src={amritaLogo.src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: 20, opacity: 0 }}
                alt="amritaLogo"
                className="w-36 h-16 md:w-52 md:h-24 object-fill"
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
          <p className="text-4xl font-bold mb-8 text-white">OUR AIM</p>
          <p className="text-lg leading-relaxed text-gray-300">
            The
            <span className="text-orange-500 font-bold mx-1">
              amFOSS Workshop
            </span>
            is designed to be the perfect starting point for students who are
            fresh out of school and curious about the world of computer science
            and software development. Whether you come from a technical
            background or not, this workshop will help you build a strong
            foundation in essential tools and skills needed to thrive in the
            tech world.
          </p>
        </div>

        <Schedule />
        <div id="faq" className="max-w-4xl mx-auto my-20 px-6 md:px-10">
          <p className="text-2xl md:text-4xl font-bold mb-8 text-white">FAQs</p>
          <FAQgrid />
        </div>

        <div className="max-w-4xl mx-auto my-20 px-6 md:px-10 flex flex-col items-center">
          <p className="text-2xl md:text-4xl font-bold mb-8 text-white">
            What Are You Waiting For
          </p>
          <div className="flex flex-col items-center">
            <Timer />
            <motion.button
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.8 }}
              className="bg-gradient-to-r mt-10 from-[#FF06E4] to-[#FF7B0A] text-white px-10 py-4 rounded-full text-lg font-bold uppercase "
            >
              REGISTER NOW
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl md:text-4xl font-bold mb-1 text-white">
            Support Open Source With
          </p>
          <Image
            src={amFoss2}
            alt="Foss Logo"
            className="w-48 h-24 object-fill"
          />
        </div>
        <div className="ml-5 flex justify-center my-10 space-x-6">
          <Link href="https://github.com/amfoss">
            <Github className="w-10 h-10" />
          </Link>
          <Link href="https://www.linkedin.com/company/amfoss">
            <Linkedin className="w-10 h-10" />
          </Link>
          <Link href="https://x.com/amfoss_in">
            <Twitter className="w-10 h-10" />
          </Link>
          <Link href="https://www.instagram.com/amfoss.in">
            <Instagram className="w-10 h-10" />
          </Link>
        </div>

        <AnimatePresence>
          {isMobile && showSideMenu && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setShowSideMenu(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <motion.div
                className="fixed top-0 right-0 w-64 min-h-screen bg-[#111] text-white z-50 shadow-lg p-6"
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Image src={amFoss} alt="amFossLogo1" />
                <div className="space-y-4 ml-5 text-xl font-medium">
                  <div>
                    <Link
                      href="/register"
                      onClick={() => setShowSideMenu(false)}
                    >
                      Register
                    </Link>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        scrollToSection("schedule");
                        setShowSideMenu(false);
                      }}
                    >
                      Schedule
                    </p>
                  </div>
                  <div>
                    <p
                      onClick={() => {
                        scrollToSection("faq");
                        setShowSideMenu(false);
                      }}
                    >
                      FAQs
                    </p>
                  </div>
                </div>
                <div className="absolute ml-5 flex space-x-5 bottom-10">
                  <Link href="https://github.com/amfoss">
                    <Github />
                  </Link>
                  <Link href="https://www.linkedin.com/company/amfoss">
                    <Linkedin />
                  </Link>
                  <Link href="https://x.com/amfoss_in">
                    <Twitter />
                  </Link>
                  <Link href="https://www.instagram.com/amfoss.in">
                    <Instagram />
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
