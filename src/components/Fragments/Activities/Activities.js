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
    <div className="container-fluid">
      <h3 className="p-3">Explore All Activities</h3>
      <div className="row mx-3 ">
        {activities.map((activity, index) => {
          if (index < 8) {
            return (
              <div
                key={activity.id}
                className=" col-md-4 col-lg-3 col-sm-6 p-3 "
              >
                <div className="card">
                  <img
                    src={activity.imageUrls}
                    className="card-img-top"
                    alt="..."
                  />
                  <p className="position-absolute top-0 end-0 bg-white m-1 px-2 py-1 rounded-pill ">
                    <i className="bi bi-star-fill text-warning"></i>{" "}
                    {activity.rating}
                  </p>
                  <div className="card-body">
                    <div>
                      <h6 className="card-title">{activity.title}</h6>
                      <p className="text-muted fs-6">
                        <i className="bi bi-geo-alt-fill text-success"></i>
                        {` ${activity.city}, ${activity.province}`}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
