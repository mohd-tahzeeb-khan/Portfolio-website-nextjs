'use client'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from 'react';
import { motion } from "framer-motion";



const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
const navLinks = [
  { title: "Home", path: "home" },
  { title: "About", path: "about" },
  { title: "Portfolio", path: "portfolio" },
  { title: "Stack", path: "stack" },
  { title: "Contact", path: "contact" }
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <nav className="z-50 fixed w-full  md:-mt-4  text-white font-bold px-9 	border-white/10">
      {/* border-white/10 */}
      {/* Desktop Navigation */}
      <motion.div
        initial={{opacity:0, y:-130}}
        animate={{opacity:1, y:0}}
        transition={{duration:1}}
      className="hidden absolute right-20 md:flex justify-center items-center mt-8 border border-white/20 backdrop-blur-2xl rounded-3xl p-3 w-[600px] mx-auto">
        <ul className="flex flex-row space-x-8 p-2">
          {navLinks.map((link, index) => (
            <li key={index}>
              <motion.a
              
                                          whileHover={{scale:1.2}} 
              onClick={() => scrollToSection(link.path)}
              className="transform hover:skew-x-12 hover:teExt-white/50 hover:text-[#fff]/65 transition-all duration-300 ease-in-out cursor-pointer text-[#FFF]">
                {link.title}
              </motion.a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Mobile Hamburger Menu */}
      <div onClick={toggleNav} className="md:hidden absolute top-5 right-5 border rounded text-white/70 p-2 z-50">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation */}
      <div
  className={`fixed left-0 top-0 w-full h-full bg-black/80 transform duration-300 z-40 ${
    nav ? "translate-x-0" : "-translate-x-full"
  } overflow-hidden`}
>
  <ul className="flex flex-col items-center justify-center h-full space-y-8">
    {navLinks.map((link, index) => (
      <li key={index}>
        <a
          href={link.path}
          onClick={closeNav}
          className="text-5xl text-white"
        >
          {link.title}
        </a>
      </li>
    ))}
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
