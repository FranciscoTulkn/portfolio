import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='photo of Ankit Kumar' className='rounded-full w-32'/>
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
          Hi, I'm Ankit Kumar
          <Image src={assets.hand_icon} alt='' className='w-8'/>  
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo mb-3'>
        Frontend web developer based in Bogotá.
      </h1>

      <p className='max-w-2xl mx-auto font-ovo'>
        I'm a frontend web developer from California, USA. I am passionate about web development and I am always looking for new challenges to learn and improve my skills.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-3 mt-5'>
        <a href="#contact" className='px-10 py-3 border rounded-full border-white text-white bg-black flex items-center gap-2'>
          Contact me
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>  
        </a>

        <a href="/sample-resume.pdf" download={true} className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
          Download CV
          <Image src={assets.download_icon} alt='' className='w-4'/>  
        </a>
      </div>
    </div>
  )
}
