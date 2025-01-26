import { useTranslation } from "react-i18next";
import brasil from "../../assets/img/structure/brasil.jpg";
import eua from "../../assets/img/structure/eua.jpg";
function ButtonsTranslate() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="rounded-2xl shadow-md dark:shadow-black shadow-slate-300 w-28 h-11 border-2 dark:border-neutral-800 border-slate-200 flex items-center justify-between px-3 ">
      <button onClick={()=> changeLanguage("en")} className="p-0.5 " type="button">
        <img src={eua} alt="" className="w-[2.15rem] h-8 rounded-full" />
      </button>
      <button onClick={()=> changeLanguage("pt")} className="p-0.5 " type="button">
        <img src={brasil} alt="" className="w-[2.15rem] h-8 rounded-full" />
      </button>
    </div>
  );
}

export default ButtonsTranslate;
