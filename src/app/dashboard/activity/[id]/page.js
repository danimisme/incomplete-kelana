"use client";
import { useState, useEffect } from "react";
import useGetData from "@/services/useGetData";

export default function DetailActivityPage({ params }) {
  const [activity, setActivity] = useState({});
  const { getData } = useGetData();
  console.log(activity);
  useEffect(() => {
    getData(`activity/${params.id}`).then((res) => setActivity(res.data.data));
  }, []);

  return (
    <div className="container-lg mt-5">
      <div className="row py-5">
        <h1>Detail Activity</h1>
      </div>
    </div>
  );
}
