// libs
import { useState } from "react";
import { motion } from "framer-motion";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
// hooks
// store
// utils & animation

interface props {
  education: { name: string; field: string; about: string; image: string };
}

const Edu: React.FC<props> = ({ education }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.div layout className="flex flex-col my-3">
      <div
        className="flex justify-start items-center flex-wrap hover:cursor-pointer hover:bg-gray-500/5 duration-1000"
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        <motion.span layout className="text-3xl">
          <FontAwesomeIcon
            className={`duration-1000 ${isExpanded ? "rotate-90" : "rotate-0"}`}
            icon={faAngleRight}
          />{" "}
        </motion.span>
        <motion.img
          layout
          src={`/media/logos/${education.image}.png`}
          className="block w-[10vw] ml-3"
        />
        <motion.div layout className="flex flex-col ml-2">
          <h3 className="text-2xl font-semibold mb-10">{education.name}</h3>
          <p>{education.field}</p>
        </motion.div>
      </div>
      <motion.div layout className="w-full h-0.5 bg-white" />
      <motion.div
        layout
        className={`flex flex-col mx-2 my-3 px-5 overflow-hidden ${
          isExpanded ? "h-full" : "h-0"
        }`}
      >
        {education.about}
      </motion.div>
    </motion.div>
  );
};

export default Edu;
