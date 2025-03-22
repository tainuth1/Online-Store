import React from "react";
import { Link } from "react-router-dom";

const Resgister = () => {
  return (
    <div
      style={{ height: 100 + "vh" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
        <form className="w-25 bg-light p-4 shadow rounded-3">
            <h1 className="text-center">Register</h1>
            <label className="form-label">Username</label>
            <input type="text" className="form-control mb-3" placeholder="Username" />
            <label className="form-label">Email</label>
            <input type="email" className="form-control mb-3" placeholder="Email" />
            <label className="form-label">Password</label>
            <input type="password" className="form-control mb-3" placeholder="Password" />
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control mb-3" placeholder="Confirm Password" />
            <button className="btn btn-primary w-100">Register</button>
            <p className="text-center m-0 mt-3">Already have an account? <Link to={"/login"}>Login</Link></p>
        </form>
    </div>
  );
};

export default Resgister;
