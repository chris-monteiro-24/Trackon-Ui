import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSect";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <HeroSection/>
        <main style={{ flex: 1, padding: "20px" }}>
          <h1>Dashboard</h1>
          <p>Welcome to TrackOn — your professional tracker!</p>
        </main>
      </div>
  );
}

export default App;
