"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const items = [
  { image: '/assets/svg/agency.svg', title: ' پیش ثبت نام', subtitle: 'محصولات مدیران خودرو' , url :"https://sdfn.ir/f/namya/view.php?id=82738" },
  { image: '/assets/svg/parts.svg', title: 'طرح تعویض  ', subtitle: ' طرح تعویض مدیران خودرو', url :"https://sdfn.ir/f/namya/view.php?id=84231"  },
  { image: '/assets/svg/price-list.svg', title: ' تست درایو', subtitle: 'تست درایو مدیران خودرو' , url :"https://sdfn.ir/f/namya/view.php?id=82738" },
  { image: '/assets/svg/services.svg', title: ' جزییات شعبه ها ', subtitle: 'نمایندگی مدیران خودرو', url :"/contact"  },

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
      { threshold: 0.68}
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background ">
      {items.map((val, key) => {
        const isInView = visibleItems[key];

        return (
          <div
            key={key}
            ref={(el) => (itemRefs.current[key] = el)}
            className={`flex ${key % 2 === 0 ? "flex-col-reverse pt-5 bg-redasli text-txtl" : "flex-col bg-background text-gray-900"} 
                        md:flex-row items-center justify-around md:h-screen `}
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
                url={val.url}
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
    <div className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] relative ">

    <Image src={src} alt="Item Image" fill style={{}} className="rounded-lg m-4" />
    
    </div>
  );
}

const AnimatedText = ({ text, isInView, button, ind, textButton , url }) => {
  const words = text.split(" ");
  const router = useRouter();
  const handleNavigationClick = (path) => {
    router.push(path);

  }

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
              className={`mr-2 font-extrabold text-3xl md:text-5xl ${
                ind % 2 === 0 ? "text-txtl" : "text-redasli"
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
          onClick={()=>handleNavigationClick(url)}
            className={`text-center  w-1/2 cursor-pointer rounded-sm px-2 py-1 ${
              ind % 2 === 0 ? "bg-background text-redasli" : "bg-redasli text-txtl"
            }`} 
          >
            {textButton}
          </div>
        </motion.div>
      )}
    </div>
  );
};
