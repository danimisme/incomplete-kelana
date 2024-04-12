"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import styles from "./Activities.module.css";
import { Montserrat } from "next/font/google";
import CardActivity from "../CardActivity/CardActivity";
import Link from "next/link";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [categories, setCategories] = useState([]);
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
      items: 3,
      itemsFit: "contain",
    },
  };
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);

  return (
    <div
      className={` ${styles.activities} ${montserrat.className} container-fluid`}
    >
      <div className={`${styles.header}`}>
        <div className="d-flex justify-content-start align-items-baseline">
          <div>
            <i className="bi bi-airplane-fill fs-2 me-2 text-success"></i>
          </div>
          <div className="d-flex flex-column ">
            <h3 className="m-0 fw-bold">Explore All Activities</h3>
            <p className="m-0">
              &quot;Discover a Plethora of Activities to Explore&quot;
            </p>
          </div>
        </div>
      </div>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlay
        autoPlayInterval={2000}
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
        {activities.map((activity, index) => (
          <div key={activity.id} className="mx-3">
            <CardActivity key={activity.id} activity={activity} />
          </div>
        ))}
      </AliceCarousel>

      <div className="d-flex justify-content-center">
        <Link href="/activity">
          <button className="btn btn-success">
            See All Activities <i className="bi bi-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
