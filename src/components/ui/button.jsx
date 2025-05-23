import * as React from "react";

export const Button = React.forwardRef(function Button({ className = "", ...props }, ref) {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm ${className}`}
      {...props}
    />
  );
});
