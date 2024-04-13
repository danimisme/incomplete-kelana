"use client";
import styles from "./Sidebar.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  showSidebar,
  hideSidebar,
  toggleSidebar,
} from "@/redux/slices/SidebarSlice";
import Link from "next/link";
export default function Sidebar() {
  const sidebarShow = useSelector((state) => state.sidebar.sidebarShow);
  const dispacth = useDispatch();
  return (
    <div
      className={` ${styles.sidebar} ${
        sidebarShow ? styles.show : styles.hide
      }`}
    >
      <div className={styles.button} onClick={() => dispacth(toggleSidebar())}>
        {sidebarShow ? (
          <i className="bi bi-arrow-left-circle fs-1 "></i>
        ) : (
          <i className="bi bi-arrow-right-circle fs-1 "></i>
        )}
      </div>
      <h2>Dashboard</h2>
      <ul className="list-group list-group-flush mt-5">
        <Link href="/dashboard/user" className="text-decoration-none text-dark">
          <li className="list-group-item">User</li>
        </Link>
        <Link
          href="/dashboard/banner"
          className="text-decoration-none text-dark"
        >
          <li className="list-group-item">Banner</li>
        </Link>
        <Link
          href="/dashboard/promo"
          className="text-decoration-none text-dark"
        >
          <li className="list-group-item">Promo</li>
        </Link>
        <li className="list-group-item">Categoty</li>
        <li className="list-group-item">Activity</li>
      </ul>
    </div>
  );
}
