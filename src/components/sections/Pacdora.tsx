import { motion } from 'framer-motion';

const Pacdora = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-slate-900 to-blue-900/10 relative">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-800/80 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-400 text-sm font-bold mb-4 border border-red-500/20 uppercase tracking-widest font-sans">
                ALERTA DE SEGURIDAD FINANCIERA
              </div>
              <h2 className="text-4xl font-display font-bold mb-4 text-shimmer">
                ¿Por qué no usamos Pacdora?
              </h2>
              <h3 className="text-xl text-red-200 font-semibold mb-4 text-left">
                La Trampa del "Taxímetro"
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Muchas agencias te instalarían Pacdora para salir del paso rápido. 
                Pero Pacdora cobra por cada usuario que "juega" con el 3D, compren o no.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                <span className="text-white font-bold">El Riesgo del Cheque en Blanco:</span> Si mañana te haces viral en TikTok y entran 5,000 niños a probar diseños, 
                ¡te llegaría una factura millonaria sin haber vendido nada!
              </p>
              <p className="text-blue-300 font-medium italic border-l-4 border-blue-500 pl-4">
                "Yo construí TU PROPIO MOTOR 3D. La tecnología es tuya. 
                Pueden entrar 1 millón de personas y tú pagas $0 pesos."
              </p>
            </div>
            
            <div className="md:w-1/2 bg-slate-900/50 rounded-2xl p-6 border border-white/5">
              <h4 className="text-center text-slate-400 text-sm uppercase tracking-widest mb-6">Comparativa de Costos (1 Año)</h4>
              
              <div className="space-y-6">
                {/* Pacdora Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-red-300">Con Pacdora (Alquilado)</span>
                    <span className="font-mono text-red-300">~$4,500,000/año</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '80%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-red-500"
                    ></motion.div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Costo variable incontrolable</p>
                </div>

                {/* Our Solution Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-green-300">Nuestra Solución (Propia)</span>
                    <span className="font-mono text-green-300">$0/año</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '5%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-green-500"
                    ></motion.div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 text-left">Tu activo. Tu control.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pacdora;
