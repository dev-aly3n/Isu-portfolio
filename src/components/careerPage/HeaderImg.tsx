import { motion } from "framer-motion";
import { RefObject, useRef } from "react";
import {useRouter} from 'next/router'
import { fancyBtns } from "../../utils/animation";

interface props {
    allRefs:{
    bioRef:RefObject<HTMLButtonElement>;
    eduRef:RefObject<HTMLButtonElement>;
    skillsRef:RefObject<HTMLButtonElement>;
    contactRef:RefObject<HTMLButtonElement>;
  }
}

const HeaderImg: React.FC<props> = ({allRefs}) => {
  const router = useRouter();
  const bioBtnRef = useRef<HTMLButtonElement>(null);
  const eduBtnRef = useRef<HTMLButtonElement>(null);
  const skillsBtnRef = useRef<HTMLButtonElement>(null);
  const contactBtnRef = useRef<HTMLButtonElement>(null);

  const bioHandler = () => { 
    allRefs.bioRef.current!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
   }
  const projectHandler = () => { 
    router.push("/projects")
   }
  const skillsHandler = () => { 

    skillsBtnRef.current!.style.animation = "fancyBtnAnim 2s ease-in backwards";
    console.log(skillsBtnRef.current!.style.animation)
    setTimeout(() => {
      skillsBtnRef.current!.style.animation = ""; 
      console.log(skillsBtnRef.current!.style.animation)
      allRefs.skillsRef.current!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 1000);
   }
  const eduHandler = () => { 
    allRefs.eduRef.current!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
   }
  const contactHandler = () => { 
    allRefs.contactRef.current!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
   }

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
        className=" w-[13.6vw] h-[14.85vw] bg-secondary-400 rotate-45 absolute top-[9.2vw] left-[9.5vw] flex justify-center items-center cursor-pointer
    duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[3.4vw] font-medium"
    onClick={bioHandler}
      >
        <h3 className="-rotate-45 ">Biography</h3>
      </motion.button>
      <motion.button
            variants={fancyBtns}
            custom={8}
        className=" w-[13.5vw] h-[13.6vw] bg-secondary-400/75 rotate-45 absolute top-[39.9vw] left-[19.1vw] flex justify-center items-center cursor-pointer
    duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[3.2vw] font-medium"
    onClick={eduHandler}
    >
      <h3 className="-rotate-45 ">Education</h3>
      </motion.button>
      <motion.button
            variants={fancyBtns}
            custom={5}
        className=" w-[13.5vw] h-[14.6vw] bg-secondary-400/80 rotate-45 absolute top-[18vw] left-[60.4vw] flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:bg-secondary-400/30 hover:!scale-110  shadow-2xl text-[5.5vw] font-medium"
        onClick={skillsHandler}
        ref={skillsBtnRef}
        >
        <h3 className="-rotate-45 ">Skills</h3>
      </motion.button>
      <motion.button
            variants={fancyBtns}
            custom={5}
        className=" w-[13.5vw] h-[14.6vw] bg-secondary-400/75 rotate-45 absolute top-[17.5vw] left-[80.7vw] flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[3.9vw] font-medium"
        onClick={contactHandler}
        >
        <h3 className="-rotate-45 ">Contact</h3>
      </motion.button>
      <motion.button
            variants={fancyBtns}
            custom={8}
        className=" w-[13.4vw] h-[14.8vw] bg-secondary-400/75 rotate-45 absolute top-[37.9vw] left-[79.8vw] flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[4.1vw] font-medium"
        onClick={projectHandler}
      >
        <h3 className="-rotate-45 ">Project</h3>
      </motion.button>
    </motion.div>
  );
};

export default HeaderImg;
