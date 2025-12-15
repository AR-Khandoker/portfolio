import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export function BrandLoader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000;
    const steps = 50;
    const intervalTime = duration / steps;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, intervalTime);

    // Trigger completion
    const timeout = setTimeout(() => {
      onComplete();
    }, duration + 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-black cursor-wait"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
    >
      <div className="w-full max-w-md px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-4"
        >
          <div className="text-4xl font-bold tracking-tighter flex items-end">
            A R Khandoker
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="text-secondary ml-1"
            >
              .
            </motion.span>
          </div>
          <div className="text-xl font-medium tabular-nums text-black/40">
            {count}%
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="h-[2px] w-full bg-black/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear", duration: 0.05 }}
          />
        </div>

        {/* Dynamic Loading Text */}
        <div className="absolute top-20 left-6 text-sm font-medium text-black/40 overflow-hidden h-6">
            <motion.div
                animate={{ y: count > 30 ? (count > 70 ? -48 : -24) : 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="h-6 flex items-center">Initializing...</div>
                <div className="h-6 flex items-center">Loading assets...</div>
                <div className="h-6 flex items-center">Preparing experience...</div>
            </motion.div>
        </div>
      </div>

      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-[10%] -top-[10%] w-[40vw] h-[40vw] rounded-full border border-black/5 border-dashed"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -left-[10%] -bottom-[10%] w-[50vw] h-[50vw] rounded-full border border-black/5 border-dashed"
        />
      </div>
    </motion.div>
  );
}
