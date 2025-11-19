import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../constants';
import { FileCheck, AlertTriangle, Briefcase } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-brand-dark pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center justify-center p-3 bg-brand-light/20 rounded-full mb-6">
            <FileCheck className="w-8 h-8 text-brand-light" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Regras e condições para utilização dos serviços digitais do Grupo Orgafarma.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar o site, o Portal do Cliente ou utilizar o Pedido Eletrônico do <strong>GRUPO ORGAFARMA</strong>, você concorda integralmente com estes Termos de Uso. Caso não concorde com qualquer disposição, recomendamos que não utilize nossos serviços digitais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-light" />
              2. Natureza dos Serviços (B2B)
            </h2>
            <p>
              A Orgafarma atua exclusivamente na distribuição de produtos farmacêuticos para pessoas jurídicas (Farmácias, Drogarias, Hospitais e Clínicas).
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Elegibilidade:</strong> O cadastro no Portal do Cliente é restrito a empresas com CNPJ ativo e Licença Sanitária/AFE vigentes.</li>
              <li><strong>Uso de Credenciais:</strong> O login e senha de acesso ao Portal e Pedido Eletrônico são pessoais e intransferíveis. A guarda dessas informações é de responsabilidade exclusiva do cliente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, logotipos, ícones, imagens, compilações de dados e software, é propriedade da Orgafarma ou de seus fornecedores de conteúdo e é protegido pelas leis de direitos autorais brasileiras e internacionais.
            </p>
            <p className="mt-2">
              É proibida a reprodução, duplicação, cópia ou exploração comercial de qualquer parte do site sem consentimento expresso por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-brand-light" />
              4. Limitação de Responsabilidade
            </h2>
            <p>A Orgafarma empenha-se para manter as informações do site precisas e atualizadas. No entanto:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Não garantimos que o site estará livre de erros técnicos ou indisponibilidades momentâneas.</li>
              <li>Preços e estoques exibidos no site institucional são meramente ilustrativos. Os valores válidos são os constantes no momento do fechamento do pedido dentro do Portal/Pedido Eletrônico logado.</li>
              <li>A empresa não se responsabiliza por danos decorrentes do uso indevido de suas credenciais de acesso por terceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Links para Terceiros</h2>
            <p>
              Nosso site pode conter links para sites externos (ex: parceiros, sistemas de RH). A Orgafarma não possui controle sobre o conteúdo e práticas de privacidade desses sites e não assume responsabilidade por eles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Modificações</h2>
            <p>
              A Orgafarma reserva-se o direito de alterar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do serviço após as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Foro</h2>
            <p>
              Fica eleito o foro da Comarca de Belo Horizonte, Estado de Minas Gerais, para dirimir quaisquer dúvidas oriundas destes Termos de Uso, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;