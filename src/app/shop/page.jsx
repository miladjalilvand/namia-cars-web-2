    "use client"
    import { Accordion, AccordionItem, Chip, Pagination } from "@nextui-org/react";
    import TextMotionCustom from "../components/newC/textMotion";
import { useState } from "react";

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
    ];

    const handleCategoryChange = (index) => {
        setActiveCategories(index);
    }

    const Shop = () => {

        const [activeCategory, setActiveCategories] = useState(-1);
        return (
        <div className="w-screen mx-auto px-4 py-8">
            <div className="pb-6  w-full text-center flex flex-col md:flex-row justify-between items-center">
            <div className="w-1/2 flex justify-center items-center ">
            <div className="cursor-pointer" onClick={()=>setActiveCategories(-1)}>
            <Chip 
                isDisabled={activeCategory === -1 ? false : true}
                
                  key={-1} color="primary"
                   className="m-2 ">همه</Chip></div>
            {imageData.map((val , ind)=>{
                return <div className="cursor-pointer" onClick={()=>setActiveCategories(ind)}>
                    <Chip 
                isDisabled={activeCategory === ind ? false : true}
                
                  key={ind} color="primary"
                   className="m-2 ">{val.details.category}</Chip></div>

            })}</div>
            <div className="w-1/2 bg-red-700 h-60 flex justify-center items-center">
                <div className="text-3xl md:text-5xl ">
                <TextMotionCustom text={"قطعات لوازم یدکی ام وی ا م"} />
                </div>
            </div>
            </div>
            {activeCategory}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {imageData.map((product, index) => (
                <div
                key={index}
                className="border h-min flex flex-col border-gray-400 bg-background 
                rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-"
                >
                <img
                    src={product.url}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <Accordion key={index} >
                    <AccordionItem
                        key={index}
                        aria-label={`Details of ${product.name}`}
                        title="جزئیات"
                    >
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
            <div className="w-screen flex justify-center items-center  py-6">
                <Pagination showControls initialPage={1} total={10} />
            </div>
        </div>
        );
    };
    
    export default Shop;