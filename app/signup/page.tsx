

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import localFont from 'next/font/local'
import Buttons from '@/components/Buttons'

const militech = localFont({
  src: '../../fonts/militech3.ttf',
})

export default function SignupPage() {
  const router = useRouter()

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem('token', data.token)
      alert('Signup successful')
      router.push('/')
    } else {
      alert(data.message)
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center bg-black text-white ${militech.className}`}>
      <form onSubmit={handleSignup} className="bg-[linear-gradient(145deg,#1a1a1a_25%,#0a0a0a_25%,#0a0a0a_50%,#1a1a1a_50%,#1a1a1a_75%,#0a0a0a_75%)] bg-[length:10px_10px] max-w-[1440px] mx-auto p-6 rounded w-80">
        <h1 className="text-2xl mb-4 tracking-wider">Signup</h1>

        <input
          placeholder="Name"
          className="w-full p-2 mb-3 text-white tracking-wider"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <Buttons text='Signup' className='bg-blue-600 w-full' />
        {/* <button className="w-full bg-blue-600 p-2">
          Signup
        </button> */}
      </form>
    </div>
  )
}
