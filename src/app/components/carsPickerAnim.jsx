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

  const styleWheelFRONT = () => {
    switch (selectedCar) {
      
      case 0 :    return "w-[14%] h-[14%]  top-[57%] left-[9%]";
      case 1 :  return "w-[17%] h-[17%] top-[55.5%] left-[7.1%]"; 
      case 2 : return "w-[14%] h-[14%]  top-[57%] left-[9%]";
      case 3 :   return "w-[14%] h-[14%]  top-[57%] left-[8.9%]";
      case 4 :   return "w-[15%] h-[15%]  top-[56%] left-[8%]";
      case 5 :   return "w-[15%] h-[15%]  top-[56%] left-[8%]";
      case 6 :   return "w-[15%] h-[15%]  top-[56%] left-[8%]";
      case 7 :  return "w-[15%] h-[15%]  top-[56%] left-[8%]";
      case 8 :   return "w-[17%] h-[17%] top-[55.5%] left-[7.1%]"; 
      case 9 : return "w-[14%] h-[14%]  top-[57%] left-[9%]";
      case 10 :  return "w-[14%] h-[14%]  top-[57%] left-[9%]";
      default:
       
        return "w-[14%] h-[14%]  top-[58%] left-[9.6%]";
    }
  };

  const styleWheelREAR = () => {
    switch (selectedCar) {
      
      case 0 :  return "w-[14%] h-[14%]   top-[57%] right-[8%]"; 
      case 1 :  return "w-[17%] h-[17%]  top-[55.5%] right-[7%]"; 
      case 2 :  return "w-[14%] h-[14%]   top-[57%] right-[8%]"; 
      case 3 : return "w-[14%] h-[14%]   top-[57%] right-[8.6%]"; 
      case 4 : return "w-[15%] h-[15%]   top-[56%] right-[6.9%]"; 
      case 5 : return "w-[15%] h-[15%]   top-[56%] right-[6.9%]"; 
      case 6 : return "w-[15%] h-[15%]   top-[56%] right-[6.9%]"; 
      case 7 :  return "w-[15%] h-[15%]   top-[56%] right-[6.9%]"; 
      case 8 :  return "w-[17%] h-[17%]  top-[55.5%] right-[7%]"; 
      case 9 :   return "w-[14%] h-[14%]   top-[57%] right-[8%]"; 
      case 10 : return "w-[14%] h-[14%]   top-[57%] right-[8%]"; 
      default:
       
        return "w-[14%] h-[14%] top-[61%] left-[69.1%]";
    }
  };

  const [rotation, setRotation] = useState(false); // ذخیره مقدار چرخش فعلی
  const [isMoving, setIsMoving] = useState(false);
  const [color, setColor] = useState(0); // شروع با رنگ قرمز

  const [selectedCar , setCarSelected]=useState(0);
  const [selectedColor ,setSelectedColor ]=useState(0);

  
  const [isOut,setIsout]=useState(false);
  const [isEnter,setIsInter]=useState(false);

  const [currentRotation , setCurrentRotation] = useState(0);

  const handleChange= (indexColor) => {
    if(indexColor !== selectedColor){ 
      setIsout(true);
      setRotation(true);
     

      setTimeout(()=>{
        setIsout(false);
        setSelectedColor(indexColor);
        setIsInter(true);



        setTimeout(() => {
          setIsInter(false);
          setRotation(false);
          setCurrentRotation(currentRotation-900);
        }, 100);
      },1500);
    }
  }

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
  
  onClick={() => handleChange(ind)}
  className={`rounded-full cursor-pointer h-7 w-7 border-2 transition-transform 
    duration-300 ${selectedColor === ind ? "border-grey-400 scale-125" : ""} `}
    style={{
      backgroundColor: cars[selectedCar].images[ind].hex, // استفاده از رنگ هگز
    }}
>
 
</div></div>
))}

    </div>


   <div className="h-[600px] w-screen relative">
    <motion.div className={` h-[600px] w-screen relative   ${isEnter && "hidden"} `}
     initial={{x:0 }}
     animate={{ x: isOut ? -(window.innerWidth) : isEnter ? window.innerWidth : "0%" }}
   transition={{ ease: "easeInOut", duration: isEnter ? 0 : 1.5   }}
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
          className=""
        />
    
      {/* چرخ اول */}
      <div className="absolute bottom-[6.2%] md:bottom-[10%] left-[3%] md:left-[-6%] w-full h-full">
        <motion.div
          className={`absolute 
            ${styleWheelFRONT()}
            md:w-[30%] md:h-[30%] transform md:bottom-[5%] md:left-[10%] xl:h-[35%] xl:w-[35%] xl:bottom-[5%] xl:left-[12%] 2xl:left-[10%] 2xl:bottom-[6%] 2xl:h-[30%] 2xl:w-[30%]
           
            `}
            initial={{ rotate: currentRotation, }}
            animate={{
              rotate: rotation ? (currentRotation-360) : currentRotation, // چرخش همزمان با حرکت
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.5,
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
      <div className="absolute right-[8%] bottom-[6.2%] md:bottom-[10%]  md:right-[-2%] w-full h-full">
        <motion.div
          className={`absolute  transform
          ${styleWheelREAR()}
          md:w-[30%] md:h-[30%] md:bottom-[5%] md:right-[10%] xl:h-[35%] xl:w-[35%] xl:bottom-[5%] xl:right-[12%] 2xl:right-[10%] 2xl:bottom-[6%] 2xl:h-[30%] 2xl:w-[30%]`}
          initial={{ rotate: currentRotation, }}
          animate={{
            rotate: rotation ? (currentRotation-360) : currentRotation, // چرخش همزمان با حرکت
          }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
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

    </div>
    <TextMotionCustom text={'mvm xr-550'} />
    <div className="flex flex-wrap items-center justify-center  gap-6 py-2 mb-12">
  {cars.map((val, ind) => (
    <div onClick={()=>handleSetCar(ind)} key={ind} className={`${selectedCar === ind && "bg-gray-400"}  border border-gray-400  rounded-md py-2 px-4 cursor-pointer hover:bg-gray-400 backdrop-opacity-40`}>
      {val.name}
    </div>
  ))}
</div>
    </div>
  );
}
