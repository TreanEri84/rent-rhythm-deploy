import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white p-4 shadow rounded ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`p-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
