"use client";
import FormCategory from "@/components/Fragments/FormCategory/FormCategory";
import useGetData from "@/services/useGetData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toggleFormCategory } from "@/redux/slices/FormCategorySlice";
import { useDispatch } from "react-redux";
import styles from "./CategoryPage.module.css";
import useDelete from "@/services/useDelete";
export default function CategoryPage() {
  const { getData } = useGetData();
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { deleteData } = useDelete();

  const handleDelete = async (id) => {
    try {
      const res = await deleteData(`delete-category/${id}`);
      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData("categories").then((res) => setCategories(res.data.data));
  }, []);
  return (
    <div className="mt-5 container-lg">
      <div className="row py-5">
        <div className="col-lg-10 col-10 mx-auto">
          <div className="d-flex mb-3 align-items-center">
            <h1>Category Data</h1>
            <button
              className="btn btn-outline-success ms-2"
              onClick={() => dispatch(toggleFormCategory())}
            >
              <i className="bi bi-plus-circle fs-5 me-2"></i>Create Category
            </button>
          </div>
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
                      className={styles.image}
                    />
                  </td>
                  <td className="text-center">
                    <Link
                      href={`/dashboard/category/${category.id}`}
                      className="me-2 mb-2 mb-md-0"
                    >
                      <button className="btn btn-outline-success ">Edit</button>
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(category.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FormCategory />
    </div>
  );
}
