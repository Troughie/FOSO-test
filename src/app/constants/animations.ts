export const fadeInUp = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeInOut" },
};

export const slideInRotate = (direction: "left" | "right") => ({
  initial: {
    x: direction === "left" ? -150 : 150,
    rotate: 80,
  },
  animate: {
    x: 0,
    rotate: 0,
  },
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
});
