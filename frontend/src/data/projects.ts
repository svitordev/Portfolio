export interface ProjectsProp {
  id: number;
  src: string;
  title: string;
  about: string;
  tecnologias: string[];
  deploy: string;
  repositorio: string;
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
    repositorio: "https://github.com/svitordev/Catalogo",
  },
  {
    id: 4,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/cadastroFusion.mp4",
    title: "Cadastro de Usuários - Fusion",
    about:
      "Sistema de cadastro e login desenvolvido como desafio no projeto Fusion Frontend que tem como objetivo ajudar desenvolvedores iniciantes a ganhar experiência de trabalhar em equipe voluntariamente.",
    tecnologias: [
      "Vite",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Zod",
      "React Hook Form",
      "React Router",
      "Toastify",
    ],
    deploy: "https://desafio-formulario-com-validacao-frontend.vercel.app/",
    repositorio:
      "https://github.com/svitordev/desafio-formulario-com-validacao-frontend",
  },
];
export const PlusProjectsData: ProjectsProp[] = [
  {
    id: 5,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/galleryFusion.mp4",
    title: "Gallery Fusion",
    about:
      "Galeria de imagens desenvolvido como desafio no projeto Fusion Frontend que tem como objetivo ajudar desenvolvedores iniciantes a ganhar experiência de trabalhar em equipe voluntariamente.",
    tecnologias: [
      "Vite",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Redux/Toolkit",
      "React Router",
      "GSAP",
    ],
    deploy:
      "https://desafio-galeria-de-imagem-frontendfusion-delta.vercel.app/",
    repositorio:
      "https://github.com/svitordev/desafio-galeria-de-imagem-frontendfusion/blob/master/package.json",
  },
  {
    id: 6,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/calInvest.mp4",
    title: "Calculadora de Investimentos",
    about:
      "Calculadora de investimentos, com o intuito de ajudar na escolha do melhor investimento para o seu dinheiro, com base no valor inicial, aporte mensal, tempo de investimento e rentabilidade.",
    tecnologias: ["Vite", "React", "JavaScript", "Tailwind CSS", "ChartJS"],
    deploy: "https://calculadora-investimento-coral.vercel.app/",
    repositorio: "https://github.com/svitordev/CalculadoraInvestimento",
  },
];
export const AllProjectsData: ProjectsProp[] = projectsItems.concat( PlusProjectsData );