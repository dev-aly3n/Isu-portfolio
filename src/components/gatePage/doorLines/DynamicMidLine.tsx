import { motion } from "framer-motion";
import { gateLine } from "../../../utils/animation";
import type { AnimationControls } from "framer-motion";
import { useGateClicked } from "../../../hooks/useGateClicked";
interface props {
  logic?: boolean;
}

const DynamicMidLine: React.FC<props> = (): JSX.Element => {
  const controls = useGateClicked();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="315 271 812 83">
      <g>
        <defs>
          <motion.path
          filter="url(#sofGlow) url(#inset-shadow3)"
            variants={gateLine}
            custom={3}
            initial="hidden"
            animate={controls}
            id="s-Path_1-d1224578"
            d="M1077 354 L705 354 L647 290 L318 272"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d1224578"
            fill="none"
            strokeWidth="20.0"
            stroke="#16FBFF"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default DynamicMidLine;
