"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";

export default function Categories() {
  const [Categories, setCategories] = useState([]);
  const { getData } = useGetData();

  useEffect(() => {
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);

  return (
    <div>
      <h2>
        <i className="bi bi-geo-alt-fill"></i> Temukan Yang Kamu Sukai
      </h2>
      {Categories.map((category) => (
        <div key={category.id}>
          <p>{category.name}</p>
          <img src={category.imageUrl} alt={category.name} />
        </div>
      ))}
    </div>
  );
}
