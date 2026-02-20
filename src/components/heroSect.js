import { useState } from "react";

function HeroSection() {
  const sectNavBar = ["Main page", "Reports", "Campaign"];
  const [activeSection, setActiveSection] = useState("Main page");

  return (
    <section className="hero">
      {/* Banner */}
      <div className="banner">
        <p>TRACKON PROTECT IS HERE</p>
      </div>

      {/* Headline */}
      <h1 className="heading">The tracker for professionals!</h1>

      {/* Subheading */}
      <p className="subheading">
        A universal tracking platform capable of solving almost any task for
        affiliates or media buyers.
      </p>

      {/* Buttons */}
      <div className="buttons">
        <button className="primaryBtn">Get Started for free</button>
        <button className="secondaryBtn"></button>
      </div>

      {/* Section Nav Links */}
      <ul className="sectnavLinks">
        {sectNavBar.map((item, index) => (
          <li key={index} onClick={() => setActiveSection(item)}>
            {item}
          </li>
        ))}
      </ul>

      {/* Conditional Rendering */}
      <div className="dashboard-banner">
        {activeSection === "Reports" && (
          <img src="/images/reports.png" alt="Reports Preview" />
        )}
      </div>
    </section>
  );
}

export default HeroSection;
