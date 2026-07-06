import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              Building the future with AI, <br />
              <span className="text-slate-500">one project at a time.</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                My journey into technology began with a curiosity about how software, websites, and artificial intelligence work. Today, I'm focused on learning, building, and improving my skills in AI, Python, web development, UI/UX design, and Android app development.
              </p>
              <p>
                I use modern AI tools to transform ideas into responsive websites, innovative applications, and intuitive user experiences. My goal is to create digital products that are visually appealing, user-friendly, and solve real-world problems.
              </p>
              <p>
                I'm constantly exploring new technologies, experimenting with AI-powered workflows, and building projects that help me grow as a developer. Every project is an opportunity to learn something new and improve my craft.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <div className="text-4xl font-display font-bold text-white mb-2">01+</div>
                <div className="text-sm text-slate-500 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-2">05+</div>
                <div className="text-sm text-slate-500 font-medium">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-2">01+</div>
                <div className="text-sm text-slate-500 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden glass p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-blue-500/20">
                <img 
                  src="/profile.jpg" 
                  alt="Portrait" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
            </div>
            {/* Floating decoration */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl"
            >
              <div className="text-sm font-medium text-slate-300">Based in</div>
              <div className="text-xl font-bold text-white flex items-center gap-2">
                📍 {PERSONAL_INFO.location}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
