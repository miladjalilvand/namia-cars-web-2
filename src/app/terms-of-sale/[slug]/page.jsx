"use client";

import { useTheme } from "next-themes";
import { use } from "react";
import { motion } from "framer-motion";
import { SampleLineChart } from "@/app/components/newC/chart";

export default function Page({ params }) {
  const { theme } = useTheme();
  const { slug } = use(params); // استفاده از React.use برای باز کردن params

  return (
    <div className="flex flex-col w-screen pt-6">
      <div className="flex flex-row ">
        <div className="w-1/2 h-3/5 bg-red-600">
        {/* <SampleLineChart /> */}
        chart
        </div>
        <div className="w-1/2 h-3/5 text-center text-3xl md:text-5xl
         content-center border border-cyan-700">
        <motion.div 
       initial={{ opacity: 0, y: 100 }}
       animate={ { opacity: 1, y: 0 }} // انیمیشن بر اساس isVisible
       transition={{ duration: 0.5 }}
        className="border border-cyan-700">شرایط فروش نقد و اقساط </motion.div>
        </div>
      </div>
      <p className="mt-4 text-center">Slug: {slug}</p>
      <p className="text-center">Current Theme: {theme}</p>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row">
                
            <div className="">نقدی</div>
            <div>شرایط فروش نقدی مدیران خودرو فونیکس تیگو 8 پرو e پلاس (+e)</div>
            </div>
            <div className="flex flex-row">
                
                <div className=""></div>
                <div>1.365.365.000</div>
                </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-row">
                
            <div className="border">نسقدی</div>
            <div className="border md:h-24 md:w-24 w-full">شرایط فروش نقدی مدیران خودرو فونیکس تیگو 8 پرو e پلاس (+e)</div>
            </div>
            <div className="flex flex-row border">
                
                <div className="flex flex-row border" >
                    <div className="flex-col ">
                        <div className="زمان تحویل"></div>
                        <div className=""></div>
                    </div>
                    <div className="flex-col ">
                        <div className="قیمت"></div>
                        <div className=""></div>
                    </div>
                    <div className="flex-col ">
                        <div className="مدل"></div>
                        <div className=""></div>
                    </div>
                    <div className="flex-col ">
                        <div className="پیش پرداخت"></div>
                        <div className=""></div>
                    </div>
                    <div className="flex-col ">
                        <div className="درصد پیش پرداخت "></div>
                        <div className=""></div>
                    </div>
                    <div className="flex-col ">
                        <div className="درصد سود اقساط"></div>
                        <div className=""></div>
                    </div>
                    <div className="flex-col ">
                        <div className="مدت اقساط"></div>
                        <div className=""></div>
                    </div>
                    <div className="flex-col ">
                        <div className="مبلغ قسط هر ماه"></div>
                        <div className=""></div>
                    </div>
                  
                </div>
                <div className="md:hidden">1.365.365.000</div>
                </div>
        </div>
      </div>
    </div>
  );
}
