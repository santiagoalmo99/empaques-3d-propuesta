import { motion } from 'framer-motion';
import { Star, CheckCircle, Bot, Plus, Info, Server, Megaphone, Repeat } from 'lucide-react';

const Investment = () => {
    return (
        <section id="investment" className="py-32 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-7xl font-display font-bold mb-6 text-shimmer tracking-tight">Inversión Estratégica</h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Transparencia total. Compara manzanas con manzanas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto mb-12">
                    
                    {/* OPTION A: THE EXPENSIVE REALITY (Invoice Style) */}
                    <div className="bg-[#f0f0f0] text-slate-900 p-8 rounded-xl font-mono relative transform rotate-1 shadow-xl hover:rotate-0 transition-all duration-500 flex flex-col h-full border border-slate-300">
                        <div className="absolute top-4 right-4 text-slate-400 text-xs tracking-widest uppercase">FACTURA #001</div>
                        
                        <div className="border-b-2 border-slate-300 pb-6 mb-6">
                            <h3 className="text-xl font-bold uppercase tracking-wider text-slate-800">Agencia Tradicional</h3>
                            <p className="text-xs text-slate-500 mt-1">Desarrollo a la medida (Desde cero)</p>
                        </div>

                        <div className="flex-grow space-y-4 text-sm">
                            <div className="flex justify-between border-b border-slate-300/50 pb-2">
                                <span>1. Project Manager (2 meses)</span>
                                <span className="font-bold">$4,000,000</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-300/50 pb-2">
                                <span>2. Diseñador Senior UI/UX</span>
                                <span className="font-bold">$3,500,000</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-300/50 pb-2">
                                <span>3. Dev Frontend (WebGL/Threejs)</span>
                                <span className="font-bold">$6,000,000</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-300/50 pb-2">
                                <span>4. Backend & Infraestructura</span>
                                <span className="font-bold">$3,000,000</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-300/50 pb-2 text-slate-500 italic">
                                <span>5. Fee de Agencia (20%)</span>
                                <span className="font-bold">$1,500,000</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t-2 border-slate-800 flex justify-between items-end">
                            <div className="text-xs text-slate-500 max-w-[150px]">
                                *Tiempo estimado de entrega: 3-4 meses. Posibles costos extra por cambios.
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-bold uppercase text-slate-500">Total Estimado</div>
                                <div className="text-3xl font-black text-slate-900">$18,000,000</div>
                            </div>
                        </div>
                    </div>

                    {/* OPTION B: THE SMART PARTNERSHIP (Gold/Premium Style) */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="relative bg-gradient-to-br from-[#0f172a] to-[#020617] p-1 rounded-3xl shadow-[0_0_50px_rgba(234,179,8,0.2)] border border-yellow-500/30 flex flex-col h-full transform -rotate-1 md:-mt-8"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay rounded-3xl"></div>
                        
                        <div className="relative bg-[#0B1121] rounded-[1.4rem] p-8 pb-12 h-full flex flex-col overflow-hidden">
                             {/* Gold Shine Effect */}
                             <div className="absolute -top-20 -right-20 w-60 h-60 bg-yellow-500/10 rounded-full blur-[80px]"></div>

                            <div className="flex justify-between items-start mb-8 relative">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
                                        <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs">Alianza Estratégica</span>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-white">Tecnología Productizada</h3>
                                </div>
                                {/* Badge Moved to Absolute Position Container handled by parent relative */}
                            </div>
                            
                            {/* Absolute Badge - Positioned relative to the main card container (line 67) */}
                            <div className="absolute top-0 right-0 bg-yellow-900/40 border-l border-b border-yellow-500/30 text-yellow-500 text-[10px] font-bold px-4 py-2 rounded-bl-xl backdrop-blur-sm uppercase tracking-wider z-20">
                                OFERTA EXCLUSIVA: KAREN & ALEJANDRO
                            </div>

                            <div className="mb-8 p-6 bg-slate-900/50 rounded-2xl border border-white/5 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Motor Propietario</h4>
                                        <p className="text-xs text-slate-400">No reinventamos la rueda. Usamos nuestro "Core" 3D probado, ahorrándoles meses de ingeniería experimental.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Modelo Productizado</h4>
                                        <p className="text-xs text-slate-400">Transformamos horas humanas en código eficiente. Pagan por el resultado final (la máquina), no por nuestras horas.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-6 border-t border-white/10">
                                <p className="text-center text-slate-400 text-xs mb-2 uppercase tracking-widest">Inversión Única (Licencia de Uso)</p>
                                <div className="flex flex-col items-center">
                                    <div className="flex justify-center items-baseline gap-2 text-white">
                                        <span className="text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-sm">
                                            $2,500,000
                                        </span>
                                        <span className="text-xl font-light text-slate-500">COP</span>
                                    </div>
                                    <p className="text-yellow-500/80 text-[10px] uppercase tracking-widest font-bold mt-1">
                                        Precio especial para ustedes
                                    </p>
                                    <div className="mt-6 w-full px-4 py-3 rounded-xl bg-white/5 border border-yellow-500/20 text-center">
                                        <div className="flex flex-col items-center">
                                            <span className="text-yellow-100 font-bold text-sm tracking-wide">
                                                + $250,000 COP / Mes
                                            </span>
                                            <span className="text-slate-400 text-[11px] font-medium leading-tight mt-1">
                                                Mantenimiento, Hosting y Soporte 24/7
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center gap-8 mt-8 text-xs font-mono text-slate-500">
                                    <span>50% Inicio</span>
                                    <span className="text-slate-700">|</span>
                                    <span>50% Contra Entrega</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* THE ADD-ON (Chatbot) */}
                <div className="max-w-3xl mx-auto mb-20">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-1 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700"
                    >
                        <div className="bg-slate-900/90 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-3">
                                    <div className="bg-green-500/20 p-3 rounded-lg shrink-0">
                                        <Bot className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white flex items-center gap-3 justify-center md:justify-start">
                                            Chatbot de Inteligencia Artificial
                                            <span className="bg-slate-800 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">OPCIONAL</span>
                                        </h3>
                                        <p className="text-green-400 text-xs font-medium uppercase tracking-wide mt-1">
                                            Integrado 100% en tu página web
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0 pl-0 md:pl-[60px]">
                                    Un asistente virtual entrenado con tus datos que responde dudas técnicas de los clientes y cierra ventas en automático, sin intervención humana.
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center gap-3 shrink-0 min-w-[140px]">
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-white">$350,000 <span className="text-xs font-normal text-slate-500">COP</span></div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider text-center md:text-right">Pago Único</div>
                                </div>
                                <button className="w-full px-6 py-3 border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-bold rounded-lg uppercase tracking-wide flex items-center justify-center gap-2 transition-all group">
                                    <Plus className="w-3 h-3 group-hover:text-green-400 transition-colors" /> Agregar
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* SCOPE BOUNDARIES (Science/Control) */}
                <div className="max-w-4xl mx-auto border-t border-slate-800 pt-16">
                    <div className="text-center mb-10">
                        <h4 className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 mb-3">
                            <Info className="w-4 h-4" /> Claridad Operativa
                        </h4>
                        <p className="text-slate-400 text-sm max-w-lg mx-auto">
                            Para garantizar la excelencia y la velocidad de entrega, aplicamos principios de ingeniería estricta. Lo que <span className="text-slate-200 font-bold">NO</span> incluye este alcance:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
                        <div className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl">
                            <Server className="w-5 h-5 text-slate-600 mb-4 mx-auto md:mx-0" />
                            <h5 className="text-slate-300 font-bold text-sm mb-2">Infraestructura Tercerizada</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Hosting, Dominios y llaves de API (OpenAI) se conectan a tu facturación directa. <span className="italic">No revendemos ni inflamos costos de terceros.</span>
                            </p>
                        </div>
                        <div className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl">
                            <Megaphone className="w-5 h-5 text-slate-600 mb-4 mx-auto md:mx-0" />
                            <h5 className="text-slate-300 font-bold text-sm mb-2">Pauta y Tráfico</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Nosotros construimos el "Ferrari", tú pones la gasolina. El servicio es de desarrollo tecnológico, no incluye gestión de anuncios ni community management.
                            </p>
                        </div>
                        <div className="bg-slate-900/30 border border-slate-800/50 p-6 rounded-2xl">
                            <Repeat className="w-5 h-5 text-slate-600 mb-4 mx-auto md:mx-0" />
                            <h5 className="text-slate-300 font-bold text-sm mb-2">Iteraciones Infinitas</h5>
                            <p className="text-xs text-slate-500 leading-relaxed">
                                Trabajamos con 2 rondas de revisión estructuradas. Esto evita el "feature creep" y garantiza que tu proyecto salga en vivo en las semanas prometidas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Investment;
