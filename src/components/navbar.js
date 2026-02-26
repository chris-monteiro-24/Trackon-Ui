import { Link } from 'react-scroll';
import config from '../configurations/index';

function Navbar() {
  const sidenavbar = [{
    name: "Product",
    to: "appDetails"
  }, {
    name: "Pricing",
    to: "Pricing"
  }, {
    name: "Contact",
    to: "footer"
  }, {
    name: "Live Demo",
    to: "Live Demo"
  }];

  console.log("Current Configurations:", config); // Log the imported configurations to verify they are being imported correctly
  const handleLetstalkClick = () => {
    // Implement the logic for "Let's Talk" button click here
    console.log("Let's Talk button clicked!");
  }

  const handleLoginClick = () => {
    // Implement the logic for "Login" button click here
    console.log("Login button clicked!", config.urls.apiBaseUrl);
    window.open(config.urls.apiBaseUrl, "_blank");
  }

  return (
    <nav className="navbar">
      {/* Left side: Logo */}
      <div className="left">
        <h2 className="logo navbarLogo">TrackOn </h2>
      </div>

      {/* Middle: Navigation links */}

      <ul className="navLinks">
        {sidenavbar.map((item, index) => (
          <Link key={index} to={item.to} smooth={true} duration={500} className="navLink navLinks-textdecoration-none">
            {item.name}
          </Link>
        ))}
      </ul>

      {/* Right side: Buttons */}
      <div className="right">
        <button className="btn btn-primary btn-letstalk" data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >Let's Talk</button>
        <button className="btn btn-primary btn-letstalk" onClick={handleLoginClick}>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
