import * as React from "react";
import "./Confetti.css";

const Confetti: React.FC = () => {
  // Create an array of confetti pieces
  const confettiPieces = Array.from({ length: 100 }, (_, i) => i);

  return (
    <div className="relative w-full h-full overflow-hidden bg-background">
      {confettiPieces.map((_, index) => (
        <div
          key={index}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
            left: `${Math.random() * 100}vw`,
            top: `${Math.random() * 100}vh`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `1s`,
          }}
        ></div>
      ))}
      <div className="relative z-10 text-primary text-4xl font-bold flex items-center justify-center h-full">
        <span>Your Order is Successful</span>
      </div>
    </div>
  );
};

export default Confetti;
