import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Selected Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Some of the projects I've built that showcase my passion for clean code and exceptional design.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group rounded-3xl overflow-hidden glass-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 flex gap-2">
                  <a 
                    href={project.github}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.demo}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-slate-300 glass rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
