"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const FontToggle = ({ fonts, setFonts, darkMode }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="relative w-28">
      <div
        className="flex gap-4 items-center justify-end cursor-pointer"
        onClick={() => setActive((prev) => !prev)}
      >
        <h2 className="font-bold text-right">{fonts}</h2>
        <img
          className={`${
            active ? "rotate-180" : ""
          } transition-all duration-200`}
          src="/icon-arrow-down.svg"
          alt="arrow-icon"
        />
      </div>
      <AnimatePresence>
        {active && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${
              darkMode
                ? "bg-[#1F1F1F] border-[#1F1F1F] border-0 shadow-[#a733ff3a]"
                : "bg-white border-gray-200"
            } absolute bottom-[-170px] w-max mt-4 p-6 flex flex-col gap-4 shadow-2xl border-[1px] rounded-xl z-[999]`}
            onClick={() => setActive(false)}
          >
            <li
              className="font-inter cursor-pointer"
              onClick={() => setFonts("Sans Serif")}
            >
              Sans Serif
            </li>
            <li
              className="font-lora cursor-pointer"
              onClick={() => setFonts("Serif")}
            >
              Serif
            </li>
            <li
              className="font-inco cursor-pointer"
              onClick={() => setFonts("Mono")}
            >
              Mono
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FontToggle;
