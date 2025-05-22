import React from "react";

const themes = [
  { name: "Fox", key: "fox" },
  { name: "Squirrel", key: "squirrel" },
  { name: "Pigeon", key: "pigeon" },
];

export default function ThemeSelector({ theme, setTheme }) {
  return (
    <div style={{ margin: "1rem 0", display: "flex", gap: "1rem" }}>
      {themes.map((t) => (
        <button
          key={t.key}
          onClick={() => setTheme(t.key)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: theme === t.key ? "2px solid #4caf50" : "1px solid #ccc",
            background: theme === t.key ? "#e0ffe0" : "#fff",
            fontWeight: theme === t.key ? "bold" : "normal",
            cursor: "pointer",
          }}
        >
          {t.name}
        </button>
      ))}
    </div>
  );
}
