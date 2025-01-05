"use client";
import { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion, AnimatePresence } from "framer-motion";
import TabScreen from "./tabScreenContact";
import { FaTwitter, FaInstagram, FaLinkedin, FaRegWindowClose } from "react-icons/fa";
import { useBusiness } from "../providers/businessContext";
import BranchDetails from "./newC/tabAddresses";

const myTabData = [
  { title: "Item 1", subtitle: "Subtitle for Item 1", number: 1 },
  { title: "Item 2", subtitle: "Subtitle for Item 2", number: 2 },
  { title: "Item 3", subtitle: "Subtitle for Item 3", number: 3 },
];

export default function ModalWithTabs({ isOpen, onClose }) {

  const [activeTab, setActiveTab] = useState(0);
  const [tabsdata , setTabData]=useState();
  const swiperRef = useRef(null);

  const businessData = useBusiness();

  const tabs = ["واحد فروش", "واحد خدمات", "واحد قطعات"];

  const handleTabClick = (index) => {
    setActiveTab(index);
    swiperRef.current.swiper.slideTo(index);
  };

  useEffect(()=>{
    console.log("hello from here");
    console.log(businessData.data.addresses);
    setTabData(businessData.data.addresses);


  },[]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay for background shadow */}
          <motion.div
          onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-80"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
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
                  {tabsdata.map((tab, index) => (
                    <button
                      className="hover:bg-red-100"
                      key={index}
                      onClick={() => handleTabClick(index)}
                      style={{
                        padding: "8px 16px",
                        borderBottom: activeTab === index ? "2px solid #3B82F6" : "none",
                      }}
                    >
                      {tab.title}
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
                 {tabsdata.map((val, ind) => (
  <SwiperSlide key={ind}>
    <BranchDetails data={val} />
  </SwiperSlide>
))}

                </Swiper>
              </div>

              {/* <div className="bottom-0 bg-slate-600 w-full text-center">
                Footer
              </div> */}
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
