"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CarsAnim() {
  const [isRotating, setIsRotating] = useState(false); // کنترل انیمیشن

  return (
    <div className="h-screen w-screen relative overflow-hidden" onClick={() => setIsRotating(!isRotating)}>
      {/* تصویر ماشین */}
      <div className="absolute inset-0">
        <Image
          src="/assets/gallery/tiggo8pro/Tiggo8PROred.png"
          alt="Car Image"
          layout="fill"
          objectFit="contain" // این ویژگی اجازه می‌دهد تصویر بدون کشیدگی نمایش داده شود
          style={{ position: 'absolute', top: '0', left: '0' }} // موقعیت‌دهی به تصویر
        />
      </div>

      {/* چرخ اول */}
      <div className="absolute bottom-[8%] md:bottom-[10%] left-[3%] md:left-[-6%] w-full h-full">
        <motion.div
          className="absolute w-[15%] h-[15%] md:w-[30%] md:h-[30%] transform bottom-[30%] left-[8%] md:bottom-[5%] md:left-[10%] xl:h-[35%] xl:w-[35%] xl:bottom-[5%] xl:left-[12%] 2xl:left-[10%] 2xl:bottom-[6%] 2xl:h-[30%] 2xl:w-[30%]"
          initial={{ rotate: 0 }} // مقدار اولیه چرخش
          animate={{
            rotate: isRotating ? -360 : 0, // چرخش از 60 درجه
          }}
          transition={{
            repeat: isRotating ? Infinity : 0, // تکرار بی‌نهایت در صورت چرخش
            duration: 1, // مدت زمان چرخش
            ease: "linear", // حرکت یکنواخت
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
      <div className="absolute bottom-[8%] md:bottom-[10%] right-[8%] md:right-[-2%] w-full h-full">
        <motion.div
          className="absolute w-[15%] h-[15%] md:w-[30%] md:h-[30%] transform bottom-[30%] right-[8%] md:bottom-[5%] md:right-[10%] xl:h-[35%] xl:w-[35%] xl:bottom-[5%] xl:right-[12%] 2xl:right-[10%] 2xl:bottom-[6%] 2xl:h-[30%] 2xl:w-[30%]"
          initial={{ rotate: 0 }} // مقدار اولیه چرخش

          animate={{
            rotate: isRotating ? -360 : 0, // چرخش از 60 درجه
          }}
          transition={{
            repeat: isRotating ? Infinity : 0, // تکرار بی‌نهایت در صورت چرخش
            duration: 1, // مدت زمان چرخش
            ease: "linear", // حرکت یکنواخت
          }}
        >
          <Image
            src="/assets/gallery/tiggo8pro/PCTiggo8PROwheel.png"
            alt="Wheel 2"
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="xl:text-red-700 lg:text-blue-400  absolute bottom-2">aaaaaaaaaaaaaaaaaa</div>
      </div>
    </div>
  );
}
