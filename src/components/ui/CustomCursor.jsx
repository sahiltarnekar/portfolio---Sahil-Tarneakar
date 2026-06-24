import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 150,
        damping: 15
      }
    }
  };

  return (
    <div className="hidden md:block">
      {/* Small dot that follows exactly */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#06b6d4]"
        style={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
      />
      {/* Larger trailing circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-purple-500 rounded-full pointer-events-none z-[9998] shadow-[0_0_15px_#a855f7]"
        variants={variants}
        animate="default"
      />
    </div>
  );
};

export default CustomCursor;

