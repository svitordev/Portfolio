import ButtonCV from "../ButtonCV";
import LinkMenu from "../Links";
export interface PropsMenu {
  activeSection: string | null
}
function Menu({ activeSection }: PropsMenu) {
  
  return (
    <nav className="flex gap-10 items-center font-bold font-condensed ">
      <ul className="flex gap-6 ">
        <LinkMenu href="#home" isActive={activeSection === "home"}>
          HOME
        </LinkMenu>
        <LinkMenu href="#aboutme" isActive={activeSection === "aboutme"}>
          SOBRE
        </LinkMenu>
        <LinkMenu href="#projects" isActive={activeSection === "projects"}>
          PROJETOS
        </LinkMenu>
        <LinkMenu href="#contacts" isActive={activeSection === "contacts"}>
          CONTATO
        </LinkMenu>
      </ul>
      <ButtonCV height="micro" />
    </nav>
  );
}

export default Menu;
