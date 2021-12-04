import { motion } from "framer-motion";
import { RefObject, useRef } from "react";
import { useRouter } from "next/router";
import { fancyBtns } from "../../utils/animation";
import { fancyBtnHandler } from "../../utils/util";
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

  const bioHandler = fancyBtnHandler(bioBtnRef, allRefs.bioRef);
  const skillsHandler = fancyBtnHandler(skillsBtnRef, allRefs.skillsRef);
  const eduHandler = fancyBtnHandler(eduBtnRef, allRefs.eduRef);
  const contactHandler = fancyBtnHandler(contactBtnRef, allRefs.contactRef);
  const projectHandler = () => {
    router.push("/projects");
  };

  return (
    <motion.div layout className="flex relative w-full h-full">
      <img
        alt=""
        src="/media/aly3n.jpg"
        className="w-full h-full mx-auto rounded-b-2xl shadow-2xl"
      />
      <motion.button
        variants={fancyBtns}
        custom={4}
        className=" w-[13.6vw] h-[14.85vw] top-[9.2vw] left-[9.5vw]  text-[3.4vw] bg-secondary-400/80 rotate-45 absolute  flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:bg-secondary-400/30 hover:text-primary-200 shadow-2xl  font-medium"
        onClick={bioHandler}
        ref={bioBtnRef}
      >
        <h3 className="-rotate-45 ">Biography</h3>
      </motion.button>
      <motion.button
        variants={fancyBtns}
        custom={8}
        className=" w-[13.5vw] h-[13.6vw]  top-[39.9vw] left-[19.1vw] text-[3.2vw] bg-secondary-400/80 rotate-45 absolute  flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:bg-secondary-400/30 hover:text-primary-200 shadow-2xl  font-medium"
        onClick={eduHandler}
        ref={eduBtnRef}
      >
        <h3 className="-rotate-45 ">Education</h3>
      </motion.button>
      <motion.button
        variants={fancyBtns}
        custom={5}
        className=" w-[13.5vw] h-[14.6vw] top-[18vw] left-[60.4vw] text-[5.5vw] bg-secondary-400/80 rotate-45 absolute  flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:bg-secondary-400/30 hover:text-primary-200 shadow-2xl  font-medium"
        onClick={skillsHandler}
        ref={skillsBtnRef}
      >
        <h3 className="-rotate-45 ">Skills</h3>
      </motion.button>
      <motion.button
        variants={fancyBtns}
        custom={5}
        className=" w-[13.5vw] h-[14.6vw] top-[17.5vw] left-[80.7vw] text-[3.9vw] bg-secondary-400/80 rotate-45 absolute  flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:bg-secondary-400/30 hover:text-primary-200 shadow-2xl  font-medium"
        onClick={contactHandler}
        ref={contactBtnRef}
      >
        <h3 className="-rotate-45 ">Contact</h3>
      </motion.button>
      <motion.button
        variants={fancyBtns}
        custom={8}
        className=" w-[13.4vw] h-[14.8vw] top-[37.9vw] left-[79.8vw] text-[4.1vw] bg-secondary-400/80 rotate-45 absolute  flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:bg-secondary-400/30 hover:text-primary-200 shadow-2xl  font-medium"
        onClick={projectHandler}
      >
        <h3 className="-rotate-45 ">Project</h3>
      </motion.button>
    </motion.div>
  );
};

export default HeaderImg;
