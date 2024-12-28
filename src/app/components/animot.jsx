"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const imageList = [
  "/assets/gallery/tiggo8pro/Tiggo8PROred.png", 
  "/assets/gallery/tiggo8pro/PCTiggo8PROblack.png",
  "/assets/gallery/tiggo8pro/PCTiggo8PROwhite.png",
];

export default function AnyMot() {
  const [rotation, setRotation] = useState(false); // ذخیره مقدار چرخش فعلی
  const [isMoving, setIsMoving] = useState(false);
  const [color, setColor] = useState(0); // شروع با رنگ قرمز

  const handleClick = (colorPicked) => {
if(colorPicked != color){
  setIsMoving(true);
  setRotation(true);
  setTimeout(() => {
    setColor(colorPicked); // انتخاب رنگ جدید
    setRotation(false);
    setIsMoving(false);
  }, 2000);
}
  };

  return (
    <div className="hidden md:flex flex-col h-screen justify-center items-center ">
  <div className="flex flex-row gap-4 m-4">
        <div
          onClick={() => handleClick(0)}
          className={`rounded-full cursor-pointer h-4 w-4 bg-red-600 border-2 ${
            color === 0 ? "border-red-400 scale-125" : ""
          } transition-transform duration-300`}
        ></div>
        <div
          onClick={() => handleClick(1)}
          className={`rounded-full cursor-pointer h-4 w-4 bg-black border-2 ${
            color === 1 ? "border-gray-400 scale-125" : ""
          } transition-transform duration-300`}
        ></div>
        <div
          onClick={() => handleClick(2)}
          className={`rounded-full cursor-pointer h-4 w-4 bg-white border-2 ${
            color === 2 ? "border-gray-400 scale-125" : ""
          } transition-transform duration-300`}
        ></div>
      </div>

    <motion.div className="relative w-[1200px] h-[481px] md:w-[900px] md:h-[420px] mx-auto  text-6xl overflow-hidden"
    initial={{ x: 0 }}
    animate={{ x: isMoving ? -(window.innerWidth) : "0%" }}
    transition={{ ease: "easeInOut", duration: 2 }}
    >
      {/* تصویر ماشین و چرخ‌ها */}
      <motion.div
        className="absolute w-full h-full  flex items-center justify-center"
     
      >
        {/* تصویر اصلی ماشین */}
        <div className="relative w-full h-full">
          <Image
            src={imageList[color]} // انتخاب تصویر بر اساس رنگ
            alt={`car - ${color}`}
            fill
          />
        </div>

        {/* چرخ جلو */}
        <motion.div
          className="absolute w-[60px] h-[60px] md:w-[141px] md:h-[141px] top-[60%] left-[11%] flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{
            rotate: rotation ? -1440 : 0, // چرخش همزمان با حرکت
          }}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
        >
          <Image
            src={"/assets/gallery/tiggo8pro/PCTiggo8PROwheel.png"}
            alt="Front Wheel"
            fill
          />
        </motion.div>

        {/* چرخ عقب */}
        <motion.div
          className="absolute w-[60px] h-[60px] md:w-[141px] md:h-[141px] top-[60%] left-[69%] flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{
            rotate: rotation ? -1440 : 0, // چرخش همزمان با حرکت
          }}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
        >
          <Image
            src={"/assets/gallery/tiggo8pro/PCTiggo8PROwheel.png"}
            alt="Rear Wheel"
            fill
          />
        </motion.div>
      </motion.div>

      {/* دایره‌های رنگی برای تغییر رنگ ماشین */}
    
    </motion.div>
    </div>
  );
}
