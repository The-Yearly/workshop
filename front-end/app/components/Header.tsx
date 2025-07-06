import { motion } from "framer-motion";
import amFoss2 from "@/public/amFOSS2.png";
import Image from "next/image";
interface headerProps {
  showSeats: boolean;
  currentSeats: number;
}
export default function Header({ showSeats, currentSeats }: headerProps) {
  return (
    <>
      <div className="text-center flex-col flex items-center px-5 pt-32 pb-16 max-w-5xl mx-auto">
        <Image src={amFoss2} alt="amFoss 2 Logo" className="w-52 h-24 mr-5" />
        <h1 className="text-5xl md:text-9xl font-Lalezar mt-5 tracking-wider">
          WORKSHOP
        </h1>
        <p className="text-3xl md:text-5xl font-Lekton mt-8 md:mt-4 text-gray-300 ">
          Your First Step Into Tech Starts Here.
        </p>

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: showSeats ? 0.2 : 1 }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-60 text-xl sm:text-2xl md:text-5xl transition-colors font-Lalezar flex flex-wrap items-center justify-center text-center px-4"
        >
          Only
          <div className="bg-gradient-to-r from-[#FF06E4] to-[#FF7B0A] text-white flex items-center rounded-md px-3 py-1 mx-4 text-xl sm:text-base md:text-2xl">
            {currentSeats + " left"}
          </div>
          left, register today!
        </motion.div>
        <motion.a
          href="/register"
          whileHover={{ y: -10 }}
          whileTap={{ scale: 0.8 }}
          className="bg-gradient-to-r mt-15 from-[#FF06E4] to-[#FF7B0A] text-white px-10 py-4 rounded-xl font-Lalezar text-lg md:text-xl font-bold uppercase"
        >
          REGISTER NOW!
        </motion.a>
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
          and software development. Whether you come from a technical background
          or not, this workshop will help you build a strong foundation in
          essential tools and skills needed to thrive in the tech world.
        </p>
      </div>
    </>
  );
}
