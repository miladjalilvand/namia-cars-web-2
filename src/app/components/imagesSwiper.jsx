"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import { motion } from "framer-motion";
import MotD from "./ItemHome";
import { useBusiness } from "../providers/businessContext";


export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

const [imagesBanner,setImageBanner]=useState([]);

const businessData = useBusiness();

useEffect(()=>{
  setImageBanner(businessData?.data?.banners);
},[]);


  const swiperRef = useRef(null);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentImage]);

  // Next image handler

  const nextImage = () => {    
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      if (currentImage === imagesBanner.length - 1) {
      setCurrentImage(0); // Reset to the first image
    } else {
      setCurrentImage(currentImage + 1); // Move to the next image
    }
    }
  };

  // Previous image handler
  const prevImage = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Handle circle click navigation
  const handleCircleClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setCurrentImage(index);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:mt-0  ">
      <div className="relative h-2/3 w-full md:w-1/2 md:h-1/2 cursor-pointer ">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={0}
          onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
          loop={true}
        >
       
          {imagesBanner.map((img, index) => (
         <SwiperSlide key={index}> <div className="  h-72 bg-black ">

            
              <Image
                src={img.image}
                alt={`تصویر ${index + 1}`}
                layout="fill"
                objectFit="cover"  // Use cover to make images fit
                objectPosition="center"  // Center the image
                priority
              />
            </div></SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-0 left-0 flex z-20">
          <button
            onClick={prevImage}
            className="bg-redasli text-txtl px-3 py-3 hover:bg-gray-800"
          ><IoIosArrowForward />
           
          </button>
          <button
            onClick={nextImage}
            className="bg-redasli text-txtl px-3 py-3 hover:bg-gray-800"
          >
             <IoIosArrowBack />
          </button>
        </div>
      </div>
      <div className="flex md:w-1/7 h-full items-center justify-center pt-1">
        <CursorImage
        ib={imagesBanner}
          currentIndex={currentImage}
          onCircleClick={handleCircleClick}
        />
      </div>
      <div
      
      className="hidden md:flex w-1/2 h-full items-center justify-center">
       <Title value={`تصویر ${currentImage + 1}`} />
      </div>
    </div>
  );
}
function Title({ value }) {
  return <MotD params={value} key={value} />;
}
function CursorImage({ currentIndex, onCircleClick , ib }) {
  return (
    <ul className="flex flex-row md:flex-col -space-x-px justify-center items-center p-6">
      {ib.map((_, ind) => (
        <li key={ind}>
          <div
            onClick={() => onCircleClick(ind)}
            className={`rounded-full cursor-pointer m-1 ${
              currentIndex === ind
                ? "w-3 h-3 bg-gray-600"
                : "w-2 h-2 bg-gray-300"
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
    