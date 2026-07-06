import { motion } from 'motion/react';
import { SKILLS } from '../data';
import { Code2, Cpu, Database, Layout, Server, Brain } from 'lucide-react';

const categoryIcons: Record<string, any> = {
  "Web Development": Code2,
  "UI/UX": Layout,
  "AI & ML": Brain,
  "Databases": Database,
  "Cloud": Server,
};

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A curated list of technologies and tools I use to build digital products.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => {
            const Icon = categoryIcons[category] || Cpu;
            const categorySkills = SKILLS.filter(s => s.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>

                <div className="space-y-6">
                  {categorySkills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-slate-300">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
