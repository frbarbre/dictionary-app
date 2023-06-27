"use client";

import FontToggle from "./FontToggle";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";

const Header = ({ fonts, setFonts, setDarkMode, darkMode }) => {
  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex justify-between items-center py-12"
    >
      <img src="/logo.svg" alt="logo" />
      <div className="flex gap-6">
        <div>
          <FontToggle fonts={fonts} setFonts={setFonts} darkMode={darkMode} />
        </div>
        <div>
          <DarkModeToggle setDarkMode={setDarkMode} darkMode={darkMode} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
