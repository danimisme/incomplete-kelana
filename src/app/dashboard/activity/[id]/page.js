"use client";
import { useState, useEffect } from "react";
import useGetData from "@/services/useGetData";
import useUpdate from "@/services/useUpdate";
import FormActivity from "@/components/Fragments/FormActivity/FormActivity";

export default function DetailActivityPage({ params }) {
  const [activity, setActivity] = useState({});
  const { getData } = useGetData();
  const { update } = useUpdate();
  useEffect(() => {
    getData(`activity/${params.id}`).then((res) => {
      setActivity(res.data.data);
    });
  }, []);

  const handleEditActivity = async (data) => {
    try {
      const res = await update(`update-activity/${params.id}`, data);
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-lg mt-5">
      <FormActivity activity={activity} onSubmit={handleEditActivity} />
    </div>
  );
}
