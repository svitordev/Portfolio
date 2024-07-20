import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import homeDark from "../../assets/img/structure/homeDark.png";
import BoxSocial from "../../components/BoxSociais";
function Home() {
  return (
    <section id="home" className="pt-[5.5rem] px-[10%] flex justify-between">
      <div className="w-3/5 my-16 space-y-2 flex flex-col justify-center">
        <p className="text-2xl font-condensedItalic">Precisa de um</p>
        <h1 className="text-5xl font-condensed bg-custom-gradient bg-clip-text text-transparent">
          Desenvolvedor Front End
        </h1>
        <p className="text-2xl font-condensedItalic w-3/5">
          Para transformar suas ideias em experiências incríveis?
        </p>
        <div className="flex gap-4 pt-4">
          <BoxSocial href="https://www.linkedin.com/in/devsvitor/">
            <FaLinkedinIn />
          </BoxSocial>
          <BoxSocial href="https://github.com/VTEXsx">
            <TbBrandGithubFilled />
          </BoxSocial>
          <BoxSocial href="https://www.instagram.com/svitor.dev/">
            <AiFillInstagram />
          </BoxSocial>
        </div>
      </div>
      <img src={homeDark} alt="" className="lg:w-2/5  self-end" />
    </section>
  );
}

export default Home;
