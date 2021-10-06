import { motion } from "framer-motion";
import { sportwaveAnimation } from "../../animation";

const KeyMidLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="420 530 660 56"
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
        <filter
          id="inset-shadow5"
          x="-100%"
          y="-100%"
          width="200%"
          height="200%"
        >
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
            filter="url(#inset-shadow5) url()"
            id="s-Path_1-d1224577987"
            d="M736.0 558.0 L387.2667238421957 558.0 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d1224577987"
            fill="none"
            stroke-width="20.0"
            stroke="url(#pat1)"
            stroke-linecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default KeyMidLine;
