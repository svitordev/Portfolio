import { useTranslation } from "react-i18next";
import ButtonCV from "../ButtonCV";
import LinkMenu from "../Links";
export interface PropsMenu {
  activeSection: string | null;
}
function Menu({ activeSection }: PropsMenu) {
  const { t } = useTranslation();
  return (
    <nav className="flex gap-10 items-center font-bold font-condensed ">
      <ul className="flex gap-6 uppercase">
        <LinkMenu href="#home" isActive={activeSection === "home"}>
          home
        </LinkMenu>
        <LinkMenu href="#aboutme" isActive={activeSection === "aboutme"}>
          {t("nav.sobre")}
        </LinkMenu>
        <LinkMenu href="#projects" isActive={activeSection === "projects"}>
          {t("nav.projetos")}
        </LinkMenu>
        <LinkMenu href="#contacts" isActive={activeSection === "contacts"}>
          {t("nav.contato")}
        </LinkMenu>
      </ul>
      <ButtonCV height="micro" />
    </nav>
  );
}

export default Menu;
