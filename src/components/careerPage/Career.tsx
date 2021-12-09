// libs
import React,{useRef, useContext} from "react";
import { motion } from "framer-motion";
import { AnimateSharedLayout } from "framer-motion";
// components
import HeaderImg from "./HeaderImg";
import Biography from "./Biography";
import EduList from "./EduList";
import Skills from "./Skills";
import Contacts from "./Contacts";
// hooks
// store
// utils & animation
import { firstPage, firstPage2 } from "../../utils/animation";
import { GlobalCtx } from "../../store/context/globalCtx";
import Footer from "../layout/Footer";

const Career: React.FC = (): JSX.Element => {
  const globCtx = useContext(GlobalCtx);

  const bioRef = useRef(null);
  const eduRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    exit="out"
    variants={globCtx.toCareer === 1 ? firstPage : firstPage2}
    className="career-container"
    >
        <AnimateSharedLayout>
        {/* first */}
        <HeaderImg allRefs={{bioRef,eduRef,skillsRef,contactRef}} />

        {/* second */}
        <Biography bioRef={bioRef} />

        {/* Third */}
        <EduList eduRef={eduRef} />

        {/* 4th */}
        <Skills skillsRef={skillsRef} />

        {/* 5th */}
        <Contacts contactRef={contactRef} />


    </AnimateSharedLayout>
    <span className="w-screen h-full">
    <Footer />
    </span>
      </motion.div>
  );
};

export default Career;
