'use client'

import React, { useState, useEffect } from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import { FaCartShopping } from 'react-icons/fa6'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useCart } from './Cart'
import { useRouter } from 'next/navigation'
import localFont from 'next/font/local'

const militech = localFont({
  src: '../../fonts/militech3.ttf',
})

const Navbar = () => {
  const { toggleCart } = useCart()
  const router = useRouter()

  const [userName, setUserName] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  // Auth check
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]))
        setUserName(payload.email.split('@')[0])
      } catch {
        setUserName(null)
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUserName(null)
    router.push('/')
  }

  const navItem = 'relative text-white text-sm md:text-base tracking-widest pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full'

  return (
    <nav className={`relative w-full pt-6 pb-6 ${militech.className} bg-[linear-gradient(145deg,#1a1a1a_25%,#0a0a0a_25%,#0a0a0a_50%,#1a1a1a_50%,#1a1a1a_75%,#0a0a0a_75%)] bg-[length:10px_10px] max-w-[1440px] mx-auto`}>
      <div className='max-w-[1536px] mx-auto px-4 md:px-8 lg:px-16 h-[70px] flex items-center justify-between'>
        {/* Logo */}
        <Logo size='lg' />

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-8'>
          <Link href='#catalog' className={navItem}>
            Catalog
          </Link>
          <Link href='#features' className={navItem}>
            Features
          </Link>
          <Link href='#reviews' className={navItem}>
            Reviews
          </Link>

          {!userName ? (
            <>
              <Link href='/login' className={navItem}>
                Login
              </Link>
              <Link href='/signup' className={navItem}>
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className='text-sm tracking-widest'>
                Hi, {userName}
              </span>
              <button
                onClick={handleLogout}
                className='text-sm border border-red-500 px-3 py-1 rounded hover:bg-red-500 transition'
              >
                Logout
              </button>
            </>
          )}

          <FaCartShopping
            onClick={toggleCart}
            className='w-6 h-6 cursor-pointer hover:scale-110 transition'
          />
        </div>

        {/* Mobile Icons */}
        <div className='flex md:hidden items-center gap-4'>
          <FaCartShopping
            onClick={toggleCart}
            className='w-6 h-6 cursor-pointer'
          />

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className='w-7 h-7' />
            ) : (
              <HiMenuAlt3 className='w-7 h-7' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden absolute top-[70px] left-0 w-full z-50 flex flex-col gap-6 px-6 py-8 bg-[linear-gradient(145deg,#1a1a1a_25%,#0a0a0a_25%,#0a0a0a_50%,#1a1a1a_50%,#1a1a1a_75%,#0a0a0a_75%)] bg-[length:10px_10px] transform transition-all duration-300 ease-out ${menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <Link href='#catalog' onClick={() => setMenuOpen(false)} className={navItem}>
            Catalog
          </Link>
          <Link href='#features' onClick={() => setMenuOpen(false)} className={navItem}>
            Features
          </Link>
          <Link href='#reviews' onClick={() => setMenuOpen(false)} className={navItem}>
            Reviews
          </Link>

          {!userName ? (
            <>
              <Link href='/login' onClick={() => setMenuOpen(false)} className={navItem}>
                Login
              </Link>
              <Link href='/signup' onClick={() => setMenuOpen(false)} className={navItem}>
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className='text-sm'>Hi, {userName}</span>
              <button
                onClick={handleLogout}
                className='text-sm border border-red-500 px-3 py-2 rounded'
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar