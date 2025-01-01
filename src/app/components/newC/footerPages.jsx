"use client";

import { useState, useEffect } from "react";
import ModalWithTabs from "../tabModal";
import ModalForm from "../forms/dialogBox";

const FooterPages = ({ tab = 1, scrollDisabled = false }) => {
  const [isScrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setLastScrollY(window.scrollY);
    };

    // فقط وقتی اسکرول فعال است، لیسنر اضافه شود
    if (!scrollDisabled) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollDisabled]);

  return (
    <>
      {(scrollDisabled || !isScrolled) && (
        <div
          className="fixed bottom-0 left-0 w-full h-14
             bg-fuchsia-900 flex z-30"
        >
          {/* دکمه مودال */}
          <div
            onClick={() => setModalOpen(true)}
            className="cursor-pointer w-1/2 bg-red-400 text-center flex items-center justify-center"
          >
            تماس با ما
          </div>

          {/* محتوای فرم */}
          <div className="w-1/2 bg-purple-100 text-center flex items-center justify-center">
            <ModalForm tab={tab} />
          </div>
        </div>
      )}

      {/* نمایش مودال */}
      <ModalWithTabs isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default FooterPages;
