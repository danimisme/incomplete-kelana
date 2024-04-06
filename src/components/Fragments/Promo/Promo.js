"use client";
import { Quicksand } from "next/font/google";
import styles from "./Promo.module.css";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";
import useGetData from "@/services/useGetData";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function Promo() {
  const [promos, setPromos] = useState([]);
  const { getData } = useGetData();
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    375: {
      items: 1,
    },
    568: {
      items: 2,
    },
    800: {
      items: 4,
      itemsFit: "contain",
    },
  };

  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  }, []);
  return (
    <div
      className={`${styles.promo_container} ${quicksand.className} container-fluid`}
    >
      <h2 className="p-3 fw-bold">Promo Spesial Untuk Kamu !</h2>
      <AliceCarousel
        mouseTracking
        // autoPlay
        // autoPlayInterval={2000}
        infinite
        // disableButtonsControls
        renderNextButton={() => (
          <i
            className={`bi bi-arrow-right-short fs-1 ${styles.arrow_button} ${styles.arrow_button_right}`}
          ></i>
        )}
        renderPrevButton={() => (
          <i
            className={`bi bi-arrow-left-short fs-1 ${styles.arrow_button} ${styles.arrow_button_left}`}
          ></i>
        )}
        disableDotsControls
        responsive={responsive}
      >
        {promos.map((promo) => (
          <div
            key={promo.id}
            className="card bg-transparent mx-3"
            onDragStart={handleDragStart}
          >
            <img
              src={promo.imageUrl}
              className=" card-img-top image-fluid"
              alt="..."
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{promo.title}</h5>
              <p className="card-text">{promo.description}</p>
              <a href="#" className="btn btn-outline-primary">
                Detail
              </a>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}
