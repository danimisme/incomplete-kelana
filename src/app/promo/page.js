"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";

export default function PromoPage() {
  const { getData } = useGetData();
  const [promos, setPromos] = useState([]);
  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  });
  return (
    <div className="mt-5 container-lg">
      <h1>Promo Page</h1>
      <div className="row">
        {promos.map((promo) => (
          <div key={promo.id} className="col-md-3 col-sm-6 p-3">
            <div className="card ">
              <img src={promo.imageUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{promo.title}</h5>
                <p className="card-text">{promo.description}</p>
                <a href="#" className="btn btn-outline-success">
                  View Detail<i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
