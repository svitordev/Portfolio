import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import brasil from "../../assets/img/structure/brasil.jpg";
import eua from "../../assets/img/structure/eua.jpg";
function ButtonsTranslate() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string>(i18n.language || "pt");
  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );
  useEffect(() => {
    changeLanguage(language);
  }, [language, changeLanguage]);

  return (
    <div className="rounded-2xl shadow-md dark:shadow-black shadow-slate-300 w-28 h-11 border-2 dark:border-neutral-800 border-slate-200 flex items-center justify-between px-3 ">
      <button onClick={() => setLanguage("en")} className="" type="button">
        <img
          src={eua}
          alt=""
          className={`w-8 h-8 rounded-full ${
            language === "en" && "outline outline-2 outline-blue-800"
          }`}
        />
      </button>
      <button
        onClick={() => setLanguage("pt")}
        className="p-0.5 "
        type="button"
      >
        <img
          src={brasil}
          alt=""
          className={`w-8 h-8 rounded-full ${
            language === "pt" && "outline outline-2 outline-blue-800"
          }`}
        />
      </button>
    </div>
  );
}

export default ButtonsTranslate;
