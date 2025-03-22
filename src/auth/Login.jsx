import React from 'react'

const Login = () => {
  return (
    <div
      style={{ height: 100 + "vh" }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
        <form className="w-25 bg-light p-4 shadow rounded-3">
            <h1 className="text-center">Login</h1>
            <label className="form-label">Email</label>
            <input type="email" className="form-control mb-3" placeholder="Email" />
            <label className="form-label">Password</label>
            <input type="password" className="form-control mb-3" placeholder="Password" />
            <button className="btn btn-primary w-100">Login</button>
            <p className="text-center m-0 mt-3">Don't have an account? <a href="">Register</a></p>
        </form>
    </div>
  )
}

export default Login