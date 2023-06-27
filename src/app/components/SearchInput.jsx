import { motion } from "framer-motion";

export default function SearchInput(props) {
  return (
    <motion.form
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      onSubmit={props.handleSubmit}
      className={`flex relative items-center z-[-1]`}
    >
      <input
        type="text"
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        className={`font-bold w-full h-14 rounded-2xl outline-none focus:ring-[2px] focus:ring-[#a733ff] p-8 ${
          props.darkMode ? "bg-[#2d2d2d]" : "bg-gray-200"
        }`}
        placeholder="Search for a word..."
      />
      <img className="absolute right-10 w-6" src="/icon-search.svg" />
    </motion.form>
  );
}
