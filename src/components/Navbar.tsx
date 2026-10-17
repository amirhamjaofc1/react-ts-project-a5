export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <span className="brand-logo">DS</span>
          <span className="brand-name">
            Dev<span>Stack</span>
          </span>
        </a>

        <div className="navbar-links">
          <a href="#" className="active">
            Home
          </a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="navbar-actions">
          <button className="signin-btn">Sign In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
