import React from 'react';
import { motion } from 'framer-motion';

const Investment = () => {
  return (
    <section id="inversión" className="py-24 bg-slate-900 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">Acuerdo de Socio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Inversión del Proyecto</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-8">
           {/* Agency Anchor */}
           <div className="p-10 rounded-[2.5rem] bg-slate-950/50 border border-white/5 flex flex-col grayscale opacity-60">
            <h3 className="text-slate-400 font-bold text-sm uppercase mb-6 tracking-widest">Agencia Tradicional</h3>
            <div className="text-4xl font-bold text-slate-500 mb-6">$30.000.000+</div>
            <ul className="space-y-4 mb-10 text-sm text-slate-600">
              <li>• Dev. desde cero (3-5 meses)</li>
              <li>• Sin motor 3D especializado</li>
              <li>• Costo infraestructura alto</li>
              <li>• FEE mensual de soporte</li>
            </ul>
          </div>

          {/* Partner Deal */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-10 md:p-14 rounded-[3rem] bg-blue-600 border-2 border-blue-400 shadow-2xl shadow-blue-500/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <i data-lucide="sparkles" className="w-32 h-32 text-white"></i>
            </div>
            
            <span className="px-4 py-1 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block">Valor Exclusivo</span>
            <h3 className="text-white font-display font-bold text-3xl mb-4 italic leading-tight">Implementación <br/>Ecosistema 3D</h3>
            
            <div className="flex items-baseline gap-2 mb-10 text-white">
              <span className="text-6xl font-black italic">$2.000.000</span>
              <span className="text-blue-200 text-sm font-bold uppercase">COP</span>
            </div>

            <div className="space-y-4 text-white/90 font-medium mb-12">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Pago Único de Desarrollo
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Mantenimiento: $2.15M/mes (Inc. Hosting)
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                Entrega: 8 Semanas
              </div>
            </div>

            <button className="w-full py-5 rounded-2xl bg-white text-blue-600 font-black uppercase tracking-widest text-sm hover:bg-blue-50 transition-all shadow-xl shadow-black/10 active:scale-[0.98]">
              ACEPTAR PROPUESTA →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
