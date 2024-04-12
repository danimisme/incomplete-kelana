"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";

export default function DetailActivityPage({ params }) {
  const { getData } = useGetData();
  const [activity, setActivity] = useState({});
  useEffect(() => {
    getData(`activity/${params.id}`).then((res) => setActivity(res.data.data));
  }, []);
  console.log(activity);
  return (
    <>
      <div className="mt-5 container-lg">
        <h1>Detail Activity Page</h1>
        <p>Activity ID: {params.id}</p>
      </div>
    </>
  );
}
