export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  },
};

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    }
  },
};

export const hoverShadow = {
  hover: {
    scale: 1.05,
    y: 2,
    boxShadow: '0 8px 16px #ccc'
  }
}