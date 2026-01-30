import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-lg italic">E</span>
          </div>
          <span className="text-white font-bold tracking-tight text-xl">EMPAQUES<span className="text-blue-500">3D</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Propuesta', 'Alcance', 'Inversión'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
        </div>

        <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
          AGENDAR LLAMADA
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
