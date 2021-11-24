import React from "react";
import { motion } from "framer-motion";
import { firstPage } from "../../utils/animation";
import HeaderImg from "./HeaderImg";
import Biography from "./Biography";
import { AnimateSharedLayout } from "framer-motion";
import Skills from "./Skills";
import EduList from "./EduList";
const Career: React.FC = (): JSX.Element => {
  return (
    <AnimateSharedLayout>
      <motion.div
        layout
        initial="hidden"
        animate="visible"
        variants={firstPage}
        exit="out"
        className=" w-full h-full bg-secondary-800/60 text-white flex flex-col justify-between "
      >
        {/* first */}
        <HeaderImg />

        {/* second */}
        <Biography />

        {/* Third */}
        <Skills />

        {/* 4th */}
        <EduList />
        <div className="h-96"></div>
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Career;
