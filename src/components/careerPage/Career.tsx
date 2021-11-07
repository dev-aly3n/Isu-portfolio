import React from "react";
import { motion } from "framer-motion";
import { firstPage } from "../../utils/animation";
const Career: React.FC = (): JSX.Element => {

  return (
    <motion.div layout initial="hidden" animate="visible" variants={firstPage} exit="out"
    className="text-5xl w-full h-full bg-gray-800 text-white flex flex-col justify-between">
      {/* first */}
      <div className="flex relative w-full h-full" >
      <img alt="" src="/aly3n.jpg" className="w-1/2 h-full mx-auto rounded-b-2xl" />
      </div>
      <div className=" h-screen w-full">

      </div>

    </motion.div>
  );
};

export default Career;
