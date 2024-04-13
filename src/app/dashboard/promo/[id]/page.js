"use client";
import useGetData from "@/services/useGetData";
import { useEffect, useState } from "react";
export default function DetailPromoPage({ params }) {
  const { getData } = useGetData();
  const [promo, setPromo] = useState({});
  useEffect(() => {
    getData(`promo/${params.id}`).then((res) => setPromo(res?.data?.data));
  }, []);
  console.log(promo);
  return (
    <div className="mt-5 container-lg">
      <h1>Detail Promo Page</h1>
    </div>
  );
}
