import { motion } from "framer-motion";

const KeyUpLine: React.FC = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="250 200 1000 260">
      <g>
        <defs>
          <motion.path
          filter="url(#inset-shadow4)"
            id="s-Path_1-d12200"
            d="M727 455 L571 230 L369 137"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d12200"
            fill="none"
            strokeWidth="70.0"
            stroke="url(#pat4)"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default KeyUpLine;
