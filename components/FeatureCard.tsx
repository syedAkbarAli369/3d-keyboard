import { IconType } from "react-icons/lib";
import AnimatedContainer from "./AnimatedContainer";


interface FeatureCardProp {
  index: number;
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard = ({ index, icon: Icon, title, description }: FeatureCardProp) => {

  return (
    <AnimatedContainer
      delay={index % 2 === 0 ? 0.3 : 0.6}
      styles="w-81 h-72 bg-stone-800 relative rounded-xl overflow-hidden"
    >
      <Icon className="absolute top-0 right-0 w-40 h-40 text-stone-900 z-0" />
      <div className="flex flex-col gap-3 relative px-3 py-6 z-10">
        <Icon className="w-9 h-9 mb-3" />
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </div>
    </AnimatedContainer>
  )
}

export default FeatureCard