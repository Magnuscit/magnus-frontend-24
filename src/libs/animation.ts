import { Variants } from "framer-motion";


export const varients: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { type: "tween", delay: 0.05 * i },
  }),
};
