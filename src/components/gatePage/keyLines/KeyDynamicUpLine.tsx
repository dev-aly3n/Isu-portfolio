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

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="250 200 1000 260" className="shadow-svgs">
      <g>
        <defs>
          <motion.path
            onAnimationComplete={() => {
              console.log("anim finished");
              if (setFinished && logic && clicked) {
                setFinished(true);
              }
              if (impacting && once) {
                impacting();
              }
              if (once === false) {
                setOnce(true);
              }
            }}
            variants={gateLine}
            custom={1}
            initial="hidden"
            animate={controls}
            id="s-Path_1-d122488"
            d="M727.0 455.0 L570.5600343053175 229.82161234991406 L368.9373927958836 136.76500857632914"
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
