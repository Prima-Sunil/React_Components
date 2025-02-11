import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "outline" | "dotted" | "filled";
  className?: string;
  icon?: "left" | "right"; 
}

const LeftArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const RightArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "filled",
  className = "",
  icon, // Controls the icon placement
}) => {
  let buttonStyle = "";

  if (type === "outline") {
    buttonStyle =
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
  } else if (type === "dotted") {
    buttonStyle =
      "border border-dotted border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
  } else {
    buttonStyle = "bg-blue-500 text-white hover:bg-blue-600"; // Default: filled
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition flex items-center justify-center gap-2 ${buttonStyle} ${className}`}
    >
      {icon === "left" && <span className="w-5 h-5">{LeftArrowIcon}</span>}
      
      {text}

      {icon === "right" && <span className="w-5 h-5">{RightArrowIcon}</span>}
    </button>
  );
};

export default Button;
