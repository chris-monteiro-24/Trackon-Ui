function Navbar() {
  const sidenavbar = ["Product", "Live Demo", "Pricing", "Docs", "Changelog"];

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="left">
        <h2 className="logo navbarLogo">TrackOnFE</h2>
      </div>

      {/* Middle: Navigation links */}
      <ul className="navLinks">
        {sidenavbar.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Right side: Buttons */}
      <div className="right">
        <button className="btn btn-primary btn-letstalk">Let's Talk</button>
      </div>
    </nav>
  );
}

export default Navbar;
