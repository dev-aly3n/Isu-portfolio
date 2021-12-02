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

  visible: {
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

  visible: {
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

  visible: {
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

  visible: {
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
  visible: {
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
  visible: {
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

  visible: {
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
  visible: {
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
  visible: {
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
  visible: {
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
  visible: (custom: number) => ({
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
  visible: {
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
  visible: {
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
  visible: {
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
  visible: {
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
  visible:(custom:number)=>( {
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
  visible:(custom:number) =>( {
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
  visible: {
    transform:"rotateY(50deg)",
    transition: { duration: 2.5, delay:0 },
  },
};
export const openDoor2 = {
  hidden:{
    transform:"rotateY(0deg)",
  },
  visible: {
    transform:"rotateY(-50deg)",
    transition: { duration: 2.5, delay:0 },
  },
  out:{
    x:100,
    transition: {
      duration: 2.5,
    },
  }
};
export const enterToGate = {
  hidden: {
    scale: 1,
    transition: {
      duration: 1.5,
    },
  },
  visible: {
    scale: 1,
    transition: {
      duration: 2.5,
    },
  },
  out: {
    scale: 3,
    transition: {
      duration: 2.5,
      delay:2
    },
  },
};
export const firstPage = {
  hidden: {
    scale: 0.3,
    translateY:"-1300px",
  },
  visible: {
    scale: 1,
    translateY:"0px",
    transition: {
      duration: 2.5,
      delay:2,
      when: "beforeChildren",
      staggerChildren: 0.7,
    },
  },

};
export const backRoadImg = {
  hidden: {
    scale: 1,
    translateZ:"0px",
    translateY:"0px",
    transition: {
      delay:0
    },
  },
  visible: {
    scale: 1,
    translateZ:"0px",
    translateY:"0px",
    transition: {
      delay:0,
    },
  },
  out: {
    scale: 5,
    translateZ:"1000px",
    translateY:"500px",
    transition: {
      duration: 2.5,
      delay:2
    },
  },
};
export const firstPageBio = {
  hidden: {
    opacity:0,
    transition: {
      delay:0,
      duration:1
    },
  },
  visible: {
    opacity:1,
    transition: {
      duration:1
    },
  },
};

