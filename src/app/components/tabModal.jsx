"use client";
import { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaRegWindowClose } from "react-icons/fa";
import { useBusiness } from "../providers/businessContext";
import BranchDetails from "./newC/tabAddresses";

export default function ModalWithTabs({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsdata, setTabData] = useState([]);
  const swiperRef = useRef(null);
  const businessData = useBusiness();



  const handleTabClick = (index) => {
    setActiveTab(index);
    swiperRef.current.swiper.slideTo(index);
  };

  useEffect(() => {
    if (businessData.data?.addresses) {
      setTabData(businessData.data.addresses);
    }
  }, [businessData]);

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
              rounded shadow-lg relative bg-background flex flex-col justify-between overflow-y-auto" // Allow scrolling in the modal panel
            >
              <div>
                <div className="flex flex-row justify-between items-center">
                  <button onClick={onClose} className="absolute top-2 right-2">
                    <FaRegWindowClose />
                  </button>
                  <div className="flex flex-row space-x-2">
                    <button className="absolute top-2 left-2">
                      <FaInstagram />
                      {/* {businessData?.data?.instagram} */}
                    </button>
                    <button className="absolute top-2 left-6">
                      <FaWhatsapp />
                      {/* {businessData?.data?.whatsapp} */}
                    </button>
                   
                  </div>
                </div>

                <div className="flex justify-center space-x-4 mb-4">
                  {tabsdata.length > 0 && tabsdata.map((tab, index) => (
                    <button
                      className=""
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
                  {tabsdata.length > 0 && tabsdata.map((val, ind) => (
                    <SwiperSlide key={ind}>
                      <BranchDetails data={val} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
