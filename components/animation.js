//global
//global
//global
export const pageAnimation = {
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
export const pageAnimation2 = {
  hidden: {
    opacity: 0,
    y: 10,
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
    y: 100,
    transition: { duration: 0.5 },
  },
};

export const sectionAnimation = {
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
export const sectionAnimation2 = {
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
      staggerChildren: 0.4,
    },
  },
};

export const leftToRightAnimation = {
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

export const rightToLeftAnimation = {
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

export const lineAnimation = {
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

export const achieveAnimation = {
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
export const textAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visable: {
    transition: { duration: 0.8, ease: "easeOut" },
    y: 0,
    opacity: 1,
  },
};
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

export const buttonAnimation = {
  hidden: {
    scale: 0.85,
    opacity: 0,
  },
  visable: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const photoAnimation = {
  hidden: {
    scale: 1.15,
    opacity: 0,
  },
  visable: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7 },
  },
};

// sport
// sport
// sport

export const twAnimation = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visable: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay: custom * 0.15 },
  }),
};

export const sportImgAnimation = {
  hidden: {
    opacity: 0,
    x: 400,
  },
  visable: {
    opacity: 1,
    x: 0,
    transition: { duration: 10, ease: [0, 1.1, 0, 0.91] },
  },
};

export const sportPhotoAnimation = {
  hidden: {
    scale: 1.15,
    opacity: 0,
  },
  visable: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, delay: 1.5 },
  },
};

export const borderAnimation = {
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

//ART
//ART
//ART

export const artTranAnimation = {
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

export const artTranAnimationContainer = {
  hidden: {},
  visable: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      ease: "easeOut",
      delay: 0,
    },
  },
};

//biography
//biography
//biography

export const bioPhotoAnimation = {
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

// uniwave
// uniwave
// uniwave
export const uniwaveAnimation = {
  hidden: { pathLength: 0, pathOffset: 1 },
  visable: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 3.5, delay: 0 },
  },
};
// sportwave
// sportwave
// sportwave
export const sportwaveAnimation = {
  hidden: { pathLength: 0, pathOffset: 1 },
  visable: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 30, delay: 0, ease: [0.12, 0.35, 0.9, 1.05] },
  },
};
