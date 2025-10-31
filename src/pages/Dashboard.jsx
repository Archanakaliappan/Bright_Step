import React from "react";
import logo from "../assets/logo.png"; // adjust the path if needed
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      {/* Logo Section */}
      <div className="d-flex align-items-center justify-content-between px-3 py-0 ">
        <div className="d-flex align-items-center">
        <img
          src={logo}
          alt="Bright Step Logo"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "0px",
            marginRight: "0px",
          }}
        />
        <div>
          <h5 className="fw-bold mb-0">Bright Step</h5>
          <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
            Career Guidance Platform
          </p>
        </div>
        </div>
     

      {/* Navigation Menu */}
      <div className="d-flex gap-4">
        <Link to="/home" className="fw-semibold text-primary" style={{ cursor: "pointer" }}>
          Home
        </Link>
        <Link to ="/Exam" className="fw-semibold text-primary" style={{ cursor: "pointer" }}>
          Exams
        </Link>
        <Link to ="/Profile" className="fw-semibold text-primary" style={{ cursor: "pointer" }}>
          Profile
        </Link>
        <Link to="/Assessments" className="fw-semibold text-primary" style={{ cursor: "pointer" }}>
          Assessments
        </Link>
        <Link to ="/Recommendations" className="fw-semibold text-primary" style={{ cursor: "pointer" }}>
          Recommendations
        </Link>
      </div>
       </div>
    </div>
  );
}

export default Dashboard;
