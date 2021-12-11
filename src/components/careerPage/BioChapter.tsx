import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { secFading } from "../../utils/animation";
import { useOnScrollAnimation } from "../../hooks/useOnScrollAnimation";

interface props {
  chap: { title: string; desc: string };
  firstChap: boolean;
}

const BioChapter: React.FC<props> = ({ chap, firstChap }) => {
  const [sec, controls] = useOnScrollAnimation();
  const [isExpanded, setIsExpanded] = useState(firstChap ? true : false);
  return (
    <motion.div
      ref={sec}
      variants={secFading}
      initial="hidden"
      animate={controls}
      exit="out"
      className="bio-chapter-container"
    >
      <motion.h3 layout onClick={() => setIsExpanded((prev) => !prev)}>
        <FontAwesomeIcon
          className={isExpanded ? "rotate-90" : "rotate-0"}
          icon={faAngleRight}
        />{" "}
        {chap.title}
      </motion.h3>
      <motion.div layout />
      <motion.p layout className={` ${isExpanded ? "" : "h-0"}`}>
        {chap.desc}
      </motion.p>
    </motion.div>
  );
};

export default BioChapter;
