export interface ProjectsProp {
  id: number
  src:string
  title: string
  about:string
  tecnologias:string[]
  deploy:string
  repositorio:string
}
export const projectsItems: ProjectsProp[] = [
  {
    id: 1,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/acs.mp4",
    title: "ACS - Site institucional",
    about:
      "Site institucional criado voluntariamente para a Associação Cultural Surubinense, com o intuito de divulgar a cultura e história da cidade de Surubim-PE e seus projetos.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    deploy: "https://acs.art.br",
    repositorio: "",
  },
  {
    id: 2,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/softPet.mp4",
    title: "SoftPet - Sistema de PetShop",
    about:
      "Sistema de gerenciamento de petshop, desenvolvido a partir de um design figma, com o intuito de facilitar a gestão de um petshop, com funcionalidades de cadastro de clientes, animais, serviços e relatórios.",
    tecnologias: [
      "NextJS",
      "React",
      "JavaScript",
      "CSS",
      "Zod",
      "Toastify",
      "NodeJS",
      "Axios",
      "Express",
      "MySQL",
    ],
    deploy: "",
    repositorio: "",
  },
  {
    id: 3,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/catalogo.mp4",
    title: "Catalogo",
    about:
      "Catalogo de produtos, com o intuito de facilitar a visualização de produtos e suas informações, adicionar ao carrinho e fazer pedido enviando diretamente para o Whatsapp do dono.",
    tecnologias: ["Vite", "React", "Redux", "JavaScript", "Tailwind CSS"],
    deploy: "https://catalogo-two.vercel.app/",
    repositorio: "https://github.com/VTEXsx/Catalogo",
  },
  {
    id: 4,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/calInvest.mp4",
    title: "Calculadora de Investimentos",
    about:
      "Calculadora de investimentos, com o intuito de ajudar na escolha do melhor investimento para o seu dinheiro, com base no valor inicial, aporte mensal, tempo de investimento e rentabilidade.",
    tecnologias: ["Vite", "React", "JavaScript", "Tailwind CSS", "ChartJS"],
    deploy: "https://calculadora-investimento-coral.vercel.app/",
    repositorio: "https://github.com/VTEXsx/CalculadoraInvestimento",
  },
  {
    id: 5,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/planner.mp4",
    title: "Plan.ner - Planejador de viajens",
    about:
      "Aplicação para planejamento de viagens, com o intuito de ajudar na organização de viagens, com funcionalidades de adicionar destinos, datas, atividades, convidar amigos, orçamento e visualização de informações.",
    tecnologias: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DateFns",
      "NodeJS",
      "Axios",
      "ReactDayPicker",
      "Prisma",
      "Sqlite",
      "dayJS",
      "Zod",
      "nodemailer",
      "fastify",
    ],
    deploy: "",
    repositorio: "https://github.com/VTEXsx/NLW-journey",
  },
];

