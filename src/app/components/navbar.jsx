"use client";
import { useEffect, useState } from "react";
import { useRouter,usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IoIosCall, IoMdContact, IoMdMoon, IoMdSearch, IoMdSunny } from "react-icons/io";
import ModalWithTabs from './tabModal';
import ButtonContact from "./buttonContact";

import { FaMoon,FaSun } from "react-icons/fa";
import Image from "next/image";

const links = [
  { name: "خانه", url: "/" },
  { name: "محصولات", url: "/products" },
  { name: "شرایط فروش", url: "/terms-of-sale" },
  { name: "قطعات", url: "/shop" },
  { name: "تماس با ما ", url: "/contact" },
  { name: "  گالری ", url: "/gallery" },
  { name: "  کاتالوگ ", url: "/catalogs" },
  { name: "  تور مجازی  ", url: "/pana" }
];

export default function NavbarCustom(){
const {theme,setTheme}=useTheme();

const [isModalOpen, setModalOpen] = useState(false);
const [isOpen , setOpen]=useState(false);


const [objTheme,setObjTheme]=useState("light");

const router = useRouter();

const pushin=(path)=>{
  router.push(path);
  setOpen(false);

}

const currentPath = usePathname();

const handleClick =()=>{
  setOpen(!isOpen);
}

const toggleThemeMenu =() =>{
  theme ==="light"?setTheme("dark"):setTheme("light");

  setOpen(false);
}

useEffect(() => {
  theme === "light" ? setObjTheme("dark") : setObjTheme("light");

},[theme]);

const changeTheme=()=>{
  theme === "light" ? setTheme("dark") : setTheme("light")

}
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "scroll";
  };
}, [isOpen]);
  return (
    <div className="fixed flex-row w-full z-40 h-20 bg-background  shadow-foreground-200 shadow-sm ">

             <div 
              className="flex flex-col  fixed space-y-px pt-4 pr-1 cursor-pointer
                self-center z-50 "
              onClick={handleClick}> 
                <motion.div
                className="w-5 h-1  self-start"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 4 : 0, x: isOpen ? -6 : 0 }}
                transition={{ duration:  0.5 ,ease:"backIn"}}
                style={{ originX: 0, originY: 0 ,backgroundColor:"var(--foreground)" }}
            ></motion.div>

            <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration:  0.5 ,ease:"backInOut"}}
                style={{ originX: 0.5, originY: 0 ,backgroundColor:"var(--foreground)" }}
                className="w-10 h-1 "
            ></motion.div>

            <motion.div
                animate={{ rotate: isOpen ? -45 : 0 }}
                transition={{ duration:  0.5 ,ease:"anticipate"}}
                style={{ originX: 0.5, originY: 0.5 ,backgroundColor:"var(--foreground)" }}
                className="w-5 h-1  self-end"
                
            ></motion.div></div>

            <motion.div 
             initial={{ x: !isOpen ? "100%" : "0%" }}
            
             animate={{ x: isOpen ? "0%" : "100%" }} 

             transition={{ duration: 0.5, ease: "circInOut" }}
        
             className="fixed z-40 flex flex-col justify-between
             w-full bg-redc opacity-90 min-h-screen md:w-1/3 overflow-y-auto max-h-screen">
                <div className="flex-col">
                  
                  <div  className="flex flex-row-2 justify-between md:hidden ">

                    <div></div>
                    <div className="cursor-pointer p-3" onClick={()=>toggleThemeMenu()}>{objTheme === "dark" ? (<FaMoon/>) : (<FaSun/>) }</div>

                  </div>
                  <div className="mt-12 ml-2 mr-2 
  flex items-center bg-black p-2
   bg-opacity-60 rounded-sm ">
  <IoMdSearch color="txtl" size={24} />
  <input
    type="text"
    placeholder="جستجو"
    className="bg-transparent rounded-sm text-blue-50 
     placeholder-blue-50 focus:outline-none ml-2 w-full"
  />


</div>

<div className="flex flex-col items-center text-txtl font-extrabold space-y-2 pt-2">
                {/* <div className="cursor-pointer" onClick={() => pushin('about')}>about</div> */}
               {isOpen && links.map((val , key)=>(
   <motion.div
   initial={{opacity:0.1}}
   animate={{opacity:1}}
   transition={{duration:1.5}}
   key={key} 
   className="cursor-pointer text-2xl" onClick={() => pushin(val.url)}>{val.name}
   </motion.div>
               ))}
              </div>
</div>


                


              <div className="flex flex-row ">
           <div className="m-4 text-txtl cursor-pointer" 
           onClick={() => pushin('/exchange')}>طرح تعویض</div>
            <div className="m-4 text-txtl cursor-pointer" 
            onClick={() => pushin('/test-drive')}>تست درایو</div>
            <div className="m-4 text-txtl cursor-pointer">وبلاگ</div>
           </div>
            </motion.div>
            {  (isOpen && <div onClick={() => handleClick()} className="fixed md:w-screen z-30 md:h-screen bg-black opacity-70"></div>)}
              <div className="flex flex-row justify-between  mr-12 h-full ">

                <div className="relative border-r-3 p-1 border  w-24 border-foreground-100">
                <Image 
                  alt="logo"
                   src={'/assets/logo.jpg'}
                  fill 
                  style={{objectFit:"cover"}}
                 
                  />
                </div>
                <div className="flex flex-row-reverse items-center ">

                <div className='h-full w-20 bg-redc cursor-pointer' >
      <button onClick={() => setModalOpen(true)} className="h-full w-full text-txtl flex  items-center justify-center">
       <IoIosCall size={"36px"}/>
      </button>

      <ModalWithTabs isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
 
                <div className="hidden md:flex w-12 cursor-pointer   items-center justify-center"
                onClick={()=>changeTheme()}
                >{ objTheme === "light" && (<div><IoMdMoon  size={"36px"}/></div>)  }
                { objTheme === "dark" && (<div><IoMdSunny  size={"36px"}/></div>)  }</div>
                <div className="md:hidden px-3">  <IoMdContact  size={"36px"}/></div>
                <div className="hidden items-center justify-center md:flex flex-row-reverse gap-1 px-1 text-xl cursor-pointer mx-3"> 
                  <div>ورود</div>
                  <IoMdContact  size={"36px"}/>
                   </div>
                <div onClick={()=>pushin('/exchange')} className="rounded-sm text-txtl bg-redc cursor-pointer text-xl px-3 py-1">طرح تعویض</div>
                </div>

              </div>
     
      
    </div>
  );
}