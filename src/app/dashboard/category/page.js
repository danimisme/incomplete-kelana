"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
export default function CategoryPage() {
  const { getData } = useGetData();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);
  console.log(categories);
  return (
    <div className="mt-5 container-lg">
      <div className="row py-5">
        <h1>Category Page</h1>
      </div>
    </div>
  );
}
