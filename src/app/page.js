import { Merriweather } from "next/font/google";
import styles from "./page.module.css";
import Banner from "@/components/Fragments/Banner/Banner";
import Promo from "@/components/Fragments/Promo/Promo";
import Category from "@/components/Fragments/Categories/Categories";
import Categories from "@/components/Fragments/Categories/Categories";
import Activities from "@/components/Fragments/Activities/Activities";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Home() {
  return (
    <main>
      <div
        className={` ${styles.jumbotron} d-flex align-items-center justify-content-center text-white`}
      >
        <h1
          className={`${merriweather.className} ${styles.text_shadow} text-center`}
        >
          Berkelana Menjelajahi <br /> Semesta Yang Indah
        </h1>
      </div>
      <Banner />
      <Promo />
      <Categories />
      <Activities />
    </main>
  );
}
