"use client";

import { useEffect, useState } from "react";
import useGetData from "@/services/useGetData";
import styles from "./BannerPage.module.css";
import Link from "next/link";

export default function BannerPage() {
  const { getData } = useGetData();
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    getData("banners").then((res) => setBanners(res.data.data));
  });
  return (
    <div className="mt-5 container-lg">
      <div className="row py-3">
        <div className="col-lg-10 col-10 mx-auto">
          <h1>
            Banner Page{" "}
            <button className="btn btn-outline-success">
              <i className="bi bi-plus-circle"></i> Create Banner
            </button>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Picture</th>
                <th scope="col" colSpan={3} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            {banners.map((banner, index) => (
              <tbody key={banner.id}>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{banner.name}</td>
                  <td>
                    <img
                      src={banner.imageUrl}
                      alt={banner.name}
                      className={` ${styles.image} `}
                    />
                  </td>
                  <td>
                    <Link href={`/dashboard/banner/${banner.id}`}>
                      <button className="btn btn-outline-info">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
