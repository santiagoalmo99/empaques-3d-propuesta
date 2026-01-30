import { motion } from 'framer-motion';
import { Layers, Box, CreditCard, Rocket } from 'lucide-react';

const Phases = () => {
  const phases = [
    { 
      title: "FASE 1: Cimientos & UX de Alto Nivel", 
      time: "SEMANAS 1-2", 
      icon: Layers,
      desc: "Establecemos la base técnica y visual del proyecto.",
      items: ["Diseño de Interfaz 'Apple-Level'", "Setup Pro en Cloudflare Pages", "Modelado de Datos en Firestore"] 
    },
    { 
      title: "FASE 2: Motor 3D & IA de Arte", 
      time: "SEMANAS 3-5", 
      icon: Box,
      desc: "Desarrollo del núcleo gráfico y automatización visual.",
      items: ["Motor WebGL (60 FPS) Fluido", "Agente Auto-Removedor de Fondos", "Simulación de Materiales Reales"] 
    },
    { 
      title: "FASE 3: Inteligencia & Pagos", 
      time: "SEMANAS 6-7", 
      icon: CreditCard,
      desc: "Cerebro transaccional y lógica de suscripción.",
      items: ["Motor de Incentivo Recurrente", "Calendario Inteligente (Lead-times)", "Integración ePayco / Webhooks"] 
    },
    { 
      title: "FASE 4: Stress Test & Lanzamiento", 
      time: "SEMANA 8", 
      icon: Rocket,
      desc: "Optimización final y paso a producción.",
      items: ["Pruebas de Carga (Stress Testing)", "Optimización SEO y LCP", "Entrega Final y Monitoreo 24/7"] 
    }
  ];

  return (
    <section id="phases" className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-3 block">RUTA CRÍTICA DE INGENIERÍA</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 text-shimmer">
            Plan de Ejecución: 4 a 8 Semanas
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Un proceso estructurado diseñado para la <span className="text-white font-medium">velocidad y la excelencia técnica</span>. 
            Sin improvisaciones, solo ingeniería.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-slate-800 md:-translate-x-px"></div>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Connector Point */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 border-blue-500 z-20 md:-translate-x-2 mt-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                {/* Content Area */}
                <div className="md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <motion.div 
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/5 hover:border-blue-500/20 transition-all group relative"
                  >
                    {/* Background Decorative Icon */}
                    <phase.icon className="absolute -right-4 -bottom-4 w-32 h-32 text-white/2 group-hover:text-blue-500/5 transition-colors pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                          <phase.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase">{phase.time}</span>
                          <div className="text-blue-200 mt-2 font-mono text-sm">Tiempo estimado: Entre 4 a 8 Semanas*</div>
                          <h3 className="text-xl font-bold text-white font-display uppercase leading-tight">{phase.title}</h3>
                        </div>
                      </div>

                      <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium text-left">{phase.desc}</p>
                      
                      <div className="space-y-3">
                        {phase.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-3 bg-slate-950/50 p-2.5 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors group/item cursor-default">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/item:bg-blue-500"></div>
                            <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty Area for Alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phases;
