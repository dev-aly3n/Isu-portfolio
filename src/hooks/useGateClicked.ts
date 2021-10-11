import { useAnimation } from "framer-motion";
import { useContext } from "react";
import { IsuGateCtx } from "../store/context/isuGateCtx";

export const useGateClicked = () => {
  const gateCtx = useContext(IsuGateCtx);
  const controls = useAnimation();
  if (gateCtx.isClicked === true && gateCtx.keyAnimationFinished === true) {
    controls.start("visable");
  }

  return controls;
};
