const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-50">
          <img src="/trashy_logo.png" alt="TRASHY" className="h-6 w-auto object-contain brightness-0 invert" />
        </div>
        
        <p className="text-slate-500 text-xs font-mono">
          Stack Real: Cloudflare Pages + Firebase (Google Cloud Platform) • 2026
        </p>
        
        <div className="text-slate-500 text-xs">
          Propuesta Confidencial para <strong>Grupo Empaques</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
