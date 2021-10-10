import { useAnimation } from "framer-motion";
import { useContext } from "react";
import { IsuGateCtx } from "../store/context/isuGateCtx";

export const useGateHovered = () => {
  const gateCtx = useContext(IsuGateCtx);
  const controls = useAnimation();
  if (
    (gateCtx.isHovered === true && gateCtx.isClicked === true) ||
    (gateCtx.isHovered === true && gateCtx.isClicked === false) ||
    (gateCtx.isHovered === false && gateCtx.isClicked === true)
  ) {
    controls.start("visable");
  } else if (gateCtx.isHovered === false && gateCtx.isClicked === false) {
    controls.start("hidden");
  }
  return controls;
};
