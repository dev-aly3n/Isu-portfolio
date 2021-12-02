import { motion } from "framer-motion";
import { RefObject } from "react";

interface props {
    allRefs:{
    bioRef:RefObject<HTMLDivElement>;
    eduRef:RefObject<HTMLDivElement>;
    skillsRef:RefObject<HTMLDivElement>;
    contactRef:RefObject<HTMLDivElement>;
  }
}

const HeaderImg: React.FC<props> = ({allRefs}) => {

  const bioHandler = () => { 
    allRefs.bioRef.current!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
   }
  const projectHandler = () => { 
    // allRefs.projectRef.current!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
   }
  const skillsHandler = () => { 
    allRefs.skillsRef.current!.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
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
      <button
        className=" w-[13.6vw] h-[14.85vw] bg-secondary-400 rotate-45 absolute top-[9.2vw] left-[9.5vw] flex justify-center items-center cursor-pointer
    duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[3.4vw] font-medium"
    onClick={bioHandler}
      >
        <h3 className="-rotate-45 ">Biography</h3>
      </button>
      <button
        className=" w-[13.5vw] h-[13.6vw] bg-secondary-400/75 rotate-45 absolute top-[39.9vw] left-[19.1vw] flex justify-center items-center cursor-pointer
    duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[3.2vw] font-medium"
    onClick={eduHandler}
    >
      <h3 className="-rotate-45 ">Education</h3>
      </button>
      <button
        className=" w-[13.5vw] h-[14.6vw] bg-secondary-400/75 rotate-45 absolute top-[18vw] left-[60.4vw] flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[5.5vw] font-medium"
        onClick={skillsHandler}
        >
        <h3 className="-rotate-45 ">Skills</h3>
      </button>
      <button
        className=" w-[13.5vw] h-[14.6vw] bg-secondary-400/75 rotate-45 absolute top-[17.5vw] left-[80.7vw] flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[3.9vw] font-medium"
        onClick={contactHandler}
        >
        <h3 className="-rotate-45 ">Contact</h3>
      </button>
      <button
        className=" w-[13.4vw] h-[14.8vw] bg-secondary-400/75 rotate-45 absolute top-[37.9vw] left-[79.8vw] flex justify-center items-center cursor-pointer
        duration-1000 rounded-md hover:opacity-50 shadow-2xl text-[4.1vw] font-medium"
        onClick={projectHandler}
      >
        <h3 className="-rotate-45 ">Project</h3>
      </button>
    </motion.div>
  );
};

export default HeaderImg;
