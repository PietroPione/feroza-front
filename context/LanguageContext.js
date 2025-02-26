"use client";
import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("it-it"); // Default IT

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage); // Se l'utente ha già cambiato lingua, recuperala
    }
  }, []);

  const changeLanguage = () => {
    const newLang = language === "it-it" ? "en-us" : "it-it"; // Cambia tra IT e EN
    setLanguage(newLang);
    localStorage.setItem("language", newLang); // Salva la scelta dell'utente
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
