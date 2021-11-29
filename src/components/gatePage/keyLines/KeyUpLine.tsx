import { motion } from "framer-motion";

const KeyUpLine: React.FC = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="250 200 1000 260" className="shadow-svgs">
      <g>
        <defs>
          <motion.path
            id="s-Path_1-d12200"
            d="M727.0 455.0 L570.5600343053175 229.82161234991406 L368.9373927958836 136.76500857632914  "
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
