import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Later, add your real login validation here
    navigate("/Dashboard"); // This moves to the Home page after login
  };

  return (
    <div className=" container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "350px", borderRadius: "15px" }}>
        {/* Logo Section */}
        <h2 className="text-center mb-3">Bright Step</h2>
        <p className="text-center text-muted mb-4">Welcome back! Please sign in</p>

        {/* Login Form */}
        <form onSubmit={handleSignIn}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center mt-3">
          Need an account?{" "}
          <Link to="/signup" className="text-decoration-none fw-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
