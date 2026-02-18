import React from "react";

function HeroSection() {
 const sectNavBar =["Main page" ,"Reports", "Campaign"];
  return (
    <section style={styles.hero}>
      {/* Banner */}
      <div style={styles.banner}>
        <p>TRACKON PROTECT IS HERE</p>
      </div>

      {/* Headline */}
      <h1 style={styles.heading}>The tracker for professionals!</h1>

      {/* Subheading */}
      <p style={styles.subheading}>
        A universal tracking platform capable of solving almost any task for
        affiliates or media buyers.
      </p>

      {/* Buttons */}
      <div style={styles.buttons}>
        <button style={styles.primaryBtn}>Get Started for free</button>
        <button style={styles.secondaryBtn}>Live-demo</button>
      </div>
      
      <ul style={styles.sectnavLinks}> 
       {sectNavBar.map((item ,index ) =>
       <li key={index}> {item}</li>
       )}
      </ul>
      <section style={styles.hero}>
  {/* existing content */}

  {/* Full-size dashboard image */}
  <div className="dashboard-banner"></div>
</section>
    </section>
  );
}

const styles = {
    
  hero: {
    textAlign: "center",
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
    color: "#f9f9f9",
  },
  banner: {
    backgroundImage:"url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2djZWs1Y2Z0Y3c5a29qMHpuYjNzNHNtOWZtejF2bnZqb25mZ3pkbyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/EdealKz0LxKTGs0hYA/giphy.webp')",
    backgroundColor: "#007bff",
    padding: "8px 16px",
    display: "inline-block",
    borderRadius: "4px",
    marginBottom: "20px",
    fontWeight: "bold",
    cursor:"pointer"
  },
  heading: {
    fontSize: "2.5rem",
    margin: "20px 0 10px",
    color: "black",
    fontFamily:"roboto"
  },
  subheading: {
    fontSize: "1.4rem",
    maxWidth: "600px",
    margin: "0 auto 30px",
    color: "#007bff",
    fontFamily:"roboto"               
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  primaryBtn: {
    padding: "10px 30px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    },
  secondaryBtn: {
    padding: "10px 20px",
    border: "1px solid #007bff",
    borderRadius: "4px",
    backgroundColor: "white",
    color: "#007bff",
    cursor: "pointer",
  },
   sectnavLinks: {
    color:"black",
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
    flexGrow: 1,
    justifyContent: "center",
    cursor: "pointer", // centers the links in the middle
  },
  
};

export default HeroSection;