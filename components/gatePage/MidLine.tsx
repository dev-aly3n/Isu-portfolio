import { motion } from "framer-motion";
import { sportwaveAnimation } from "../animation";

const MidLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="315 271 812 83"
    >
      <g>
        <defs>
          <motion.path
          filter="url(#inset-shadow)"
            id="s-Path_1-d12245"
            d="M1077.0 354.0 L704.5051457975986 354.0000000000001 L646.6972555746142 290.449399656947 L316.76929674099483 272.1200686106348 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d12245"
            fill="none"
            stroke-width="30.0"
            stroke="#535353"
            stroke-linecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default MidLine;
