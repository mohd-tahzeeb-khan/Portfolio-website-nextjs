'use client'
import React from 'react';
//import { motion } from 'framer-motion';
import { motion } from "framer-motion";
import Image from 'next/image';
import portfolio_image from '../../public/images/portfolioimage.png';
const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
const hero = () => {
    const resume=()=>{
        window.open(`/Resume.pdf`, "_blank", "noopener,noreferrer")
        // window.open(, "_blank")
    }
  return (
    <>
    <div id="home" className="relative overflow-clip min-h-screen text-white pt-10 
   bg-[linear-gradient(to_bottom,#232526,#424242_50%,#2C3E50_90%)]">
    {/* 💙 Midnight Blue Elegance
                bg-[linear-gradient(to_bottom,#232526,#414345_50%,#2C3E50_90%)]
                Colors: Dark Grey (#232526), Charcoal (#414345), Navy Blue (#2C3E50)
             */}

    {/*     Royal Purple Gradient
              bg-[linear-gradient(to_bottom,#20002C,#c31432_50%,#240b36_90%)]
              Colors: Dark Purple (#20002C), Magenta (#c31432), Deep Plum (#240b36)*/}
    {/* bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)] */}
        <div className='absolute bg-[#F6E7AC] w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2
        bg-[radial-gradient(closet-size, #000_85%, #249974)] top-[480px]
        border-[1px] border-[#8CD6DE]/30'>        
        </div>
        <div className='container relative mx-auto px-4 pt-12 pb-24'>
        <motion.div
                    initial={{opacity:0, x:-20}}
                    animate={{opacity:1, x:0}}
                    transition={{duration:0.9}}
                    className='max-w-2xl absolute '>
                        <h1 className='text-6xl md:text-7xl font-bod tracking-tighter mb-4 text-[#F5F5F5]'>
                            Hi, I am <br/> Mohammad Tahzeeb <span className='text-[#48CFCB]'>Khan </span>
                        </h1>
                </motion.div>
                <motion.div
                initial={{opacity:0, x:-30}} 
                animate={{opacity:1, x:30}}
                transition={{duration:0.9}}
                className='absolute w-full md:flex md:flex-row px-6 pr-20 py-3 md:mt-72 gap-5 sm:gap-12 md:gap-12 z-10 mt-[29rem] md:justify-between lg:justify-normal'>
                    <motion.button
                    onClick={() => scrollToSection('contact')}
                    whileHover={{scale:0.95}}
                    whileTap={{backgroundColor:'#229799'}}
                     className='invisible md:visible px-6 py-3 text-[#ffff]  hover:bg-[#229799] hover:text-[#F5F5F5]	bg-[#48CFCB] rounded-full font-bold transition-colors'>
                        Contact me
                    </motion.button>
                    
                    <motion.button
                     onClick={resume}
                    whileHover={{scale:0.98}} className='w-[200px] md:w-[170px] text-[#F5F5F5] partial-border  px-6 py-3 bg-black/35 hover:bg-black/50 hover:border hover:border-white/35 rounded-full transition-colors font-bold'>
                        Download <span className='text-[#48CFCB] font-bold'>CV</span>
                    </motion.button>
                    
                </motion.div>
{/* ------------------------Portfolio Image of the Landing Page-------------------------- */}
            <div className='flex flex-col items-center justify-center text-center z-10'>
                <motion.div 
                    initial={{opacity:0, scale:0.5,y:500,  visibility:false}}
                    animate={{opacity:1, scale:1,y:0, visibility:true}}
                    transition={{duration:1.5}}
                    className="relative md:-mt-20 max-md:-mt-20 ">
                        <div className='absolute inset-0 bg-gradient-to-b from-[#000]/35 to-transparent rounded-full blur-3xl'></div>
                    <Image 
                    alt='Portfolio Image'
                    src={portfolio_image}
                    height={500}
                    width={475}
                    className='rounded-full mt-48 md:mt-3' />
                </motion.div>
            </div>
{/* -------------------------------------------------------------------------------------- */}
        </div>
        <div>
        </div>

    </div>
    </>
  )
}

export default hero