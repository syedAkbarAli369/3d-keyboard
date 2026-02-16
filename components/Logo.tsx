import Image from "next/image";
import logo from '@/public/assets/logo.png'

interface LogoProps {
  size?: 'sm' | 'lg';
}

const Logo = ({ size = 'sm' }: LogoProps) => {

  const iconSize = size === 'lg' ? 35 : 25;

  return (
    <div className="flex flex-row gap-3 items-center">
      <Image
        src={logo}
        alt="logo"
        width={iconSize}
        height={iconSize}
      />
<<<<<<< HEAD
      <p className={`text-white uppercase tracking-widest xl:text-4xl lg:text-3xl md:text-xl sm:text-lg font-bold ${size === 'sm' ? 'text-sm' : ''}`}>Cheel Keyboard</p>
=======
      <p className={`text-slate-400 text-[18px] font-bold ${size === 'sm' ? 'text-sm' : ''}`}>Cheel Keyboard</p>
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
    </div>
  )
}

export default Logo