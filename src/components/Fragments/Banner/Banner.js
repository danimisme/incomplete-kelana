"use client";

import { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import useGetData from "@/services/useGetData";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export default function Banner() {
  const [banners, setBanners] = useState([]);
  const { getData } = useGetData();
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: {
      items: 1,
    },
    568: {
      items: 2,
    },
    800: {
      items: 3,
      itemsFit: "contain",
    },
  };

  useEffect(() => {
    getData("banners").then((res) => setBanners(res.data.data));
  }, []);

  return (
    <div className={`${styles.banner} ${merriweather.className}`}>
      <h2 className="text-center text-white mb-2">Wisata Popular</h2>
      <p className="text-center text-white lead d-none d-md-block">
        Rasakan perjalanan yang mungkin belum pernah kamu coba sebelumnya
      </p>
      <AliceCarousel
        mouseTracking
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        // disableDotsControls
        // onSlideChange={handleOnSlideChange}
        // onSlideChanged={handleOnSlideChanged}
        responsive={responsive}
      >
        {banners.map((banner) => (
          <div key={banner.id}>
            <img
              src={banner.imageUrl}
              alt={banner.title}
              onDragStart={handleDragStart}
            />
            <h3 className="text-center">{banner.name}</h3>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}
