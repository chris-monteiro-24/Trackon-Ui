

const Footer = () => {
  return (
    <section className="footer-section" id="footer">
      <footer className="footer border-top">
        <h3 className="footer-logo">TrackOn</h3>

        <div className="footer-content row">
          <div className="col-12 col-md-3 mb-4">
            <h4>Follow Us</h4>
            <p>Twitter: @TrackOn</p>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h4>Contact Us</h4>
            <p>Email: support@trackon.com</p>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h4>Legal</h4>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h4>Company</h4>
            <p>About Us</p>
            <p>Careers</p>
          </div>
        </div>

        <div className="footer-strip">
          © 2026 TrackOn. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;