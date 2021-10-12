import { useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { IsuGateCtx } from "../store/context/isuGateCtx";

export const useGateOpened = () => {
  const gateCtx = useContext(IsuGateCtx);
  const controls = useAnimation();

  useEffect(() => {
    if (gateCtx.doorAnimationFinished === true) {
      controls.start("visable");
    }
  }, [gateCtx.doorAnimationFinished]);
  return controls;
};
