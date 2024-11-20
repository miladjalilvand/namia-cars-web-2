import Image from "next/image";
import Link from "next/link";

export default function ItemProducts({ details , theme}) {
  return (
    <div className="flex flex-col bg-background h-96 rounded-sm ">
      {/* بخش تصویر */}
      <div className="relative h-1/2 z-10">
      <div className="absolute z-20  left-2 top-2 flex-col ">
      <div>{details.title}</div>
       {details.status === "sold out" && ( <div>{details.status}</div>
)}
        
        </div>
        <Image
        
        className="cursor-pointer"
          src={details.img}
          alt={`image ${details.img}`}
          fill // استفاده از حالت fill برای تطابق کامل با والد
          style={{ objectFit: "cover" }} // استفاده از objectFit
          
      
        />
      </div>
      
      {/* بخش متن */}
      <div className="h-1/2 flex flex-col space-y-2 items-start justify-center text-foreground text-center
      p-3">
      <div className="cursor-pointer">  {details.subtitle}</div>
      <div className="flex w-full flex-row justify-between items-center">
      <div>آخرین بروزرسانی</div>
      <div className="bg-gray-300 px-1 ">{details.date}</div>
     
      </div>
      <div className="flex w-full  bg-gray-300 flex-row justify-between items-center">
      <div> تیپ {details.title}</div>
      <div className=" px-1">{details.price}</div>
     
      </div>
     
      <div className="flex w-full   flex-row justify-between items-center text-red-700">
      <div className="bg-red-100 cursor-pointer  hover:bg-red-200"> بررسی کامل {details.title}</div>
      <div className="cursor-pointer px-1 bg-red-100 hover:bg-red-200">شرایط فروش {details.title}</div>
     
      </div>
      <div className="flex w-full flex-row justify-between items-center cursor-pointer pt-4">
      <div>نمودار قیمت </div>
      <div className=" px-1">^</div>
     
      </div>
      <Link href={'/products/3'}> link</Link>

      </div>
    </div>
  );
}
