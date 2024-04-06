"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import styles from "./Activities.module.css";

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
    <div className={` ${styles.activities} container-fluid`}>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div>
          <h3>Explore All Activities</h3>
        </div>
        <div className="row">
          <div className="col-6 d-flex align-items-center justify-content-end ">
            <p className="m-0">Filter By Category</p>
          </div>
          <div className="col-6">
            <select className="form-select" id="select_categories">
              <option selected value={null}>
                Select
              </option>
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
          <div class="alert alert-info w-50 mx-auto text-center" role="alert">
            No activities found
          </div>
        )}
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
          See More <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
