import softPet from "../assets/img/projects/softPet.jpg"
export interface ProjectsProp {
  img:string
  title: string
  about:string
  tecnologias:string[]
}
export const projectsItems: ProjectsProp[] = [
  {
    img: softPet,
    title: "SoftPet - Sistema de PetShop",
    about:
      "Olá! Sou Vítor Silva, desenvolvedor Front-end com especialidade em JavaScript, React, Redux, Tailwind CSS, NextJS e Vite. Venha conhecer mais sobre mim!",
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
  },
];

