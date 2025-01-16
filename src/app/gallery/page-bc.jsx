"use client";

import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaPlay } from "react-icons/fa"; // استفاده از آیکن پلی
import Image from "next/image";

export default function GalleryPage() {
  const [imageMode, setImageMode] = useState(true); // Default to images
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("https://namya.ir/api/v3/posts?business_id=1165");
      const { data } = await response.json();

      const imagesData = data.flatMap((item) =>
        item.media_files
          ? item.media_files
              .filter((file) => file.type === "IMAGE")
              .map((file) => ({
                original: file.original,
                thumbnail: file.thumbnail,
              }))
          : []
      );

      const videosData = data.flatMap((item) =>
        item.media_files
          ? item.media_files
              .filter((file) => file.type === "VIDEO")
              .map((file) => ({
                original: file.original,
                thumbnail: file.thumbnail,
              }))
          : []
      );

      setImages(imagesData);
      setVideos(videosData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p className="text-center pt-16">در حال بارگذاری...</p>
      ) : (
        <div className="flex flex-col pt-16 ">
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
            images.length > 0 ? (
              <ImageGallery
                items={images}
                lazyLoad
                disableThumbnailScroll={false}
                slideOnThumbnailOver
                isRTL
              />
            ) : (
              <p className="text-center">هیچ تصویری موجود نیست.</p>
            )
          ) : videos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer w-full h-60"
                  onClick={() => window.open(video.original, "_blank")}
                >
                  {/* Thumbnail */}
                  <Image
                  fill
                    src={video.thumbnail}
                    alt={`Video thumbnail ${index}`}
                    className="w-full h-44 object-cover rounded-lg"
                  />
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                    <FaPlay className="text-white text-3xl" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">هیچ ویدیویی موجود نیست.</p>
          )}
        </div>
      )}
    </div>
  );
}
