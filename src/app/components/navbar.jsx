"use client";
import { useState } from "react";
import { useRouter,usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IoMdSearch } from "react-icons/io";
import ModalWithTabs from './tabModal';
import ButtonContact from "./buttonContact";

const links = [
  { name: "خانه", url: "/" },
  { name: "محصولات", url: "/products" },
  { name: "شرایط فروش", url: "/terms-of-sale" },
  { name: "قطعات", url: "/shop" },
  { name: "تماس با ما ", url: "contact" }
];

export default function NavbarCustom(){
const {theme,setTheme}=useTheme();
const [isModalOpen, setModalOpen] = useState(false);
const [isOpen , setOpen]=useState(false);

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

const changeTheme=()=>{
  theme === "light" ? setTheme("dark") : setTheme("light")
}

  return (
    <div className="fixed flex-row w-full z-40 h-9 bg-background  shadow-foreground-200 shadow-sm ">

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
              w-full bg-redc opacity-90 min-h-screen md:w-1/3">
                <div className="flex-col">
                  
                  <div  className="flex flex-row-2 justify-between md:hidden ">

                    <div></div>
                    <div className="cursor-pointer" onClick={()=>toggleThemeMenu()}>theme</div>

                  </div>
                  <div className="mt-12 ml-2 mr-2 
  flex items-center bg-black p-2
   bg-opacity-60 rounded-sm ">
  <IoMdSearch color="white" size={24} />
  <input
    type="text"
    placeholder="جستجو"
    className="bg-transparent rounded-sm text-blue-50 
     placeholder-blue-50 focus:outline-none ml-2 w-full"
  />


</div>

<div className="flex flex-col items-center text-white font-extrabold space-y-2 pt-2">
                {/* <div className="cursor-pointer" onClick={() => pushin('about')}>about</div> */}
               {isOpen && links.map((val , key)=>(
   <motion.div
   initial={{opacity:0.1}}
   animate={{opacity:1}}
   transition={{duration:1.5}}
   key={key} 
   className="cursor-pointer" onClick={() => pushin(val.url)}>{val.name}
   </motion.div>
               ))}
              </div>
</div>


                


              <div className="flex flex-row ">
           <div className="m-4 text-white cursor-pointer" 
           onClick={() => pushin('/exchange')}>طرح تعویض</div>
            <div className="m-4 text-white cursor-pointer" 
            onClick={() => pushin('/test-drive')}>تست درایو</div>
            <div className="m-4 text-white cursor-pointer">وبلاگ</div>
           </div>
            </motion.div>
            {  (isOpen && <div onClick={() => handleClick()} className="fixed md:w-screen z-30 md:h-screen bg-black opacity-70"></div>)}
              <div className="flex flex-row justify-between  mr-12 h-full ">

                <div className="border-r-3 border-foreground-100">a</div>
                <div className="flex flex-row-reverse items-center ">

                <div className='h-full w-9 bg-redc cursor-pointer' >
      <button onClick={() => setModalOpen(true)} className="h-full w-full">
       a
      </button>

      <ModalWithTabs isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
 
                <div className="hidden md:flex w-12 cursor-pointer"
                onClick={()=>changeTheme()}
                >c</div>
                <div className="md:hidden px-3">d</div>
                <div className="hidden md:flex flex-row-2 px-1 cursor-pointer mx-3"> d + a </div>
                <div className="rounded-sm bg-redc 1 cursor-pointer text-xxs px-3 py-1">طرح تعویض</div>
                </div>

              </div>
     
      
    </div>
  );
}