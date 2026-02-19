import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSect";
import "./App.css";

import AppDetails from "./components/appDetails";

function App() {
  return (
    <div className="container">
      <Navbar />
      <HeroSection/>
        <main style={{ flex: 1, padding: "20px" }}>
          <h1>Dashboard</h1>
          <p>Welcome to TrackOn — your professional tracker!</p>
        </main>
        <AppDetails/>
      </div>
  );
}

export default App;
