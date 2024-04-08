"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";

export default function ActivityPage() {
  const { getData } = useGetData();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getData("activities").then((res) => setActivities(res.data.data));
  }, []);
  console.log(activities);
  return (
    <div className="mt-5 container-lg">
      <div className="py-5">
        <h1>Activity Page</h1>
      </div>
    </div>
  );
}
