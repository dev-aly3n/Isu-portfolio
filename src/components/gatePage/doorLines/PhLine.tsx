import { motion } from "framer-motion";

const PhLine: React.FC = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="227 26 250 900">
      <g>
        <defs>
          <motion.path
          filter="url(#inset-shadow4)"
            id="s-Path_1-d122469"
            d="M229.0 28.0 L321 258 L291 325 L430 355 L382 413 L473 598"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d122469"
            fill="none"
            className="door-ph-line"
            stroke="url(#pat3)"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default PhLine;
