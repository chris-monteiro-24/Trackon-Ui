import React from "react";
import "../App.css";

function PricingCards() {
  const plans = [
    {
      plan: "Basic Plan",
      price: "$19 /mo",
      features: [
        "Bot & proxy protection",
        "VPN & anti‑detect defense",
        "Blocks click farms & spy tools",
        "Works across all trackers",
        "14‑day free trial",
      ],
      color: "#4CAF50"
    },
    {
      plan: "Popular Plan",
      price: "$29 /mo",
      features: [
        "Auto installation",
        "Traffic up to 2M/day",
        "Unlimited users & domains",
        "Lifetime data retention",
        "Advanced security & support"
      ],
      color: "#2196F3"
    },
    {
      plan: "Premium Plan",
      price: "$49 /mo",
      features: [
        "Unlimited clicks volume",
        "Unlimited users & domains",
        "Lifetime data retention",
        "Improved traffic processing",
        "New interface & database architecture"
      ],
      color: "#FF9800"
    }
  ];

  return (
    <div>
      <div className="pricing-card-container">
        {plans.map((planData, index) => (
          <div
            key={index}
            className="pricing-card"
            style={{ borderTop: `4px solid ${planData.color}` }}
          >
            <h3 className="pricing-card-plan">{planData.plan}</h3>
            <p className="pricing-card-price">{planData.price}</p>
            <ul className="pricing-card-features">
              {planData.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="pricing-card-button">Purchase Now</button>
          </div>
        ))}
      </div>

      {/* Two buttons outside the cards */}
      <div className="pricing-global-buttons">
        <button className="btn btn-letstalk">Let's Talk</button>
        <button className="btn btn-services">Our Services</button>
      </div>
    </div>
  );
}

export default PricingCards;