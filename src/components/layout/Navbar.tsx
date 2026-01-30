import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Propuesta', href: '#problem' },
    { name: 'Alcance', href: '#phases' },
    { name: 'Inversión', href: '#investment' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-2xl relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/trashy_logo.png" alt="TRASHY" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-6 right-6 mt-2 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl md:hidden flex flex-col gap-2 z-50">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-white font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-colors text-center uppercase tracking-widest text-sm border border-transparent hover:border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
