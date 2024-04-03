"use client";

import { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import axios from "axios";
import useGetData from "@/services/useGetData";

export default function Banner() {
  const [banners, setBanners] = useState([]);
  const { getData } = useGetData();

  useEffect(() => {
    getData("banners").then((res) => setBanners(res.data.data));
  }, []);

  return (
    <div className={styles.banner}>
      {banners.map((banner) => (
        <div key={banner.id}>
          <img src={banner.imageUrl} alt={banner.title} />
        </div>
      ))}
    </div>
  );
}
