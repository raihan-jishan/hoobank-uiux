"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const HeroAnimation = ({ children, className, delay = 0.2, reverse }) => {
  return (
    <motion.div
      className={cn("w-full h-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const NavAnimation = ({ children, className }) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const ButtonAnimation = ({ children, className }) => {
  return (
    <motion.a
    whileHover={{ scale: 1.1 }}
   
    >
      {children}
    </motion.a>
  );
};

export { ButtonAnimation, HeroAnimation, NavAnimation };

