import { PERSONAL_INFO } from '../data';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="font-display font-bold text-2xl tracking-tighter text-white mb-2">
            {PERSONAL_INFO.name}<span className="text-cyan-400">.</span>
          </a>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={PERSONAL_INFO.github} className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={PERSONAL_INFO.linkedin} className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={PERSONAL_INFO.twitter} className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
