import "./footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <span className="footer__logo-icon">DS</span>
              <span className="footer__logo-text">
                Dev <span className="footer__logo-accent">Stack</span>
              </span>
            </a>
            <p className="footer__description">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="footer__social">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>

          <nav className="footer__col" aria-label="Product">
            <h3 className="footer__heading">Product</h3>
            <ul className="footer__list">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technologies</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Company">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Legal">
            <h3 className="footer__heading">Legal</h3>
            <ul className="footer__list">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; 2026 Dev Stack. All rights reserved.
          </p>
          <ul className="footer__bottom-links">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
