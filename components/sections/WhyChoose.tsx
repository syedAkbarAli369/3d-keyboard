

'use client'

import Image from 'next/image'
import localFont from 'next/font/local'
import keyboardImg from '@/public/assets/keyboard3.png'

const lemonMilk = localFont({
  src: '../../fonts/LEMONMILK-Regular.otf',
})

const WhyChoose = () => {
  return (
    <section
      className={`max-w-[90%] mx-auto px-4 sm:px-6 md:px-10 py-24 pb-54 ${lemonMilk.className}`}
    >

      <h2 className='text-2xl md:text-3xl font-semibold pl-4 md:pl-16 pb-16 text-center'>
        <span className='animate-pulse'>/ </span>
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Built For Performance.<br />Designed For Comfort.
          </h2>

          <p className="text-slate-400 max-w-xl leading-relaxed">
            Our mechanical keyboard is engineered to deliver speed, precision, and
            comfort. Whether you're gaming for hours or working all day, every
            keystroke feels smooth, responsive, and reliable.
          </p>

          <ul className="flex flex-col gap-3 text-slate-300">
            <li>— Ultra-low latency mechanical switches</li>
            <li>— Ergonomic layout for long sessions</li>
            <li>— Premium materials & solid build</li>
            <li>— Perfect for gaming and productivity</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <Image
            src={keyboardImg}
            alt="Keyboard preview"
            className="w-full max-w-[500px] object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
