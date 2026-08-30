import type { FlavorMeta } from "../types";
import { FLAVORS } from "../types";

export interface FlavorListProps {
  flavors?: readonly FlavorMeta[];
}

/** React list of official flavors (TypeScript). */
export function FlavorList({ flavors = FLAVORS }: FlavorListProps) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {flavors.map((f) => (
        <li
          key={f.id}
          style={{
            marginBottom: 8,
            padding: "0.75rem 1rem",
            background: "#141414",
            border: "1px solid #222",
            borderRadius: 8,
          }}
        >
          <strong style={{ color: "#ff6b00" }}>{f.name}</strong>
          {" "}
          <span style={{ color: "#888", fontSize: "0.85rem" }}>
            · {f.status}
          </span>
          {f.repo && (
            <>
              {" · "}
              <a href={f.repo} style={{ color: "#ff6b00" }}>
                repo
              </a>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default FlavorList;
