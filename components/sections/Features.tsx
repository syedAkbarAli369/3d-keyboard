import { FaBolt, FaGamepad, FaHandFist, FaKeyboard } from "react-icons/fa6"
import FeatureCard from "../FeatureCard"


const features = [
  {
    icon: FaKeyboard,
    title: 'Compact Design',
    description: 'Experience a sleek, compact design that frees up for intense gaming sessions, allowing for more mouse movement and a cleaner setup.',
  },
  {
    icon: FaBolt,
    title: 'RGB Backlighting',
    description: 'Customize your keyboard with variant RGB backlighting, featuring dynamic lighting effects and millions of colors to match your gaming rig.',
  },
  {
    icon: FaHandFist,
    title: 'Mechanical Switches',
    description: 'Enjoy precise, tactile feedback with durable mechanical switches, ensuring fast response times and reliable performance during gameplay.',
  },
  {
    icon: FaGamepad,
    title: 'Gaming Mode',
    description: 'Activate gaming mode to disable the Windows key and avoid accidental interruptions, keeping you focused on the game.',
  },
]

const Features = () => {
  return (
    <div className="max-w-[1024px] mx-auto" id="features">
      <h2 className="text-2xl font-semibold pl-3 md:pl-15 pb-15 text-center">
        <span className="animate-pulse">/ </span>
        Features
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-9 max-w-[850px] mx-auto">
        {
          features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Features