"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AnyMot() {
  const [isRotating, setIsRotating] = useState(false); // 

  return (
    <div
      onClick={() => setIsRotating(!isRotating)}
      className="relative w-2/3 h-[300px] md:w-[900px] md:h-[420px] mx-auto border text-6xl"
    >
      {/* تصویر اصلی ماشین */}
      <div className="absolute w-full h-full border">
        <Image
          src={'/assets/gallery/tiggo8pro/Tiggo8PROred.png'}
          alt="Car Image"
          fill
         
        />
      </div>

      {/* چرخ جلو */}
      <motion.div
        className="absolute w-[60px] h-[60px] md:w-[130px] md:h-[130px] top-[60%] left-[12%] flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{
          rotate: isRotating ? -360 : 0,
        }}
        transition={{
          ease: "linear",
          duration: 1,
          repeat: isRotating ? Infinity : 0,
        }}
      >
        <Image
          src={'/assets/gallery/tiggo8pro/PCTiggo8PROwheel.png'}
          alt="Front Wheel"
          fill
        />
      </motion.div>

      {/* چرخ عقب */}
      <motion.div
        className="absolute w-[60px] h-[60px] md:w-[130px] md:h-[130px] top-[60%] left-[70%] flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{
          rotate: isRotating ? -360 : 0,
        }}
        transition={{
          ease: "linear",
          duration: 1,
          repeat: isRotating ? Infinity : 0,
        }}
      >
        <Image
          src={'/assets/gallery/tiggo8pro/PCTiggo8PROwheel.png'}
          alt="Rear Wheel"
          fill
        />
      </motion.div>
    </div>
  );
}
