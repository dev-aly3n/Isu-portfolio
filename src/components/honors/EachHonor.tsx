import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import { achievementType } from "../../types/allTypes";

interface props {
  data: achievementType;
}

const EachHonor: React.FC<props> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.li
      layout
      className="w-11/12 min-h-20 group z-10 rounded-lg overflow-hidden shadow-lg hover:shadow-inner"
    >
      <div className="w-full h-full flex flex-col justify-center items-center z-10  hover:bg-primary-900 duration-500 py-3">
        <motion.div
          layout
          className="w-full flex justify-between items-center px-1 sm:px-5  cursor-pointer text-xl "
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <div className="flex gap-x-2 items-center h-full">
            <span className="w-px h-[20%] bg-yellow-300 duration-500 group-hover:h-[70%] group-hover:w-px" />
            <span>{data.title}</span>
          </div>
          <span
            className={` text-white rounded-full !h-16 !w-16 !min-w-[64px] ml-3 flex justify-center items-center  group-hover:rotate-90  duration-500
          ${isExpanded ? "!rotate-45" : ""}`}
          >
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </motion.div>
        {isExpanded && (
          <motion.p
            layout
            className="self-start text-base ml-10 py-5 text-secText mr-10 text-white/80"
          >
            {data.desc}
          </motion.p>
        )}
        <motion.div layout className="h-px w-10/12 "></motion.div>
      </div>
    </motion.li>
  );
};

export default EachHonor;
