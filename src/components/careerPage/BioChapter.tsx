import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface props {
  chap: { title: string; desc: string };
  firstChap: boolean;
}

const BioChapter: React.FC<props> = ({ chap, firstChap }) => {
  const [isExpanded, setIsExpanded] = useState(firstChap ? true : false);
  return (
    <motion.div
      layout
      className="flex flex-col justify-center items-center w-10/12 sm:w-full my-3"
    >
      <motion.h3
        layout
        onClick={() => setIsExpanded((prev) => !prev)}
        className="text-2xl font-bold self-start pl-5 cursor-pointer"
      >
        <FontAwesomeIcon className={isExpanded ? "rotate-90":"rotate-0"} icon={faAngleRight} />{" "}{chap.title}
      </motion.h3>
      <motion.div layout className="w-full h-px bg-white my-2" />
      <motion.p
        layout
        className={`text-base first-letter:text-primary-200 first-letter:font-semibold first-letter:text-5xl overflow-hidden
       ${isExpanded ? "" : "h-0"}`}
      >
        {chap.desc}
      </motion.p>
    </motion.div>
  );
};

export default BioChapter;
