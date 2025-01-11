  "use client"
  import { useTheme} from "next-themes";

  import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TextMotionCustom from "../components/newC/textMotion";
import FooterPages from "../components/newC/footerPages";
import { useState , useEffect } from "react";
import Image from "next/image";
import items from "../components/data/baseData";
import ItemProducts from "../components/itemView";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
// { loading: () => <p>Loading...</p>,}
// );
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
      <div className={``}>
          {/* <div className="bg-blue-700 bottom-0 w-full fixed z-20 flex-row flex">
            <div className="w-1/2 bg-orange-700">a</divursor-pointer px-2 p>
            <div className="w-1/2">b</div>
          </div> */}
        <div className="pb-6 px-3 h-fit w-screen text-center flex flex-col md:flex-row justify-between items-center">
  <div className="w-screen md:w-1/2 flex justify-center items-center underline">
    <TextMotionCustom text={"محصولات مدیران خودرو چری و فونیکس"} />
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
  <TextMotionCustom text={" همه مدل / همه رنگ / همه سایز "}/>
  </div>
</div>

</div>

          <div

         
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-4 pt-12 
              pb-12 
             
            
               `}

              // style={{   backgroundColor: theme === 'light' ? "#eaeaea" : '#000000', 
              // }}
          >
            {items.map((val, ind) => (
              <motion.div key={ind}
              //  initial={{opacity:0.5 , y:"20%" }}
              //  whileInView={{opacity:1 , y:"0%" }}
          // animate={{opacity:1 , y:"0%"}}
          // transition={{duration:(ind+0.3)}}
          >
           <div className="flex flex-col bg-background h-96 rounded-md ">
      {/* بخش تصویر */}
      <div className="relative h-2/3 z-10 rounded-md">
      <div className="absolute z-20  left-2 top-2 flex-col ">
      <div>{val.title}</div>
       {val.status === "sold out" && ( <div>{val.status}</div>
)}
        
        </div>
        {true && ( <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>)}
        <Image
        
        className="cursor-pointe "
          src={val.icon}
          alt={`image ${val.icon}`}
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
      // style={{   backgroundColor: theme === 'light' ? "#ffffff" : '#363636', 
      // }}
      >
      <div className="cursor-pointer">  {val.subtitle}</div>
      
      <div  className="flex w-full flex-row justify-between items-center">
      <div>آخرین بروزرسانی</div>
      <div  className=" px-1 "
      
      >{val.date}</div>
     
      </div>
      <div  
      //   style={{   backgroundColor: theme === 'light' ? "#cdcdcd" : '#202020', 
      //  }}
        className="flex w-full   flex-row justify-between items-center">
      <div
   
      > تیپ {val.title}</div>
      <div className=" px-1">{val.price}</div>
     
      </div>
     
      <div className="flex w-full   flex-row justify-between items-center "
       
      >
<div
  className={`cursor-pointer px-2 py-1 transition-colors  hover:bg-red-200 hover:text-white`}
>
  بررسی کامل {val.title}
</div>

<div
  className={`cursor-pointer px-2 py-1 transition-colors  hover:bg-red-200 hover:text-white`}
>
  شرایط فروش {val.title}
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
                {/* <ItemDynamic details={val} theme={theme} /> */}
              </motion.div>
            ))}
          </div>
          <FooterPages tab={0} />

        </div>
       
      );
    }
    