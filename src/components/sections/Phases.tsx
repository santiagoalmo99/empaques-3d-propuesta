import { motion } from 'framer-motion';

const Phases = () => {
  const phases = [
    { 
      title: "FASE 1: Cimientos & UX", 
      time: "Semanas 1-2", 
      icon: "layout",
      items: ["Diseño Apple-Level", "Setup Cloudflare", "Modelo Firestore"] 
    },
    { 
      title: "FASE 2: Motor 3D & IA", 
      time: "Semanas 3-5", 
      icon: "box",
      items: ["Motor WebGL Real", "Agente Quita-Fondos", "Shaders PBR"] 
    },
    { 
      title: "FASE 3: Inteligencia", 
      time: "Semanas 6-7", 
      icon: "cpu",
      items: ["Lógica Recurrente", "Smart Calendar", "Pagos ePayco"] 
    },
    { 
      title: "FASE 4: Lanzamiento", 
      time: "Semana 8", 
      icon: "rocket",
      items: ["Stress Testing", "Seo/LCP Optm", "Entrega Final"] 
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">Ruta Crítica</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Plan de Ejecución</h2>
        </div>

        <div className="space-y-4">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group flex flex-col md:flex-row items-center gap-6 p-8 rounded-[2rem] bg-slate-900/50 border border-white/5 hover:border-blue-500/20 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl font-bold">
                {i + 1}
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-widest block mb-1">{phase.time}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {phase.items.map(item => (
                    <span key={item} className="px-3 py-1 rounded-lg bg-white/5 text-slate-400 text-xs font-medium border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden md:block opacity-20 group-hover:opacity-100 transition-opacity">
                 <i data-lucide={phase.icon} className="w-12 h-12 text-blue-500"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Phases;
