import { motion } from "framer-motion";
import { sportwaveAnimation2 } from "../../../utils/animation";
import { useGateClicked } from "../../../hooks/useGateClicked";
import type { AnimationControls } from "framer-motion";

interface props {
  controls: AnimationControls;
}
const PhLine: React.FC<props> = ({controls}): JSX.Element => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="227 26 250 900"
      className="overflow-visible"
    >
      <g>
        <defs>
          <motion.path
            filter="url(#sofGlow)"
            variants={sportwaveAnimation2}
            custom={2}
            initial="hidden"
            animate={controls}
            id="s-Path_1-d1221"
            d="M229.0 28.0 L320.99914236706695 258.0205831903945 L291.3902229845627 325.6981132075472 L429.565180102916 355.30703259005145 L381.62692967409953 413.11492281303606 L473.2735849056605 597.818181818182 "
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
