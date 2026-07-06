import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-[40rem] h-[40rem] bg-cyan-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] bg-emerald-600/20 rounded-full blur-[120px]" 
        />
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-slate-300 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
            Hello Everyone, <br className="hidden md:block" />
            Welcome to My Portfolio. <br className="hidden md:block" />
            <span className="text-gradient">Explore My Experience.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Hi, I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>, a {PERSONAL_INFO.role}. {PERSONAL_INFO.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#projects" 
              className="group flex items-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-medium hover:bg-cyan-50 transition-colors w-full sm:w-auto justify-center"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/resume.pdf" 
              className="group flex items-center gap-2 glass px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 transition-colors w-full sm:w-auto justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Download className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], y: [0, 0, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
