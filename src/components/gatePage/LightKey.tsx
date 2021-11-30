// libs
import { motion } from "framer-motion";
import { useContext } from "react";
// components
// hooks
// store
import { IsuGateCtx } from "../../store/context/isuGateCtx";
// utils & animation

const LightKey: React.FC = () => {
  const gateCtx = useContext(IsuGateCtx);
  return (
    <motion.div
      className={`light-key-container group-hover:grayscale-0 group-hover:rotate-0
   ${gateCtx.isClicked ? " grayscale-[0%] !rotate-[0]" : ""}`}
    >
      <div
        style={{
          transform: ` ${
            gateCtx.doorAnimationFinished ? "rotateY(30deg)" : "rotateY(0deg)"
          } `,
        }}
      >
        <span className="key-thickness-ring"></span>
        <img src="/media/gate/door1.png" alt="" />
        <div className="key-thickness0"></div>
        <div className="key-thickness1"></div>
        <div className="key-thickness2"></div>
        <div className="key-thickness3"></div>
        <div className="key-thickness4"></div>
        <div className="key-thickness-0"></div>
        <div className="key-thickness-1"></div>
        <div className="key-thickness-2"></div>
        <div className="key-thickness-3"></div>
        <div className="key-thickness-4"></div>
      </div>
    </motion.div>
  );
};

export default LightKey;
