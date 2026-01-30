import { Layout, Box, BarChart3, Bot, ShieldCheck } from 'lucide-react';

const Scope = () => {
  const modules = [
    {
      title: "1. Plataforma Web de Alta Conversión",
      subtitle: "TU VITRINA DIGITAL PREMIUM",
      icon: Layout,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      items: [
        { label: "Diseño de Interfaz Nivel Apple", desc: "UI limpia, minimalista y ultra-premium que posiciona tu marca por encima de la competencia." },
        { label: "Optimización Móvil Completa", desc: "Tus clientes pueden personalizar y comprar desde cualquier celular con una fluidez impecable." },
        { label: "SEO Técnico (Indexación en Google)", desc: "Configuración profesional para que tu tienda aparezca en los resultados de búsqueda orgánica." },
        { label: "Velocidad de Carga 'Instant-View'", desc: "Alojado en Cloudflare Pages para que el sitio cargue en milisegundos, reduciendo el abandono." },
        { label: "Certificación de Seguridad SSL", desc: "Blindaje total de datos para que tus clientes naveguen y compren con absoluta tranquilidad." }
      ]
    },
    {
      title: "2. Visualizador 3D e IA de Arte",
      subtitle: "LO QUE ELIMINA LAS DUDAS",
      icon: Box,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      items: [
        { label: "Motor Gráfico Three.js (WebGL)", desc: "Visualización 360° fluida sin necesidad de instalar nada. El cliente 'toca' el producto." },
        { label: "Mapeo UV de Alta Precisión", desc: "Aplicación realista del logo sobre la forma del empaque, respetando dimensiones y proporciones." },
        { label: "Agente Auto-Removedor de Fondos", desc: "IA que limpia automáticamente los logos de tus clientes, garantizando un preview profesional." },
        { label: "Simulador de Materiales Reales", desc: "Diferencia visual inmediata entre texturas Kraft naturales y polímeros brillantes." },
        { label: "Cámara Orbital Táctil", desc: "Navegación intuitiva que permite explorar cada detalle del empaque con gestos simples." }
      ]
    },
    {
      title: "3. Inteligencia de Negocio",
      subtitle: "LO QUE ESCALA LA RENTABILIDAD",
      icon: BarChart3,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      items: [
        { label: "Lógica de Incentivo Recurrente", desc: "Sistema que ofrece precios diferenciados para incentivar suscripciones de compra mensual." },
        { label: "Calendario de Entrega Inteligente", desc: "Control automático de fechas según lead-times de producción y días de entrega habilitados." },
        { label: "Carrito de Compra Persistente", desc: "Uso de LocalStorage para que el cliente recupere su diseño incluso días después sin costo extra." },
        { label: "Pasarela Blindada ePayco / Nequi", desc: "Cobros seguros y depósitos directos a tu cuenta con los estándares más altos del país." },
        { label: "Checkout de Conversión Rápida", desc: "Flujo optimizado para cerrar la venta con la menor cantidad de pasos posible." }
      ]
    },
    {
      title: "4. Automatización y Operaciones",
      subtitle: "LO QUE AHORRA TIEMPO Y ERRORES",
      icon: Bot,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      items: [
        { label: "Generador de Fichas Técnicas PDF", desc: "Generación automática de la orden de producción para planta. Cero errores humanos." },
        { label: "Emails Transaccionales Automáticos", desc: "Confirmación de compra, recibos y guías de envío enviados por el sistema sin intervención." },
        { label: "Infraestructura Serverless", desc: "Uso de Firebase para garantizar que tu web aguante picos de tráfico masivo sin caídas." },
        { label: "Notificaciones WhatsApp / SMS", desc: "Upgrade opcional disponible ($50k/mes) para alertar pedidos directo al celular." },
        { label: "Base de Datos de Pedidos Histórica", desc: "Registro histórico inmutable para que re-ordenar un diseño previo sea cuestión de un clic." }
      ]
    }
  ];

  return (
    <section id="alcance" className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-2 block">Ingeniería & Resultados Reales</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white text-center">
            Mas que un sitio web. <br/>
            <span className="text-shimmer">Es tu infraestructura de ventas optimizada.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-4xl mx-auto leading-relaxed">
            Hemos diseñado un <span className="text-white font-semibold">flujo técnico alineado a tu operación</span>.
            <br/>Automatizamos el diseño, el cobro y la orden técnica para que tú te enfoques en producir empaques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((mod, i) => (
            <div key={i} className={`p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 hover:border-slate-600 transition-all group hover:bg-slate-900/60 shadow-2xl shadow-black/50`}>
              <div className="flex items-center gap-5 mb-8 border-b border-slate-800/50 pb-6">
                <div className={`p-4 rounded-2xl ${mod.bg} ${mod.color} shadow-lg shadow-black/20`}>
                  <mod.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-0.5 text-left">{mod.title}</h3>
                  <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${mod.color} opacity-80 text-left`}>{mod.subtitle}</p>
                </div>
              </div>

              <div className="space-y-6">
                {mod.items.map((item, j) => (
                  <div key={j} className="flex gap-4 items-start group/item">
                    <div className={`mt-1.5 w-2.5 h-2.5 rounded-full ${mod.color.replace('text-', 'bg-')} shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover/item:scale-125 transition-all shrink-0`}></div>
                    <div className="text-left">
                      <strong className="block text-slate-200 text-base font-bold mb-1 group-hover:text-white transition-colors">{item.label}</strong>
                      <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-sm font-semibold backdrop-blur">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Stack Real: Cloudflare Pages + Firebase (Google Cloud Platform)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scope;
