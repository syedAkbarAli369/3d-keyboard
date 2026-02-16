

import Cart from '@/components/sections/Cart'
import Features from '@/components/sections/Features'
import Footer from '@/components/sections/Footer'
import Hero from '@/components/sections/Hero'
import Navbar from '@/components/sections/Navbar'
import Products from '@/components/sections/Products'
import Reviews from '@/components/sections/Reviews'
import Sale from '@/components/sections/Sale'
<<<<<<< HEAD
import WhyChoose from '@/components/sections/WhyChoose'
import React from 'react'
import { Toaster } from 'react-hot-toast'

import localFont from 'next/font/local'

const militech = localFont({
  src: '../fonts/militech3.ttf',
})

=======
import React from 'react'
import { Toaster } from 'react-hot-toast'

>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
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
<<<<<<< HEAD
      <WhyChoose />

      <div className={`bg-[linear-gradient(145deg,#1a1a1a_25%,#0a0a0a_25%,#0a0a0a_50%,#1a1a1a_50%,#1a1a1a_75%,#0a0a0a_75%)] bg-[length:10px_10px] ${militech.className}`}>
=======

      <div className='bg-stone-800'>
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
        <Sale />
        <Footer />
      </div>
    </div>
  )
}

export default Home