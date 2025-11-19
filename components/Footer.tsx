import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import { OFFICES, SYSTEM_LINKS, COMPANY_INFO, CAREERS_URL, PEDIDO_ELETRONICO_URL } from '../constants';

const Footer: React.FC = () => {
  const OrgafarmaLogoNegative = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="42" y="0" width="16" height="20" rx="2" fill="#FFFFFF" />
      <circle cx="50" cy="65" r="45" stroke="#FFFFFF" strokeWidth="10" />
      <circle cx="50" cy="65" r="28" fill="#70AABD" />
    </svg>
  );

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-8 flex flex-col items-start">
            <div className="flex flex-col items-center w-fit group">
                <div className="mb-4">
                    <OrgafarmaLogoNegative className="h-24 w-auto" />
                </div>
                
                <div className="flex flex-col leading-none justify-center items-center mb-3">
                    <span className="text-lg tracking-[0.3em] font-light text-gray-200 mb-1">GRUPO</span>
                    <span className="text-3xl tracking-widest font-extrabold text-white">ORGAFARMA</span>
                </div>

                <h2 className="text-[0.55rem] font-black tracking-[0.08em] uppercase text-brand-light w-full text-justify leading-tight">
                    DISTRIBUIDORA DE PRODUTOS FARMACÊUTICOS
                </h2>
            </div>
            
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-light hover:text-brand-dark transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-light hover:text-brand-dark transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-light hover:text-brand-dark transition-all"><Linkedin size={18} /></a>
            </div>
            
            <div className="pt-2 w-full">
                <h4 className="text-brand-light font-bold uppercase tracking-widest text-sm mb-4">Contato Comercial</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-center space-x-3 group">
                        <Phone className="w-4 h-4 text-brand-light" />
                        <span>{COMPANY_INFO.phone}</span>
                    </li>
                    <li className="flex items-center space-x-3 group">
                        <Mail className="w-4 h-4 text-brand-light" />
                        <span>{COMPANY_INFO.email}</span>
                    </li>
                </ul>
            </div>
          </div>

          <div>
            <h4 className="text-brand-light font-bold uppercase tracking-widest text-sm mb-6">Acesso Rápido</h4>
            
            <div className="mb-8">
                <h5 className="text-xs font-bold text-gray-500 uppercase mb-3">Sistemas</h5>
                <ul className="space-y-3 text-sm text-gray-400">
                    <li>
                        <a 
                            href={PEDIDO_ELETRONICO_URL} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center justify-between bg-brand-light hover:bg-white hover:text-brand-dark text-brand-dark font-bold py-3 px-4 rounded-lg transition-all shadow-lg transform hover:-translate-y-1 group"
                        >
                            <span className="flex items-center gap-2">
                                Pedido Eletrônico
                            </span>
                            <ExternalLink size={14} />
                        </a>
                    </li>

                    {SYSTEM_LINKS.map((link) => (
                        <li key={link.name}>
                        <a 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-white transition-colors flex items-center group"
                        >
                            <ExternalLink size={12} className="mr-2 opacity-50 group-hover:opacity-100 text-brand-light" />
                            {link.name}
                        </a>
                        </li>
                    ))}
                    
                     {/* Manual Addition of Portal Link for Footer Access */}
                    <li>
                        <a 
                            href="https://clientes.orgafarma.com.br/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-white transition-colors flex items-center group"
                        >
                            <ExternalLink size={12} className="mr-2 opacity-50 group-hover:opacity-100 text-brand-light" />
                            Área do Cliente
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h5 className="text-xs font-bold text-gray-500 uppercase mb-3">Institucional</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li>
                        <a href={CAREERS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center text-brand-light font-medium">
                            Trabalhe Conosco
                            <Briefcase size={12} className="ml-2" />
                        </a>
                    </li>
                </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-brand-light font-bold uppercase tracking-widest text-sm mb-8">Nossas Unidades</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {OFFICES.map((office, index) => (
                    <div key={index} className="group">
                        <div className="flex items-start space-x-3">
                            <div className="mt-1 min-w-[16px]">
                                <MapPin className="w-4 h-4 text-brand-light group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-sm mb-1">{office.name}</h5>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {office.address}{office.complement && `, ${office.complement}`}
                                    <br />
                                    {office.neighborhood} - {office.city}/{office.state}
                                    <br />
                                    CEP: {office.cep}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start text-xs text-gray-500 gap-4">
          <div className="flex flex-col gap-1">
            <p>&copy; {new Date().getFullYear()} Orgafarma. Todos os direitos reservados.</p>
            <p>Razão Social: {COMPANY_INFO.razaoSocial}</p>
            <p>CNPJ: {COMPANY_INFO.cnpj}</p>
          </div>
          <div className="flex space-x-6">
            <a href="#terms" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;