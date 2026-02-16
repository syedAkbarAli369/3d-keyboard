'use client'

import Image from 'next/image'
import React from 'react'
import hero from '@/public/assets/hero.png'
import Buttons from '../Buttons'
import localFont from 'next/font/local'
import styles from './Hero.module.css'

const lemonMilk = localFont({
  src: '../../fonts/LEMONMILK-Regular.otf',
})

const Hero = () => {

  return (
    <div id='hero' className={`relative overflow-hidden h-screen max-w-[90%] pl-0 mx-auto flex justify-center flex-col p-2 pt-3 pb-45 md:pt-0 md:pb-33 ${lemonMilk.className}`}>
      <div className='flex flex-col md:flex-row items-center px-3 relative'>
        <div className='w-full h-full md:w-1/2 flex flex-col gap-9 z-30 bg-gradient-to-r from-stone-950 via-stone-950 to-transparent'>
          <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-wide font-bold text-white">
            <span className={styles.line}>YOUR KEYBOARD</span>
            <span className={`${styles.line} ${styles.typing}`}>
              YOUR COMFORT
            </span>
          </h1>
          <p className='text-white lowercase font-semibold text-sm md:text-lg tracking-wide'>Discover a keyboard desinged for both style and functionality, providing unpatched comfort and efficiency for your everyday tasks.</p>
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
          className='left-1/3 -top-18 mt-9 md:mt-6 md:absolute'
          priority
        />
      </div>
      {/* 
      <Link href="#catalog"
        className='absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-row items-center px-6 py-2 mx-auto mb-15 mt-auto border border-slate-400 rounded-xl text-sm md:text-slate-400 text-white'
      >
        <MdKeyboardDoubleArrowDown className='w-6 h-6 mr-2 animate-ping' />
        <span>Click To Scroll</span>
        <MdKeyboardDoubleArrowDown className='w-6 h-6 ml-2 animate-ping' />
      </Link> */}
    </div>
  )
}

export default Hero