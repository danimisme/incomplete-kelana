"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import styles from "./Activities.module.css";
import { Montserrat } from "next/font/google";
import CardActivity from "../CardActivity/CardActivity";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [categories, setCategories] = useState([]);
  const { getData } = useGetData();
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);

  const handleReset = () => {
    const select = document.getElementById("select_categories");
    select.value = "Select";
    getData("activities").then((res) => setActivities(res.data.data));
  };

  const handleFilter = async () => {
    const select = document.getElementById("select_categories");
    const value = select.value;
    getData(`activities-by-category/${value}`).then((res) =>
      setActivities(res.data.data)
    );
  };

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
        <div className="row">
          <div className="col-7 d-flex align-items-center justify-content-end ">
            <p className="m-0">Filter By Category</p>
          </div>
          <div className="col-5">
            <select className="form-select" id="select_categories">
              <option value="Select">Select</option>
              {categories.map((category) => {
                return (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="d-flex gap-3">
          <button className="btn btn-success" onClick={handleFilter}>
            Filter
          </button>
          <button className="btn btn-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div className="row mx-3 ">
        {activities.length === 0 && (
          <div
            className="alert alert-info w-50 mx-auto text-center"
            role="alert"
          >
            No activities found
          </div>
        )}
        {activities.map((activity, index) => {
          if (index < 6) {
            return <CardActivity key={activity.id} activity={activity} />;
          }
        })}
      </div>
      <div className="d-flex justify-content-center">
        <Link href="/activity">
          <button className="btn btn-success">
            See More <i className="bi bi-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
