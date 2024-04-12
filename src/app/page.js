import { Merriweather, Gothic_A1 } from "next/font/google";
import styles from "./page.module.css";
import Banner from "@/components/Fragments/Banner/Banner";
import Promo from "@/components/Fragments/Promo/Promo";
import Categories from "@/components/Fragments/Categories/Categories";
import Activities from "@/components/Fragments/Activities/Activities";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  const handleReset = () => {
    const select = document.getElementById("select_categories");
    select.value = "Select";
    getData("activities").then((res) => setActivities(res.data.data));
  };

  const handleFilter = async () => {
    const select = document.getElementById("select_categories");
    const value = select.value;
    getData(`activities-by-category/${value}`).then((res) =>
      setActivities(res.data.data)
    );
  };

  return (
    <main>
      <div
        className={` ${styles.jumbotron} d-flex align-items-center justify-content-center text-white`}
      >
        <h1
          className={`${gothic.className} ${styles.text_shadow} text-center fs-1`}
        >
          Adventure to Explore <br /> Through the Beautiful World
        </h1>
      </div>
      <Banner />
      <Promo />
      <Categories />
      <Activities />
    </main>
  );
}
