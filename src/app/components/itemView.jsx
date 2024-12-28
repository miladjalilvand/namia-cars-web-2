"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ItemProducts({ details , theme}) {

  const [loadImg,setLoadImg]=useState(false);
  
  return (
    <div className="flex flex-col bg-background h-96 rounded-md ">
      {/* بخش تصویر */}
      <div className="relative h-1/2 z-10 rounded-md">
      <div className="absolute z-20  left-2 top-2 flex-col ">
      <div>{details.title}</div>
       {details.status === "sold out" && ( <div>{details.status}</div>
)}
        
        </div>
        {loadImg && ( <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>)}
        <Image
        
        className="cursor-pointe rounded-t-md"
          src={details.img}
          alt={`image ${details.img}`}
          fill // استفاده از حالت fill برای تطابق کامل با والد
          style={{ objectFit: "cover" }} // استفاده از objectFit
        // loading="lazy"
        // placeholder="empty"
        // onLoad={(e)=>console.log("e:"+e)}
        // onLoadingComplete={()=>setLoadImg(false)}
          
      
        />
      </div>
      
      {/* بخش متن */}
      <div className="h-fit flex flex-col space-y-2 items-start justify-center text-foreground text-center
      p-3"
      style={{   backgroundColor: theme === 'light' ? "#ffffff" : '#363636', 
      }}
      >
      <div className="cursor-pointer">  {details.subtitle}</div>
      <div  className="flex w-full flex-row justify-between items-center">
      <div>آخرین بروزرسانی</div>
      <div style={{   backgroundColor: theme === 'light' ? "#cdcdcd" : '#202020', 
       }} className=" px-1 "
      
      >{details.date}</div>
     
      </div>
      <div    style={{   backgroundColor: theme === 'light' ? "#cdcdcd" : '#202020', 
       }} className="flex w-full   flex-row justify-between items-center">
      <div
   
      > تیپ {details.title}</div>
      <div className=" px-1">{details.price}</div>
     
      </div>
     
      <div className="flex w-full   flex-row justify-between items-center "
       
      >
<div
  className={`cursor-pointer px-2 py-1 transition-colors ${
    theme === 'light' ? 'bg-[#f5d7d7] text-[#dc2626]' : 'bg-[#dc2626] text-[#f5d7d7]'
  } hover:bg-red-200 hover:text-white`}
>
  بررسی کامل {details.title}
</div>

<div
  className={`cursor-pointer px-2 py-1 transition-colors ${
    theme === 'light' ? 'bg-[#f5d7d7] text-[#dc2626]' : 'bg-[#dc2626] text-[#f5d7d7]'
  } hover:bg-red-200 hover:text-white`}
>
  شرایط فروش {details.title}
</div>

     
      </div>
      <div className="flex w-full flex-row justify-between items-center cursor-pointer pt-4">
      <div>نمودار قیمت </div>
      <div className=" px-1">  <Link href={'/products/3'}> 
       <IoIosArrowDown/></Link>
     </div>
     
      </div>
    
      </div>
    </div>
  );
}
