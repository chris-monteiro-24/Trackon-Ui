import React from "react";

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li>Campaigns</li>
        <li>Landers</li>
        <li>Offers</li>
        <li>Rotations</li>
        <li>Traffic Sources</li>
        <li>Reports</li>
        <li>Users</li>
        <li>Files</li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  menu: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    fontWeight: "500",
  },
};

export default Sidebar;