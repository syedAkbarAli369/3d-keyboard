

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Buttons from '@/components/Buttons'

import localFont from 'next/font/local'

const militech = localFont({
  src: '../../fonts/militech3.ttf',
})

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem('token', data.token)
      alert('Login successful')
      router.push('/')
    } else {
      alert(data.message)
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center bg-black text-white ${militech.className}`}>
      <form onSubmit={handleLogin} className="p-6 rounded w-80 relative pt-6 pb-6 ${militech.className} bg-[linear-gradient(145deg,#1a1a1a_25%,#0a0a0a_25%,#0a0a0a_50%,#1a1a1a_50%,#1a1a1a_75%,#0a0a0a_75%)] bg-[length:10px_10px] max-w-[1440px] mx-auto">
        <h1 className="text-2xl mb-4 tracking-wider">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 text-white tracking-wider"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 text-white tracking-wider"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Buttons text='Login' className='w-full bg-green-600' />

        {/* <button className="w-full bg-green-600 p-2">
          Login
        </button> */}
      </form>
    </div>
  )
}
