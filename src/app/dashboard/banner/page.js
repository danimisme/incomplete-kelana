"use client";

import { useEffect, useState } from "react";
import useGetData from "@/services/useGetData";

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
            Banner Page
            <button className="btn btn-outline-success">Create Banner</button>
          </h1>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Picture</th>
                <th scope="col">Action</th>
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
                      className="img-fluid"
                    />
                  </td>
                  <td>
                    <button className="btn btn-outline-success">Edit</button>
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
