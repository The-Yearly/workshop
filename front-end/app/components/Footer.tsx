import { motion } from "framer-motion";
import Timer from "./Timer";
import Image from "next/image";
import amFoss2 from "@/public/amFOSS2.png";
import Link from "next/link";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="max-w-4xl relative z-10 mx-auto my-20 px-6 md:px-10 flex flex-col items-center">
        <p className="text-2xl mt-20 md:text-4xl font-bold mb-8 text-white">
          What Are You Waiting For
        </p>
        <div className="flex flex-col mb-20 items-center">
          <Timer />
          <motion.a
            href="/register"
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.8 }}
            className="bg-gradient-to-r mt-10  from-[#FF06E4] to-[#770297] text-white px-10 py-4 rounded-full text-lg font-bold uppercase "
          >
            REGISTER NOW
          </motion.a>
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
        <p className="text-2xl md:text-4xl mb-4 font-bold mt-20 text-white">
          We'll see you there!
        </p>
      </div>
      <div className="ml-5 text-white flex justify-center my-10 space-x-6">
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
    </>
  );
}
