import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeButton from "./ThemeButton";

function ThemeApp() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default ThemeApp;
