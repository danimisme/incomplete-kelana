"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";

export default function DetailBannerPage({ params }) {
  const { getData } = useGetData();
  const [banner, setBanner] = useState({});
  useEffect(() => {
    getData(`banners/${params.id}`).then((res) => setBanner(res?.data?.data));
  }, []);
  return (
    <div className="mt-5 container-lg">
      <h1>Detail Banner</h1>
    </div>
  );
}
