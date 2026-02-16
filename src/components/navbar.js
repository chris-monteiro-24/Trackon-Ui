import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <h2 style={styles.logo}>TrackOnFE</h2>
        <ul style={styles.navLinks}>
          <li>Product</li>
          <li>Live Demo</li>
          <li>Pricing</li>
          <li>Docs</li>
        </ul>
      </div>
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
    gap: "20px",
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