"use client"

import { useState, useEffect } from "react"
import ModalWithTabs from "../tabModal";
import ModalFooterCustom from "./modalFooter";

const FooterPages = () => {

    const [isScrolled , setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
    return (
        !isScrolled && (
            <div className="fixed bottom-0 left-0 w-full h-9 bg-fuchsia-900 flex">
        
    
              <div onClick={()=>setModalOpen(true)} 
              className=" cursor-pointer w-1/2 bg-red-400 text-center flex items-center justify-center">
              <ModalWithTabs isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

              </div>
              <div className="w-1/2 bg-purple-100 text-center flex items-center justify-center">
     
               
              </div>
            </div>
          )
    );
}

export default FooterPages;