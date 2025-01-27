"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const router = useRouter();
  const [slugo, setSlug] = useState(null);
  const [catalogInfo, setCatalogInfo] = useState(null);

  useEffect(() => {
    const getParams = async () => {
      try {
        const resolvedParams = await params; // Unwrap params Promise
        const { slug } = resolvedParams;
        setSlug(slug);

        const res = await fetch(`https://namya.ir/api/v1/businesses/1165/catalogs`);
        const data = await res.json();

        // پیدا کردن آیتم مورد نظر
        const matchedItem = data?.data.find((item) => item.id === parseInt(slug));

        if (matchedItem) {
          setCatalogInfo(matchedItem);
          // اگر نیاز به ریدایرکت دارید
          router.push(matchedItem.url);
        } else {
          console.log("No matching item found for slug:", slug);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getParams();
  }, [params]);

  // بررسی داده‌ها هنگام تغییر slug
  useEffect(() => {
    if (catalogInfo) {
      console.log("Catalog Info:", catalogInfo);
    }
  }, [catalogInfo]);

  if (!catalogInfo) {
    return   <div className="flex items-center justify-center h-screen ">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-redasli"></div>
  </div>
  }

  return (
    <div>

    </div>
  );
}
