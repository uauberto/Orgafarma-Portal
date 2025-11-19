import { ServiceItem, Testimonial } from './types.ts';

export const BRAND_COLORS = {
  primary: '#0B2A48', // Pantone 2767 C
  secondary: '#70AABD', // Pantone 549 C
  accent: '#FFFFFF', 
};

// Updated URLs
export const PORTAL_URL = 'https://clientes.orgafarma.com.br/';
export const PEDIDO_ELETRONICO_URL = 'https://grupoorgafarma.com.br/';
export const CAREERS_URL = 'https://orgafarmaorganizacaofarmaceutica.vagas.solides.com.br';
export const REGISTER_URL = 'https://clientes.orgafarma.com.br/cadastro';

export const COMPANY_INFO = {
  razaoSocial: 'Orgafarma Organização Farmacêutica Ltda',
  cnpj: '17.291.576/0001-58',
  phone: '(31) 3272-8480',
  email: 'comercial@orgafarma.com.br'
};

export const SYSTEM_LINKS = [
  { name: 'Organize', href: 'https://organize.grupoorgafarma.com.br/', highlight: false },
  { name: 'Webmail', href: 'https://outlook.office.com/mail/', highlight: false },
  // Note: Pedido Eletrônico is handled separately in UI for maximum highlight
];

export const OFFICES = [
  {
    name: 'Matriz - Minas Gerais',
    address: 'Rua Jacui, 8090',
    neighborhood: 'Sao Gabriel',
    city: 'Belo Horizonte',
    state: 'MG',
    cep: '31980-000'
  },
  {
    name: 'Filial - Pernambuco',
    address: 'Rodovia Br 101 Sul, 1532',
    complement: 'Km 81 70 Gp F3 Galpao F4',
    neighborhood: 'Prazeres',
    city: 'Jaboatão dos Guararapes',
    state: 'PE',
    cep: '54335-000'
  },
  {
    name: 'Filial - Bahia',
    address: 'Avenida Jose Leite, 3251',
    complement: 'Galpao 18 19 20 e 21',
    neighborhood: 'Caji',
    city: 'Lauro de Freitas',
    state: 'BA',
    cep: '42722-020'
  },
  {
    name: 'Filial - Sergipe',
    address: 'Rua Paulo Henrique Machado Pimentel, 330',
    complement: 'Galpao 08-Correios',
    neighborhood: 'Inacio Barbosa',
    city: 'Aracaju',
    state: 'SE',
    cep: '49040-740'
  }
];

export const NAV_LINKS = [
  // Removed specific shortcuts as requested
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Logística Confiável",
    description: "Transporte adequado para garantir a integridade dos produtos até o seu estabelecimento.",
    iconName: "Truck"
  },
  {
    title: "Qualidade e Procedência",
    description: "Trabalhamos com laboratórios reconhecidos e respeitamos as normas sanitárias vigentes.",
    iconName: "ShieldCheck"
  },
  {
    title: "Atendimento Comercial",
    description: "Equipe de vendas dedicada para auxiliar nas suas dúvidas e na realização dos pedidos.",
    iconName: "Users"
  },
  {
    title: "Facilidade de Compra",
    description: "Plataforma online para agilizar a reposição do estoque da sua farmácia.",
    iconName: "Activity"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Dra. Ana Clara",
    role: "Farmacêutica",
    content: "A seriedade do Grupo Orgafarma nos traz segurança. A entrega é sempre pontual.",
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Roberto Mendes",
    role: "Gestor Hospitalar",
    content: "Parceria que facilitou muito nossas aquisições. Processos limpos e profissionais.",
    image: "https://picsum.photos/100/100?random=2"
  }
];

export const ABOUT_TEXT = {
  title: "Quem Somos",
  content: "Na Orgafarma, somos movidos por um propósito claro: distribuir saúde com eficiência, compromisso e proximidade.\n\nCom 57 anos de história, construímos uma trajetória sólida no setor farmacêutico, atendendo farmácias e drogarias em diversas regiões do Brasil. Somos referência na distribuição de medicamentos, produtos de higiene e beleza, com um portfólio diversificado que atende às diferentes necessidades do mercado."
};

export const CORPORATE_IDENTITY = [
  {
    title: "Missão",
    content: "Promover a distribuição de medicamentos e produtos farmacêuticos horizontalizada e pulverizada, garantindo o acesso dos nossos produtos ao maior número de pontos de vendas possíveis, gerando rentabilidade e satisfação aos nossos clientes, colaboradores, fornecedores e acionistas.",
    iconName: "Target"
  },
  {
    title: "Visão",
    content: "Sermos reconhecidos como uma das maiores e mais importantes distribuidoras de medicamentos e produtos farmacêuticos do Brasil.",
    iconName: "Eye"
  },
  {
    title: "Valores",
    content: "Ética e idoneidade nas ações, valorização e respeito aos nossos colaboradores, fornecedores e clientes e foco em resultados.",
    iconName: "Scale"
  }
];

export const HISTORY_DATA = [
  {
    year: "1967",
    title: "Tudo Começou...",
    description: "Início das Atividades da Orgafarma no bairro Barro Preto."
  },
  {
    year: "1978",
    title: "Mudança da Sede...",
    description: "Mudança da Sede da Orgafarma para o bairro Carlos Prates, permitindo um melhor atendimento aos clientes."
  },
  {
    year: "2010",
    title: "Expansão Logística",
    description: "Mudança da Sede da Orgafarma para o bairro São Gabriel, triplicando a área de armazenamento, de recebimento e de expedição de mercadorias."
  },
  {
    year: "2011",
    title: "Implantação WMS...",
    description: "Implantação do Sistema WMS, garantindo melhor assertividade e segurança nos processos logísticos."
  },
  {
    year: "2017",
    title: "Nova Filial Bahia...",
    description: "Abertura da primeira filial localizada no Estado da Bahia na cidade de Lauro de Freitas. Projeto audacioso de atendimento à todo o Estado, expandindo nossos horizontes e nossa abrangência territorial."
  },
  {
    year: "2019",
    title: "Nova Filial Pernambuco...",
    description: "Abertura da segunda filial localizada no Estado de Pernambuco na cidade de Jaboatão dos Guararapes."
  },
  {
    year: "2021",
    title: "Nova Filial Sergipe ...",
    description: "Abertura da terceira filial localizada no Estado de Sergipe na cidade de Aracaju."
  }
];