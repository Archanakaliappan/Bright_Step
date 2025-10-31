import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [created, setCreated] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    // 🔹 Later, you’ll replace this with real backend signup logic
    setCreated(true);
  };

  return (
    <div
      className=" container-fluid d-flex justify-content-center align-items-center min-vh-100 w-100"
      style={{ backgroundColor: "#f8f9fa", margin: 0, padding: 0 }}
    >
      <div className="card shadow p-4" style={{ width: "350px", borderRadius: "15px" }}>
        <h2 className="text-center mb-3">Create an Account</h2>
       

        <form onSubmit={handleSignup}>
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

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Create Account
          </button>
        </form>

        {/* ✅ Show success message after clicking Create Account */}
        {created && (
          <div className="alert alert-success text-center mt-3 p-2" role="alert">
            Account has been created!
          </div>
        )}

        {/* 🔙 Back to Login link */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/" className="text-decoration-none fw-semibold">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
