"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import styles from "./Activities.module.css";

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const { getData } = useGetData();
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  });
  return (
    <div className={` ${styles.activities} container-fluid`}>
      <h3 className="p-3">Explore All Activities</h3>
      <div className="row mx-3 ">
        {activities.map((activity, index) => {
          if (index < 6) {
            return (
              <div key={activity.id} className=" col-md-6 col-lg-4  p-3 ">
                <div className="card">
                  <img
                    src={activity.imageUrls}
                    className={` ${styles.img} card-img-top`}
                    alt="..."
                  />
                  <p className="position-absolute top-0 end-0 bg-white m-1 px-2 py-1 rounded-pill ">
                    <i className="bi bi-star-fill text-warning"></i>{" "}
                    {activity.rating}
                  </p>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className={` ${styles.title} card-title`}>
                        {activity.title}
                      </h6>
                      <p className={` ${styles.text_location}`}>
                        <i className="bi bi-geo-alt-fill text-success"></i>
                        {` ${activity.city}, ${activity.province}`}
                      </p>
                    </div>
                    <div>
                      <p>
                        {activity.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-success">
          See More <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
