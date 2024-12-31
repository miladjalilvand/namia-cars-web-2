"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import { motion } from "framer-motion";
import { use } from "react";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";

const descriptionsMap = {
  merge: "All commits from the source branch are added to the destination branch via a merge commit.",
  squash: "All commits from the source branch are added to the destination branch as a single commit.",
  rebase: "All commits from the source branch are added to the destination branch individually.",
};

const labelsMap = {
  merge: "Create a merge commit",
  squash: "Squash and merge",
  rebase: "Rebase and merge",
};

export default function Page({ params }) {
  const [selected, setSelected] = useState("merge");
  const { theme } = useTheme();
  const { slug } = use(params); // استفاده از React.use برای باز کردن params
  

  // Handle Dropdown Selection
  const handleSelectionChange = (key) => {
    setSelected(key.currentKey);
  };

  return (
    <div className="flex flex-col w-screen pt-6">
      <div className="flex flex-row ">
        <div className="w-1/2 h-3/5 bg-red-600">chart</div>
        <div className="w-1/2 h-3/5 text-center text-3xl md:text-5xl content-center border border-cyan-700">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border border-cyan-700"
          >
            شرایط فروش نقد و اقساط
          </motion.div>
        </div>
      </div>
      {/* <p className="mt-4 text-center">Slug: {slug}</p>
      <p className="text-center">Current Theme: {theme}</p> */}

      <div className="flex flex-col gap-3">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row">
            <div className="">نقدی</div>
          </div>

        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-row ">
            <div className="flex items-center justify-center w-10 border bg-gradient-to-r from-red-700 to-red-900 text-white">
              <div className="rotate-90">اقساط</div>
            </div>
            <div className="border bg-gradient-to-r from-red-700 to-red-900 text-white/95 p-2 md:w-24 w-full">
              شرایط فروش نقدی مدیران خودرو فونیکس تیگو 8 پرو e پلاس (+e)
            </div>
          </div>
          <div className="flex flex-col md:flex-row border max-h-full">
            <div className="flex  flex-col md:flex-row border max-h-full">
              <div className="flex-col h-full ">
                <div
                  className={`border-b p-2 h-1/2 ${
                    theme === "light" ? "bg-white" : "bg-slate-500"
                  } border-b-red-800 border-b-3`}
                >
                  تحویل زمان
                </div>
                <div className="text-center p-2">32</div>
              </div>
              <div className="flex-col  text-center ">
                <div
                  className={`border-b p-2 h-1/2 ${
                    theme === "light" ? "bg-white" : "bg-slate-500"
                  } border-b-red-800 border-b-3`}
                >
                  قیمت
                </div>
                <div className="text-center p-2">32</div>
              </div>
              <div className="flex-col  text-center">
                <div
                  className={`border-b p-2 h-1/2 ${
                    theme === "light" ? "bg-white" : "bg-slate-500"
                  } border-b-red-800 border-b-3`}
                >
                  مدل
                </div>
                <div className="text-center p-2">32</div>
              </div>
              <div className="flex-col   text-center">
                <div
                  className={`border-b p-2 h-1/2 ${
                    theme === "light" ? "bg-white" : "bg-slate-500"
                  } border-b-red-800 border-b-3`}
                >
                  پرداخت پیش
                </div>
                <div className="text-center p-2">32</div>
              </div>
              <div className="flex-col  text-center ">
                <div
                  className={`border-b p-2 h-1/2 ${
                    theme === "light" ? "bg-white" : "bg-slate-500"
                  } border-b-red-800 border-b-3`}
                >
                  پیش پرداخت درصد
                </div>
                <div className="text-center p-2">32</div>
              </div>
              <div className="flex-col  text-center ">
                <div
                  className={`border-b p-2 h-1/2 ${
                    theme === "light" ? "bg-white" : "bg-slate-500"
                  } border-b-red-800 border-b-3`}
                >
                  اقساط سود درصد
                </div>
                <div className="text-center p-2">32</div>
              </div>
              <div className="flex-col text-center  ">
                <div
                  className={`border-b p-2 h-1/2 ${
                    theme === "light" ? "bg-white" : "bg-slate-500"
                  } border-b-red-800 border-b-3`}
                >
                  مدت اقساط
                </div>
                <div className="text-center p-2">
                  <ButtonGroup>
                    <Button>{labelsMap[selected]}</Button>
                    <Dropdown>
                      <DropdownTrigger>
                        <Button>drop</Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        disallowEmptySelection
                        aria-label="Merge options"
                        className="max-w-[300px]"
                        selectionMode="single"
                        onSelectionChange={handleSelectionChange}
                      >
                        <DropdownItem
                          key="merge"
                          description={descriptionsMap["merge"]}
                        >
                          {labelsMap["merge"]}
                        </DropdownItem>
                        <DropdownItem
                          key="squash"
                          description={descriptionsMap["squash"]}
                        >
                          {labelsMap["squash"]}
                        </DropdownItem>
                        <DropdownItem
                          key="rebase"
                          description={descriptionsMap["rebase"]}
                        >
                          {labelsMap["rebase"]}
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </ButtonGroup>
                </div>
              </div>
              <div className="flex-col  text-center ">
                <div
                  className={`border-b p-2 h-1/2 ${
                    theme === "light" ? "bg-white" : "bg-slate-500"
                  } border-b-red-800 border-b-3`}
                >
                  هر ماه قسط مبلغ
                </div>
                <div className="text-center p-2">32</div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="flex md:flex-row w-screen md:w-screen flex-col">
  <div className="relative h-80 w-screen">

    <Image
      src="/assets/gallery/tiggo8pro/Tiggo8PROred.png"
      alt="Picture of the author"
      fill
      className="object-fill"
    />
  </div>
  <div className="text-center md:1/2">
    <div className="flex flex-col">
      <div>ایکس 33 کراس، از جدیدترین کراس اورهای مدرن مدیران خودرو است که با زبان طراحی روز دنیا پا به بازار ایران گذاشته است. این کراس اور، نه تنها از طراحی هیجان‌انگیز و به‌روزترین امکانات رفاهی و ایمنی صنعت خودروی جهان بهره می‌برد، بلکه با الهام از آینده، هنر و تکنولوژی، نماینده سبک زندگی جدید ام‌وی‌ام تحت عنوان کراس لایف است.</div>
      <div className="flex flex-row gap-1 items-center justify-center">
        <Button>بررسی کامل </Button>
        <Button>مشخصات فنی </Button>
        <Button>گالری تصاویر</Button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
