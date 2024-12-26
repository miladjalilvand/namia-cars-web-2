"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
const imageList = [
  "/assets/gallery/tiggo8pro/Tiggo8PROred.png", 
  "/assets/gallery/tiggo8pro/PCTiggo8PROblack.png",
  "/assets/gallery/tiggo8pro/PCTiggo8PROwhite.png",
];
export default function CarsAnim() {
  const [rotation, setRotation] = useState(false); // ذخیره مقدار چرخش فعلی
  const [isMoving, setIsMoving] = useState(false);
  const [color, setColor] = useState(0); // شروع با رنگ قرمز

  const handleClick = (colorPicked) => {
    if(color != colorPicked){
      setIsMoving(true);
    setRotation(true);
    setTimeout(() => {
      setColor(colorPicked); // انتخاب رنگ جدید
      setRotation(false);
      setIsMoving(false);
    }, 2000); // بازگشت انیمیشن بعد از 3 ثانیه
    }
  };

  return (
    <motion.div className=" h-[600px] w-screen relative overflow-hidden md:hidden" 
    initial={{ x: 0 }}
    animate={{ x: isMoving ? -(window.innerWidth): "0%" }}
    transition={{ ease: "easeInOut", duration: 2 }}
    >

      {/* تصویر ماشین */}
      <div
       
        className="absolute inset-0"
      >
        <Image
        src={imageList[color]} // انتخاب تصویر بر اساس رنگ
        alt={`car - ${color}`}
          layout="fill"
          objectFit="contain"
          style={{ position: "absolute", top: "0", left: "0" }}
        />
    
      {/* چرخ اول */}
      <div className="absolute bottom-[7%] md:bottom-[10%] left-[3%] md:left-[-6%] w-full h-full">
        <motion.div
          className="absolute w-[15%] h-[15%] md:w-[30%] md:h-[30%] transform bottom-[30%] left-[8%] md:bottom-[5%] md:left-[10%] xl:h-[35%] xl:w-[35%] xl:bottom-[5%] xl:left-[12%] 2xl:left-[10%] 2xl:bottom-[6%] 2xl:h-[30%] 2xl:w-[30%]"
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
            src="/assets/gallery/tiggo8pro/PCTiggo8PROwheel.png"
            alt="Wheel 1"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* چرخ دوم */}
      <div className="absolute bottom-[7%] md:bottom-[10%] right-[8%] md:right-[-2%] w-full h-full">
        <motion.div
          className="absolute w-[15%] h-[15%] md:w-[30%] md:h-[30%] transform bottom-[30%] right-[8%] md:bottom-[5%] md:right-[10%] xl:h-[35%] xl:w-[35%] xl:bottom-[5%] xl:right-[12%] 2xl:right-[10%] 2xl:bottom-[6%] 2xl:h-[30%] 2xl:w-[30%]"
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
            src="/assets/gallery/tiggo8pro/PCTiggo8PROwheel.png"
            alt="Wheel 2"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
      </div>
      <div className="flex flex-row gap-2 absolute left-3 top-3">
        <div onClick={() => handleClick(0)} className="rounded-full cursor-pointer h-4 w-4 bg-red-600"></div>
        <div onClick={() => handleClick(1)} className="rounded-full cursor-pointer h-4 w-4 bg-black"></div>
        <div onClick={() => handleClick(2)} className="rounded-full cursor-pointer h-4 w-4 bg-white"></div>
      </div>
    </motion.div>
  );
}
