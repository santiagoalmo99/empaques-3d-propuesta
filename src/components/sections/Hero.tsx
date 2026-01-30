import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 group cursor-default">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest leading-none">Vapor-Fast Engineering</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
            Vende en <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">3D Real</span> <br/>
            antes de fabricar.
          </h1>
          
          <p className="text-xl text-slate-400 max-w-xl mb-10 leading-relaxed">
            Eliminamos el "miedo a comprar" con un ecosistema de visualización física acelerado por IA. Tu e-commerce, convertido en una herramienta industrial.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95 text-lg">
              INICIAR DESPLIEGUE 🚀
            </button>
            <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-950 bg-slate-800"></div>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-300">Unido a 12 Marcas Pro</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-square max-w-[500px] mx-auto perspective-1000"
        >
          {/* Placeholder for real 3D loader */}
          <div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-950 rounded-[3rem] border border-white/10 shadow-2xl flex items-center justify-center group overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="text-center">
              <div className="w-24 h-24 mb-4 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce">
                <i data-lucide="box" className="w-12 h-12 text-blue-500"></i>
              </div>
              <p className="text-blue-400 font-mono text-sm uppercase tracking-widest">Inyectando WebGL Engine...</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
