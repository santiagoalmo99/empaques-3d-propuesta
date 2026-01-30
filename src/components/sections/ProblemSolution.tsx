import React from 'react';
import { motion } from 'framer-motion';
import CoffeeCupScene from '../3d/CoffeeCup';

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4 block">El "Espejo Mágico"</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              Visualización Real. <br/>
              <span className="text-slate-500">Sin Imaginación.</span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Tus clientes no compran porque les da miedo "cómo quedará". 
              Este motor elimina el miedo. Suben su logo y lo ven aplicado con física realista, brillos y sombras.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                  <i data-lucide="smartphone" className="w-5 h-5"></i>
                </div>
                <h4 className="font-bold text-white mb-2">Funciona en Celular</h4>
                <p className="text-sm text-slate-500 italic">Sin descargar nada. Carga en 2s.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                  <i data-lucide="check-circle" className="w-5 h-5"></i>
                </div>
                <h4 className="font-bold text-white mb-2">Cierre Instantáneo</h4>
                <p className="text-sm text-slate-500 italic">Lo ven, se enamoran, pagan.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="aspect-square rounded-[3rem] bg-slate-900 border border-white/5 overflow-hidden relative shadow-2xl shadow-blue-500/5 group">
              <div className="absolute top-6 right-6 z-20">
                <div className="px-4 py-1 rounded-full bg-emerald-500 text-slate-900 text-xs font-bold uppercase tracking-widest shadow-lg animate-bounce">
                  Interactivo
                </div>
              </div>
              
              <CoffeeCupScene />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                <button className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur border border-white/10 text-xs font-bold hover:bg-white/20 transition-all text-white">
                  KRAFT
                </button>
                <button className="px-4 py-2 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-xs font-bold hover:bg-white/10 transition-all text-slate-400">
                  BLANCO
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
