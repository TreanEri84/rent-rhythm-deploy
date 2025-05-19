import React from "react";

export default function MascotDisplay({ theme }) {
  return (
    <div style={{
      width: 140, height: 140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <img 
        src={`/mascots/${theme}.png`} 
        alt={theme + " mascot"} 
        style={{
          width: "100%", height: "100%",
          animation: "bounce 2s infinite"
        }}
      />
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-18px);}
          }
        `}
      </style>
    </div>
  );
}
