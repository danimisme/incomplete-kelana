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
        <div className="col-lg-10 col-10 mx-auto">
          <h1>Category Data</h1>
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
              {categories.map((category, index) => (
                <tr key={category.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className="text-center">
                    <button className="btn btn-outline-success me-2 mb-2 mb-md-0">
                      Edit
                    </button>
                    <button className="btn btn-outline-danger">Delete</button>
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
