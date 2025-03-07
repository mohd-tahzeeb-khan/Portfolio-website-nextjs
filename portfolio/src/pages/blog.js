import Image from 'next/image';
import React from 'react';
import portfolio_image from '../../public/images/portfolioimage.png';
import Portfolio from "@/pages/portfolio";
const Blog = ({blogs}) => {
  if(!blogs || (Array.isArray(blogs) && blogs.length === 0) ){
    return(
    <>
    </>
    )
  }else{ 
  return (
    <section id='Blog' className='text-white p-8'>
      <h2 className='text-6xl font-bold mb-8'>
        Blog <span className='text-green-500'>Me</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='border border-white/20 rounded-lg p-6'>
          <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
          <p className='text-white/50 mb-6'>
            I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating innovative web solutions.
            My journey in tech started with a curiosity Blogger how things work on the web, which led me to pursue a career in web development. 
          </p>
          <div className='rounded-lg p-4 mb-4 border border-white/20'>
            <code className='text-emerald-200/50'>
              const skills = [<br />
              &nbsp;&nbsp;'Javascript',<br />
              &nbsp;&nbsp;'Reactjs',<br />
              &nbsp;&nbsp;'Nextjs',<br />
              &nbsp;&nbsp;'MongoDB',<br />
              &nbsp;&nbsp;'Java',<br />
              &nbsp;&nbsp;'SpringBoot',<br />
              ];
            </code>
          </div>
        </div>
        <div className='border border-white/20 rounded-lg p-6'>
          <h3 className='text-2xl font-bold mb-2 text-green-600'>02. Expertise</h3>
          <p className='text-green-600'>
            I specialize in building robust and scalable web applications using modern technologies. 
            My expertise spans both front-end and back-end development, allowing me to create seamless, end-to-end solutions.
          </p>
          <div className='mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'>
            {/* <Image 
              src={portfolio_image}
              alt='Portfolio Image'
              height={300}
              width={300}
              className='absolute inset-0 w-full h-full object-cover'
            /> */}

            {/* Iamge to be implement */}
          </div>
        </div>
      </div>
    </section>
    
  )
}
}

export default Blog;
