"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Schedule from "./components/ScheduleGrid";
import FaqGrid from "./components/faqGrid";
import NavBar from "./components/navBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SwiperCarousel from "./components/speakerCarousel";
export default function WorkshopPage() {
  const currentSeats = 5;
  const [showSeats, setShowSeats] = useState(false);
  const triggerSeats = (trigger: boolean) => {
    setShowSeats(trigger);
  };
  return (
    <>
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#4d0929] via-[#000000] to-[#3c1c3f]">
      <NavBar currentSeats={currentSeats} triggerSeats={triggerSeats} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Header currentSeats={currentSeats} showSeats={showSeats} />
        <Schedule />
        <SwiperCarousel/>
        <FaqGrid />
        <Footer />
      </motion.div>
    </div>
    </>
  );
}
