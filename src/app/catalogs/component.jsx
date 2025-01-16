

// import React, { useState } from "react";
import Image from "next/image";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryPage({ catalogs }) {
//   const [loading, setLoading] = useState(false);

//   const handleImageClick = (url) => {
//     window.open(url, "_blank", "noopener noreferrer"); // Open URL in a new tab
//   };

  return (
    <section className="p-4 pt-12">
      {!catalogs ? (
        <p className="text-center">درحال بارگزاری...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {catalogs.map((catalog, index) => (
            <article
              key={index}
              className="relative cursor-pointer rounded-md overflow-hidden w-full h-64 md:h-96"
            //   onClick={() => handleImageClick(catalog.url)}
            >
                   <a href={catalog.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={catalog.preview}
                alt={`کاتالوگ ${catalog.title}`}
                title={`کاتالوگ ${catalog.title}`}
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-row gap-1 text-lg animate-bounce text-white font-bold">
                
                  <div>نمایش</div>
                  <div className="text-lg">{catalog.title}</div>
                
                </div> 
              </div> </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
