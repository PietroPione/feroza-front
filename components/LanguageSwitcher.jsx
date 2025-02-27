import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

const LanguageSwitcher = ({ onLanguageChange }) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = () => {
    changeLanguage(); // Chiama la funzione per cambiare la lingua

    if (onLanguageChange) {
      onLanguageChange(); // Chiama la funzione per chiudere il menu
    }
  };

  return (
    <button onClick={handleLanguageChange} className="text-22 font-semibold uppercase">
      <div>
        {language === "it-it" ? "Change language" : "Cambia lingua"}
      </div>
    </button>
  );
};

export default LanguageSwitcher;