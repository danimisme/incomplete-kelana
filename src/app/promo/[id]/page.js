"use client";
import { useEffect, useState } from "react";
import useGetData from "@/services/useGetData";
import moment from "moment";

export default function DetailPromoPage({ params }) {
  const { getData } = useGetData();
  const [promo, setPromo] = useState({});
  useEffect(() => {
    getData(`promo/${params.id}`).then((res) => setPromo(res.data.data));
  }, []);

  console.log(promo);
  return (
    <div className="mt-5 container-lg">
      <div className="py-5 row">
        <h1>Detail Promo Page</h1>
        <div className="col-lg-6">
          <img src={promo.imageUrl} alt={promo.title} className="img-fluid" />
        </div>
        <div className="col-lg-6">
          <h3>{promo.title}</h3>
          <p className="m-3 border-bottom ">
            <span className="fw-bold">Description : </span>
            {promo.description}
          </p>
          <p className="m-3 border-bottom">
            <span className="fw-bold">Promo Code : </span>
            {promo.promo_code}
          </p>
          <p className="m-3 border-bottom">
            <span className="fw-bold">Minimum Claim Price : </span>
            {promo?.minimum_claim_price?.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <p className="m-3 border-bottom">
            <span className="fw-bold">Discount Price : </span>
            {promo?.promo_discount_price?.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </p>
          <p className="m-3 border-bottom">
            <span className="fw-bold">Terms Condition : </span>
            {promo.terms_condition}
          </p>
          <p className="m-3 border-bottom">
            <span className="fw-bold">Created At : </span>
            {moment(promo.createdAt).format("DD MMMM YYYY  HH:mm:ss")}
          </p>
          <p className="m-3 border-bottom">
            <span className="fw-bold">Last Update : </span>
            {moment(promo.updatedAt).format("DD MMMM YYYY  HH:mm:ss")}
          </p>
        </div>
      </div>
    </div>
  );
}
