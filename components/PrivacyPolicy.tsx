import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../constants.ts';
import { Shield, Lock, Eye, FileText, Cookie } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-brand-dark pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <div className="inline-flex items-center justify-center p-3 bg-brand-light/20 rounded-full mb-6">
            <Shield className="w-8 h-8 text-brand-light" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Transparência e compromisso com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              1. Introdução
            </h2>
            <p>
              O <strong>GRUPO ORGAFARMA</strong> ({COMPANY_INFO.razaoSocial}), inscrito no CNPJ sob o nº {COMPANY_INFO.cnpj}, valoriza a privacidade de seus usuários, clientes, parceiros e colaboradores. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-light" />
              2. Coleta de Dados
            </h2>
            <p className="mb-4">Coletamos apenas os dados necessários para a prestação de nossos serviços de distribuição farmacêutica:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Identificação:</strong> Nome completo, CPF, RG (para representantes legais de farmácias).</li>
              <li><strong>Dados de Contato:</strong> E-mail, telefone fixo, celular e endereço comercial.</li>
              <li><strong>Dados Corporativos:</strong> Razão Social, CNPJ, Inscrição Estadual e Licença Sanitária (para validação de cadastro).</li>
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas acessadas e cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-light" />
              3. Finalidade do Tratamento
            </h2>
            <p>Utilizamos seus dados para as seguintes finalidades, amparadas pelas bases legais da LGPD:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Execução de Contrato:</strong> Processamento de pedidos, faturamento e entrega logística.</li>
              <li><strong>Cumprimento de Obrigação Legal:</strong> Emissão de notas fiscais e reportes à ANVISA (SNGPC).</li>
              <li><strong>Legítimo Interesse:</strong> Prevenção a fraudes e segurança da plataforma.</li>
              <li><strong>Atendimento:</strong> Suporte via SAC e Área do Cliente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-light" />
              4. Compartilhamento de Dados
            </h2>
            <p>A Orgafarma não comercializa seus dados. O compartilhamento ocorre apenas com:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Transportadoras parceiras (para entrega dos produtos).</li>
              <li>Instituições financeiras (para processamento de pagamentos/boletos).</li>
              <li>Órgãos governamentais (ANVISA, Receita Federal) quando exigido por lei.</li>
              <li>Provedores de tecnologia (hospedagem de servidores e sistemas de segurança).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Seus Direitos (Art. 18 da LGPD)</h2>
            <p className="mb-4">Você possui os seguintes direitos em relação aos seus dados:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-brand-surface p-4 rounded-lg border border-blue-100">
                <strong className="block text-brand-dark mb-1">Confirmação e Acesso</strong>
                Saber se tratamos seus dados e ter acesso a eles.
              </div>
              <div className="bg-brand-surface p-4 rounded-lg border border-blue-100">
                <strong className="block text-brand-dark mb-1">Correção</strong>
                Solicitar alteração de dados incompletos ou desatualizados.
              </div>
              <div className="bg-brand-surface p-4 rounded-lg border border-blue-100">
                <strong className="block text-brand-dark mb-1">Eliminação</strong>
                Solicitar a exclusão de dados tratados com consentimento, exceto quando a manutenção for legalmente obrigatória.
              </div>
              <div className="bg-brand-surface p-4 rounded-lg border border-blue-100">
                <strong className="block text-brand-dark mb-1">Revogação</strong>
                Retirar o consentimento para tratamentos opcionais (ex: marketing).
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
               <Cookie className="w-5 h-5 text-brand-light" />
               6. Cookies e Tecnologias de Rastreamento
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-brand-dark">O que são Cookies?</h3>
                <p>
                  Cookies são pequenos arquivos de texto armazenados no seu navegador ou dispositivo quando você visita nosso site ou utiliza nossos serviços online. Eles servem para "lembrar" suas ações e preferências ao longo do tempo.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-brand-dark">Como utilizamos?</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para o funcionamento do Portal, permitindo login seguro e processamento de pedidos. Não podem ser desativados.</li>
                  <li><strong>Cookies de Desempenho:</strong> Coletam informações anônimas sobre como os usuários navegam no site (ex: páginas mais visitadas), ajudando-nos a melhorar a infraestrutura.</li>
                  <li><strong>Cookies Funcionais:</strong> Lembram suas escolhas (como nome de usuário ou região) para oferecer uma experiência mais personalizada.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-brand-dark mb-2">Gerenciamento de Cookies</h3>
                <p className="text-sm">
                  Você pode controlar e gerenciar os cookies através das configurações do seu navegador. Observe que a desativação de cookies necessários pode impactar o funcionamento do Pedido Eletrônico e da Área do Cliente.
                </p>
                <p className="text-sm mt-2">
                  Consulte a seção "Ajuda" do seu navegador (Chrome, Firefox, Edge, Safari) para instruções detalhadas sobre como bloquear ou limpar cookies.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-brand-surface p-6 rounded-xl border-l-4 border-brand-dark">
            <h2 className="text-xl font-bold text-brand-dark mb-2">7. Contato do Encarregado (DPO)</h2>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato com nosso Encarregado de Proteção de Dados:
            </p>
            <p className="mt-3 font-medium">
              <strong>E-mail:</strong> privacidade@orgafarma.com.br<br />
              <strong>Endereço:</strong> {COMPANY_INFO.razaoSocial} - Departamento Jurídico
            </p>
          </section>

          <p className="text-sm text-gray-500 text-center border-t pt-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;