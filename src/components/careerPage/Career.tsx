import React from "react";
import { motion } from "framer-motion";
import { firstPage } from "../../utils/animation";
const Career: React.FC = (): JSX.Element => {

  return (
    <motion.div layout initial="hidden" animate="visible" variants={firstPage} exit="out"
    className="text-5xl w-full h-screen bg-black text-white">
      <div>hello we are in hooommmmmmmmeeeeee body</div>
      <div>we're going to do verrrrrrrrrry interesting stuff interesting </div>
    </motion.div>
  );
};

export default Career;
