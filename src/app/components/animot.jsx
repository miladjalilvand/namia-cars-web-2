"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import TextMotionCustom from "./newC/textMotion";
import cars from "./carsdata";

const imageList = [
  "/assets/gallery/tiggo8pro/Tiggo8PROred.png", 
  "/assets/gallery/tiggo8pro/PCTiggo8PROblack.png",
  "/assets/gallery/tiggo8pro/PCTiggo8PROwhite.png",
];

export default function AnyMot() {
  const [rotation, setRotation] = useState(false); // ذخیره مقدار چرخش فعلی
  const [isMoving, setIsMoving] = useState(false);
  const [color, setColor] = useState(0); // شروع با رنگ قرمز

  const [selectedCar , setCarSelected]=useState(0);
  const [selectedColor ,setSelectedColor ]=useState(0);


  const handleChangeColor = (indexColor) => {

if(indexColor !== selectedColor){
  setIsMoving(true);
  setRotation(true);
  setTimeout(() => {
    setSelectedColor(indexColor);
    setRotation(false);
    setIsMoving(false);
  }, 2500 );
}
};

  const handleClick = (colorPicked) => {
if(colorPicked != color){
  setIsMoving(true);
  setRotation(true);
  setTimeout(() => {
    setColor(colorPicked); // انتخاب رنگ جدید
    setRotation(false);
    setIsMoving(false);
  }, 300);
}
  };

  const handleSetCar = (ind) => {
    setCarSelected(ind);
    setSelectedColor(0);

  }

  return (
    <div className=" hidden md:flex flex-col h-screen justify-center items-center ">
<div className="flex flex-wrap  gap-6 py-2 mb-12">
  {cars.map((val, ind) => (
    <div onClick={()=>handleSetCar(ind)} key={ind} className={`${selectedCar === ind && "border-5"}  border border-gray-400  rounded-md py-2 px-4 cursor-pointer hover:bg-gray-400 backdrop-opacity-40`}>
      {val.name}
    </div>
  ))}
</div>

         <TextMotionCustom text={cars[selectedCar].foreignName} />
  <div className="flex flex-row gap-4 m-4 bg-black bg-opacity-15 rounded-full ">

  {cars[selectedCar].images.map((val, ind) => (
    <div key={ind} className="flex flex-col ">
  <div
    
    onClick={() => handleChangeColor(ind)}
    className={`rounded-full cursor-pointer h-7 w-7 border-2 transition-transform 
      duration-300 ${selectedColor === ind ? "border-pink-700 scale-125" : ""} `}
      style={{
        backgroundColor: cars[selectedCar].images[ind].color, // استفاده از رنگ هگز
      }}
  >
   
  </div></div>
))}

        {/* <div
          onClick={() => handleClick(0)}
          className={`rounded-full cursor-pointer h-4 w-4 bg-redasli border-2  ${
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
        ></div> */}
      </div>

    <motion.div className="border border-red-700 relative w-[1200px] h-[481px] md:w-[900px] md:h-[420px] mx-auto  text-6xl overflow-hidden"
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
          
            src={cars[selectedCar].images[selectedColor].url} // انتخاب تصویر بر اساس رنگ
            alt={`car - ${cars[selectedCar].name}`}
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
             src={cars[selectedCar].wheel}
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
            src={cars[selectedCar].wheel}
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
