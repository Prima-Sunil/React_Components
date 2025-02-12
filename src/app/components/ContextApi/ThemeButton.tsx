import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import Text from "../Text";
import Button from "../Button";

function ThemeButton() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }
  const { theme, toggleTheme } = context;

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <Text tag="h1">Current Theme :{theme}</Text>
      <Button text="Toggle Theme" onClick={toggleTheme}></Button>
    </div>
  );
}

export default ThemeButton;
