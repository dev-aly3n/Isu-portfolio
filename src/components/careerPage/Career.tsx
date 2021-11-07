import React from "react";
import { motion } from "framer-motion";
import { firstPage } from "../../utils/animation";
const Career: React.FC = (): JSX.Element => {

  return (
    <motion.div layout initial="hidden" animate="visible" variants={firstPage} exit="out"
    className="text-5xl w-full h-full bg-secondary-800 text-white flex flex-col justify-between">
      {/* first */}
      <div className="flex relative w-full h-full" >
      <img alt="" src="/aly3n.jpg" className="w-full h-full mx-auto rounded-b-2xl shadow-2xl" />
      <div className=" w-[14vw] h-[14.8vw] bg-black rotate-45 absolute top-[9.1vw] left-[9.1vw] flex justify-center items-center">
        <p className="-rotate-45 text-lg"> Skills</p>
      </div>
      </div>
      <div className=" h-0 w-full">

      </div>

    </motion.div>
  );
};

export default Career;
