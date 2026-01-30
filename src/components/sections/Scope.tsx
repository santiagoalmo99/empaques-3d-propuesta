const Scope = () => {
  const modules = [
    {
      title: "Módulo 1: Motor Gráfico 3D",
      icon: "box", 
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      items: [
        { label: "Renderizado WebGL (60 FPS)", desc: "Fluidez nativa sin plugins." },
        { label: "Mapeo UV Curvo", desc: "El logo se deforma realísticamente." },
        { label: "Sistema de Materiales PBR", desc: "Diferencia real entre Kraft y Plástico." },
        { label: "Cámara Orbital Táctil", desc: "Zoom, paneo y rotación móvil." },
      ]
    },
    {
      title: "Módulo 2: Motor Transaccional",
      icon: "shopping-cart",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      items: [
        { label: "Lógica de Incentivo Recurrente", desc: "Suscripciones para compra automática." },
        { label: "Pasarela ePayco / Nequi", desc: "Cobro tarjeta, PSE y Nequi." },
        { label: "Carro de Compras Persistente", desc: "No pierde items al recargar." },
        { label: "Calendario Inteligente", desc: "Reglas de entrega y lead times." },
      ]
    },
    {
      title: "Módulo 3: IA & Operaciones",
      icon: "bot",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      items: [
        { label: "Agente Quita-Fondos AI", desc: "Limpia logos de clientes automáticamente." },
        { label: "Generador PDF Producción", desc: "Orden técnica lista para planta." },
        { label: "Emails Transaccionales", desc: "Recibos y guías automáticas." },
        { label: "Base de Datos Inmutable", desc: "Histórico de pedidos en Firestore." },
      ]
    },
    {
      title: "Módulo 4: Infra Cloud",
      icon: "server",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      items: [
        { label: "Cloudflare Workers", desc: "Backend ultra-veloz sin servidores." },
        { label: "CDN Global Edge", desc: "Carga instantánea en todo el mundo." },
        { label: "SSL/TLS Encriptado", desc: "Seguridad bancaria para transacciones." },
        { label: "Optimización de Assets", desc: "Compresión automática de modelos 3D." },
      ]
    }
  ];

  return (
    <section id="alcance" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">Ingeniería & Alcance</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">No es una Web. Es una Fábrica Digital.</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, i) => (
            <div key={i} className="p-8 rounded-[2.5rem] bg-slate-950 border border-white/5 hover:border-white/10 transition-all group">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl ${mod.bg} ${mod.color} flex items-center justify-center`}>
                  <i data-lucide={mod.icon} className="w-6 h-6"></i>
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{mod.title}</h3>
              </div>
              
              <div className="space-y-6">
                {mod.items.map((item, j) => (
                  <div key={j} className="flex gap-4 group/item">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500/30 group-hover/item:bg-blue-500 transition-colors"></div>
                    <div>
                      <h4 className="text-slate-200 font-bold text-sm mb-1">{item.label}</h4>
                      <p className="text-slate-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scope;
