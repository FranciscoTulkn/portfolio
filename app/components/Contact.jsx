'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'


const ACCES = process.env.ACCES_KEY


export const Contact = () => {

  const [result, setResult] = useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", ACCES);
    console.log(ACCES);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png)] bg-no-repeat bg-center
    bg-[length:90%_auto] dark:bg-none ' 
    >
      <h4 className='text-center mb-2 text-lg font-ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in Touch</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I'd love to hear from you! If you have any questions, feedback, or just want to say hello, don't hesitate to reach out.
      </p>

      <form onSubmit={onSubmit}  className='max-w-2xl mx-auto'>

        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          <input 
            name="name"
            type="text" 
            placeholder='Enter your name' 
            required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' 
          />
          <input 
            name="email"
            type="email" 
            placeholder='Enter your email' 
            required
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'  
          />
        </div>

        <textarea 
          name="message" 
          rows={6} 
          placeholder='Enter your message' 
          required
          className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'  
        ></textarea>

        <button type='submit' className='py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover' >
          Submit now
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </button>

        <p className='text-center mt-4 text-gray-600 text-sm'>
          {result}
        </p>

      </form>

    </div>
  )
}
