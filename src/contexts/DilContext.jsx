import { createContext, useEffect } from "react";
import DilVeri from "../DilVeri";
import axios from "../api/axiosOrnek";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const DilContext = createContext();

export const DilContextProvider = ({ children }) => {
  const [translations, setTranslations] = useLocalStorage("translations", {});
  const [currentLang, setCurrentLang] = useLocalStorage("language", "tr");

  const toggleLang = () => {
    setCurrentLang(currentLang === "en" ? "tr" : "en")};

  useEffect(() => {
    axios
      .post("/workintech", DilVeri)
      .then((res) => {
        setTranslations(res.data);
      })
      .catch((err) => {
        console.error("Dil verisi alınamadı:", err);
      });
  }, []);

  const ceviri = (key) => translations?.[key]?.[currentLang] || key;

  return (
    <DilContext.Provider
      value={{ ceviri, currentLang, toggleLang }}
    >
      {children}
    </DilContext.Provider>
  );
};