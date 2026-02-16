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
    <div className="w-90 h-63 flex flex-col bg-stone-800 rounded-xl gap-y-3 px-3 py-6 mr-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-3">
          <Image
            src={imgSrc}
            alt="client"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-xl">{name}</span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <FaStar />
          <span>{stars}</span>
        </div>
      </div>
      <p className="text-slate-300 text-sm md:text-lg font-light pt-3">{text}</p>
    </div>
  )
}

export default ReviewCard