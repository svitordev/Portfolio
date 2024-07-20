import ButtonCV from "../ButtonCV";
import LinkMenu from "../Links";

function Menu() {
  return (
    <div className="flex gap-10 items-center font-bold font-condensed ">
      <ul className="flex gap-6 ">
        <LinkMenu href="#home">HOME</LinkMenu>
        <LinkMenu href="#aboutme">SOBRE</LinkMenu>
        <LinkMenu href="#projects">PROJETOS</LinkMenu>
        <LinkMenu href="#contacts">CONTATO</LinkMenu>
      </ul>
      <ButtonCV />
    </div>
  );
}

export default Menu;
