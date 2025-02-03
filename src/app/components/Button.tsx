// // import React from "react";

// // const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
// //   return (
// //     <button
// //       onClick={onClick}
// //       className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
// //     >
// //       {text}
// //     </button>
// //   );
// // };

// // export default Button;

// import React from "react";

// interface ButtonProps {
//   text: string;
//   onClick: () => void;
//   type?: "outline" | "dotted" | "filled"; // Three button styles
//   className?: string;
// }

// const Button: React.FC<ButtonProps> = ({
//   text,
//   onClick,
//   type = "filled",
//   className = "",
// }) => {
//   let buttonStyle = "";

//   if (type === "outline") {
//     buttonStyle = "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
//   } else if (type === "dotted") {
//     buttonStyle = "border border-dotted border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
//   } else {
//     buttonStyle = "bg-blue-500 text-white hover:bg-blue-600"; // Default: filled
//   }

//   return (
//     <button
//       onClick={onClick}
//       className={`px-4 py-2 rounded-md transition ${buttonStyle} ${className}`}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;




import React, { JSX } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "outline" | "dotted" | "fil  led"; 
  className?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element; 
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "filled",
  className = "",
  leftIcon,
  rightIcon,
}) => {
  let buttonStyle = "";

  if (type === "outline") {
    buttonStyle = "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
  } else if (type === "dotted") {
    buttonStyle = "border border-dotted border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
  } else {
    buttonStyle = "bg-blue-500 text-white hover:bg-blue-600"; // Default: filled
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition flex items-center justify-center gap-2 ${buttonStyle} ${className}`}
    >
      {leftIcon && <span className="w-5 h-5">{leftIcon}</span>}
      {text}
      {rightIcon && <span className="w-5 h-5">{rightIcon}</span>}
    </button>
  );
};

export default Button;
