"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";

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
              <div key={activity.id} className=" col-md-4 col-lg-3 p-3 ">
                <div className="card">
                  <img
                    src={activity.imageUrls}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
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
