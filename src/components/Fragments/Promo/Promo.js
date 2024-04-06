"use client";
import { Montserrat } from "next/font/google";
import styles from "./Promo.module.css";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect, useState } from "react";
import useGetData from "@/services/useGetData";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export default function Promo() {
  const [promos, setPromos] = useState([]);
  const { getData } = useGetData();
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    375: {
      items: 2,
    },
    568: {
      items: 3,
    },
    800: {
      items: 5,
      itemsFit: "contain",
    },
  };

  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  }, []);
  return (
    <div
      className={`${styles.promo_container} ${montserrat.className} container-fluid`}
    >
      <div className="d-flex justify-content-start align-items-baseline px-3">
        <div>
          <i className="bi bi-ticket-perforated-fill me-2 fs-2 text-success"></i>
        </div>
        <div className="d-flex flex-column">
          <h3 className=" fw-bold m-0">Special Promo For You !</h3>
          <p className="m-0 text-muted">
            &quot;Exclusive Offer Just for You! Don&apos;t Miss Out!&quot;
          </p>
        </div>
      </div>
      <AliceCarousel
        mouseTracking
        infinite
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
            className={`card m-2 ${styles.promo_card}`}
            onDragStart={handleDragStart}
          >
            <img
              src={promo.imageUrl}
              className={` card-img-top ${styles.promo_image}`}
              alt="..."
            />
            <div
              className={`position-absolute bottom-0 bg-dark bg-opacity-50 w-100 text-white p-2 d-flex flex-column justify-content-between ${styles.promo_text}`}
            >
              <h5 className="card-title fs-6 fw-semibold ">{promo.title}</h5>
              <p className="card-text fs-6 ">{promo.description}</p>
            </div>
          </div>
        ))}
      </AliceCarousel>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success">
          See All Promo <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
