"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PromoPage() {
  const { getData } = useGetData();
  const [promos, setPromos] = useState([]);
  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  }, []);
  return (
    <div className="mt-5 container-lg">
      <div className="row py-5">
        <div className="col-lg-10 col-10 mx-auto ">
          <h1>Data Promo</h1>
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
