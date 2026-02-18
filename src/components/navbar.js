import React from "react";

function Navbar() {
  const sidenavbar = ["Product", "Live Demo", "Pricing", "Docs", "Changelog"];

  return (
    <nav style={styles.navbar}>
      {/* Left side: Logo */}
      <div style={styles.left}>
        <h2 style={styles.logo}>TrackOnFE</h2>
      </div>

      {/* Middle: Navigation links */}
      <ul style={styles.navLinks}>
        {sidenavbar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Right side: Buttons */}
      <div style={styles.right}>
        <button style={styles.btn}>Login</button>
        <button style={{ ...styles.btn, backgroundColor: "#61dafb", color: "#000" }}>
          Sign Up
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "white",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
    flexGrow: 1,
    justifyContent: "center",
    cursor: "pointer", // centers the links in the middle
  },
  right: {
    display: "flex",
    gap: "10px",
  },
  btn: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#444",
    color: "white",
    cursor: "pointer",
  },
};

export default Navbar;