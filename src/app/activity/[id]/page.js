"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import styles from "./DetailActivityPage.module.css";
import Link from "next/link";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function DetailActivityPage({ params }) {
  const { getData } = useGetData();
  const [activity, setActivity] = useState({});
  const [mapHtml, setMapHtml] = useState("");
  useEffect(() => {
    getData(`activity/${params.id}`).then((res) => setActivity(res.data.data));
  }, []);
  console.log(activity);

  useEffect(() => {
    getData(`activity/${params.id}`).then((res) => {
      setMapHtml(res.data.data.location_maps);
    });
  }, [activity]);

  return (
    <>
      <div className="container-lg mt-5 py-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/" className="text-success">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/activity " className="text-success">
                Activity
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {activity.title}
            </li>
          </ol>
        </nav>
      </div>
      <div className="container-lg">
        <h1 className={`${gabarito.className} text-center`}>
          {activity.title}
        </h1>
        <div className="row">
          {activity?.imageUrls?.map((image) => (
            <div key={image} className=" col-lg-6 col-10 mx-auto py-3">
              <img
                src={image}
                alt={activity.title}
                className={`${styles.image} img-fluid`}
              />
            </div>
          ))}
        </div>
        <div className="container-lg row ">
          <div className="border border-2 border-success my-3"></div>
          <h2>Information</h2>
          <div className=" col-10 mt-3">
            <p>
              <span className="fw-bold"> Description : </span>{" "}
              {activity.description}
            </p>
            <p>
              <span className="fw-bold"> Price : </span>
              {activity?.price?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p>
              <span className="fw-bold"> Price Discount : </span>
              {activity?.price_discount?.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <p>
              <span className="fw-bold">Facilities : </span>
              {activity.facilities}
            </p>
            <p>
              <span className="fw-bold"> Rating : </span>
              <i className="bi bi-star-fill text-warning"></i> {activity.rating}
              /5 (<i className="bi bi-person-fill"></i>
              {activity.total_reviews} Reviews)
            </p>
          </div>
          <div className="border border-2 border-success my-3"></div>
          <div className="row container-lg mt-3">
            <h2> Location</h2>
            <div className="col-lg-6 col-10 mx-auto">
              <p>
                <span className="fw-bold"> Address : </span> {activity.address}
              </p>
              <p>
                <span className="fw-bold"> City : </span> {activity.city}
              </p>
              <p>
                <span className="fw-bold"> Province : </span>{" "}
                {activity.province}
              </p>
            </div>
            <div className="col-lg-6 col-10 mx-auto">
              <div className={styles.map_container}>
                <div
                  dangerouslySetInnerHTML={{ __html: mapHtml }}
                  id="map-container"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border border-2 border-success my-3"></div>

        <div className="container-lg mt-3">
          <p>
            <span className="fw-bold"> Category : </span>{" "}
            {activity?.category?.name}
          </p>
          <div className="col-lg-3 col-8">
            <img
              src={activity?.category?.imageUrl}
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}
