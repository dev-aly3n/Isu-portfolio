import { useAnimation } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { IsuGateCtx } from "../store/context/isuGateCtx";

export const useGateHovered = (logic: boolean = false) => {
  const gateCtx = useContext(IsuGateCtx);
  const controls = useAnimation();
  // const [once, setOnce] = useState(true);
  useEffect(() => {
    if (
      (gateCtx.isHovered === true && gateCtx.isClicked === true) ||
      (gateCtx.isHovered === true && gateCtx.isClicked === false) ||
      (gateCtx.isHovered === false && gateCtx.isClicked === true)
    ) {
      controls.start("visable");
    } else if (gateCtx.isHovered === false && gateCtx.isClicked === false) {
      controls.start("hidden");
    }
  }, [gateCtx.isHovered, gateCtx.isClicked]);

  return controls;
};
