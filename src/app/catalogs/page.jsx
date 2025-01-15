"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("https://namya.ir/api/v1/businesses/1165/catalogs");
      const data = await response.json();
      const mappedImages = data.data.map((item) => ({
        preview: item.preview,
        url: item.url,
        title : item.title
      }));
      setImages(mappedImages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer"); // Open URL in a new tab
  };

  return (
    <div className="p-4 pt-12  ">
      {loading ? (
        <p className="text-center">درحال بارگزاری...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer rounded-md overflow-hidden  w-full h-64 md:h-96 "
              onClick={() => handleImageClick(image.url)}
            >
              <Image
                src={image.preview}
                alt={`Image ${index + 1}`}
               fill
                className=" object-contain hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-row gap-1 text-lg animate-bounce text-white  font-bold">
                  <div/>نمایش<div/>
                 <div className="text-lg">{image.title}</div>
               
                </div>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
