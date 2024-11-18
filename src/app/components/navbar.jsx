"use client";
import { useState } from "react";
import { useRouter,usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NavbarCustom(){
const {theme,setTheme}=useTheme();

const [isOpen , setOpen]=useState(false);

const router = useRouter();

const currentPath = usePathname();

const handleClick =()=>{
  setOpen(!isOpen);
}

const changeTheme=()=>{
  theme === "light" ? setTheme("dark") : setTheme("light")
}

  return (
    <div className="fixed flex-row w-full z-40 h-12 bg-background  shadow-foreground-200 shadow-sm ">

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
        
             className="fixed z-40 flex flex-col w-full bg-redc opacity-90 min-h-screen md:w-1/3">

              some links
            </motion.div>
              
              <div className="flex flex-row justify-between  mr-12 h-full ">

                <div className="border-r-3 border-foreground-100">a</div>
                <div className="flex flex-row-reverse items-center ">

                  <div className=" h-full w-12 bg-redc cursor-pointer ">b</div>
                <div className="hidden md:flex w-12 cursor-pointer"
                onClick={()=>changeTheme()}
                >c</div>
                <div className="md:hidden px-3">d</div>
                <div className="hidden md:flex flex-row-2 px-1 cursor-pointer mx-3"> d + a </div>
                <div className="rounded-md bg-redc px-2 py-1 cursor-pointer">طرح تعویض</div>
                </div>

              </div>
     
      
    </div>
  );
}