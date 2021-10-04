import { motion } from "framer-motion";
import { sportwaveAnimation } from "../animation";

const UpLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="359 207 812 243"
    >
      <g>
        <defs>
          <motion.path
            variants={sportwaveAnimation}
            initial="hidden"
            animate="visable"
            id="s-Path_1-d1224"
            d="M1171.0 450.0 L824.3507718696401 315.82847341337913 L735.5240137221272 362.35677530017153 L360.4777015437396 208.6723842195541 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d1224"
            fill="none"
            stroke-width="3.0"
            stroke="#fff"
            stroke-linecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default UpLine;
