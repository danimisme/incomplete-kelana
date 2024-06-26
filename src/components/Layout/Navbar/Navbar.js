"use client";
import useAuth from "@/services/useAuth";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "@/redux/slices/UserLoggedSlice";
import { setUser } from "@/redux/slices/UserLoggedSlice";

export default function Navbar() {
  const { userLog } = useAuth();
  // const [user, setUser] = useState({});
  const router = useRouter();
  const [navStyle, setNavStyle] = useState("");
  const user = useSelector((state) => state.userLogged.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getUserLogged();
  }, []);

  const logout = async () => {
    await userLog("logout");
    dispatch(clearUser());
    router.push("/login");
  };

  const handleScroll = () => {
    if (window.scrollY >= 100 && window.scrollY < 500) {
      setNavStyle(styles.hide);
    } else if (window.scrollY >= 500) {
      setNavStyle(styles.scrolled);
    } else {
      setNavStyle(styles.show);
    }
  };

  const getUserLogged = () => {
    if (localStorage.getItem("token")) {
      userLog("user", (res) => dispatch(setUser(res)));
    }
  };

  return (
    <nav className={`navbar fixed-top navbar-expand-lg  ${navStyle}`}>
      <div className="container-lg justify-content-between align-items-center">
        <div className="navbar-brand">
          <h2 className="m-0">Kelana</h2>
        </div>

        <div className="align-items-end text-end ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item ms-lg-3">
              <Link href="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link href="/activity" className="nav-link">
                Activity
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link href="/promo" className="nav-link" aria-disabled="true">
                Promo
              </Link>
            </li>
            {user?.role === "admin" && (
              <li className="nav-item ms-lg-3">
                <Link href="/dashboard/user" className="nav-link">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end align-items-start "
          id="navbarSupportedContent"
        >
          {user?.name ? (
            <div className="nav-link dropdown ">
              <Link
                href="/"
                className="nav-link dropdown-toggle d-flex align-items-center"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.profilePictureUrl}
                  alt={user.name}
                  width={35}
                  height={35}
                  className="img-fluid rounded-circle me-2 profile_picture"
                />
                <p className="m-0">{user.name}</p>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/profile" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="dropdown-item">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/login" className="btn btn-outline-dark btn-sm ">
              <i className="bi bi-person-fill"></i> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
