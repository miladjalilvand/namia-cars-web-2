"use client";

import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [datas, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://namya.ir/api/v3/posts?business_id=1165");
      const data = await response.json();
      setData(data.data); // Set the data once
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (datas.length > 0) {
      const imagesP = datas.flatMap((val) =>
        val.media_files
          ? val.media_files
              .filter((data) => data.type === "IMAGE") // Only keep image types
              .map((data) => ({
                original: data.original,
                thumbnail: data.thumbnail,
              }))
          : []
      );
      setImages(imagesP);
      setLoading(false); // Set loading to false after data is processed
    }
  }, [datas]);

  return (
    <div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ImageGallery lazyLoad items={images} disableThumbnailScroll={false} slideOnThumbnailOver={true} isRTL={true}  />
      )}
    </div>
  );
}
