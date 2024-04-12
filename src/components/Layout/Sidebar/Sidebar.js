"use client";
import styles from "./Sidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
export default function Sidebar() {
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const dispacth = useDispatch();
  return (
    <div
      className={` ${styles.sidebar} ${
        sidebarShow ? styles.show : styles.hide
      }`}
    >
      <h1>Sidebar</h1>
    </div>
  );
}
