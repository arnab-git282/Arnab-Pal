import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-slate-900/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 md:text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Let's create something <span className="text-gradient">together.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-400 hover:text-white transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-slate-400">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/place/Mankanali,+West+Bengal+722133/@23.3246809,87.038734,16z/data=!3m1!4b1!4m6!3m5!1s0x39f7a841486c0441:0xb2f1325e7d62f84!8m2!3d23.3261753!4d87.0361917!16s%2Fg%2F1hhx18b8j?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 w-full h-64 glass-card rounded-2xl overflow-hidden flex items-center justify-center relative group block"
            >
              <div className="absolute inset-0 bg-slate-800/50 group-hover:bg-slate-800/80 transition-colors"></div>
              <div className="relative z-10 flex flex-col items-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                <MapPin className="w-8 h-8 mb-2" />
                <span className="font-medium">Open in Google Maps</span>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="mt-4 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-medium transition-colors"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
