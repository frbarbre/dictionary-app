"use client";

import { useState } from "react";
import "./globals.css";
import Header from "./components/Header";
import Home from "./page.jsx";

export const metadata = {
  title: "Dictionary",
  description: "Generated by create next app",
};

export default function RootLayout() {
  const [fonts, setFonts] = useState("Sans Serif");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body
        className={`max-w-screen-md mx-auto	z-[-2] relative
        ${fonts === "Sans Serif" ? "font-inter" : ""} 
        ${fonts === "Serif" ? "font-lora" : ""} 
        ${fonts === "Mono" ? "font-inco" : ""}
        ${darkMode ? "text-white bg-black" : "text-black bg-white"}
        transition-all`}
      >
        <Header
          fonts={fonts}
          setFonts={setFonts}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
        <Home darkMode={darkMode} />
      </body>
    </html>
  );
}
