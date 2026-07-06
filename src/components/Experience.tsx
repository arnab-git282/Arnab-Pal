import { motion } from 'motion/react';
import { EXPERIENCE } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Journey & Experience
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            A timeline of my professional work and education.
          </motion.p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {EXPERIENCE.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0 md:flex md:justify-between items-center group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-950 border border-white/20 -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-cyan-500 group-hover:text-cyan-400 transition-colors">
                {item.type === 'work' ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
              </div>

              {/* Content - alternating on desktop */}
              <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:order-1' : 'md:pl-12 md:mr-auto'}`}>
                <div className="glass-card p-6 rounded-2xl hover:border-cyan-500/50 transition-colors">
                  <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-2 block">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="text-slate-300 font-medium mb-4">{item.company}</div>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Desktop center line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
