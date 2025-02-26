import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <button onClick={changeLanguage} className="border p-2">
      {language === "it-it" ? "🇮🇹 IT" : "🇬🇧 EN"}
    </button>
  );
};

export default LanguageSwitcher;
