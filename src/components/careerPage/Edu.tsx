// libs
import { useState } from "react";
import { motion } from "framer-motion";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useOnScrollAnimation } from "../../hooks/useOnScrollAnimation";
import { secFading } from "../../utils/animation";
import Image from "next/image";
// hooks
// store
// utils & animation

interface props {
  education: { name: string; field: string; about: string; image: string };
}

const Edu: React.FC<props> = ({ education }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sec, controls] = useOnScrollAnimation();

  return (
    <motion.div
      ref={sec}
      variants={secFading}
      initial="hidden"
      animate={controls}
      className="edu-container"
    >
      <div onClick={() => setIsExpanded((prevState) => !prevState)}>
        <motion.span layout>
          <FontAwesomeIcon
            className={`duration-500 ${isExpanded ? "rotate-90" : "rotate-0"}`}
            icon={faAngleRight}
          />{" "}
        </motion.span>
        <motion.span layout>
          <Image
          quality={100}
            layout="fill"
            objectFit="cover"
            src={`/media/logos/${education.image}.png`}
          />
        </motion.span>
        <motion.div layout>
          <h3>{education.name}</h3>
          <p>{education.field}</p>
        </motion.div>
      </div>
      <motion.div layout />
      <motion.div layout className={` ${isExpanded ? "h-full" : "h-0"}`}>
        {education.about}
      </motion.div>
    </motion.div>
  );
};

export default Edu;
