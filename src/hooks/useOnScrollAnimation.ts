import { useAnimation } from "framer-motion";
import type {AnimationControls} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import React, { ElementRef, Ref, useState } from "react";
import type {InViewHookResponse} from 'react-intersection-observer';

export const useOnScrollAnimation = (tHold:number = 0.3) => {
  const [viewed, setViewed] = useState(false);
  const controls:AnimationControls = useAnimation();
  const [element, view] = useInView({ threshold: tHold });

  if (view && !viewed) {
    setViewed(true);
    controls.start("visible");
  } else if (!view && viewed) {
    setViewed(false);
    controls.start("hidden");
  }

  return [element, controls] as [any,AnimationControls];
};
