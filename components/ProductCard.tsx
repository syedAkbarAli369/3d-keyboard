
'use client'

import Image from "next/image"
import AnimatedContainer from "./AnimatedContainer";
import { useCart } from "./sections/Cart";

interface ProductCardProps {
  index: number,
  id: string,
  imgSrc: string,
  title: string,
  price: number,
  isActive: boolean,
  onClick: () => void;
}

const ProductCard = ({ index, imgSrc, title, price, isActive, onClick }: ProductCardProps) => {


  const { addToCart } = useCart();

  function handleBuy() {
    addToCart({ imgSrc, title, price, quantity: 1 })
  }


  return (
    <div onClick={onClick}
      className={`hover:scale-105 ${isActive ? 'scale-105' : ''}`}
    >

      <AnimatedContainer
        delay={index * 0.3}
        styles={`w-81 h-32 flex flex-row gap-4 rounded-xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-gradient-to-t from-indigo-900 to-indigo-600' : 'bg-stone-800'}`}
      >


        <Image
          src={imgSrc}
          alt="keyboard photo"
          width={126}
          height={126}
          unoptimized={true}
          className="rounded-xl"
        />
        <div className="flex flex-col justify-between gap-2 px-4 py-6 text-slate-200">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex flex-row items-center justify-center gap-3">
            <p className="text-slate-400">${price}</p>
            <div
              onClick={handleBuy}
              className="w-18 flex justify-center py-1 text-sm border-[1px] rounded-xl hover:bg-stone-200 transition duration-300 hover:text-stone-800"
            >
              Buy
            </div>
          </div>
        </div>
      </AnimatedContainer>

    </div>
  )
}

export default ProductCard