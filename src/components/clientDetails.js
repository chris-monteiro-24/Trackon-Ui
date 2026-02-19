import React from "react";
import "../App.css";

function ClientDetails() {
  const clients = [
    {
      name: "",
      company: "Zentryx",
      details: "Specializes in affiliate campaign optimization and lead generation.",
      photo: "https://via.placeholder.com/80"
    },
    {
      name: "",
      company: "Elexty",
      details: "Focuses on performance tracking and ROI analysis for digital ads.",
      photo: "https://via.placeholder.com/80"
    },
    {
      name: "",
      company: "Nexaa Insights",
      details: "Expert in traffic distribution, conversion funnels, and A/B testing.",
      photo: "https://via.placeholder.com/80"
    },
  
  ];

  return (
    <div className="client-container">
      {clients.map((c, index) => (
        <div key={index} className="client-card">
          <img src={c.photo} alt={c.name} className="client-photo" />
          <h4 className="client-name">{c.name}</h4>
          <p className="client-company">{c.company}</p>
          <p className="client-details">{c.details}</p>
        </div>
      ))}
    </div>
  );
}

export default ClientDetails;