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
      <p className={`text-slate-400 text-[18px] font-bold ${size === 'sm' ? 'text-sm' : ''}`}>Cheel Keyboard</p>
    </div>
  )
}

export default Logo