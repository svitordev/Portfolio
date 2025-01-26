import { TFunction } from "i18next";
export interface ProjectsProp {
  id: number;
  src: string;
  title: string;
  about: string;
  tecnologias: string[];
  deploy: string;
  repositorio: string;
}
export const getProjectsData = (t: TFunction): ProjectsProp[] => [
  {
    id: 1,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/acs.mp4",
    title: t("projects.acs.title"),
    about: t("projects.acs.description"),
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    deploy: "https://acs.art.br",
    repositorio: "",
  },
  {
    id: 2,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/softPet.mp4",
    title: t("projects.softPet.title"),
    about: t("projects.softPet.description"),
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
    title: t("projects.Catalogo.title"),
    about: t("projects.Catalogo.description"),
    tecnologias: ["Vite", "React", "Redux", "JavaScript", "Tailwind CSS"],
    deploy: "https://catalogo-two.vercel.app/",
    repositorio: "https://github.com/svitordev/Catalogo",
  },
  {
    id: 4,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/cadastroFusion.mp4",
    title: t("projects.cadastroLoginFusion.title"),
    about: t("projects.cadastroLoginFusion.description"),
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

export const getPlusProjectsData = (t: TFunction): ProjectsProp[] => [
  {
    id: 5,
    src: "https://pub-4680d0543609450f9429afc4681a1e69.r2.dev/vitor/projects/galleryFusion.mp4",
    title: t("projects.galeriaFusion.title"),
    about: t("projects.galeriaFusion.description"),
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
    title: t("projects.calcInvest.title"),
    about: t("projects.calcInvest.description"),
    tecnologias: ["Vite", "React", "JavaScript", "Tailwind CSS", "ChartJS"],
    deploy: "https://calculadora-investimento-coral.vercel.app/",
    repositorio: "https://github.com/svitordev/CalculadoraInvestimento",
  },
];
