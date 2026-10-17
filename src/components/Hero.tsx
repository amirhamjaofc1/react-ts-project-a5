import "./Hero.css";
import banner from "../assets/banner-stack.png"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="hero-btn primary-btn">
              Explore Technologies
            </a>

            <a href="#about" className="hero-btn secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={banner}
            alt="Colorful 3D technology stack illustration"
          />
        </div>
      </div>
    </section>
  );
}
