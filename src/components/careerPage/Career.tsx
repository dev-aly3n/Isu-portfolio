// libs
import React,{useRef,useEffect} from "react";
import { useRouter } from "next/router";
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
import { firstPage } from "../../utils/animation";

const Career: React.FC = (): JSX.Element => {
  const router = useRouter();
  const bioRef = useRef(null);
  const eduRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <motion.div
    initial="hidden"
    animate={"visible"}
    variants={firstPage}
    exit="out"
    className="career-container "
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
      </motion.div>
  );
};

export default Career;
