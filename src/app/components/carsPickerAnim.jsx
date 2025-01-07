"use client";
//MOBILE VERSION
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
export default function CarsAnim() {
  const [rotation, setRotation] = useState(false); // ذخیره مقدار چرخش فعلی
  const [isMoving, setIsMoving] = useState(false);
  const [color, setColor] = useState(0); // شروع با رنگ قرمز

  const [selectedCar , setCarSelected]=useState(0);
  const [selectedColor ,setSelectedColor ]=useState(0);


  const handleChangeColor = (indexColor) => {
    console.log({ selectedCar, selectedColor, indexColor });

if(indexColor !== selectedColor){
  setIsMoving(true);
  setRotation(true);
  setTimeout(() => {
    setSelectedColor(indexColor);
    setRotation(false);
    setIsMoving(false);
  }, 2500);
}
};



const handleSetCar = (ind) => {
  setCarSelected(ind);
  setSelectedColor(0);
  const section = document.getElementById("image-section");
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
};

  return (
    <div className="overflow-hidden md:hidden flex flex-col-reverse items-center justify-center">
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

    </div>


   
    <motion.div className=" h-[600px] w-screen relative  " 
    initial={{ x: 0 }}
    animate={{ x: isMoving ? -(window.innerWidth): "0%" }}
    transition={{ ease: "easeInOut", duration: 2 }}
    >
      
      {/* تصویر ماشین */}
      <div
       
        className="absolute inset-0"
      >
        <Image
        id="image-section"
        src={cars[selectedCar].images[selectedColor].url} // انتخاب تصویر بر اساس رنگ
            alt={`car - ${cars[selectedCar].name}`}
          layout="fill"
          objectFit="contain"
          style={{ position: "absolute", top: "0", left: "0" }}
          className="border"
        />
    
      {/* چرخ اول */}
      <div className="absolute bottom-[8%] md:bottom-[10%] left-[3%] md:left-[-6%] w-full h-full">
        <motion.div
          className="absolute w-[15%] h-[15%] md:w-[30%] md:h-[30%] transform bottom-[27%] left-[8%] md:bottom-[5%] md:left-[10%] xl:h-[35%] xl:w-[35%] xl:bottom-[5%] xl:left-[12%] 2xl:left-[10%] 2xl:bottom-[6%] 2xl:h-[30%] 2xl:w-[30%]"
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
            alt="Wheel 1"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* چرخ دوم */}
      <div className="absolute bottom-[8%] md:bottom-[10%] right-[8%] md:right-[-2%] w-full h-full">
        <motion.div
          className="absolute w-[15%] h-[15%] md:w-[30%] md:h-[30%] transform bottom-[27%] right-[8%] md:bottom-[5%] md:right-[10%] xl:h-[35%] xl:w-[35%] xl:bottom-[5%] xl:right-[12%] 2xl:right-[10%] 2xl:bottom-[6%] 2xl:h-[30%] 2xl:w-[30%]"
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
            alt="Wheel 2"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
      </div>

    </motion.div>

  
    <TextMotionCustom text={'mvm xr-550'} />
    <div className="flex flex-wrap  gap-6 py-2 mb-12">
  {cars.map((val, ind) => (
    <div onClick={()=>handleSetCar(ind)} key={ind} className={`${selectedCar === ind && "border-5"}  border border-gray-400  rounded-md py-2 px-4 cursor-pointer hover:bg-gray-400 backdrop-opacity-40`}>
      {val.name}
    </div>
  ))}
</div>
    </div>
  );
}
