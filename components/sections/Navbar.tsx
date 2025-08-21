'use client'

import React from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { FaCartShopping } from 'react-icons/fa6'
import { useCart } from './Cart'

const Navbar = () => {

  const { toggleCart } = useCart();

  return (
    <div className='max-w-6xl flex justify-between items-center mx-auto p-6'>
      <Logo size='lg' />
      <div className='flex flex-row gap-9 items-center text-white'>
        <Link href="#catalog" className='hidden md:block font-semibold text-sm text-slate-400'>Catalog</Link>
        <Link href="#features" className='hidden md:block font-semibold text-sm text-slate-400'>Features</Link>
        <Link href="#reviews" className='hidden md:block font-semibold text-sm text-slate-400'>Reviews</Link>
      </div>
      <FaCartShopping
        onClick={toggleCart}
        className='w-9 h-9 text-slate-400 cursor-pointer'
      />
    </div>
  )
}

export default Navbar