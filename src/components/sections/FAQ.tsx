import React from 'react';

const FAQ = () => {
  const faqs = [
    { q: "¿En qué tecnología se construye?", a: "React 18 + Three.js para el frontal, Firebase para la inteligencia y base de datos, y Cloudflare para la distribución global." },
    { q: "¿El costo de hosting está incluido?", a: "Sí. Los $2.15M/mes incluyen la gestión de Cloudflare, base de datos Firebase y soporte técnico proactivo." },
    { q: "¿Es compatible con celulares?", a: "Totalmente. El motor 3D está optimizado para funcionar en iPhone y Android sin necesidad de instalar apps." },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-900/50 border border-white/5">
              <h4 className="text-white font-bold mb-4">{faq.q}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
