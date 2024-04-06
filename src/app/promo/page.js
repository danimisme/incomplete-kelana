"use client";
import CardPromo from "@/components/Fragments/CardPromo/CardPromo";
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
          <CardPromo promo={promo} key={promo.id} />
        ))}
      </div>
    </div>
  );
}
