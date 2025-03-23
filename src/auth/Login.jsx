import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      alert("Empty Field");
    } else {
      let isFound = false;
      users.forEach((user) => {
        if (user.email === formData.email) {
          isFound = true;
          if (user.password === formData.password) {
            localStorage.setItem("isLogin", true);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
          } else {
            alert("wrong password");
          }
        }
      });
      if (isFound == false) {
        alert("This email is not register yet");
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
        <h1 className="text-center">Login</h1>
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
        <button className="btn btn-primary w-100">Login</button>
        <p className="text-center m-0 mt-3">
          Don't have an account? <Link to={"/register"}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
