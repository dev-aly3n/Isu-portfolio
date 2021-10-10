import { motion } from "framer-motion";
import { sportwaveAnimation } from "../../../utils/animation";

const KeyDynamicMidLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="420 530 660 56"
      className="overflow-visible"
    >
      <g>
        <defs>
          <motion.path
          filter="url(#sofGlow1) url(#inset-shadow5)"
          variants={sportwaveAnimation}
          initial="hidden"
          animate="visable"
          id="s-Path_1-d4578978"
          d="M736.0 558.0 L387.2667238421957 558.0 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d4578978"
            fill="none"
            strokeWidth="40.0"
            stroke="#A0FFFF"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default KeyDynamicMidLine;
