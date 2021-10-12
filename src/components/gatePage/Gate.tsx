import LeftDoor from "./LeftDoor";
import RightDoor from "./RightDoor";
import { useState, useCallback, useEffect, useContext } from "react";
import { IsuGateCtx } from "../../store/context/isuGateCtx";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { enterToGate } from "../../utils/animation";

const Gate: React.FC = (): JSX.Element => {
  const controls = useAnimation();
  const gateCtx = useContext(IsuGateCtx);

  useEffect(() => {
    if (gateCtx.doorAnimationFinished === true) {
      setTimeout(() => {
        controls.start("visable");
      }, 500);
    }
  }, [gateCtx.doorAnimationFinished]);
  return (
      <motion.div
        className="flex flex-col justify-center items-center mx-auto w-screen h-screen overflow-hidden"
        variants={enterToGate}
        initial="hidden"
        animate={"visable"}
        exit="out"
      >
        <div className="flex flex-row items-center justify-between w-full h-full">
          <div
            className="w-1/2 h-full z-20"
            style={{
              perspective: "500px",
              perspectiveOrigin: "left",
            }}
          >
            <LeftDoor />
          </div>
          <div
            className="w-1/2 h-full z-10"
            style={{ perspective: "500px", perspectiveOrigin: "right" }}
          >
            <RightDoor />
          </div>
        </div>
      </motion.div>
  );
};

export default Gate;
