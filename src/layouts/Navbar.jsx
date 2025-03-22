import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="navbar bg-light shadow">
      <div className="container">
        <h2 className="logo">Logo</h2>
        <ul className="list-unstyled d-flex align-items-center gap-5 m-0">
          <li>
            <Link to={"/"} className="fs-5 text-decoration-none fw-medium">
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/category"}
              className="fs-5 text-decoration-none fw-medium"
            >
              Category
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="fs-5 text-decoration-none fw-medium">
              Cart
            </Link>
          </li>
        </ul>
        <div className="d-flex gap-3">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="btn btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-basket"
              viewBox="0 0 16 16"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
            </svg>
          </button>
          <button className="btn btn-danger">Logout</button>
        </div>
      </div>
      <div
        style={{
          width: "400px",
          height: "91.5vh",
          right: show ? "0px" : "-400px",
          top: "62px",
          transition: "all .4s ease"
        }}
        className="position-fixed bg-danger"
      ></div>
    </div>
  );
};

export default Navbar;
