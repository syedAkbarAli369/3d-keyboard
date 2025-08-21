import { motion } from "framer-motion";

interface TypingTextProps {
  text: string;
  textStyles?: string;
}

const TypingText = ({ text, textStyles }: TypingTextProps) => {
  return (
    <motion.div
      className={textStyles}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05, // speed of typing
          },
        },
      }}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          style={{ display: "inline-block" }} // keep inline
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypingText;
