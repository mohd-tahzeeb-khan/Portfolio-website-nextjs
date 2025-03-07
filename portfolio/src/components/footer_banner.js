'use client'
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'
import { SiGithub, SiLinkedin, SiInstagram, SiGmail, SiPeerlist  } from 'react-icons/si'
function formatPhoneNumber(phone) {
    return phone.replace(/[\s-]/g, ''); // Removes spaces and hyphens
}
const word="Mohammad Tahzeeb Khan"
const footer_banner = ({contacts}) => {
  const ref=useRef(null);
  const isinview=useInView(ref, {once:true})
    if(!contacts){
        return(
            <>
            </>
        )
    }
    else{
            return (
    <>
    <section  className='py-8 bg-[#229799]' ref={ref} id="contact" >
        <div className='max-w-[1200px] mx-auto px-4 flex max-md:flex-col md:flex-col lg:flex-row justify-around  gap-20'>
            <div className='flex items-center justify-between flex-col md:flex-col '>
                <h2 className='md:text-5xl text-4xl font-bold mb-10 text-[#FAFAFA]/90'> Get it <span className='text-[#424242]'>touch</span></h2>
                <a className='md:text-3xl lg:text-5xl max-md:text-4xl max-sm:text-2xl  font-semibold text-white underline decoration-[#FAFAFA] decoration-2 underline-offset-4 hover:decoration-gray-200 transition duration-100' href='mailto:tahzeebk80@gmail.com'>{contacts[0].data.email}</a>
            </div>
            <div className='text-white/50 mt-12'>
                <div className='mb-8 w-full'>

                    <p className='mb-1 md:text-7xl text-4xl lg:text-5xl font-bold text-[#FAFAFA]'>Pho<span className='text-[#424242]'>ne</span></p>
                    <a href={`tel:${formatPhoneNumber(contacts[0].data.contactno)}`} className='text-5xl max-sm:text-3xl font-semibold text-[#FAFAFA] underline decoration-[#FAFAFA] decoration-2 underline-offset-4 hover:decoration-gray-400
                    transition duration-300 w-[100%] max-lg:text-3xl'>                   {contacts[0].data.contactno}
                    </a>
                </div>
            </div>
        </div>
        <div className='w-full text-9xl text-center py-60 font-bold text-white/20 max-md:text-5xl'>{word.split("").map((char, index) => (
        <motion.span
          key={index} 
          className="text-4xl font-bold"
          animate={{color: ["#FAFAFA","#424242", "#FAFAFA"]}}
          transition={{ duration: .5, delay: index*.5 , repeat: 20 }}
        >
          {char}
        </motion.span>
      ))}</div>
    </section>
    </>
  )
}}

export default footer_banner