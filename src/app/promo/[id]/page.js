"use client";
import { useEffect, useState } from "react";
import useGetData from "@/services/useGetData";

export default function DetailPromoPage({ params }) {
  const { getData } = useGetData();
  const [promo, setPromo] = useState({});
  useEffect(() => {
    getData(`promo/${params.id}`).then((res) => setPromo(res.data.data));
  }, []);
  console.log(promo);
  return (
    <div className="mt-5 container-lg">
      <div className="py-5">
        <h1>Detail Promo Page</h1>
        <p>Promo id : {params.id}</p>
      </div>
    </div>
  );
}
