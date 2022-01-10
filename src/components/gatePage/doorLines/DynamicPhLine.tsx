import { motion } from "framer-motion";
import { gateLine2 } from "../../../utils/animation";
import { useGateClicked } from "../../../hooks/useGateClicked";

interface props {
  logic?: boolean;
}
const PhLine: React.FC<props> = (): JSX.Element => {
  const controls = useGateClicked();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="227 26 250 900" >
      <g>
        <defs>
          <motion.path
          filter="url(#sofGlow)"
            variants={gateLine2}
            custom={3}
            initial="hidden"
            animate={controls}
            id="s-Path_1-d1221"
            d="M229.0 28.0 L321 258 L291 325 L430 355 L382 413 L473 598"
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d1221"
            fill="none"
            className="stroke-[7px] sm:stroke-[10px] md:stroke-[20px] lg:stroke-[30px]"
            stroke="#16FBFF"
            strokeLinecap="round"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default PhLine;
