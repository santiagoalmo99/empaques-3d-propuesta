import { motion } from 'framer-motion';
import { CoffeeCupScene } from '../3d/CoffeeCup';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-[#0B1121]">
            
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-[#0B1121]">
                {/* 1. Visible Grid (Stronger Contrast) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                
                {/* STATIC MOBILE BACKGROUND (Lightweight) */}
                <div className="absolute inset-0 block md:hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-900/40 blur-[60px] rounded-full mix-blend-screen"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-[#0B1121]"></div>
                </div>

                {/* DESKTOP BACKGROUND (Static for Max Performance) */}
                <div className="hidden md:block absolute inset-0">
                    {/* 2. Strong Glow (Static - No Animation Loop) */}
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/40 blur-[80px] rounded-full mix-blend-screen pointer-events-none scale-125 opacity-60"
                    />
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none scale-110 opacity-50"
                    />
                </div>

                {/* 3. Subtle ambient light from top */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1400px] px-6 grid lg:grid-cols-2 gap-12 items-center">
                
                {/* --- Left Column: Text & CTA --- */}
                <div className="text-left space-y-8 relative z-20 pt-10 md:pt-0 pb-12 lg:pb-0">
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                     >
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] font-display mb-6">
                            El Futuro <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">de Empaques</span> <br/>
                            <span className="text-shimmer drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                Empieza Hoy.
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-2xl text-slate-400 font-light leading-relaxed max-w-xl border-l-4 border-blue-500 pl-6 my-8">
                            No venimos a venderles una página web. <br/>
                            Venimos a instalar una <strong className="text-white font-bold">Máquina de Ventas Automática</strong> que trabaja mientras ustedes duermen.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#demo" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
                                Ver El Futuro
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <a href="#problem" className="px-8 py-4 bg-transparent border border-slate-700 hover:border-white/50 text-slate-300 hover:text-white rounded-full font-medium text-lg transition-all text-center">
                                ¿Por qué ahora?
                            </a>
                        </div>
                     </motion.div>

                     {/* Social Proof / Trust Indicators Removed per request */}
                </div>

                {/* --- Right Column: The 3D Simulator --- */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full h-[50vh] lg:h-[800px] flex items-center justify-center z-10"
                >
                    {/* Simulator Container - Adjusted position to be closer to text and centered vertically */}
                    <div className="absolute inset-0 scale-100 lg:scale-125 lg:-translate-x-12 lg:-translate-y-12 pointer-events-auto flex items-center justify-center">
                         <CoffeeCupScene transparent />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
