"use client";

import { useEffect, useState } from "react";
import useGetData from "@/services/useGetData";
import styles from "./BannerPage.module.css";
import Link from "next/link";
import FormBanner from "@/components/Fragments/FormBanner/FormBanner";
import { useDispatch } from "react-redux";
import { toggleFormBanner } from "@/redux/slices/FormBannerSlice";
import useDelete from "@/services/useDelete";

export default function BannerPage() {
  const { getData } = useGetData();
  const [banners, setBanners] = useState([]);
  const dispatch = useDispatch();
  const { deleteData } = useDelete();
  useEffect(() => {
    getData("banners").then((res) => setBanners(res.data.data));
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deleteData(`delete-banner/${id}`);
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5 container-lg">
      <div className="row py-5">
        <div className="col-lg-10 col-10 mx-auto">
          <FormBanner />
          <h1>
            Banner Page
            <button
              className="btn btn-outline-success ms-2"
              onClick={() => dispatch(toggleFormBanner())}
            >
              <i className="bi bi-plus-circle me-2"></i> Create Banner
            </button>
          </h1>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Picture</th>
                <th scope="col" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner, index) => (
                <tr key={banner.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{banner.name}</td>
                  <td>
                    <img
                      src={banner.imageUrl}
                      alt={banner.name}
                      className={` ${styles.image} `}
                    />
                  </td>
                  <td className="text-center">
                    <Link
                      href={`/dashboard/banner/${banner.id}`}
                      className="me-2"
                    >
                      <button className="btn btn-outline-info my-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(banner.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
