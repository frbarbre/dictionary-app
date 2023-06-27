import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function Loading() {
  return (
    <div>
      <div className="flex fixed inset-0 min-h-[600px] w-screen justify-center items-center h-screen">
        <div className="flex flex-col justify-center gap-2">
          <motion.div
            className="w-16 h-16 flex justify-around"
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
          >
            <motion.span
              className="w-4 h-4 block bg-[#a733ff] rounded-lg"
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
            <motion.span
              className="w-4 h-4 block bg-[#a733ff] rounded-lg"
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
            <motion.span
              className="w-4 h-4 block bg-[#a733ff] rounded-lg"
              variants={loadingCircleVariants}
              transition={loadingCircleTransition}
            ></motion.span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-medium">Loading</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
