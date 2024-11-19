"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  { image: '/assets/svg/agency.svg', title: 'محصولات چری', subtitle: 'محصولات مدیران خودرو' },
  { image: '/assets/svg/parts.svg', title: 'شرایط فروش چری', subtitle: 'شرایط فروش مدیران خودرو' },
  { image: '/assets/svg/price-list.svg', title: 'قطعات چری', subtitle: 'قطعات مدیران خودرو' },
  { image: '/assets/svg/services.svg', title: 'نمایندگی چری', subtitle: 'نمایندگی مدیران خودرو' },
  { image: '/assets/svg/agency.svg', title: 'محصولات چری', subtitle: 'محصولات مدیران خودرو' },
  { image: '/assets/svg/parts.svg', title: 'شرایط فروش چری', subtitle: 'شرایط فروش مدیران خودرو' },
  { image: '/assets/svg/price-list.svg', title: 'قطعات چری', subtitle: 'قطعات مدیران خودرو' },
  { image: '/assets/svg/services.svg', title: 'نمایندگی چری', subtitle: 'نمایندگی مدیران خودرو' },
];

const ItemSlidesImage = () => {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(Array(items.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setVisibleItems((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = entry.isIntersecting;
              return newVisibility;
            });
          }
        });
      },
      { threshold: 0.69 }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background">
      {items.map((val, key) => {
        const isInView = visibleItems[key];

        return (
          <div
            key={key}
            ref={(el) => (itemRefs.current[key] = el)}
            className={`flex ${key % 2 === 0 ? "flex-col-reverse pt-5 bg-red-700 text-white" : "flex-col bg-background text-gray-900"} 
                        md:flex-row items-center justify-around h-screen `}
            style={{ direction: key % 2 === 0 ? "ltr" : "rtl" }}
          >
            <motion.div
              initial={{
                x: key % 2 === 0 ? "-100%" : "100%",
                y: "-50%",
              }}
              animate={{
                x: isInView ? "0%" : key % 2 === 0 ? "-100%" : "100%",
                y: isInView ? "0%" : "-50%",
              }}
              transition={{ duration: 0.3, ease: "circInOut" }}
            >
              <PicCon src={val.image} />
            </motion.div>

            <div dir="rtl" className="flex-col">
              <AnimatedText
                ind={key}
                button={false}
                text={val.subtitle}
                isInView={isInView}
              />
              <AnimatedText
                ind={key}
                button={true}
                text={"hi i am"}
                isInView={isInView}
                textButton={val.title}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemSlidesImage;

function PicCon({ src }) {
  return (
    <Image src={src} alt="Item Image" width={400} height={400} className="rounded-lg m-4" />
  );
}

const AnimatedText = ({ text, isInView, button, ind, textButton }) => {
  const words = text.split(" ");

  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-wrap">
        {!button &&
          words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: "+10px" }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : "+10px",
              }}
              transition={{
                delay: index * 0.3,
                duration: 0.5,
              }}
              className={`mr-2 font-extrabold text-3xl ${
                ind % 2 === 0 ? "text-white" : "text-red-700"
              }`}
            >
              {word}
            </motion.span>
          ))}
      </div>
      {button && (
        <motion.div
          initial={{ opacity: 0, y: "+10px" }}
          animate={{
            opacity: isInView ? 1 : 0,
                y: isInView ? 0 : "+10px",
          }}
          transition={{
            delay: words.length * 0.3,
            duration: 0.5,
          }}
        >
          <div
            className={`w-1/2 cursor-pointer rounded-sm px-1 ${
              ind % 2 === 0 ? "bg-background text-red-700" : "bg-red-700 text-white"
            }`}
          >
            {textButton}
          </div>
        </motion.div>
      )}
    </div>
  );
};
