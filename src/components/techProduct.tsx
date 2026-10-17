import { use } from "react";
import type { Technology } from "../types/type";
import "./techProduct.css";


export interface TechProductProps {
  techProductpromise: Promise<Technology[]>;
  onAddToStack: (technology: Technology) => void;
}

export default function TechProduct({
  techProductpromise: technology,
  onAddToStack,
}: TechProductProps) {
  const techProductdata = use(technology);
  return (
    <div className="product-grid">
      {techProductdata.map((technology) => (
        <article className="technology-card">
          <div className="card-top">
            <img
              className="technology-icon"
              src={technology.icon}
              alt={`${technology.name} logo`}
            />

            <span className="technology-badge">{technology.badge}</span>
          </div>

          <h3>{technology.name}</h3>

          <p className="technology-description">{technology.description}</p>

          <div className="card-divider" />

          <div className="technology-meta">
            <span className="category-tag">{technology.category}</span>

            <span className="difficulty">{technology.difficulty}</span>

            <span className="rating">
              <span>★</span> {technology.rating}
            </span>
          </div>

          <button
            className="add-button"
            onClick={() => {
              onAddToStack(technology);
            }}
          >
            Add to Stack
          </button>
        </article>
      ))}
    </div>
  );
}
