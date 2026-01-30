import { motion } from 'framer-motion';

const ProblemSolution = () => {
  return (
    <section id="problem" className="py-32 relative overflow-hidden bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-shimmer">El Dilema de los 3 Días</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            El cliente moderno no tiene paciencia. Mientras espera tu PDF, ya le compró al que le mostró el precio de inmediato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Old Way */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 grayscale hover:grayscale-0 transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-2xl">🐢</div>
              <h3 className="text-2xl font-bold text-slate-300">La Forma Antigua</h3>
            </div>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl font-bold text-left">ⓧ</span>
                <span className="text-left leading-relaxed">Cliente pide cotización por WhatsApp (10 PM).</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl font-bold text-left">ⓧ</span>
                <span className="text-left leading-relaxed">Tú respondes al día siguiente (si te acuerdas).</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl font-bold text-left">ⓧ</span>
                <span className="text-left leading-relaxed">"¿Me montas el logo para ver cómo queda?"</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-red-500 text-xl font-bold text-left">ⓧ</span>
                <span className="text-left leading-relaxed">Ping-pong de correos con el diseñador.</span>
              </li>
              <li className="flex items-center gap-3 font-semibold text-red-400 mt-4 text-left">
                Resultado: El cliente se enfría y se va.
              </li>
            </ul>
          </motion.div>

          {/* New Way */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-[#0B1121] border border-blue-500 shadow-[0_0_50px_-10px_rgba(59,130,246,0.2)] relative overflow-hidden group hover:shadow-[0_0_50px_-5px_rgba(59,130,246,0.4)] transition-all duration-500"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all"></div>

            <div className="absolute top-0 right-0 p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-bl-2xl text-xs font-bold uppercase tracking-wider text-white shadow-lg">
              Tu Nueva Ventaja
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/50">🚀</div>
              <h3 className="text-2xl font-bold text-white">La Máquina Automática</h3>
            </div>
            <ul className="space-y-4 text-slate-200">
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl font-bold text-left">✔</span>
                <span className="text-left leading-relaxed">Cliente entra, sube su logo y lo ve en 3D (24/7).</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl font-bold text-left">✔</span>
                <span className="text-left leading-relaxed">El sistema le cobra de inmediato.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-400 text-xl font-bold text-left">✔</span>
                <span className="text-left leading-relaxed">Tú recibes la orden lista con el PDF de producción.</span>
              </li>
              <li className="flex items-center gap-3 font-semibold text-green-400 mt-4 text-left">
                Resultado: Venta cerrada en 5 minutos.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
