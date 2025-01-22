"use client";
//DESKTOP VERSION
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

  const [startCar , setStartCar]=useState(false);

  const [isOut,setIsout]=useState(false);
  const [isEnter,setIsInter]=useState(false);

  const [currentRotation , setCurrentRotation] = useState(0);

  const [finish , setFinish ]=useState(false);


  const styleWheelFRONT = () => {
    switch (selectedCar) {
      case 0: return "w-[30px] h-[30px] top-[61%] left-[11.6%] md:w-[120px] md:h-[120px] md:top-[61%] md:left-[11.6%]";
      case 1: return "w-[30px] h-[30px] md:w-[132px] md:h-[132px] top-[60%] left-[11.0%]";
      case 2: return "w-[30px] h-[30px] md:w-[120px] md:h-[120px] top-[61%] left-[11.6%]";
      case 4: return "w-[30px] h-[30px] md:w-[133.2px] md:h-[133.2px] top-[58%] left-[10%]";
      case 5: return "w-[30px] h-[30px] md:w-[133.2px] md:h-[133.2px] top-[58%] left-[10.7%]";
      case 6: return "w-[30px] h-[30px] md:w-[133.2px] md:h-[133.2px] top-[57%] left-[10%]";
      case 7: return "w-[30px] h-[30px] md:w-[133.2px] md:h-[133.2px] top-[57%] left-[11%]";
      case 8: return "w-[30px] h-[30px] md:w-[133.4px] md:h-[133.4px] top-[60%] left-[10.6%]";
      case 9: return "w-[30px] h-[30px] md:w-[120px] md:h-[120px] top-[61%] left-[11.6%]";
      case 10: return "w-[30px] h-[30px] md:w-[120px] md:h-[120px] top-[61%] left-[11%]";
      default: return "w-[30px] h-[30px] md:w-[120.6px] md:h-[120.6px] top-[60%] left-[11.6%]";
    }
  };
  
  const styleWheelREAR = () => {
    switch (selectedCar) {
      case 0: return "w-[30px] h-[30px] md:w-[120px] md:h-[120px] top-[61%] left-[69.1%]";
      case 1: return "w-[30px] h-[30px] md:w-[132px] md:h-[132px] top-[60%] left-[69.1%]";
      case 2: return "w-[30px] h-[30px] md:w-[120px] md:h-[120px] top-[61%] left-[69.1%]";
      case 4: return "w-[30px] h-[30px] md:w-[133.2px] md:h-[133.2px] top-[58%] left-[69%]";
      case 5: return "w-[30px] h-[30px] md:w-[133.2px] md:h-[133.2px] top-[58%] left-[69.1%]";
      case 6: return "w-[30px] h-[30px] md:w-[133.2px] md:h-[133.2px] top-[57%] left-[68%]";
      case 7: return "w-[30px] h-[30px] md:w-[133.2px] md:h-[133.2px] top-[57%] left-[69%]";
      case 8: return "w-[30px] h-[30px] md:w-[133.4px] md:h-[133.4px] top-[60%] left-[68.9%]";
      case 9: return "w-[30px] h-[30px] md:w-[120px] md:h-[120px] top-[61%] left-[69%]";
      case 10: return "w-[30px] h-[30px] md:w-[120px] md:h-[120px] top-[61%] left-[70%]";
      default: return "w-[30px] h-[30px] md:w-[120.6px] md:h-[120.6px] top-[61%] left-[69.1%]";
    }
  };
  const mdstyleWheelFRONT = () => {
    switch (selectedCar) {
      
      case 0 :  return "xl:w-[200px] xl:h-[200px] xl:top-[62%] xl:left-[11%]"; 
      case 1 :  return "xl:w-[220px] xl:h-[220px] xl:top-[59%] xl:left-[10.5%]"; 
      case 2 : return "xl:w-[200px] xl:h-[200px] xl:top-[62%] xl:left-[11.6%]"; 
      case 4 :  return "xl:w-[222px] xl:h-[222px] xl:top-[58%] xl:left-[10%]"; 
      case 5 :  return "xl:w-[222px] xl:h-[222px] xl:top-[59%] xl:left-[10.6%]"; 
      case 6 :  return "xl:w-[222px] xl:h-[222px] xl:top-[57%] xl:left-[10%]"; 
      case 7 :  return "xl:w-[222px] xl:h-[222px] xl:top-[57%] xl:left-[11%]"; 
      case 8 :  return "xl:w-[234px] xl:h-[234px] xl:top-[60%] xl:left-[10.6%]"; 
      case 3 : return "xl:w-[200px] xl:h-[200px] xl:top-[61%] xl:left-[11.6%]"; 
      case 9 : return "xl:w-[200px] xl:h-[200px] xl:top-[61%] xl:left-[11.6%]"; 
      case 10 :  return "xl:w-[200px] xl:h-[200px] xl:top-[61%] xl:left-[11%]"; 
      default:
       
        return "xl:w-[201px] xl:h-[201px]  xl:top-[60%] xl:left-[11.6%]";
    }
  };

  const mdstyleWheelREAR = () => {
    switch (selectedCar) {
      
      case 0 :  return "xl:w-[200px] xl:h-[200px] xl:top-[62%] xl:left-[69.1%]"; 
      case 1 :  return "xl:w-[220px] xl:h-[220px] xl:top-[59%] xl:left-[68.3%]"; 
      case 2 :  return "xl:w-[200px] xl:h-[200px] xl:top-[62%] xl:left-[69.1%]"; 
      case 4 :  return "xl:w-[222px] xl:h-[222px] xl:top-[58%] xl:left-[69%]"; 
      case 5 :  return "xl:w-[222px] xl:h-[222px] xl:top-[59%] xl:left-[68.3%]"; 
      case 6 :  return "xl:w-[222px] xl:h-[222px] xl:top-[57%] xl:left-[68%]"; 
      case 7 :  return "xl:w-[222px] xl:h-[222px] xl:top-[57%] xl:left-[69%]"; 
      case 8 :  return "xl:w-[234px] xl:h-[234px] xl:top-[60%] xl:left-[68.9%]"; 
      case 3 :  return "xl:w-[200px] xl:h-[200px] xl:top-[61%] xl:left-[69%]"; 
      case 9 :  return "xl:w-[200px] xl:h-[200px] xl:top-[61%] xl:left-[69%]"; 
      case 10 :  return "xl:w-[200px] xl:h-[200px] xl:top-[61%] xl:left-[70%]"; 
      case 0 :  return "xl:w-[201px] xl:h-[201px]"; 
      default:
       
        return "xl:w-[201px] xl:h-[201px] xl:top-[61%] xl:left-[69.1%]";
    }
  };

  

  


  const handleChange= (indexColor) => {
    if(indexColor !== selectedColor){ 
      setIsout(true);
      setRotation(true);
      setStartCar(true);
      setTimeout(()=>{
        setStartCar(false);
      },300);
     

      setTimeout(()=>{
        setIsout(false);
        setSelectedColor(indexColor);
        setIsInter(true);



        setTimeout(() => {
          setIsInter(false);
          setRotation(false);
          setFinish(true);
         
          setTimeout(()=>{
            setFinish(false);
          },1500);
          setCurrentRotation(currentRotation-900);
        }, 100);
      },1000);
    }
  }

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

    const image = document.getElementById("img-section");
if(image){
    image.scrollIntoView({
      behavior: "smooth",
      block: "end",
      
    });
  }

  }

  return (
    <div className="  flex flex-col h-screen justify-center items-center   ">
<div className="flex flex-wrap sticky z-20 backdrop-blur-md  gap-6 py-2 mb-12">
  {cars.map((val, ind) => (
    <div onClick={()=>handleSetCar(ind)} key={ind} className={`${selectedCar === ind && "bg-gray-400"}  border border-gray-400  rounded-md py-2 px-4 cursor-pointer hover:bg-gray-400 backdrop-opacity-40`}>
      {val.name}
    </div>
  ))}
</div>

       <div key={selectedCar}>  <TextMotionCustom text={cars[selectedCar].foreignName} /></div>
  <div className="flex flex-row gap-4 m-4 bg- bg-gray-500 bg-opacity-30 rounded-full ">

  {cars[selectedCar].images.map((val, ind) => (
    <div key={ind} className="flex flex-col ">
  <div
    
    onClick={() => handleChange(ind)}
    className={`rounded-full cursor-pointer  h-3.5 w-3.5  md:h-7 md:w-7 border-2 transition-transform 
      duration-300 ${selectedColor === ind ? "border-gray-500 scale-125" : ""} `}
      style={{
        backgroundColor: cars[selectedCar].images[ind].hex, // استفاده از رنگ هگز
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
 
    
         {/* <motion.div 
          initial={{x:0 }}
          animate={{ x: isOut ? -(window.innerWidth) : isEnter ? window.innerWidth : "0%" }}
        transition={{ ease: "easeInOut", duration: isEnter ? 0 : 1.5   }}
      > asasas  </motion.div> */}





      {/* <motion.div
          initial={{x:0 }}
          animate={{ x: isOut ? -(window.innerWidth) : isEnter ? window.innerWidth : "0%" }}
        transition={{ ease: "easeInOut", duration: isEnter ? 0 : 1.5   }}
      className={` relative  text-center w-[1200px] h-[481px] md:w-[1900px] md:h-[420px] mx-auto  text-6xl overflow-hidden `}>
      {/* {currentRotation} */}
      {/* </motion.div> */}
       {/* xl:w-[1350px] xl:h-[630px]  */}
      <div className={`relative " md:w-[810px] md:h-[378px] w-[202.5px] h-[94.5px]`}>
    <motion.div className={` mx-auto w-[202.5px] h-[94.5px] md:w-[810px] md:h-[378px] text-6xl  overflow-hidden `}
    initial={{x:0 }}
      animate={{ x: isOut ? -(window.innerWidth) : isEnter ? window.innerWidth : "0%" }}
    transition={{ ease: "easeInOut", duration: isEnter ? 0 : 1.5   }}
    >
      {/* تصویر ماشین و چرخ‌ها */}
      <motion.div
      initial={{opacity:0.5}}
      animate={{opacity:1}}
      transition={{ease:"easeInOut" , duration:1}}
      key={selectedCar}


        className="absolute z-30   w-full h-full  flex items-center justify-center"
     
      >
        {/* تصویر اصلی ماشین */}
        <motion.div
          initial={{rotate:0}}
          animate={{rotate:startCar ? 1 : finish ? -0.5 : 0}}
          transition={{duration:finish ? 1 : 0.3, ease:"easeInOut",}}
          className="relative w-full h-full  "
          exit={{rotate:0}}
          style={{ originX: 0.5, originY: 0.5  }}

          >
        
              <Image
          id="img-section"
            src={cars[selectedCar].images[selectedColor].url} // انتخاب تصویر بر اساس رنگ
            alt={`car - ${cars[selectedCar].name}`}
            fill
          />
       
        
         </motion.div>

        {/* چرخ جلو */}
        <motion.div
        key={selectedCar*selectedColor}
          className={`absolute z-30  ${styleWheelFRONT()}  flex items-center justify-center ${isEnter && "hidden"}`}
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
            alt="Front Wheel"
            fill
          />
        </motion.div>

        {/* چرخ عقب */}
        <motion.div
          className={`absolute z-30    flex items-center justify-center ${styleWheelREAR()}`}
          initial={{ rotate: currentRotation, }}
          animate={{
            rotate: rotation ? (currentRotation-360) : currentRotation, // چرخش همزمان با حرکت
          }}
          transition={{
            ease: "easeInOut",
            duration:1.5,
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
    </div>
  );
}
