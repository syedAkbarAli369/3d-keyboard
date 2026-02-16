
import localFont from 'next/font/local'

const militech = localFont({
  src: "../fonts/militech3.ttf",
})

type ButtonProps = {
  className?: string,
  text: string
}

const Buttons = ({ className = "", text }: ButtonProps) => {
  return (
    <button
      className={`relative px-6 py-3 rounded-lg overflow-hidden w-45 flex justify-center items-center text-nowrap text-lg md:text-2xl tracking-wide text-white group ${className} ${militech.className}`}>
      <span className='relative z-10'>{text}</span>

      <span className='absolute left-0 bottom-[-100%] w-full h-full bg-purple-900 transition-all duration-300 ease-in-out group-hover:bottom-0' />
    </button>
  )
}

export default Buttons