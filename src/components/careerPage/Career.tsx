import React,{useRef} from "react";
import { motion } from "framer-motion";
import { firstPage } from "../../utils/animation";
import HeaderImg from "./HeaderImg";
import Biography from "./Biography";
import { AnimateSharedLayout } from "framer-motion";
import Skills from "./Skills";
import EduList from "./EduList";
import Contacts from "./Contacts";
const Career: React.FC = (): JSX.Element => {
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
