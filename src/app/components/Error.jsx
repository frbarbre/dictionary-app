"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Error({ searchValue }) {
  const [badWord, setBadWord] = useState("");

  useEffect(() => {
    setBadWord(searchValue);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="max-w-[500px] mx-auto my-6"
    >
      <h1 className="text-[32px] md:text-[64px] font-medium italic">
        "{badWord}"
      </h1>
      <h2 className="text-[18px] md:text-[24px] text-[#a733ff]">
        u can't spell
      </h2>
      <hr className="bg-[#838383] my-2" />
      <p className="my-4">
        We're sorry, but we couldn't find any results for your search on our
        dictionary website. It seems that the word;{" "}
        <span className="font-bold">"{badWord}"</span> does not match any of our
        available entries. Please ensure that you have entered the correct word
        or phrase and try again.
      </p>

      <img src="/wordNotFound.png" className="w-[300px] mx-auto mt-[50px]" />
    </motion.div>
  );
}
