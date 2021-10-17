import { motion } from "framer-motion";

const KeyUpLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="250 200 1000 260"
      className="overflow-visible"
    >
      <g>
        <pattern
          id="pat4"
          patternUnits="userSpaceOnUse"
          width="400"
          height="400"
        >
          <image xlinkHref="/key.jpg" width="400" height="400" />
        </pattern>
        <filter id="inset-shadow4" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="5" />
          <feOffset dx="7" dy="-7" result="offsetblur" />
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
            filter="url(#inset-shadow4)"
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
