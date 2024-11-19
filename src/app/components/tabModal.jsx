// components/ModalWithTabs.js
"use client";
import { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { motion, AnimatePresence } from 'framer-motion';
import TabScreen from './tabScreenContact';
import { FaTwitter,FaInstagram , FaLinkedin, FaRegWindowClose } from 'react-icons/fa';
const myTabData = [
    {
      title: "Item 1",
      subtitle: "Subtitle for Item 1",
      number: 1,
    },
    {
      title: "Item 2",
      subtitle: "Subtitle for Item 2",
      number: 2,
    },
    {
      title: "Item 3",
      subtitle: "Subtitle for Item 3",
      number: 3,
    },
  ];
  
export default function ModalWithTabs({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null); // استفاده از useRef برای ارجاع به نمونه Swiper

  const tabs = ["واحد فروش", "واحد خدمات", "واحد قطعات"]; // لیست تب‌ها

  const handleTabClick = (index) => {
    setActiveTab(index);
    swiperRef.current.swiper.slideTo(index); // اسلاید به تب مورد نظر
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog  
        
        open={isOpen} onClose={onClose} className="fixed inset-0
         z-50 flex items-center justify-center p-4 ">
         <div className='flex flex-col y items-center '>

         <motion.div
            initial={{ y: "100%" }}   // انیمیشن ورود: از پایین وارد می‌شود
            animate={{ y: 0 }}        // انیمیشن ورود: به بالا حرکت می‌کند
            exit={{ y: "100%" }}      // انیمیشن خروج: از بالا به پایین می‌رود
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center "
          >
         <Dialog.Panel
    className="p-6 md:max-w-lg w-screen md:w-full h-screen md:h-4/5 
    rounded shadow-lg relative bg-background flex flex-col justify-between"
>
    <div>
        <div className="flex flex-row justify-between items-center">
            <button onClick={onClose} className="absolute top-2 right-2">
                <FaRegWindowClose />
            </button>
            <div className="flex flex-row space-x-2">
                <button className="absolute top-2 left-2">
                    <FaInstagram />
                </button>
                <button className="absolute top-2 left-6">
                    <FaTwitter />
                </button>
                <button className="absolute top-2 left-12">
                    <FaLinkedin />
                </button>
            </div>
        </div>

        <div className="flex justify-center space-x-4 mb-4">
            {tabs.map((tab, index) => (
                <button
                    className={`${"hover:bg-red-100"}`}
                    key={index}
                    onClick={() => handleTabClick(index)}
                    style={{
                        padding: "8px 16px",
                        borderBottom: activeTab === index ? "2px solid #3B82F6" : "none",
                    }}
                >
                    {tab}
                </button>
            ))}
        </div>

        <Swiper
            onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
            initialSlide={activeTab}
            onSwiper={(swiper) => swiper.slideTo(activeTab)}
            spaceBetween={20}
            slidesPerView={1}
            ref={swiperRef}
        >
            <SwiperSlide>
                <TabScreen title="My Tabs" list={myTabData} />
            </SwiperSlide>
            <SwiperSlide>
                <TabScreen title="My Tabs" list={myTabData} />
            </SwiperSlide>
            <SwiperSlide>
                <TabScreen title="My Tabs" list={myTabData} />
            </SwiperSlide>
        </Swiper>
    </div>

    <div className=" bottom-0 bg-slate-600 w-full text-center">
        Footer
    </div>
</Dialog.Panel>

         
            
          </motion.div>
         </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}