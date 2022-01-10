import { motion } from "framer-motion";

const MidLine: React.FC = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="315 271 812 83">
      <g>
        <defs>
          <motion.path
            filter="url(#inset-shadow2)"
            id="s-Path_1-d12245"
            d="M1077 354 L705 354 L647 290 L318 272"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d12245"
            fill="none"
            strokeWidth="30.0"
            stroke="url(#pat1)"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default MidLine;
