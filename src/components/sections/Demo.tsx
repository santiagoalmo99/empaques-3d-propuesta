import { useState } from 'react';

import { CoffeeCupScene } from '../3d/CoffeeCup';

const LOGO_PRESETS = [
    'https://cdn-icons-png.flaticon.com/512/9333/9333999.png', // Default Ship
    'https://cdn-icons-png.flaticon.com/512/2503/2503718.png', // Geometric 1
    'https://cdn-icons-png.flaticon.com/512/1046/1046394.png', // Geometric 2
];

const Demo = () => {
    const [color, setColor] = useState('#ffffff');
    const [logoIndex, setLogoIndex] = useState(0);
    const [isCycling, setIsCycling] = useState(false);

    const handleCycleLogo = () => {
        setIsCycling(true);
        // Simulate "uploading" delay for realism
        setTimeout(() => {
            setLogoIndex((prev) => (prev + 1) % LOGO_PRESETS.length);
            setIsCycling(false);
        }, 800);
    };

    return (
        <section id="demo" className="py-24 bg-[#0B1121] relative overflow-hidden">
             {/* Dynamic Background Atmosphere */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 -z-10"></div>
             
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* --- Left Column: Potent Copy (Smaller Area) --- */}
                    <div className="lg:col-span-4 text-left space-y-8">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-6 animate-fade-in">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                                Tecnología de Impacto
                            </span>
                            
                            <h2 className="text-5xl md:text-6xl font-display font-black text-white tracking-tighter leading-[0.9]">
                                TU MARCA, <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 drop-shadow-2xl">
                                    INMORTALIZADA.
                                </span>
                            </h2>
                        </div>
                        
                        <p className="text-slate-400 text-lg leading-relaxed font-sans border-l-4 border-indigo-500 pl-6">
                            Deja de vender "vasos". <strong className="text-slate-200">Vende experiencias.</strong><br/>
                            Nuestro motor 3D no es un "adorno". Es tu mejor vendedor cierres. 
                            El cliente ve su logo, siente la textura, y la venta se cierra sola.
                        </p>
                        
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner border border-slate-700/50">🚀</div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wide text-xs">Carga Instantánea</h4>
                                    <p className="text-slate-500 text-sm">Sin esperas. Sin apps.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-2xl shadow-inner border border-slate-700/50">💎</div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wide text-xs">Calidad de Estudio</h4>
                                    <p className="text-slate-500 text-sm">Iluminación cinematográfica.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: The Simulator (Dominant Area) --- */}
                    <div className="lg:col-span-8 w-full">
                        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-slate-800/40 to-slate-950/40 p-1 shadow-2xl backdrop-blur-sm border border-white/5 ring-1 ring-white/5">
                            
                            {/* Simulator Container */}
                            <div className="relative w-full aspect-[16/10] md:aspect-[16/9] bg-[#0f172a] rounded-[2.2rem] overflow-hidden group shadow-2xl">
                                
                                {/* 3D Scene */}
                                <div className="absolute inset-0 z-0 cursor-move">
                                    <CoffeeCupScene color={color} logoUrl={LOGO_PRESETS[logoIndex]} />
                                </div>

                                {/* Controls Overlay - Bottom Dynamic Island */}
                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-auto min-w-[320px] max-w-[90%] p-2.5 bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-between shadow-2xl z-30 transition-all hover:scale-[1.02] hover:bg-slate-950/70 hover:border-white/20 hover:shadow-blue-900/20">
                                    
                                    {/* Colors */}
                                    <div className="flex items-center gap-3 pl-3 pr-4">
                                        {['#ffffff', '#1e293b', '#ef4444', '#3b82f6', '#fbbf24'].map((c) => (
                                            <button 
                                                key={c}
                                                onClick={() => setColor(c)}
                                                className={`w-6 h-6 rounded-full transition-all duration-300 ${color === c ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-950 shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'hover:scale-110 opacity-80 hover:opacity-100'}`}
                                                style={{ backgroundColor: c }}
                                            />
                                        ))}
                                    </div>

                                    <div className="w-px h-6 bg-white/10 mx-2"></div>

                                    {/* Glassmorphism Upload Button */}
                                    <button 
                                        onClick={handleCycleLogo}
                                        disabled={isCycling}
                                        className="relative group overflow-hidden px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-blue-400/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                        {isCycling ? (
                                            <>
                                                <div className="w-3 h-3 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                                                <span>Cargando...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-lg">✨</span>
                                                <span>Cambiar Logo</span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Hints */}
                                <div className="absolute top-4 left-4 text-[10px] font-medium text-slate-500 bg-slate-950/30 px-2 py-1 rounded backdrop-blur-sm pointer-events-none">
                                    Mover para rotar • Scroll para zoom
                                </div>

                            </div>
                            
                            {/* Reflection/Glow effect underneath */}
                            <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent blur-2xl -z-10 opacity-30"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;
