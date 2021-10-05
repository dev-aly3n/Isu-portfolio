import { motion } from "framer-motion";
import { sportwaveAnimation } from "../animation";

const MidLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="315 271 812 83"
      className="overflow-visible"
    >
      <g>
      <pattern
        id="pat1"
        patternUnits="userSpaceOnUse"
        width="1200"
        height="700"
      >
        <image xlinkHref="/gate.jpg" width="1200" height="700" />
      </pattern>
      <filter id="inset-shadow2" x="-100%" y="-100%" width="200%" height="200%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="2" />
        <feOffset dx="0" dy="5" result="offsetblur" />
        <feFlood floodColor="rgb(0, 0, 0)" result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
        <defs>
          <motion.path
          filter="url(#inset-shadow2)"
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
            stroke="url(#pat1)"
            stroke-linecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default MidLine;
