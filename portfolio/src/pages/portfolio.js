'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// Import the Iconsn from lucide-react
import { ChevronDown, ExternalLink, Github } from 'lucide-react'

import Image from 'next/image'
const Projects=[
  {
    data:{
      description:[{
        text:"--",
        text:"---",
      }],
      github:{url:"---"},
      projectlink:{url:"---"},
      technology:[{
        text:"--",
      }],
      title:"ECommerce Digital Products",
      type:"Full stack Development"
    }
         
   
   
  }]
        
const portfolio = ({projects}) => {
  if(!projects){
    projects=Projects
  }

  const [expandedIndex, setexpandedIndex] = useState(null);
  const toggleExpand=(index)=>{
    setexpandedIndex(expandedIndex===index?null:index);
  };
  return (

    <>
    <div className='text-white py-36 md:py-52 bg-[#229799]' id='portfolio'>
      <h2 className='text-6xl font-bold text-center mb-16'>
        My <span className='text-[#F5F5F5]'>Caliber</span>
      </h2>
      <div className='space-y-11 grid grid-cols-2 gap-6 sm:grid-col-1 max-lg:grid-cols-1 p-3 '>
        {
          projects.map((project,index)=>(
            <motion.div 
              key={index}
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.5, delay:index*0.1}}
              className='bgg-white/4 bg-[#48CFCB] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full'>
                  <div className='p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/20 ' onClick={()=>toggleExpand(index)}>
                    <h3 className='text-xl md:text-4xl font-semibold text-[#F5F5F5]'>{project.data.title}</h3>
                    <div className='flex items-center space-x-4'>
                      <span className='text-3xl font-light text-[#F5F5F5]'>
                        0{index+1}
                      </span>
                      <ChevronDown className={`w-6 h-6 transform transition-transform ${
                        expandedIndex ===index ? "rotate-180":""}`} />
                    </div>
                  </div>
                  <AnimatePresence>
                    {
                      expandedIndex===index &&(
                        <motion.div 
                        initial={{height:0, opacity:0}}
                        animate={{height:'auto', opacity:1}}
                        exit={{height:0, opacity:0}}
                        transition={{duration:0.3}}
                        className='px-6 pb-6 bg-[#424242] border border-white/10 absolute  w-full lg:w-[48%]'>
                          <div className='flex flex-col md:flex-row gap-8'>
                            {/* <Image 
                              // src={"project.data.projectimage.url"}
                              // alt="image"
                              // width={200}
                              // height={200}
                              // className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                            />*/}
                            <div className='flex-1'>
                            
                            {
                              project.data.decription.map((desc, descIndex) => {
                                console.log("This is descriiption",desc.text);
                                <p>{desc.text}</p>
                              })
                            }
                            
                              
                              <p className='text-[#F5F5F5] font-medium mb-2'>Technology Used: {project.data.technology[0].text}</p>
                              <p className='text-[#F5F5F5]/60 font-medium mb-4 capitalize'>
                              Type:{project.data.type}</p>
                              <div className='flex justify-start items-center space-x-4'>
                                <a href={project.data.github.url} className='text-[#text-[#F5F5F5] hover:text-blue-300 transition-colors'><Github /></a>
                                <a href={project.data.projectlink.url} className='text-[#text-[#F5F5F5] hover:text-blue-300 transition-colors'><ExternalLink /></a>
                              </div>
                            </div>
                          </div>

                        </motion.div>
                      )
                    }
                  </AnimatePresence>
            </motion.div>
          ))
        }
         </div>
      </div> 
      
    </>
  )
}

export default portfolio