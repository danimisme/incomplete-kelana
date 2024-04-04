import { useEffect, useState } from "react";
import styles from "./Promo.module.css";
import useGetData from "@/services/useGetData";

export default function Promo() {
  const [promos, setPromos] = useState([]);
  const { getData } = useGetData();

  useEffect(() => {
    getData("promos").then((res) => setPromos(res.data.data));
  }, []);
  console.log(promos);
  return (
    <div>
      <h1>Promo</h1>
    </div>
  );
}
