import { FaBolt, FaGamepad, FaHandFist, FaKeyboard, FaHeadset, FaShieldHalved } from "react-icons/fa6"
import FeatureCard from "../FeatureCard"
import localFont from 'next/font/local'

const lemonMilk = localFont({
  src: '../../fonts/LEMONMILK-Regular.otf',
})

const features = [
  {
    icon: FaKeyboard,
    title: 'Compact Design',
    description: 'Experience a sleek, compact design that frees up space for intense gaming sessions and a cleaner setup.',
  },
  {
    icon: FaBolt,
    title: 'RGB Backlighting',
    description: 'Customize your keyboard with vibrant RGB lighting effects and millions of colors.',
  },
  {
    icon: FaHandFist,
    title: 'Mechanical Switches',
    description: 'Enjoy precise tactile feedback with durable mechanical switches built for performance.',
  },
  {
    icon: FaGamepad,
    title: 'Gaming Mode',
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