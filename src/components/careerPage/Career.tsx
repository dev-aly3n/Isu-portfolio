import React from "react";
import { motion } from "framer-motion";
import { firstPage } from "../../utils/animation";
import HeaderImg from "./HeaderImg";
import Biography from "./Biography";
const Career: React.FC = (): JSX.Element => {

  return (
    <motion.div layout initial="hidden" animate="visible" variants={firstPage} exit="out"
    className=" w-full h-full bg-secondary-800 text-white flex flex-col justify-between">
      {/* first */}
  <HeaderImg/>

      {/* second */}
<Biography/>

    </motion.div>
  );
};

export default Career;
