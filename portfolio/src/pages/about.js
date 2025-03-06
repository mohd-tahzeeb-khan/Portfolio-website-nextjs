'use client'
import Image from 'next/image';
import React, { useRef } from 'react';
import portfolio_image from '../../public/images/portfolioimage.png';
import Portfolio from "@/pages/portfolio";
import { motion, useInView } from 'framer-motion';
// import background from '#/images/Background.jpeg'
const About = () => {
  const ref=useRef(null);
  const progressbarref=useRef(null)
  const isinview=useInView(ref, {once:true})
  const progressbarinview=useInView(progressbarref, {once:true})
  return (
    <section 
    ref={ref}
      id='about'
      
      className='text-white p-8 bg-[#424242]'>
      

      <h2 className='text-6xl font-bold mb-8 text-[#FAFAFA]'>
        About <span className='	text-[#48CFCB]'>Me</span>
      </h2>
      <motion.div
        initial={{y:700, z:0, scale:0}}
        animate={isinview?{y:0, z:1, scale:1}:{}}
        transition={{duration:1.2, delay:.1}}
        
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {console.log("the values of about ref: ", ref)}
        {console.log("the values of about isinview: ", isinview)}
        <div className='border border-white/55 rounded-lg p-6'>
          <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
          <p className='text-white/50 mb-6 text-justify'>
          Pursuing a One-Year MBA from GH Raisoni School of Business Management, with a BTech in CSE and a Polytechnic Diploma in CSE. Experienced in web development (frontend/backend) using Python and JavaScript, along with hands-on management expertise from my father’s business. Skilled in collaboration, planning, problem-solving, and communication, I am passionate about contributing to innovative projects while continuously learning and growing in a dynamic environment.



          </p>
          <motion.div
          
          whileHover={{scale0:.9}}
          className='rounded-lg p-4 mb-4 border border-white/55 relative grid grid-cols-1 lg:grid-cols-2'>
            <code 
              className='text-[#48CFCB]/50 border border-transparent md:border-r-white/45 border-b-white/45'>
              let hard_skills = [<br />
              &nbsp;&nbsp;'Javascript',<br />
              &nbsp;&nbsp;'Reactjs',<br />
              &nbsp;&nbsp;'Nextjs',<br />
              &nbsp;&nbsp;'MongoDB',<br />
              &nbsp;&nbsp;'Java',<br />
              &nbsp;&nbsp;'SpringBoot',<br />
              ];
            </code>

            <code 
  className='text-[#48CFCB]/50 border border-transparent md:border-l-white/45 border-t-white/45'>
              let Soft_Skills = [<br />
              &nbsp;&nbsp;    'Collaborator',<br />
              &nbsp;&nbsp;    'Team Work',<br />
              &nbsp;&nbsp;    'Problem-Solving',<br />
              &nbsp;&nbsp;    'Time Management',<br />
              &nbsp;&nbsp;    'Leadership ',<br />
              &nbsp;&nbsp;    'Initiative',<br />
                  ];
</code>
          </motion.div>
        </div>
        <div className='border border-white/55 rounded-lg p-6'>
          
          <div className='mt-4 relative border border-white/55 rounded-lg p-4 h-[220px] overflow-hidden clip-path-[polygon(90%_0%,_100%_50%,_50%_100%,_0%_50%)]'>
            {/* <Image 
              src={portfolio_image}
              alt='Portfolio Image'
              height={300}
              width={300}
              className='absolute inset-0 w-full h-full object-cover'
            /> */}

            {/* Iamge to be implement */}
          </div>
          <h3 className='text-2xl font-bold mb-2 text-[#48CFCB] mt-5'>02. Expertise</h3>
          <p className='text-[#F5F5F5] text-justify'>
          I specialize in building robust and scalable web applications using Spring Boot, Spring Security, Spring Data JPA, and Spring Microservices.
           My expertise includes designing seamless, end-to-end solutions with databases like MySQL, MongoDB, SQLite3, and Redis. 
           I focus on creating secure, efficient, and high-performance systems, leveraging modern frameworks and tools to deliver innovative and reliable applications tailored to meet diverse business needs.          </p>
        </div>
        {/*-------------------------------- 03. Skills--------------------------------- */}
        <div className='border border-white/55 rounded-lg p-6'>
          <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
          <p className='text-white/50 mb-6 text-justify'>
          I’m proficient in Spring Boot, Spring Security, Spring Data JPA, and databases like MySQL, MongoDB, and Redis, constantly expanding my skills to stay at the forefront of web and backend development.          </p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='border border-white/55 rounded-lg p-3'>
            <h4 className='text-[#48CFCB] font-medium mb-2'>Frontend</h4>
            <ul className='text-white/50 space-y-1 text-sm'>
              <li>React/Nextjs</li>
              <li>Tailwind Css</li>
              <li>Framer-Motion</li>
              <li>GSAP</li>
              <li>Three.js</li>
            </ul>
            </div>
            <div className='border border-white/55 rounded-lg p-3'>
            <h4 className='text-[#48CFCB] font-medium mb-2'>Backend</h4>
            <ul className='text-white/50 space-y-1 text-sm'>
              <li>SpringBoot</li>
              <li>Sring Security</li>
              <li>Spring Data JPA</li>
              <li>Spring Micro-Services</li>
            </ul>
            </div>
            <div className='border border-white/55 rounded-lg p-3'>
            <h4 className='text-[#48CFCB] font-medium mb-2'>Databases</h4>
            <ul className='text-white/50 space-y-1 text-sm'>
              <li>MySql</li>
              <li>Sqlite3</li>
              <li>MongoDb</li>
              <li>Redis</li>
            </ul>
            </div>
            <div className='border border-white/55 rounded-lg p-3'>
            <h4 className='text-[#48CFCB] font-medium mb-2'>Add-ons</h4>
            <ul className='text-white/50 space-y-1 text-sm'>
              <li>Figma</li>
              <li>Git/Github</li>
              <li>Jenkins</li>
              <li>XML, Json</li>
            </ul>
            </div>
          </div>
        </div>
      {/* ------------------------05. Goal------------------------ */}
      <div className='border border-white/55 rounded-lg p-6 flex flex-col justify-between'>
              <div className='relative border border-white/55 rounded-lg p-4 h-[200px] overflow-hidden'>
                {/* <Image 
                 src={""}
                   alt='Project-2'
                   width={200}
                   height={160}
                   className='absolute inset-0 w-full h-full object-cover'
                 />*/}
              </div>
              <div>
                <h3 className='text-2xl font-bold mb-2'>05. Goals</h3>
                <p className='text-white/50 text-justify'>
                 My goal is to continue growing as a developer, tackling challenging projects, and contributing to the tech community. 
                 I'm always excited to learn new technologies and push the boundaries of what's possible in web development.       
                 </p>

              </div>
              </div>
      {/* ----------------------04. Approach---------------------- */}
     
      <div className='grid grid-cols-1 text-center max-md:grid-cols-1 gap-8 border p-3 border-white/55   rounded-lg md:col-span-2 max-sm:col-span-1 sm:col-span-1'>
        <div className='border border-white/55 rounded-lg p-6'>
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Front-end
                  </label>
                  <div ref={progressbarref}  className='relative w-full bg-white/10 rounded-full h-2'>
                    <motion.div
                  
                    initial={{width:0}}
                    animate={progressbarinview ? {width:"85%"} : {}}
                    transition={{ duration:1.5}}
                    className='bg-[#48CFCB] h-2 rounded-full absolute top-0 left-0' ></motion.div>
                  </div>
                </div>
              </div>
      </div>
        <div className='border border-white/55 rounded-lg p-6'>
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Back-end
                  </label>
                  <div className='relative w-full bg-white/10 rounded-full h-2'>
                    <motion.div
                    initial={{width:0}}
                    animate={progressbarinview ? {width:"95%"} : {}}
                    transition={{ duration:1.5}}
                    className='absolute bg-[#48CFCB] h-2 rounded-full' ></motion.div>
                  </div>
                </div>
        </div>
      </div>
        <div className='border border-white/55 rounded-lg p-6'>
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium mb-1'>
                    Databases
                  </label>
                  <div className='relative w-full bg-white/10 rounded-full h-2'>
                    <motion.div
                    initial={{width:0}}
                    animate={progressbarinview ? {width:"85%"} : {}}
                    transition={{ duration:1.5}}
                    className='absolute bg-[#48CFCB] h-2 rounded-full' style={{width:"80%"}}>

                    </motion.div>
                    
                  </div>
                </div>
              </div>
        </div>
        {/* -----------------------04. Approach-------------------------- */}
        <div className='flex flex-col p-6'>
          <h3 className='text-2xl font-bold mt-4 mb-2'>04. Approach</h3>
        <p className='text-white/50 text-justify'>
          I believe in writing clean, maintainable code, following best practices, understanding client needs, planning thoroughly, and delivering high-quality solutions on time.
        </p>
        </div>
        </div>
              
        </motion.div>
    </section>
    
  )
}

export default About;
