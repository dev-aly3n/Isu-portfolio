import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { gateLine } from "../../../utils/animation";
import { useGateClicked } from "../../../hooks/useGateClicked";
import { useContext } from "react";
import { GlobalCtx } from "../../../store/context/globalCtx";

interface props {
  logic?: boolean;
  setFinished?: (order: boolean) => void;
}
const DynamicUpLine: React.FC<props> = ({
  logic,
  setFinished,
}): JSX.Element => {
  const globCtx = useContext(GlobalCtx);
  const router = useRouter();
  const controls = useGateClicked();

  const upLineAnimationHandler = () => {
    if (setFinished && logic) {
      setFinished(true);
      globCtx.toCareerHandler(1);
      setTimeout(() => {
        router.push("/");
      }, 0);
    }
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="359 207 812 243">
      <g>
        <defs>
          <motion.path
          filter="url(#sofGlow)"
            onAnimationComplete={upLineAnimationHandler}
            variants={gateLine}
            custom={3}
            initial="hidden"
            animate={controls}
            id="s-Path_1-d1224f"
            d="M1171.0 450.0 L824.3507718696401 315.82847341337913 L735.5240137221272 362.35677530017153 L360.4777015437396 208.6723842195541 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d1224f"
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

export default DynamicUpLine;
