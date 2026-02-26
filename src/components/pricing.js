import React from "react";
import "../App.css";

function PricingCards() {
  const plans = [
    {
      plan: "Trial Plan",
      price: "Free",
      features: [
        "Bot & proxy protection",
        "VPN & anti‑detect defense",
        "Blocks click farms & spy tools",
        "Works across all trackers",
        "1 month free",
      ],
      color: "#000c01"
    },
    {
      plan: "Standard Plan",
      price: "$79.99 /mo",
      features: [
        "Auto installation",
        "Traffic up to 2M/day",
        "Unlimited users & domains",
        "Lifetime data retention",
        "Advanced security & support"
      ],
      color: "#2196F3"
    },
  ];

  return (
    <section className="pricing-section" id="Pricing">
    <div className="pricing-header">
      <h2>Our Pricing Plans</h2>
      <p>Choose the plan that fits your needs and scale with confidence.</p>
      </div>
      <div className="pricing-card-container">
        {plans.map((planData, index) => (
          <div
            key={index}
            className={`pricing-card border-top ${planData.plan === "Standard Plan" ? "standard-plan" : ""}`}>
            <h3 className="pricing-card-plan">{planData.plan}</h3>
            <p className="pricing-card-price">{planData.price}</p>
            <ul className="pricing-card-features">
              {planData.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="btn btn-letstalk"data-bs-toggle="modal"data-bs-target="#contactModal">
                     Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Two buttons outside the cards */}
      <div className="pricing-global-buttons">
        {/* <button className="btn btn-letstalk">Let's Talk</button> */}
      </div>
    </section>
  );
}

export default PricingCards;