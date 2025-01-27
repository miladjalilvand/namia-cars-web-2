"use client"
import { useTheme } from "next-themes";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TextMotionCustom from "../components/newC/textMotion";
import { useEffect, useState } from "react";
import Image from "next/image";
const ItemDynamic = dynamic(()=>import('../components/itemView'),
{ loading: () => <p>Loading...</p>,}
);
// const DynamicHeader = dynamic(() => import('../components/header'), {
//   loading: () => <p>Loading...</p>,
// }
const data = [
    {
      img: "/assets/1.jpg",
      title: "Product 1",
      subtitle: "Subtitle for Product 1",
      date: "2024-11-18",
      price: 100,
      status: "available",
    },
    {
      img: "/assets/2.jpg",
      title: "Product 2",
      subtitle: "Subtitle for Product 2",
      date: "2024-11-17",
      price: 200,
      status: "sold out",
    },
    {
      img: "/assets/3.jpg",
      title: "Product 3",
      subtitle: "Subtitle for Product 3",
      date: "2024-11-16",
      price: 150,
      status: "available",
    },
    {
      img: "/assets/4.jpg",
      title: "Product 4",
      subtitle: "Subtitle for Product 4",
      date: "2024-11-15",
      price: 300,
      status: "available",
    },
    {
      img: "/assets/4.jpg",
      title: "Product 5",
      subtitle: "Subtitle for Product 5",
      date: "2024-11-14",
      price: 120,
      status: "sold out",
    },
    {
      img: "/assets/4.jpg",
      title: "Product 6",
      subtitle: "Subtitle for Product 6",
      date: "2024-11-13",
      price: 180,
      status: "available",
    },
    {
      img: "/assets/4.jpg",
      title: "Product 7",
      subtitle: "Subtitle for Product 7",
      date: "2024-11-12",
      price: 250,
      status: "available",
    },
    {
      img: "/assets/3.jpg",
      title: "Product 8",
      subtitle: "Subtitle for Product 8",
      date: "2024-11-11",
      price: 220,
      status: "sold out",
    },
    {
      img: "/assets/2.jpg",
      title: "Product 9",
      subtitle: "Subtitle for Product 9",
      date: "2024-11-10",
      price: 90,
      status: "available",
    },
    {
      img: "/assets/1.jpg",
      title: "Product 10",
      subtitle: "Subtitle for Product 10",
      date: "2024-11-09",
      price: 140,
      status: "available",
    },
  ];
  
  
  export default function ProductsPage() {
    const { theme } = useTheme();
    const [cTheme , setCTheme]=useState(theme || "light");
    useEffect(()=>{
      setCTheme(theme);
    },[theme]);
    return (
      <div  className={`pt-12 ${
        typeof window === "undefined" ? "bg-background" : theme === "dark" ? "bg-black" : "bg-background"
      }`}>

        {/* <div className="bg-blue-700 bottom-0 w-full fixed z-20 flex-row flex">
          <div className="w-1/2 bg-orange-700">a</div>
          <div className="w-1/2">b</div>
        </div> */}
      <div className="pb-6 px-3 h-fit w-screen text-center flex flex-col md:flex-row justify-between items-center">
<div className="w-screen md:w-1/2 flex justify-center items-center underline">
  <TextMotionCustom text={"شرایط فروش مدیران خودرو نقد اقساط تیر 1403"} />
</div>
  <div className="relative w-screen md:w-1/2 h-60 flex justify-center items-center overflow-hidden">
  <Image
    fill
    alt="imagebanner"
    src={'/assets/bg-banners/1.jpg'}
    style={{ objectFit: "cover" }}
    className="z-0"
  />
  <div className="absolute z-10 text-white text-center text-3xl md:text-5xl  px-4 py-2 rounded-lg"> 
  <TextMotionCustom text={" ماشین بخر به شرظ اقساط "}/> </div>
</div>
</div>

        <div

       
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-4 pt-12 
            pb-12 
           
          
             `}


        >
          {data.map((val, ind) => (
            <motion.div key={ind}
    
            //  initial={{opacity:0.5 , y:"20%" }}
            //  whileInView={{opacity:1 , y:"0%" }}
        // animate={{opacity:1 , y:"0%"}}
        // transition={{duration:(ind+0.3)}}
        >
              <ItemDynamic details={val} theme={theme} />
            </motion.div>
          ))}
        </div>
      </div>
     
    );
  }
  