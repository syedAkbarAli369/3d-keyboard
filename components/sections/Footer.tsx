

import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
import { FaFacebook, FaInstagram, FaX, FaYoutube } from 'react-icons/fa6'

const Social = () => {
  return (
<<<<<<< HEAD
    <div className='flex flex-col gap-3 '>
=======
    <div className='flex flex-col gap-3'>
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
      <Logo />
      <div className='flex flex-row gap-3'>
        <Link href="#" className='flex items-center justify-center rounded-full bg-white p-1'>
          <FaInstagram className='text-stone-950' />
        </Link>
        <Link href="#" className='flex items-center justify-center rounded-full bg-white p-1'>
          <FaFacebook className='text-stone-950' />
        </Link>
        <Link href="#" className='flex items-center justify-center rounded-full bg-white p-1'>
          <FaX className='text-stone-950' />
        </Link>
        <Link href="#" className='flex items-center justify-center rounded-full bg-white p-1'>
          <FaYoutube className='text-stone-950' />
        </Link>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className='container max-w-[1024px] mx-auto pt-33 relative z-20 '>
=======
    <div className='container max-w-[1024px] mx-auto pt-33 relative z-20'>
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3

      <div className='flex flex-col gap-12 md:flex-row justify-between pb-9 px-9'>
        {/* social */}
        <Social />
        <div className='flex flex-col gap-9'>
          <div className='w-33 flex flex-col gap-3'>
<<<<<<< HEAD
            <p className='p-1 font-light text-white text-xl md:text-2xl tracking-wide'>Location: </p>
            <p className=' inline-block font-light text-white text-xl md:text-2xl tracking-wide'>Some Address 369, Bangladesh, 12345</p>
          </div>
          <div className='w-33 flex flex-col gap-3'>
            <p className='p-1 font-light text-white text-xl md:text-2xl tracking-wide'>Phone: </p>
            <p className='font-light text-white text-xl md:text-2xl tracking-wide'>0310-2302043</p>
          </div>
        </div>

        <div className='flex flex-col gap-3 font-light text-white text-xl md:text-2xl tracking-wide'>
=======
            <p className='p-1 font-semibold text-slate-400'>Location: </p>
            <p className=' inline-block'>Some Address 369, Bangladesh, 12345</p>
          </div>
          <div className='w-33 flex flex-col gap-3'>
            <p className='p-1 font-semibold text-slate-400'>Phone: </p>
            <p>0310-2302043</p>
          </div>
        </div>

        <div className='flex flex-col gap-3 text-sm text-slate-400'>
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
          <Link href="#">Home</Link>
          <Link href="#catalog">Catalog</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>

<<<<<<< HEAD
      <hr className='px-15 border-white' />

      <div className='w-full flex flex-col-reverse gap-y-3 md:flex-row items-center justify-between py-3 font-light text-white text-xl md:text-2xl tracking-wide p-9'>
=======
      <hr className='px-15 border-slate-400' />

      <div className='w-full flex flex-col-reverse gap-y-3 md:flex-row items-center justify-between py-3 text-xs text-slate-400'>
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
        <p>&copy; Cheel Company Ltd.</p>
        <p>Contact Us | cheel369@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer