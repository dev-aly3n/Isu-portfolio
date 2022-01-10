import { motion } from "framer-motion";

const KeyMidLine: React.FC = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="420 530 660 56" >
      <g>
        <defs>
          <motion.path
          filter="url(#inset-shadow4) url()"
            id="s-Path_1-d1224577987"
            d="M736 558 L387 558"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d1224577987"
            fill="none"
            strokeWidth="55.0"
            stroke="url(#pat4)"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default KeyMidLine;
