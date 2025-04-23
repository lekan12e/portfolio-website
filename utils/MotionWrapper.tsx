"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

interface MotionWrapperProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  className?: string;
}

const directions = {
  left: { x: -100, opacity: 0 },
  right: { x: 100, opacity: 0 },
  top: { y: -100, opacity: 0 },
  bottom: { y: 100, opacity: 0 },
};

export default function MotionWrapper({
  children,
  direction = "bottom",
  delay = 0.4,
  duration = 1,
  className = "",
}: MotionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: directions[direction],
        visible: { x: 0, y: 0, opacity: 1 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration, delay }}>
      {children}
    </motion.div>
  );
}
