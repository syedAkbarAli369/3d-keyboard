import Image from "next/image";
import { FaStar } from "react-icons/fa6";


interface ReviewCardProps {
  name: string;
  imgSrc: string;
  text: string;
  stars: number
}

const ReviewCard = ({ name, imgSrc, text, stars }: ReviewCardProps) => {
  return (
<<<<<<< HEAD
    <div className="w-90 h-63 flex flex-col bg-stone-800 rounded-xl gap-y-3 px-3 py-6 mr-3">
      <div className="flex justify-between items-center">
=======
    <div className="w-63 h-45 flex flex-col bg-stone-800 rounded-xl gap-y-3 px-3 py-6 mr-3">
      <div className="flex justify-between items-center text-xs">
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
        <div className="flex items-center justify-center gap-3">
          <Image
            src={imgSrc}
            alt="client"
            width={36}
            height={36}
            className="rounded-full"
          />
<<<<<<< HEAD
          <span className="text-xl">{name}</span>
=======
          <span>{name}</span>
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaStar />
          <span>{stars}</span>
        </div>
      </div>
<<<<<<< HEAD
      <p className="text-slate-300 text-sm md:text-lg font-light pt-3">{text}</p>
=======
      <p className="text-slate-300 text-xs">{text}</p>
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
    </div>
  )
}

export default ReviewCard