"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import { motion } from "framer-motion";
import MotD from "./ItemHome";
import { useBusiness } from "../providers/businessContext";
import { Skeleton } from "@nextui-org/react";

export default function ImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const [imagesBanner, setImageBanner] = useState([]);

  const [addresses, setAddresses] = useState([]);

  const businessData = useBusiness();

  useEffect(() => {
    setImageBanner(businessData?.data?.banners);
    setAddresses(businessData?.data?.addresses);
  }, [businessData?.data?.banners, businessData?.data?.addresses]);

  useEffect(() => {
    setIsLoading(false);
  }, [imagesBanner, addresses]);

  const swiperRef = useRef(null);

  // Auto slide every 5 seconds
  const nextImage = useCallback(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      if (currentImage === imagesBanner.length - 1) {
        setCurrentImage(0); // Reset to the first image
      } else {
        setCurrentImage(currentImage + 1); // Move to the next image
      }
    }
  }, [currentImage, imagesBanner.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [nextImage, currentImage]);

  // Previous image handler
  const prevImage = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
      if (currentImage === 0) {
        setCurrentImage(imagesBanner.length - 1); // Reset to the first image
      } else {
        setCurrentImage(currentImage - 1);
      }
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
    <Skeleton isLoaded={!isLoading}>
      <div className="flex flex-col md:flex-row justify-center  items-center md:mb-3">
        <div className="relative h-2/3 w-full md:w-1/2 md:h-1/2 cursor-pointer">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={0}
            onSlideChange={(swiper) => setCurrentImage(swiper.activeIndex)}
            loop={true}
          >
            {imagesBanner.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="h-[420px] md:h-[522px] bg-black">
                  <Image
                    src={img.image}
                    alt={`تصویر ${index + 1}`}
                    layout="fill"
                    objectFit="cover" // Use cover to make images fit
                    objectPosition="center" // Center the image
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute bottom-0 left-0 flex z-20">
            <button
              onClick={prevImage}
              className="bg-redasli text-txtl px-3 py-3 hover:bg-gray-800"
            >
              <IoIosArrowForward />
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
        <div className="hidden md:flex w-1/2 h-full items-center justify-center">
          <Title
            title={addresses[currentImage < addresses.length ? currentImage : 0]?.title}
            value={addresses[currentImage < addresses.length ? currentImage : 0]?.address}
          />
        </div>
      </div>
    </Skeleton>
  );
}

function Title({ value, title }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-xl">{title}</div>
      <MotD params={value} key={value} />
    </div>
  );
}

function CursorImage({ currentIndex, onCircleClick, ib }) {
  return (
    <ul className="flex flex-row md:flex-col -space-x-px justify-center items-center p-6">
      {ib.map((_, ind) => (
        <li key={ind}>
          <div
            onClick={() => onCircleClick(ind)}
            className={`rounded-full cursor-pointer m-1 ${
              currentIndex === ind ? "w-3 h-3 bg-gray-600" : "w-2 h-2 bg-gray-300"
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
