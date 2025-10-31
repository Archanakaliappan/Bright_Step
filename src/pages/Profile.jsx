import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      navigate("/assessment"); // move to assessment page later
    }, 2000);
  };

  return (
    <div className="container py-5">
      {/* App Logo */}
      <div className="text-center mb-4">
        <img
          src="src/assets/logo.png"
          alt="App Logo"
          style={{ width: "80px", height: "80px" }}
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-3">
        <h2 className="fw-bold">Complete Your Profile</h2>
        <p className="text-muted">
          Help us personalize your career guidance experience
        </p>
      </div>

      {/* Form Section */}
      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h5 className="fw-semibold mb-3">Student Information</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Phone Number</label>
            <input
  type="tel"
  className="form-control"
  placeholder="Enter your phone number"
  pattern="[0-9]{10}"
  maxLength="10"
  inputMode="numeric"
  title="Please enter a valid 10-digit number"
  required
/>
          </div>

          <div className="mb-3">
  <label className="form-label">District</label>
  <select className="form-select" required>
    <option value="">Select your district</option>

    {/* Jammu Division */}
    <optgroup label="Jammu Division">
      <option value="Jammu">Jammu</option>
      <option value="Kathua">Kathua</option>
      <option value="Samba">Samba</option>
      <option value="Udhampur">Udhampur</option>
      <option value="Reasi">Reasi</option>
      <option value="Rajouri">Rajouri</option>
      <option value="Poonch">Poonch</option>
      <option value="Doda">Doda</option>
      <option value="Kishtwar">Kishtwar</option>
      <option value="Ramban">Ramban</option>
    </optgroup>

    {/* Kashmir Division */}
    <optgroup label="Kashmir Division">
      <option value="Srinagar">Srinagar</option>
      <option value="Budgam">Budgam</option>
      <option value="Ganderbal">Ganderbal</option>
      <option value="Anantnag">Anantnag</option>
      <option value="Pulwama">Pulwama</option>
      <option value="Shopian">Shopian</option>
      <option value="Kulgam">Kulgam</option>
      <option value="Baramulla">Baramulla</option>
      <option value="Kupwara">Kupwara</option>
      <option value="Bandipora">Bandipora</option>
    </optgroup>
  </select>
</div>


          <div className="mb-3 text-start">
            <label className="form-label">Current Class</label>
            <select className="form-select" required>
              <option value="">Select your class</option>
              <option value="10">Class 10</option>
              <option value="12">Class 12</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100 py-2">
              Continue to Assessment
            </button>
          </div>
        </form>
      </div>

      {/* Alert or small pop message */}
      {showAlert && (
        <div
          className="alert alert-info mt-4 text-center mx-auto"
          style={{ maxWidth: "500px" }}
        >
          Complete your assessment to view recommendations!
        </div>
      )}
    </div>
  );
}

export default Profile;
