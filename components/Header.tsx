import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PORTAL_URL, SYSTEM_LINKS, PEDIDO_ELETRONICO_URL, REGISTER_URL } from '../constants';
import { Menu, X, User, ChevronDown, ExternalLink, UserPlus, ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemsDropdownOpen, setSystemsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const OrgafarmaLogo = ({ className, variant }: { className?: string; variant: 'positive' | 'negative' }) => {
    const mainColor = variant === 'positive' ? '#0B2A48' : '#FFFFFF';
    
    return (
      <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="42" y="0" width="16" height="20" rx="2" fill={mainColor} />
        <circle cx="50" cy="65" r="45" stroke={mainColor} strokeWidth="10" />
        <circle cx="50" cy="65" r="28" fill="#70AABD" />
      </svg>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3 select-none shrink-0">
          <OrgafarmaLogo 
            className="h-8 w-auto md:h-10 transition-all duration-300" 
            variant={scrolled ? 'positive' : 'negative'} 
          />
          <div className="flex flex-col leading-none justify-center">
            <span className={`text-[10px] md:text-lg tracking-widest font-light transition-colors duration-300 ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              GRUPO
            </span>
            <span className={`text-sm md:text-lg tracking-wide font-extrabold transition-colors duration-300 ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
              ORGAFARMA
            </span>
          </div>
        </div>

        <div className="hidden xl:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 relative group ${
                  scrolled ? 'text-brand-dark' : 'text-white/90'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-brand-light' : 'bg-white'}`}></span>
              </a>
            ))}

            <div 
              className="relative group"
              onMouseEnter={() => setSystemsDropdownOpen(true)}
              onMouseLeave={() => setSystemsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${
                  scrolled ? 'text-brand-dark' : 'text-white/90'
                }`}
              >
                Sistemas <ChevronDown size={14} />
              </button>
              
              <div className={`absolute top-full right-0 pt-2 w-56 transition-all duration-200 origin-top-right ${systemsDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                   <a
                      href={PEDIDO_ELETRONICO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-sm hover:bg-brand-surface text-brand-dark font-bold transition-colors"
                    >
                      <span className="flex items-center gap-2">
                         <ShoppingCart size={14} />
                         Pedido Eletrônico
                      </span>
                    </a>
                    <div className="h-px bg-gray-100 my-1"></div>
                  {SYSTEM_LINKS.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 text-sm hover:bg-brand-surface hover:text-brand-dark transition-colors group/item text-gray-700"
                    >
                      <span className="flex items-center gap-2">
                         {link.name}
                      </span>
                      <ExternalLink size={12} className="opacity-0 group-hover/item:opacity-100 text-gray-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          
          <div className="flex items-center gap-3 pl-4 border-l border-white/20">
            <a 
                href={PEDIDO_ELETRONICO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:-translate-y-1 overflow-hidden group ${
                  scrolled 
                    ? 'bg-brand-light text-white hover:bg-brand-dark hover:shadow-brand-light/40' 
                    : 'bg-brand-light text-white hover:bg-white hover:text-brand-light hover:shadow-white/20'
                }`}
            >
                <span className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-ping opacity-20 group-hover:opacity-0"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <ShoppingCart size={16} />
                  Pedido Eletrônico
                </span>
            </a>

            <a 
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider transition-all border ${
                scrolled 
                    ? 'border-gray-200 text-gray-600 hover:border-brand-dark hover:text-brand-dark' 
                    : 'border-white/30 text-white/90 hover:bg-white/10 hover:text-white'
                }`}
            >
                <User size={14} />
                Área do Cliente
            </a>

            <a 
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all border-2 shadow-sm ${
                  scrolled 
                    ? 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white' 
                    : 'border-white text-white hover:bg-white hover:text-brand-dark'
                }`}
            >
               <UserPlus size={14} />
               Quero ser cliente
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4 xl:hidden">
           <a 
            href={PEDIDO_ELETRONICO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded-full bg-brand-light text-white text-[10px] md:text-xs font-bold shadow-lg flex items-center gap-1.5 uppercase tracking-wide whitespace-nowrap"
          >
            <ShoppingCart size={14} />
            Pedido Eletrônico
          </a>

          <button 
            className="p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={scrolled ? 'text-brand-dark' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-brand-dark' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5 fade-in duration-200 max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-brand-dark font-semibold text-lg hover:text-brand-light transition-colors block py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Acesso Rápido</span>
            <div className="space-y-3 pl-2">
              <a
                  href={PEDIDO_ELETRONICO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-3 rounded-lg px-4 bg-brand-light text-white font-bold shadow-md uppercase text-xs tracking-wider"
                >
                  <ShoppingCart size={16} />
                  Pedido Eletrônico
              </a>

              <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-3 rounded-lg px-4 bg-brand-dark text-white font-semibold"
                >
                  <User size={16} />
                  Área do Cliente
              </a>
              
              <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-3 px-4 text-brand-dark font-bold border-2 border-brand-dark rounded-lg justify-center hover:bg-brand-dark hover:text-white transition-colors uppercase tracking-wide text-xs"
                >
                  <UserPlus size={16} />
                  Quero ser Cliente
              </a>

              <div className="h-px bg-gray-100 my-2"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">Outros Sistemas</span>

              {SYSTEM_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 rounded-md px-2 text-gray-600 hover:text-brand-dark"
                >
                  <ExternalLink size={14} />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;