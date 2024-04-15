"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import Link from "next/link";
import useDelete from "@/services/useDelete";

export default function PromoPage() {
  const { getData } = useGetData();
  const [promos, setPromos] = useState([]);
  const { deleteData } = useDelete();
  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  }, []);

  const handleDelete = (id) => {
    deleteData(`delete-promo/${id}`).then((res) => {
      if (res.status === 200) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="mt-5 container-lg">
      <div className="row py-5">
        <div className="col-lg-10 col-10 mx-auto ">
          <div className="d-flex mb-3 align-items-center">
            <h1>Data Promo</h1>
            <Link href={`/dashboard/promo/create-promo`}>
              <button className="btn btn-success ms-2">
                <i className="bi bi-plus-circle fs-5 me-2"></i>Create Promo
              </button>
            </Link>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col" className="d-none d-md-table-cell">
                  Description
                </th>
                <th scope="col" colSpan={2} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {promos.map((promo, index) => (
                <tr key={promo.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{promo.title}</td>
                  <td className="d-none d-md-table-cell">
                    {promo.description.length > 50
                      ? promo.description.slice(0, 50) + " . . ."
                      : promo.description}
                  </td>
                  <td>
                    <Link href={`/dashboard/promo/${promo.id}`}>
                      <button className="btn btn-outline-success">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(promo.id)}
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
    </div>
  );
}
