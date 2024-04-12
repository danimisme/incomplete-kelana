"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import CardActivity from "@/components/Fragments/CardActivity/CardActivity";
import styles from "./ActivityPage.module.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function ActivityPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  }, []);
  return (
    <>
      <div
        className={`${styles.jumbotron} d-flex align-items-center justify-content-center text-white `}
      >
        <h1
          className={`${styles.text_shadow} ${gabarito.className} text-center fs-1 fw-bold`}
        >
          Challenge, Adventure, Discovery. <br /> Explore the World with Us!
        </h1>
      </div>
      <div className="mt-5 container-lg">
        <div className="py-5">
          <h1>Activity Page</h1>
          <div className="row">
            {activities.map((activity) => (
              <CardActivity activity={activity} key={activity.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
