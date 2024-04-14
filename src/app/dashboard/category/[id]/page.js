"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";

export default function DetailCategoryPage({ params }) {
  const { getData } = useGetData();
  const [category, setCategory] = useState();
  useEffect(() => {
    getData(`category/${params.id}`).then((res) =>
      setCategory(res?.data?.data)
    );
  }, []);
  console.log(category);
  return (
    <div className="container-lg mt-5">
      <div className="row py-5">
        <h1>Detail Category</h1>
      </div>
    </div>
  );
}
