const FAQ = () => {
    return (
        <section className="py-24 bg-slate-950 border-t border-slate-900">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-12 text-center text-slate-400 uppercase tracking-[0.2em]">Preguntas Frecuentes</h2>
                <div className="space-y-6">
                    {[
                        { q: "¿Qué garantía tengo sobre el trabajo?", a: "Absoluta. Tienes 30 días de garantía técnica post-entrega para corregir cualquier bug o ajuste menor. Queremos que tu máquina de ventas funcione impecable." },
                        { q: "¿El Chatbot IA puede responder cualquier cosa?", a: "Sí. Al conectarlo con una base de conocimiento avanzada (RAG), puede responder sobre inventario, especificaciones técnicas, precios y tiempos de entrega con total precisión, sin alucinar." },
                        { q: "¿Cuánto tiempo toma el desarrollo?", a: "El desarrollo toma entre 4 a 8 semanas exactas para garantizar calidad PREMIUM, incluyendo fases de diseño, desarrollo y pruebas rigurosas." }
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-colors group">
                            <h4 className="font-bold text-slate-200 mb-2 group-hover:text-white transition-colors text-left">{item.q}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed text-left">{item.a}</p>
                        </div>
                    ))}
                </div>
                
                <footer className="mt-24 text-center border-t border-slate-900 pt-12">
                    <p className="text-slate-600 text-sm font-sans">
                        Propuesta Confidencial preparada para Karen & Alejandro.
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default FAQ;
