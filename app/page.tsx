

import Cart from '@/components/sections/Cart'
import Catalog, { ProductType } from '@/components/sections/Catalog'
import Features from '@/components/sections/Features'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import Products from '@/components/sections/Products'
import Reviews from '@/components/sections/Reviews'
import Sale from '@/components/sections/Sale'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <div className='text-slate-100 bg-stone-950 font-orbitron overflow-x-hidden'>
      <Toaster />
      <Cart />
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Reviews />

      <div className='bg-stone-800'>
        <Sale />
        <Footer />
      </div>
    </div>
  )
}

export default Home