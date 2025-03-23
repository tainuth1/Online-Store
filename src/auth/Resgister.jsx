import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Resgister = () => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    username: "",
    email: "",
    password: "",
    conFirmPassword: "",
  });
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === ""
    ) {
      alert("Field is empty");
    } else {
      if (formData.password !== formData.conFirmPassword) {
        alert("Confirm password not match");
      } else {
        const newUser = [...users, formData];
        setUsers(newUser);
        console.log(newUser);
        localStorage.setItem("users", JSON.stringify(newUser));
        navigate("/login");
      }
    }
  };
  return (
    <div
      style={{ height: 100 + "vh" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <form
        onSubmit={handleSubmit}
        className="w-25 bg-light p-4 shadow rounded-3"
      >
        <h1 className="text-center">Register</h1>
        <label className="form-label">Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.username}
          className="form-control mb-3"
          placeholder="Username"
        />
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.email}
          className="form-control mb-3"
          placeholder="Email"
        />
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.password}
          className="form-control mb-3"
          placeholder="Password"
        />
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          name="conFirmPassword"
          onChange={(e) => {
            handleChange(e);
          }}
          value={formData.conFirmPassword}
          className="form-control mb-3"
          placeholder="Confirm Password"
        />
        <button className="btn btn-primary w-100">Register</button>
        <p className="text-center m-0 mt-3">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Resgister;
