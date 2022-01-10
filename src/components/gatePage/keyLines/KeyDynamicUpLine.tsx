//libs
import { useState } from "react";
import { motion } from "framer-motion";
//components

//store

//hooks & animation & utils
import { gateLine } from "../../../utils/animation";
import { useGateHovered } from "../../../hooks/useGateHovered";

interface props {
  logic?: boolean;
  setFinished?: (order: boolean) => void;
  impacting?: () => void;
  clicked?: boolean;
}

const KeyDynamicUpLine: React.FC<props> = ({
  logic,
  setFinished,
  impacting,
  clicked,
}): JSX.Element => {
  const controls = useGateHovered();

  const [once, setOnce] = useState(false);

  const keyMidAnimHandler = () => {
    if (setFinished && logic && clicked) {
      setFinished(true);
    }
    if (impacting && once) {
      impacting();
    }
    if (once === false) {
      setOnce(true);
    }
  }


  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="250 200 1000 260">
      <g>
        <defs>
          <motion.path
            onAnimationComplete={keyMidAnimHandler}
            filter="url(#sofGlow1) url(#inset-shadow)"
            variants={gateLine}
            custom={1}
            initial="hidden"
            animate={controls}
            id="s-Path_1-d122488"
            d="M727 455 L571 230 L369 137"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d122488"
            fill="none"
            strokeWidth="55.0"
            stroke="#16FBFF"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>

    </svg>
  );
};

export default KeyDynamicUpLine;
