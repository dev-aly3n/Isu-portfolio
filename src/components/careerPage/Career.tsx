import React from "react";
import { motion } from "framer-motion";
import { firstPage } from "../../utils/animation";
import HeaderImg from "./HeaderImg";
import Biography from "./Biography";
import { AnimateSharedLayout } from "framer-motion";
import Skills from "./Skills";
import EduList from "./EduList";
import Contacts from "./Contacts";
const Career: React.FC = (): JSX.Element => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={firstPage}
    exit="out"
    className="career-container "
    >
        <AnimateSharedLayout>
        {/* first */}
        <HeaderImg />

        {/* second */}
        <Biography />

        {/* Third */}
        <EduList />

        {/* 4th */}
        <Skills />

        {/* 5th */}
        <Contacts />


    </AnimateSharedLayout>
      </motion.div>
  );
};

export default Career;
