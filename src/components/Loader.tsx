import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2200; // Total loading time ~2.2 seconds
    
    let animationFrame: number;
    
    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      if (elapsed < duration) {
        // Easing function (easeOutCubic)
        const t = elapsed / duration;
        const easedProgress = 1 - Math.pow(1 - t, 3);
        setProgress(Math.min(easedProgress * 100, 100));
        animationFrame = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(onComplete, 400); // Brief pause at 100% before fading out
      }
    };
    
    animationFrame = requestAnimationFrame(updateProgress);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712]"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white mb-8 flex items-center"
        >
          My Portfolio<span className="text-cyan-400">.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-48 md:w-64 flex flex-col items-center gap-4"
        >
          <div className="text-sm font-mono text-cyan-400 font-medium tracking-widest">
            {Math.round(progress)}%
          </div>
          
          <div className="w-full h-[1px] bg-slate-800 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
