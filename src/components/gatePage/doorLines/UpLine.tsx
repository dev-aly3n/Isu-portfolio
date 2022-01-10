import { motion } from "framer-motion";

const UpLine: React.FC = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="359 207 812 243">
      <g>
        <defs>
          <motion.path
            filter="url(#inset-shadow4)"
            id="s-Path_1-d122"
            d="M1171 450 L824 316 L736 362 L360 209"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d122"
            fill="none"
            strokeWidth="30.0"
            stroke="url(#pat2)"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default UpLine;
