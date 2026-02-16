import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "20px" }}>
          <h1>Dashboard</h1>
          <p>Welcome to TrackOnFE — your professional tracker!</p>
        </main>
      </div>
    </div>
  );
}

export default App;
