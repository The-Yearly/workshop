"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Schedule from "./components/ScheduleGrid";
import FaqGrid from "./components/faqGrid";
import NavBar from "./components/navBar";
import Image from "next/image";
import Footer from "./components/Footer";
import SwiperCarousel from "./components/speakerCarousel";
import Header from "./components/Header";
export default function WorkshopPage() {
  const currentSeats = 5;
  const [showSeats, setShowSeats] = useState(false);
  const triggerSeats = (trigger: boolean) => {
    setShowSeats(trigger);
  };
  return (
    <>
      <div className="min-h-screen z-10 bg-gradient-to-b from-[#202020] to-[#000] overflow-x-hidden">
        <Image
          alt="Background"
          width={1200}
          height={1200}
          className="absolute z-0 left-0 top-0"
          src="/bg1.png"
        />
        <NavBar currentSeats={currentSeats} triggerSeats={triggerSeats} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Header currentSeats={currentSeats} showSeats={showSeats} />
          <Image
            alt="Background"
            width={1200}
            height={1200}
            className="absolute z-0"
            src="/bg4.png"
          />
          <Schedule />
          <SwiperCarousel />
          <Image
            alt="bg"
            width={1200}
            height={1200}
            className="absolute z-0 right-0"
            src="/bg3.png"
          />
          <FaqGrid />
          <Footer />
        </motion.div>
      </div>
    </>
  );
}
