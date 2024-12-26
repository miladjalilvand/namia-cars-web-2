"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CarsAnim() {
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
    <div className=" h-screen w-screen relative overflow-hidden md:hidden" onClick={() => handleClick()}>
      {/* تصویر ماشین */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isMoving ? "-100%" : "0%" }}
        transition={{ ease: "easeInOut", duration: 3 }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/gallery/tiggo8pro/Tiggo8PROred.png"
          alt="Car Image"
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
            duration: 3,
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
            duration: 3,
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
      </motion.div>

    </div>
  );
}
