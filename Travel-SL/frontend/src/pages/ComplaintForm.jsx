import React, { useState } from "react";
import "../styles/ComplaintForm.css";

const ComplaintForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/v1/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, complaint }),
    });
    if (response.ok) {
      alert("Complaint submitted successfully");
      setFullName("");
      setEmail("");
      setComplaint("");
    } else {
      alert("Failed to submit complaint");
    }
  };

  return (
    <div className="complaint-form-container">
      <form className="complaint-form" onSubmit={handleSubmit}>
        <h2>Submit a Complaint</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="complaint">Complaint</label>
          <textarea
            id="complaint"
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplaintForm;
