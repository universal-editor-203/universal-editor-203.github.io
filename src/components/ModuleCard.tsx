import type { ModuleMeta } from "../types";

export interface ModuleCardProps {
  module: ModuleMeta;
  hrefBase?: string;
}

/** React card for a Universal Editor module (TypeScript). */
export function ModuleCard({ module, hrefBase = "editor.html" }: ModuleCardProps) {
  const href = `${hrefBase}${module.hash}`;
  return (
    <a
      href={href}
      style={{
        display: "block",
        background: "#141414",
        border: "1px solid #222",
        borderRadius: 12,
        padding: "1.35rem",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <h3 style={{ color: "#ff6b00", marginBottom: 6, fontSize: "1.05rem" }}>
        {module.title}
      </h3>
      <p style={{ color: "#888", fontSize: "0.9rem", margin: 0 }}>
        {module.description}
      </p>
    </a>
  );
}

export default ModuleCard;
