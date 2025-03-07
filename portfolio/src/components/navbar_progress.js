'use client'
import React from 'react'
import {motion, useScroll} from 'framer-motion';
const navbar_progress = () => {
    const {scrollYProgress}=useScroll();
  return (
    <>
    <motion.div id="scroll-indicator"
    style={{
        scaleX:scrollYProgress,
        position:'fixed',
        top:0,
        left:0,
        right:0,
        height:7,
        originX:0,
        backgroundColor:"#fff",
    }}>
        
    </motion.div>
    </>
  )
}

export default navbar_progress