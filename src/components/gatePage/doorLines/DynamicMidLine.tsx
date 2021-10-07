import { motion } from "framer-motion";
import { sportwaveAnimation } from "../../../utils/animation";

const DynamicMidLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="315 271 812 83"
      className="overflow-visible"
    >
      <g>
      <filter id="inset-shadow3" x="-100%" y="-100%" width="200%" height="200%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="5" />
        <feOffset dx="0" dy="0" result="offsetblur" />
        <feFlood floodColor="#16FBFF" result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
        <defs>
          <motion.path
          filter="url(#sofGlow) url(#inset-shadow3)"
          variants={sportwaveAnimation}
          initial="hidden"
          animate="visable"
            id="s-Path_1-d1224578"
            d="M1077.0 354.0 L704.5051457975986 354.0000000000001 L646.6972555746142 290.449399656947 L316.76929674099483 272.1200686106348 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d1224578"
            fill="none"
            stroke-width="20.0"
            stroke="#16FBFF"
            stroke-linecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default DynamicMidLine;
