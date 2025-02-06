import React from "react";

interface TextProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  color?: "black" | "white" | "red" | "blue" | "green" | "yellow" | "purple" | "gray" | "pink" | "orange";
}

const Text: React.FC<TextProps> = ({
  tag = "p",
  children,
  className = "",
  fontSize,
  fontWeight,
  color = "default"
}) => {
  const Tag = tag;

  const baseStyles: Record<string, string> = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-semibold",
    h4: "text-xl font-medium",
    h5: "text-lg font-medium",
    h6: "text-base font-medium",
    p: "text-base",
    span: "text-sm",
  };
  const fontSizeStyles: Record<string, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const fontWeightStyles: Record<string, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const colorStyles: Record<string, string> = {
    black: "text-black dark:text-white",
    white: "text-white dark:text-black",
    red: "text-red-600 dark:text-red-400",
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
    purple: "text-purple-600 dark:text-purple-400",
    gray: "text-gray-600 dark:text-gray-400",
    pink: "text-pink-600 dark:text-pink-400",
    orange: "text-orange-600 dark:text-orange-400",
  };

  const combinedStyles = [
    fontSize ? fontSizeStyles[fontSize] : baseStyles[tag],
    fontWeight && fontWeightStyles[fontWeight],
    colorStyles[color],
    className
  ].filter(Boolean).join(" ");

  return <Tag className={combinedStyles}>{children}</Tag>;
};

export default Text;