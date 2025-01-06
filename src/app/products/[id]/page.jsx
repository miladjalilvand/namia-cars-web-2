"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import BannerImage from "@/app/components/newC/imageSwiperBanner";
import ImageSlider from "@/app/components/imagesSwiper";
import FooterPages from "@/app/components/newC/footerPages";



const itemsIndex = [
{title:"رنگ بندی",content :   (<Image 
  alt="تصویر" 
  width={10000} 
  height={240}
  layout="responsive" 
  className="pt-0"
  style={{ objectFit: "cover", height: "100%", width: "100%" }} 
   src={'/assets/24.png'}/>)},
   {
    title:'شرایط فروش',
    content:(<div className="flex flex-col  "><div className="text-center font-semibold text-2xl text-redasli">وی ایکس
VX</div>
    <div
    
    className="pt-9">Xtrim VX یک کراس اوور سایز متوسط لوکس است که توسط زیرمجموعه پریمیوم Chery، Xtrim، در سپتامبر 2020 رونمایی شد. این خودرو بر اساس پلتفرم جدید M3X Chery ساخته شده است و از نظر اندازه بین TX و LX قرار می گیرد. VX از نظر طراحی ظاهری شباهت زیادی به سایر مدل های Xtrim دارد، با جلوپنجره بزرگ و چراغ های LED باریک. فضای داخلی این خودرو نیز جادار و لوکس است و از امکاناتی مانند صندلی های چرمی، سانروف پانوراما و سیستم تهویه مطبوع سه منطقه ای بهره می برد. VX با دو موتور توربوشارژ بنزینی 1.6 و 2.0 لیتری عرضه می شود. موتور 1.6 لیتری 197 اسب بخار قدرت و 290 نیوتن متر گشتاور تولید می کند، در حالی که موتور 2.0 لیتری 261 اسب بخار قدرت و 400 نیوتن متر گشتاور دارد. هر دو موتور به گیربکس اتوماتیک 7 سرعته دوکلاچه متصل می شوند. VX به طیف وسیعی از فناوری های ایمنی و کمک راننده مجهز است، از جمله ترمز اضطراری خودکار، هشدار خروج از خط، هشدار نقطه کور و کروز کنترل تطبیقی.

    </div>

    <div className="bg-redasli w-full h-full flex flex-col p-3 gap-y-3 ">
     <div className="flex flex-row items-center justify-between">

     <div className="">شرایط فروش اکستریم ال ایکس
     </div>
     <div className="">b</div>
     </div>
     <div className="">برای ال ایکس شرایط فروش زیر موجود است

</div>
     <div className="">عدد شرایط فروش نقدی
     </div>  
     <div className="">
      <Button radius="small" fullWidth>شرایط فروش و نمودار قیمت</Button>
      </div>  
    </div>
    </div>)
  },
  {
    title:'گالری',
    content:(
      <div className="h-1/2 w-screen">
        <BannerImage images={[
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
]}/>
      </div>
    )
  },
  {
    title:'مشخضات فنی',
    content:(<div className="flex flex-col  ">

      <div className="flex flex-row-2 h-full w-screen items-start ">  
<div className="">
مشخصات فنی اکستریم ال ایکس
</div>icon

      </div><div>اطلاعات کلی </div>

     <div className="flex flex-col gap-y-1" >
     <div className="flex flex-row-2 w-screen h-full items-start  justify-center 
      gap-x-3 gap-y-3 ">
      
        <div className="border w-1/3 bg-gray-600 rounded-sm text-center ">a</div>
        <div className="border w-1/3 rounded-sm bg-slate-400 text-center ">a</div>


      </div>
     
     </div>
     
      <Button radius="small" fullWidth>نمایش اطلاعات بیشتر</Button>

    </div>)
  },
  {
    title:'طراحی',
    content:(<div className="flex flex-col w-screen px-3 ">
      <div className="">
طراحی داخلی<span >a</span> </div>
<div className="border "> image</div>
<Accordion >
  <AccordionItem  title=" داخلی">
 <div className="flex flex-col">

 <div className="border "> image</div>
 <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
 </div>
  </AccordionItem>
</Accordion>
<Accordion >
  <AccordionItem  title=" داخلی">
 <div className="flex flex-col">

 <div className="border "> image</div>
 <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
 </div>
  </AccordionItem>
</Accordion>
    </div>)
  },
  {
    title:'کارایی',
    content:(<div className="flex flex-col w-screen px-3 ">
      <div className="">
طراحی داخلی<span >a</span> </div>
<div className="border "> image</div>
<Accordion >
  <AccordionItem  title=" داخلی">
 <div className="flex flex-col">

 <div className="border "> image</div>
 <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
 </div>
  </AccordionItem>
</Accordion>
<Accordion >
  <AccordionItem  title=" داخلی">
 <div className="flex flex-col">

 <div className="border "> image</div>
 <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
 </div>
  </AccordionItem>
</Accordion>
    </div>)
  },
  {
    title:'ایمنی',
    content:(<div className="flex flex-col w-screen px-3 ">
      <div className="">
طراحی داخلی<span >a</span> </div>
<div className="border "> image</div>
<Accordion >
  <AccordionItem  title=" داخلی">
 <div className="flex flex-col">

 <div className="border "> image</div>
 <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
 </div>
  </AccordionItem>
</Accordion>
<Accordion >
  <AccordionItem  title=" داخلی">
 <div className="flex flex-col">

 <div className="border "> image</div>
 <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
 </div>
  </AccordionItem>
</Accordion>
    </div>)
  },
  {
    title:'رفاهی',
    content:(<div className="flex flex-col w-screen px-3 ">
      <div className="">
طراحی داخلی<span >a</span> </div>
<div className="border "> image</div>
<Accordion >
  <AccordionItem  title=" داخلی">
 <div className="flex flex-col">

 <div className="border "> image</div>
 <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
 </div>
  </AccordionItem>
</Accordion>
<Accordion >
  <AccordionItem  title=" داخلی">
 <div className="flex flex-col">

 <div className="border "> image</div>
 <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
 </div>
  </AccordionItem>
</Accordion>
    </div>)
  },
  {
    title:'item1',
    content:(<div>milad</div>)
  },
];

export default function Item({ params }) {
  const [item, setItem] = useState(null);
  const refs = useRef([]);
  const [isScrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [visibleItems, setVisibleItems] = useState(Array(itemsIndex.length).fill(false));

  console.log(visibleItems);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);

          if (index !== -1) {
            setVisibleItems((prev) => {
              const newVisibility = [...prev];
              newVisibility[index] = entry.isIntersecting;
              return newVisibility;
            });
          }
        });
      },
      { threshold:1 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    const fetchItem = async () => {
      const { id } = await params;
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const data = await res.json();
      setItem(data);
    };

    fetchItem();
  }, [params]);

  const scrollToSection = (index) => {
    const section = refs.current[index];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="flex flex-col pt-5">
      <div className="fixed overflow-x-auto w-full bg-black text-white z-[21]">
        <div className="flex flex-row min-w-max  justify-center items-end   h-full">
          {itemsIndex.map((val, ind) => {
            const isVis = visibleItems[ind];
            console.log("isVis:" + isVis);
            return (
              <div
                key={ind}
                className={`cursor-pointer py-3 px-6 ${isVis ? "text-redasli border-b-medium border-b-redasli" : ""}`}
                onClick={() => scrollToSection(ind)}
              >
                {val.title}
              </div>
            );
          })}
        </div>
      </div>

      {itemsIndex.map((val, ind) => {
        return (
          <div
            ref={(el) => (refs.current[ind] = el)}
            id={`section-${ind}`}
            key={ind}
            className="flex flex-col mt-10 cursor-pointer  bg-background 
             items-center justify-center"
          >
            {val.content}
          </div>
        );
      })}

      {item ? (
        <div className="flex flex-col mt-16">
          <h1>{item.id}</h1>
          <p>{item.title}</p>
          {/* <Image
            loading="lazy"
            src={item.thumbnailUrl}
            alt={item.url}
            width={150}
            height={150}
            className="object-cover rounded-md"
          /> */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <FooterPages  scrollDisabled={true} tab={0} />

{/* 
      {!isScrolled && (
        <div className="fixed bottom-0 left-0 w-full h-6 bg-fuchsia-900 flex">
    

          <div className="w-1/2 bg-red-400 text-center flex items-center justify-center">
            a
          </div>
          <div className="w-1/2 bg-purple-100 text-center flex items-center justify-center">
            a
          </div>
        </div>
      )} */}
    </div>
  );
}