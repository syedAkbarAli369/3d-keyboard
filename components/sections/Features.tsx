<<<<<<< HEAD
import { FaBolt, FaGamepad, FaHandFist, FaKeyboard, FaHeadset, FaShieldHalved } from "react-icons/fa6"
import FeatureCard from "../FeatureCard"
import localFont from 'next/font/local'

const lemonMilk = localFont({
  src: '../../fonts/LEMONMILK-Regular.otf',
})
=======
import { FaBolt, FaGamepad, FaHandFist, FaKeyboard } from "react-icons/fa6"
import FeatureCard from "../FeatureCard"

>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3

const features = [
  {
    icon: FaKeyboard,
    title: 'Compact Design',
<<<<<<< HEAD
    description: 'Experience a sleek, compact design that frees up space for intense gaming sessions and a cleaner setup.',
=======
    description: 'Experience a sleek, compact design that frees up for intense gaming sessions, allowing for more mouse movement and a cleaner setup.',
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
  },
  {
    icon: FaBolt,
    title: 'RGB Backlighting',
<<<<<<< HEAD
    description: 'Customize your keyboard with vibrant RGB lighting effects and millions of colors.',
=======
    description: 'Customize your keyboard with variant RGB backlighting, featuring dynamic lighting effects and millions of colors to match your gaming rig.',
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
  },
  {
    icon: FaHandFist,
    title: 'Mechanical Switches',
<<<<<<< HEAD
    description: 'Enjoy precise tactile feedback with durable mechanical switches built for performance.',
=======
    description: 'Enjoy precise, tactile feedback with durable mechanical switches, ensuring fast response times and reliable performance during gameplay.',
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
  },
  {
    icon: FaGamepad,
    title: 'Gaming Mode',
<<<<<<< HEAD
    description: 'Disable the Windows key and avoid interruptions during intense gameplay.',
  },
  {
    icon: FaHeadset,
    title: 'Immersive Experience',
    description: 'Designed for gamers who demand immersion, comfort, and responsiveness.',
  },
  {
    icon: FaShieldHalved,
    title: 'Built To Last',
    description: 'High-quality materials ensure durability even during long gaming sessions.',
  },
]


const Features = () => {
  return (
    <section
      id="features"
      className={`max-w-[90%] mx-auto pb-20 ${lemonMilk.className} flex flex-col justify-center items-center`}
    >
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-16">
        <span className="opacity-60">/ </span>
        Features
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          flex-center
          gap-15
          max-w-[1200px]
          mx-auto
        "
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            index={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
=======
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
>>>>>>> 5c5320c4a0ee19a02616cb336703832f932900a3
