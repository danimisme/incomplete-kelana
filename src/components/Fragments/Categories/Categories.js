"use client";
import styles from "./Categories.module.css";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Categories() {
  const [Categories, setCategories] = useState([]);
  const { getData } = useGetData();

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
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);

  return (
    <div className={`${styles.categories} mt-3 container-fluid `}>
      <h2 className="p-3">
        <i className="bi bi-geo-alt-fill"></i> Temukan Yang Kamu Sukai
      </h2>
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
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
        responsive={responsive}
      >
        {Categories.map((category) => (
          <div key={category.id} className="mx-3">
            <p className="position-absolute p-3 fw-bold text-white bg-dark rounded bg-opacity-75">
              {category.name}
            </p>
            <img
              src={category.imageUrl}
              alt={category.name}
              className={styles.img}
            />
          </div>
        ))}
      </AliceCarousel>
    </div>
  );
}
