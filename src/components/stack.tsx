import type { Technology } from "../types/type";
import "./stack.css";

export interface StackProps {
  stack: Technology[];
  onRemove: (id: Technology['id']) => void;
  onClear: () => void;
}

export default function Stack({ stack, onRemove, onClear }: StackProps) {
  return (
    <aside className="stack-section">
      <h2>Your Stack</h2>

      <p className="stack-count">{stack.length} Technology Selected</p>

      {stack.length === 0 ? (
        <div className="empty-stack">Your stack is empty.</div>
      ) : (
        <div className="stack-list">
          {stack.map((technology, index) => (
            <div className="stack-item" key={`${technology.id}-${index}`}>
              <div className="stack-item-info">
                <div className="stack-icon">
                  <img src={technology.icon} alt={technology.name} />
                </div>

                <div>
                  <h3>{technology.name}</h3>
                  <p>{technology.category}</p>
                </div>
              </div>
              <button className="remove-button" onClick={() => onRemove(technology.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <button className="clear-button" onClick={onClear}>
        Clear Stack
      </button>
    </aside>
  );
}
