// libs
import { motion } from "framer-motion";
import { RefObject, useRef } from "react";
import { useRouter } from "next/router";
// components
// hooks
// store
import { careerHeaderImage } from "../../store/allData";
// utils & animation
import { fancyBtns } from "../../utils/animation";
import { fancyBtnHandler } from "../../utils/util";
import Image from "next/image";

interface props {
  allRefs: {
    bioRef: RefObject<HTMLDivElement>;
    eduRef: RefObject<HTMLDivElement>;
    skillsRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
  };
}

const HeaderImg: React.FC<props> = ({ allRefs }) => {
  const router = useRouter();
  const bioBtnRef = useRef<HTMLButtonElement>(null);
  const eduBtnRef = useRef<HTMLButtonElement>(null);
  const skillsBtnRef = useRef<HTMLButtonElement>(null);
  const contactBtnRef = useRef<HTMLButtonElement>(null);
  const projectBtnRef = useRef<HTMLButtonElement>(null);

  const bioHandler = fancyBtnHandler(bioBtnRef, allRefs.bioRef);
  const skillsHandler = fancyBtnHandler(skillsBtnRef, allRefs.skillsRef);
  const eduHandler = fancyBtnHandler(eduBtnRef, allRefs.eduRef);
  const contactHandler = fancyBtnHandler(contactBtnRef, allRefs.contactRef);
  const projectHandler = () => {
    projectBtnRef.current!.style.left = "120%";
    setTimeout(() => {
      router.push("/projects");
    }, 100);
  };

  return (
    <motion.div layout className="header-img-container">
      <span>
        <img
          alt={careerHeaderImage.alt}
          src={careerHeaderImage.src}
        />
      </span>
      <motion.button
        variants={fancyBtns}
        custom={4}
        onClick={bioHandler}
        ref={bioBtnRef}
      >
        <h3>Biography</h3>
      </motion.button>
      <motion.button
        variants={fancyBtns}
        custom={8}
        onClick={eduHandler}
        ref={eduBtnRef}
      >
        <h3>Education</h3>
      </motion.button>
      <motion.button
        variants={fancyBtns}
        custom={5}
        onClick={skillsHandler}
        ref={skillsBtnRef}
      >
        <h3>Skills</h3>
      </motion.button>
      <motion.button
        variants={fancyBtns}
        custom={5}
        onClick={contactHandler}
        ref={contactBtnRef}
      >
        <h3>Contact</h3>
      </motion.button>
      <motion.button
        variants={fancyBtns}
        custom={8}
        onClick={projectHandler}
        ref={projectBtnRef}
      >
        <h3>Project</h3>
      </motion.button>
    </motion.div>
  );
};

export default HeaderImg;
