"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-lg justify-content-between align-items-start">
        <Link href="/" className="navbar-brand">
          Kelana
        </Link>
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
            <div className="nav-link dropdown ms-md-5">
              <Link
                href="/"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Muhammad Subhan Ramdhani
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/" className="dropdown-item">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/" className="dropdown-item">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
