"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AnyMot() {
  const [rotation, setRotation] = useState(false); // ذخیره مقدار چرخش فعلی
  const [isMoving, setIsMoving] = useState(false);

  const handleClick = () => {
    setIsMoving(true);
    // const additionalRotation = 1440; // مقدار چرخش برای هر کلیک
    // setRotation((prev) => prev + additionalRotation); // افزایش مقدار چرخش
    setRotation(true);
    setTimeout(() => {
      setRotation(false);
      setIsMoving(false);
    }, 3000); // بازگشت انیمیشن بعد از 3 ثانیه
  };

  return (
    <div
      onClick={handleClick}
      className="hidden md:flex relative w-[1200px] h-[481px] md:w-[900px] md:h-[420px] mx-auto border text-6xl overflow-hidden"
    > 
      {/* تصویر ماشین و چرخ‌ها */}
      <motion.div
        className="absolute w-full h-full border flex items-center justify-center"
       initial={{ x: 0 }}
        animate={{ x: isMoving ? "-100%" : "0%" }}
        transition={{ ease: "easeInOut", duration: 3 }}
      >
        {/* تصویر اصلی ماشین */}
        <div className="relative w-full h-full">
          <Image
            src={"/assets/gallery/tiggo8pro/Tiggo8PROred.png"}
            alt="Car Image"
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
            duration: 3,
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
            duration: 3,
          }}
        >
          <Image
            src={"/assets/gallery/tiggo8pro/PCTiggo8PROwheel.png"}
            alt="Rear Wheel"
            fill
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
