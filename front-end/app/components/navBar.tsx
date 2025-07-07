import { Menu, Github, Linkedin, Instagram } from "lucide-react";
import amFoss from "@/public/amFoss.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import X from "@/public/x-social-media-black-icon.png";
import { motion, AnimatePresence } from "framer-motion";
interface navBarProps {
  currentSeats: number;
  triggerSeats: (trigger: boolean) => void;
}
const sideNav = [
  { label: "Register", href: "/register" },
  { label: "Schedule", scrollTo: "schedule" },
  { label: "Speakers", scrollTo: "speakers" },
  { label: "FAQs", scrollTo: "faq" },
];
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + -150;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
const NavBarLink = (props: { label: string; section?: string }) => {
  const [showBorder, setShowBorder] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowBorder(true)}
      onClick={() => scrollToSection(props.section || "")}
      onMouseLeave={() => setShowBorder(false)}
      className="relative flex flex-col items-center focus:outline-none"
    >
      <p className="hover:cursor-pointer z-10">{props.label}</p>
      <AnimatePresence>
        {showBorder && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF06E4] to-[#FF7B0A] origin-left"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default function NavBar({ currentSeats, triggerSeats }: navBarProps) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const [showSeats, setShowSeats] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 780);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
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
          setShowSeats(scrollY > 600);
          triggerSeats(scrollY > 600);
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
    <div
      className={`fixed text-white top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 transition-colors duration-300 ${
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
              exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
              className={`bg-gradient-to-r flex items-center justify-center w-42 md:w-32 h-10 font-Lalezar from-[#FF06E4] to-[#770297] px-4 py-2 rounded-full font-bold text-lg md:text-sm`}
            >
              Only {currentSeats} seats left!
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isMobile ? (
            <motion.div
              className="flex space-x-9 text-2xl font-Outfit"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <Link className="focus:outline-none" href="/register">
                <NavBarLink label="Register" />
              </Link>
              <NavBarLink label="Schedule" section="schedule" />
              <NavBarLink label="Speakers" section="speakers" />
              <NavBarLink label="FAQ's" section="faq" />
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
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isMobile && showSideMenu && (
          <>
            <motion.div
              className="fixed inset-0 min-w-screen min-h-screen bg-black/40 z-40"
              onClick={() => setShowSideMenu(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed top-0 right-0 w-64 min-h-screen  bg-gradient-to-b from-[#71293e] via-[#202020] to-[#0e0e0e] text-white z-50 shadow-lg p-6"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image src={amFoss} alt="amFossLogo1" />
              <ul className="ml-5 text-xl font-medium space-y-4">
                {sideNav.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setShowSideMenu(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <p
                        onClick={() => {
                          scrollToSection(item.scrollTo!);
                          setShowSideMenu(false);
                        }}
                      >
                        {item.label}
                      </p>
                    )}
                  </motion.li>
                ))}
              </ul>
              <div className="absolute ml-5 flex items-center justify-center space-x-5 bottom-10">
                <Link href="https://github.com/amfoss">
                  <Github />
                </Link>
                <Link href="https://www.linkedin.com/company/amfoss">
                  <Linkedin />
                </Link>
                <Link href="https://x.com/amfoss_in">
                  <Image src={X} className="w-5 h-5" alt="Twitter" />
                </Link>
                <Link href="https://www.instagram.com/amfoss.in">
                  <Instagram />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
