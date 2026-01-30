import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-50">
          <div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center">
            <span className="text-white font-bold text-xs italic">E</span>
          </div>
          <span className="font-bold tracking-tight text-sm">EMPAQUES3D</span>
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
