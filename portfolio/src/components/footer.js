'use client'
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { createClient } from "@/prismicio";
import { useEffect, useState } from "react";

import { SiLinkedin, SiInstagram, SiGithub, SiGmail, SiDevdotto, SiPeerlist, SiYoutube } from 'react-icons/si';
const footer = () => {
  const [contact, setContact] = useState([])
  useEffect(() => {
    async function fetchingdata() {
      try {
        const client = createClient();
        const getting_contact=await client.getAllByType("contact");  
        setContact([getting_contact[0].data.github_link.url,getting_contact[0].data.github_link.url]);
           
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchingdata(); // Call the function inside useEffect
  }, []);
  const contacts=contact;
  console.log(contact)
  return (
     <>
     {/* Footer */}
     <footer id='contact' className="bg-[#424242] py-6 flex flex-row justify-between px-6 max-md:flex-col max-md:gap-10">
      
     
    <div className='flex flex-row gap-5 flex-wrap justify-center'>
    <motion.div
    whileHover={{scale:1.1}}>
      <Link
        href={"https://www.linkedin.com/in/md-tahzeeb-k/"}>

        <SiLinkedin className='text-xl md:text-4xl'/>
      </Link>
    </motion.div>
    <motion.div
    whileHover={{scale:1.1}}>
      <Link href={""} target='_blank'>
        <SiGithub className='text-white text-xl md:text-4xl'/>
      </Link>
    </motion.div>
    <motion.div 
    whileHover={{scale:1.1}}>
      <Link
        href={"www.github.com"}>
        <SiInstagram className='text-white text-xl md:text-4xl'/>
      </Link>
    </motion.div>
    
    <motion.div 
    whileHover={{scale:1.1}}>
       <Link
      href={"www.github.com"}
      ><SiYoutube className='text-white text-xl md:text-4xl'/></Link>
    </motion.div>
    
    <motion.div 
    whileHover={{scale:1.1}}>
      <Link
      href={"https://peerlist.io/mdtahzeebk"}
      ><SiPeerlist className='text-white text-xl md:text-4xl'/></Link>
    </motion.div>
      
    <motion.div 
    whileHover={{scale:1.1}}>
      <Link
        href={"https://dumb.dev.to/mohdtahzeebkhan"}>
        <SiDevdotto className='text-white text-xl md:text-4xl'/>
      </Link>
    </motion.div>

    <motion.div 
    whileHover={{scale:1.1}}>
      <Link
        href={"www.github.com"}>
        <SiGmail className='text-white text-xl md:text-4xl'/>
      </Link>
    </motion.div>
      
    </div>
    <div className='bg-white h-[2px] w-full md:hidden'></div>
    <div>
        <p className="text-gray-400 text-[12px] md:text-xl text-center">
        &copy; {new Date().getFullYear()} <span className='text-white'>Mohammad Tahzeeb Khan</span>. All rights reserved.
        </p>
      </div>
   </footer></>
  );
}

export default footer