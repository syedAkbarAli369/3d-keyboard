'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import hero from '@/public/assets/hero.png'
import Buttons from '../Buttons'
import Link from 'next/link'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import TypingText from '../TypingText'

const Hero = () => {

  useEffect(() => {
    function handleScroll() {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        const isInView = rect.top >= 84 && rect.bottom >= window.innerHeight;
        document.body.style.overflow = isInView ? 'hidden' : 'auto'
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div id='hero' className='relative overflow-hidden h-screen max-w-5xl mx-auto flex flex-col p-2 pt-8 '>
      <div className='flex flex-col md:flex-row items-center px-3 relative'>
        <div className='w-full h-full md:w-1/2 flex flex-col gap-9 z-30 bg-gradient-to-r from-stone-950 via-stone-950 to-transparent'>
          <TypingText
            text='Your Keyboard'
            textStyles='text-3xl md:text-4xl lg:text-6xl font-bold text-nowrap'
          />
          <TypingText
            text='Your Comfort'
            textStyles='text-3xl -mt-6 md:text-4xl lg:text-6xl font-bold text-nowrap'
          />
          {/* <h1 className='text-5xl md:text-6xl font-bold text-nowrap'>Your Keyboard <br /> Your Comfort</h1> */}
          <p className='text-slate-400 font-semibold'>Discover a keyboard desinged for both style and functionality, providing unpatched comfort and efficiency for your everyday tasks.</p>
          <div className='flex flex-row gap-9'>
            <Buttons
              className='bg-gradient-to-t from-indigo-900 to-indigo-600'
              text='Buy Keyboard'
            />
            <Buttons
              className='border-white border-2'
              text='See More'
            />
          </div>
        </div>
        <Image
          src={hero}
          alt='hero'
          width={700}
          height={400}
          unoptimized={true}
          className='left-1/4 -top-9 mt-9 md:mt-6 md:absolute'
          priority
        />
      </div>

      <Link href="#catalog"
        className='absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-row items-center px-6 py-2 mx-auto mb-15 mt-auto border border-slate-400 rounded-xl text-sm md:text-slate-400 text-white'
      >
        <MdKeyboardDoubleArrowDown className='w-6 h-6 mr-2 animate-ping' />
        <span>Click To Scroll</span>
        <MdKeyboardDoubleArrowDown className='w-6 h-6 ml-2 animate-ping' />
      </Link>
    </div>
  )
}

export default Hero