'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { motion, useScroll } from "framer-motion";
import { ArrowUpCircle } from "lucide-react";
import {ArrowBigRightDash} from "lucide-react";
function home() {
  const {scrollYProgress}=useScroll()
  const [isOpen, setIsOpen] = useState(false);
  const word=["Full Stack Developer","Android Developer", "Analyst", "Creator", "Engineer"];
  const [index, setindex] = useState(0);
  useEffect(() => {
    const interval=setInterval(()=>{
      setindex((prev)=>(prev+1)% word.length);
    }, 2000); //Change the Word in every 2 Seconds
   
    return () => {
      clearInterval(interval);
    }
  }, [])
  
  // This callback function is used to tell the compiler about the Navbar type, and mobile screen type.
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return(
    <>
    {/* This Motion frame is for Scrollbar Functionality in the website */}
    <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 70,
                    left: 0,
                    right: 0,
                    height: 7,
                    originX: 0,
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    paddingRight: "10px",
                }}
            >
          </motion.div>
          
          
            <Content />
    </>
  )
  function Content() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      

      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-hero-pattern bg-cover bg-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Hi, I'm <span className="text-indigo-500">Your Name</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 animate-slide-up">
            A passionate about <motion.span className="text-indigo-400 w-7"
            key={word[index]}
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-20}}
            transition={{duration:2.5, type:"tween"}}
            >{word[index]} </motion.span> creating modern and user-friendly designs.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>


      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 animate-slide-up">About Me</h2>
          <p className="text-center text-gray-400 text-lg leading-relaxed">
            I am a skilled developer with a knack for creating intuitive and beautiful web solutions. My expertise includes modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} <span className='text-white'>Mohammad Tahzeeb Khan</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}
}
export default home