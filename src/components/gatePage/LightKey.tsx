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
    
      className={`w-[30vw] h-[30vw] rounded-full z-60 absolute top-1/2 left-1/2 mt-[-50%] ml-[-50%] 
    grayscale-70 group-hover:grayscale-0 rotate-90 group-hover:rotate-0 duration-1500 
   ${gateCtx.isClicked ? " grayscale-[0%] !rotate-[0]" : ""}`}
    >
      <div className="relative key-door-tickness rounded-full duration-2000"
      style={{transform:` ${gateCtx.doorAnimationFinished ? "rotateY(30deg)" : "rotateY(0deg)"} `}}
      >
        <span className="key-thickness-ring"></span>
        <img className="overflow-hidden rounded-full" src="/door1.png" alt="" />
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
