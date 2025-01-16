"use client"
import { Accordion, AccordionItem, Chip, Pagination } from "@nextui-org/react";
import TextMotionCustom from "../components/newC/textMotion";
import { useState } from "react";
import Image from "next/image";

const imageData = [
{
    name: "تصویر 1",
    url: "/assets/1.jpg",
    description: "این تصویر نمایی از طبیعت است.",
    details: {
    category: "طبیعت",
    model: "مدل A123",
    features: ["با کیفیت بالا", "نمای زیبا", "رنگ‌های طبیعی"],
    },
},
{
    name: "تصویر 2",
    url: "/assets/2.jpg",
    description: "نمایی از یک شهر در شب.",
    details: {
    category: "شهر",
    model: "مدل B456",
    features: ["عکاسی در شب", "نورپردازی حرفه‌ای", "زاویه دید گسترده"],
    },
},
{
    name: "تصویر 3",
    url: "/assets/3.jpg",
    description: "غروب زیبای خورشید در دریا.",
    details: {
    category: "منظره",
    model: "مدل C789",
    features: ["غروب خورشید", "رنگ‌های گرم", "حالت آرامش‌بخش"],
    },
},
{
    name: "تصویر 4",
    url: "/assets/4.jpg",
    description: "نمای نزدیک از گل‌های بهاری.",
    details: {
    category: "گل",
    model: "مدل D101",
    features: ["نمای نزدیک", "جزئیات دقیق", "رنگ‌های زنده"],
    },
},
{
    name: "تصویر 1",
    url: "/assets/1.jpg",
    description: "این تصویر نمایی از طبیعت است.",
    details: {
    category: "طبیعت",
    model: "مدل A123",
    features: ["با کیفیت بالا", "نمای زیبا", "رنگ‌های طبیعی"],
    },
},
{
    name: "تصویر 2",
    url: "/assets/2.jpg",
    description: "نمایی از یک شهر در شب.",
    details: {
    category: "شهdر",
    model: "مدل B456",
    features: ["عکاسی در شب", "نورپردازی حرفه‌ای", "زاویه دید گسترده"],
    },
},
{
    name: "تصویر 3",
    url: "/assets/3.jpg",
    description: "غروب زیبای خورشید در دریا.",
    details: {
    category: "منcظره",
    model: "مدل C789",
    features: ["غروب خورشید", "رنگ‌های گرم", "حالت آرامش‌بخش"],
    },
},
{
    name: "تصویر 4",
    url: "/assets/4.jpg",
    description: "نمای نزدیک از گل‌های بهاری.",
    details: {
    category: "5666گaل",
    model: "مدل D101",
    features: ["نمای نزدیک", "جزئیات دقیق", "رنگ‌های زنده"],
    },
},{
  name: "تصویر 4",
  url: "/assets/4.jpg",
  description: "نمای نزدیک از گل‌های بهاری.",
  details: {
  category: "گaل",
  model: "مدل D101",
  features: ["نمای نزدیک", "جزئیات دقیق", "رنگ‌های زنده"],
  },
},{
  name: "تصویر 4",
  url: "/assets/4.jpg",
  description: "نمای نزدیک از گل‌های بهاری.",
  details: {
  category: "3699گaل",
  model: "مدل D101",
  features: ["نمای نزدیک", "جزئیات دقیق", "رنگ‌های زنده"],
  },
},{
  name: "تصویر 4",
  url: "/assets/4.jpg",
  description: "نمای نزدیک از گل‌های بهاری.",
  details: {
  category: "گa33ل",
  model: "مدل D101",
  features: ["نمای نزدیک", "جزئیات دقیق", "رنگ‌های زنده"],
  },
},{
  name: "تصویر 4",
  url: "/assets/4.jpg",
  description: "نمای نزدیک از گل‌های بهاری.",
  details: {
  category: "گa323ل",
  model: "مدل D101",
  features: ["نمای نزدیک", "جزئیات دقیق", "رنگ‌های زنده"],
  },
},
];

// const handleCategoryChange = (index) => {
//     setActiveCategories(index);
// }


const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("همه");
  const displayedCategories = new Set(); // جلوگیری از نمایش تکراری دسته‌بندی‌ها

  // فیلتر کردن محصولات
  const filteredProducts =
    activeCategory === "همه"
      ? imageData
      : imageData.filter((product) => product.details.category === activeCategory);

  return (
    <div className="w-screen min-h-screen mx-auto px-0 py-8">
      {/* دسته‌بندی‌ها */}
      <div className="pb-6 w-full text-center flex flex-col md:flex-row justify-between items-center">
  <div className="relative w-screen md:w-1/2 h-60 flex justify-center items-center overflow-hidden">
  <Image
    fill
    alt="imagebanner"
    src={'/assets/bg-banners/1.jpg'}
    style={{ objectFit: "cover" }}
    className="z-0"
  />
  <div className="absolute z-10 text-white text-center text-3xl md:text-5xl  px-4 py-2 rounded-lg">
            <TextMotionCustom text={"قطعات لوازم یدکی ام وی ا م"} />
          </div>
        </div>
        <div className="md:w-1/2 w-screen flex flex-wrap justify-start items-center">
          {/* دسته‌بندی همه */}
          <div className="cursor-pointer" onClick={() => setActiveCategory("همه")}>
            <Chip
              isDisabled={activeCategory === "همه"}
              color="primary"
              className="m-2"
            >
              همه
            </Chip>
          </div>
          {imageData.map((val) => {
            // بررسی تکراری بودن دسته‌بندی
            if (displayedCategories.has(val.details.category)) {
              return null;
            }
            displayedCategories.add(val.details.category); // افزودن دسته‌بندی به Set

            return (
              <div
                key={val.details.category}
                className="cursor-pointer"
                onClick={() => setActiveCategory(val.details.category)}
              >
                <Chip
                  isDisabled={activeCategory === val.details.category}
                  color="primary"
                  className="m-2"
                >
                  {val.details.category}
                </Chip>
              </div>
            );
          })}
        </div>
      </div>

      {/* نمایش محصولات فیلتر شده */}
      <div className="px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="border h-min flex flex-col border-gray-400 bg-background 
                rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-"
          >
            <Image
            fill
              src={product.url}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <Accordion key={index}>
                <AccordionItem key={index} aria-label={`Details of ${product.name}`} title="جزئیات">
                  <p>مدل: {product.details.model}</p>
                  <p>دسته‌بندی: {product.details.category}</p>
                  <ul>
                    {product.details.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        ))}
      </div>
      <div className="w-screen flex justify-center items-center py-6">
        <Pagination showControls initialPage={1} total={10} />
      </div>
    </div>
  );
};

export default Shop;
