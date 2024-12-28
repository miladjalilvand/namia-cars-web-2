"use client";
import { motion } from "framer-motion";

const TextMotionCustom = ({ text }) => {
  const words = text.split(" ");
  return (
    <div className="flex flex-wrap">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: "10px" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // تنظیم viewport
          transition={{
            delay: index * 0.3, // محاسبه درست تأخیر
            duration: 0.5,
          }}
          className="mr-2 font-extrabold text-3xl"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default TextMotionCustom;
