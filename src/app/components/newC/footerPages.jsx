"use client"

import { useState, useEffect } from "react"


const FooterPages = () => {

    const [isScrolled , setScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
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
            <div className="fixed bottom-0 left-0 w-full h-6 bg-fuchsia-900 flex">
        
    
              <div className="w-1/2 bg-red-400 text-center flex items-center justify-center">
                a
              </div>
              <div className="w-1/2 bg-purple-100 text-center flex items-center justify-center">
                a
              </div>
            </div>
          )
    );
}

export default FooterPages;