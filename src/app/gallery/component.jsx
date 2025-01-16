"use client";

import React, { useEffect, useState } from "react";
import { FaPlay, FaWindowClose } from "react-icons/fa"; // استفاده از آیکن پلی
import Image from "next/image";
import { Drawer, DrawerContent, useDisclosure } from "@nextui-org/react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryPage({ posts }) {
  const [imageMode, setImageMode] = useState(true); // Default to images
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageGallery, setImageGallery] = useState([]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // از داده‌های props استفاده می‌کنیم
  useEffect(() => {
    if (posts.length > 0) {
      const imgsSet = new Set();

      posts.forEach((itU) => {
        itU.media_files.forEach((item) => {
          if (item.type === "IMAGE") {
            imgsSet.add(itU); // اضافه کردن تنها یک نسخه از داده‌ها
          }
        });
      });

      // تبدیل Set به آرایه
      const uniqueImgs = Array.from(imgsSet);
      setImages(uniqueImgs);

      const videosData = posts.flatMap((item) =>
        item.media_files
          ? item.media_files
              .filter((file) => file.type === "VIDEO")
              .map((file) => ({
                original: file.original,
                thumbnail: file.thumbnail,
              }))
          : []
      );

      setVideos(videosData);
      setLoading(false);
    }
  }, [posts]);

  const imageGalleryHandleClick = (itemItu) => {
    const gallery = itemItu.map((val) => ({
      original: val.original,
      thumbnail: val.thumbnail,
    }));
    setImageGallery(gallery);
    onOpen();
  };

  return (
<section>
  <div className="flex flex-col pt-16">
    {/* Toggle Buttons */}
    <div className="flex flex-row p-3 items-center justify-center gap-3">
      <button
        onClick={() => setImageMode(true)}
        className={`${
          imageMode
            ? "border-b-2 text-blue-600 scale-105"
            : "text-gray-600 hover:text-blue-600"
        } cursor-pointer px-3`}
      >
        عکس‌ها
      </button>
      <button
        onClick={() => setImageMode(false)}
        className={`${
          !imageMode
            ? "border-b-2 text-blue-600 scale-105"
            : "text-gray-600 hover:text-blue-600"
        } cursor-pointer px-3`}
      >
        ویدیوها
      </button>
    </div>

    {/* Image and Video Galleries */}
    {imageMode ? (
      posts.length > 0 ? (
        <section className="container mx-auto p-4">
          <div className="flex flex-col gap-6">
            {images.map((item, index) => (
              <article
                key={index}
                className="bg-gradient-to-t from-gray-900 md:from-gray-300 to-background shadow-md rounded-lg overflow-hidden"
              >
                <header className="p-4 border-b">
                  <div className="flex items-center p-3">
                    <img
                      src={item.business.logo}
                      alt={item.business.name}
                      className="w-12 h-12 rounded-full m-3"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-500">
                        {item.business.name}
                      </h3>
                      <p className="text-lg ">{item.caption}</p>
                    </div>
                  </div>
                </header>

                <section className="p-4">
                  <div className="relative w-full h-60 md:h-[420px]">
                    <Image
                      src={item.media_files[0].original}
                      alt={`Image ${index}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </section>

                <footer className="p-4 border-t flex justify-between items-center text-sm text-gray-600">
                  {item.media_files.length > 0 && (
                    <span
                      onClick={() => imageGalleryHandleClick(item.media_files)}
                      className="cursor-pointer hover:text-blue-600"
                    >
                      مشاهده عکس ها 👁
                    </span>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <p className="text-center">هیچ تصویری موجود نیست.</p>
      )
    ) : (
        videos.length > 0 ? (
            <section className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
              {videos.map((video, index) => (
                <article
                  key={index}
                  className="relative group cursor-pointer"
                  onClick={() => window.open(video.original, "_blank")}
                  aria-label={`مشاهده ویدیو ${index}`}
                >
                  {/* Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={`ویدیو ${index} - پیش‌نمایش`}
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                    <FaPlay className="text-white text-3xl" />
                  </div>
                </article>
              ))}
            </section>
          ) : (
            <p className="text-center">هیچ ویدیویی موجود نیست.</p>
          )
    )}
  </div>

  {/* Drawer for Image Gallery */}
  <Drawer hideCloseButton={true} size="full" placement="bottom" isOpen={isOpen} onOpenChange={onOpenChange}>
    <DrawerContent>
      {(onClose) => (
        <div className="w-screen h-screen relative">
          <div
            className="flex flex-row items-center justify-center gap-3 cursor-pointer bg-red-600 bg-opacity-60 top-6 left-6"
            onClick={() => onClose()}
          >
            <FaWindowClose />
            <div>بستن</div>
          </div>
          <ImageGallery
            isRTL
            lazyLoad
            disableThumbnailScroll={false}
            slideOnThumbnailOver
            items={imageGallery}
          />
        </div>
      )}
    </DrawerContent>
  </Drawer>
</section>

  );
}
