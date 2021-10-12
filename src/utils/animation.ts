// animations for framer motion
// github.com/dev-aly3n

// Page animations
// Page animations
// Page animations
export const pageFadeUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },

  visable: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.7,
    },
  },
  out: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.5 },
  },
};

export const pageFadeDown = {
  hidden: {
    opacity: 0,
    y: -100,
  },

  visable: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
      delay: 0.7,
    },
  },
  out: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.5 },
  },
};
export const pageFadeLeft = {
  hidden: {
    opacity: 0,
    x: 100,
  },

  visable: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
      delay: 0.7,
    },
  },
  out: {
    opacity: 0,
    x: 100,
    transition: { duration: 0.5 },
  },
};
export const pageFadeRight = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  visable: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
      delay: 0.7,
    },
  },
  out: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.5 },
  },
};


// section Animations
// section Animations
// section Animations
export const sectionFadeScaleDown = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visable: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.7,
    },
  },
};


export const sectionLTR = {
  hidden: {
    opacity: 0,
    x: -700,
  },
  visable: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
  out: {
    opacity: 0,
    x: 200,
    transition: { duration: 0.5 },
  },
};

export const sectionRTL = {
  hidden: {
    opacity: 0,
    x: 700,
  },

  visable: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
  out: {
    opacity: 0,
    x: -200,
    transition: { duration: 0.5 },
  },
};

// for lines
export const widthUp = {
  hidden: {
    width: "0%",
    opacity: 0,
  },
  visable: {
    transition: { duration: 2, ease: "easeOut" },
    width: "",
    opacity: 1,
  },
};


export const SWtNE = {
  hidden: {
    x: -20,
    y: 20,
    opacity: 0,
  },
  visable: {
    transition: { duration: 1 },
    x: 0,
    y: 0,
    opacity: 1,
  },
};

//home
//home
//home

export const bioTextAnimation = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visable: {
    transition: { duration: 0.8, ease: "easeOut" },
    y: 0,
    opacity: 1,
  },
};

// to left animation
export const toLeft = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visable: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: custom * 0.15 },
  }),
};


export const borderRising = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    borderTopWidth: 0,
    borderRightWidth: 0,
  },
  visable: {
    opacity: 1,
    scale: 1,
    borderTopWidth: "4px",
    borderRightWidth: "8px",
    transition: { duration: 1 },
  },
};

export const toRightSkew = {
  hidden: {
    x: "-130%",
    skew: "45deg",
  },
  visable: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const scaleDown = {
  hidden: {
    opacity: 0,
    scale: 1.5,
  },
  visable: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const svgAnimation1 = {
  hidden: { pathLength: 0, pathOffset: 1 },
  visable: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 3.5, delay: 0 },
  },
};

export const gateLine:any = {
  hidden:(custom:number)=>( {
    pathLength: 0,
        transitionEnd:{
      strokeLinecap: "butt",
    },
    transition: { duration: custom, delay: 0, ease: "linear" },
  }),
  visable:(custom:number)=>( {
    pathLength: 1,
    transitionEnd:{
      strokeLinecap: "square",
    },
    transition: { duration: custom, delay: 0, ease: "linear" },
  }),
};
export const gateLine2:any = {
  hidden:(custom:number)=> ({
    pathLength: 0,
    pathOffset: 1,
    transitionEnd:{
      strokeLinecap: "butt",
    },
    transition: { duration: custom, delay: 0, ease: "linear" },
  }),
  visable:(custom:number) =>( {
    pathLength: 1,
    pathOffset: 0,
    transitionEnd:{
      strokeLinecap: "square",
    },
    transition: { duration: custom, delay: 0, ease: "linear" },
  }),
};


// open door
export const openDoor = {
  hidden:{
    transform:"rotateY(0deg)",
  },
  visable: {
    transform:"rotateY(50deg)",
    transition: { duration: 3.5, delay:0 },
  },
};
export const openDoor2 = {
  hidden:{
    transform:"rotateY(0deg)",
  },
  visable: {
    transform:"rotateY(-50deg)",
    transition: { duration: 3.5, delay:0 },
  },
};