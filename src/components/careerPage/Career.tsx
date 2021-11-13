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
      <div className=" w-[13.6vw] h-[14.85vw] bg-secondary-400 rotate-45 absolute top-[9.2vw] left-[9.5vw] flex justify-center items-center cursor-pointer
      duration-1000 rounded-md hover:opacity-50 shadow-2xl">
        <p className="-rotate-45 ">Biography</p>
      </div>
      <div className=" w-[13.5vw] h-[13.6vw] bg-secondary-400/75 rotate-45 absolute top-[39.9vw] left-[19.1vw] flex justify-center items-center cursor-pointer
      duration-1000 rounded-md hover:opacity-50 shadow-2xl">
        <p className="-rotate-45 ">Project</p>
      </div>
      <div className=" w-[13.5vw] h-[14.6vw] bg-secondary-400/75 rotate-45 absolute top-[18vw] left-[60.4vw] flex justify-center items-center cursor-pointer
      duration-1000 rounded-md hover:opacity-50 shadow-2xl">
        <p className="-rotate-45 ">Skills</p>
      </div>
      <div className=" w-[13.4vw] h-[14.8vw] bg-secondary-400/75 rotate-45 absolute top-[37.9vw] left-[79.8vw] flex justify-center items-center cursor-pointer
      duration-1000 rounded-md hover:opacity-50 shadow-2xl">
        <p className="-rotate-45 ">Education</p>
      </div>
      </div>

      {/* second */}
      <div className="flex relative w-full h-full">

      </div>

    </motion.div>
  );
};

export default Career;
