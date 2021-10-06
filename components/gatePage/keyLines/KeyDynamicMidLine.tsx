import { motion } from "framer-motion";
import { sportwaveAnimation } from "../../animation";

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
          filter="url(#sofGlow1) url()"
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
            stroke-width="15.0"
            stroke="#A0FFFF"
            stroke-linecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default KeyDynamicMidLine;
