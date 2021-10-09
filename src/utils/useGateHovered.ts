import { useAnimation } from "framer-motion";
import { useContext } from "react";
import { IsuGateCtx } from "../store/context/isuGateCtx";

export const useGateHovered = () => {
  const gateCtx = useContext(IsuGateCtx);
  const controls = useAnimation();
  if (gateCtx.isClicked) {
    controls.start("visable");
  }

  return controls;
};
