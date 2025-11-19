import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TemaContext = createContext();

export function TemaContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  return (
    <TemaContext.Provider
      value={{
        toggleTheme,
        theme,
      }}
    >
      {children}
    </TemaContext.Provider>
  );
}
