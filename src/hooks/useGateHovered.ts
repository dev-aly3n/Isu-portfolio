import { useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { IsuGateCtx } from "../store/context/isuGateCtx";

export const useGateHovered = () => {
  const gateCtx = useContext(IsuGateCtx);
  const controls = useAnimation();
  useEffect(() => {
    if (
      (gateCtx.isHovered === true && gateCtx.isClicked === true) ||
      (gateCtx.isHovered === true && gateCtx.isClicked === false) ||
      (gateCtx.isHovered === false && gateCtx.isClicked === true)
    ) {
      controls.start("visible");
    } else if (gateCtx.isHovered === false && gateCtx.isClicked === false) {
      controls.start("hidden");
    }
  }, [gateCtx.isHovered, gateCtx.isClicked]);

  return controls;
};
