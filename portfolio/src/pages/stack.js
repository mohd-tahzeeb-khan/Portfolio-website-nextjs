'use client'
import { color, motion, useAnimate, useAnimation, useInView } from 'framer-motion'
import { Icon } from 'lucide-react';
import React, { useEffect, useRef } from 'react'
// importing all the Icons
import {FaLemon} from 'react-icons/fa';
import {SiFigma,SiGit , SiSpringboot , SiSpringsecurity , SiSpring , SiStreamlit , SiTailwindcss , SiMysql , SiSqlite , SiPython , SiReact ,SiDjango ,SiFlutter } from "react-icons/si";


const stackItems=[
    {
        id:1,
        name:"Spring",
        icon:<SiSpring size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:2,
        name:"Spring Boot",
        icon:<SiSpringboot size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:3,
        name:"Spring Security",
        icon:<SiSpringsecurity size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:4,
        name:"Figma",
        icon:<SiFigma size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:5,
        name:"Django",
        icon:<SiDjango size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:6,
        name:"Python",
        icon:<SiPython size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:7,
        name:"React",
        icon:<SiReact size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:8,
        name:"Flutter",
        icon:<SiFlutter  size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:9,
        name:"Git",
        icon:<SiGit   size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:10,
        name:"MySql",
        icon:<SiMysql  size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:11,
        name:"Sqlite3",
        icon:<SiSqlite  size={100}/>,
        color:"text-emerald-200"
    },
    {
        id:12,
        name:"TailwindCss",
        icon:<SiTailwindcss  size={100}/>,
        color:"text-emerald-200"
    },

]

const stack = ({slacks}) => {
    const controls=useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.1 });

    useEffect(() => {
      if(inView){
        controls.start("visible");
      }else{
        controls.start("hidden");
      }},[controls, inView]);
      if(!slacks){
        return(
            <></>
        )
      }
      else{
  return (

    <>

    {/* {console.log("slakc is",slacks[0].data.icon)} */}
    <section id="stack" className='py-24 md:py-64 w-full md:px-4 mx-auto text-center bg-[#424242]'>
        <h2 className='text-5xl md:text-6xl lg:text-7xl text-gray-100 font-bold mb-24'><span className='text-[#48CFCB]'>My</span> Stack</h2>
        {/* <div><SiNodedotjs size={100}/></div> */}
        <div className='flex flex-1 lg:flex-shrink-0 flex-wrap justify-between gap-5 pt-10 p-4 w-full' ref={ref}>
            {stackItems.map((item, index)=>(
                <motion.div
                    key={item.id}
                    
                    custom={index}
                    initial="hidden"
                    animate={{scale:1}}
                    whileHover={{scale:8.1}}
                    variants={{
                        hidden:(index)=>({
                            opacity:1, y:index % 2===0? -100 :100,
                        }),
                        visible:{
                            opacity:1,
                            y:0,
                            transition:{
                                duration:1.5,
                            },
                        },
                    }}
                    
                  className= ' border border-white bg-white/10 flex flex-col items-center justify-center md:max-w-[190px] md:max-h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-200 sm:max-w-[90px]'
                > 
                    <div className={`mb-4 text-[#DDA0DD]`}>{item.icon}</div>
                    <p className='text-white/20 text-xs'>{item.name}</p>
                </motion.div> 

                
            ))}
            
        </div>
    </section>    
    </>
  )
}
}
export default stack

