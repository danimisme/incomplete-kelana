"use client";
import useAuth from "@/services/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { userLog } = useAuth();
  const [user, setUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    getUserLogged();
  }, []);

  const getUserLogged = () => {
    if (localStorage.getItem("token")) {
      userLog("user", (res) => {
        setUser(res);
      });
    }
  };

  const logout = async () => {
    await userLog("logout");
    setUser({});
    router.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-lg justify-content-between align-items-start">
        <h2>Kelana</h2>
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
          <div
            className="collapse navbar-collapse justify-content-between "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/" className="nav-link">
                  Promo
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-link disabled"
                  aria-disabled="true"
                >
                  Category
                </Link>
              </li>
            </ul>
            {user.name ? (
              <div className="nav-link dropdown ms-md-5">
                <Link
                  href="/"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.name}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/" className="dropdown-item">
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
              <Link
                href="/login"
                className="btn btn-outline-primary btn-sm ms-5"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
