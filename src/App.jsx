import "./App.css";
import KisiInfo from "./components/KisiInfo";
import Beceriler from "./components/Beceriler";
import Profil from "./components/Profil";
import Projeler from "./components/Projeler";
import AltMenu from "./components/AltMenu";
import UstMenu from "./components/UstMenu";
import { DilContextProvider } from "./contexts/DilContext";
import { TemaContextProvider } from "./contexts/TemaContext";

function App() {
  return (
    <>
      <TemaContextProvider>
        <DilContextProvider>
          <UstMenu />
          <KisiInfo />
          <Beceriler />
          <Profil />
          <Projeler />
          <AltMenu />
        </DilContextProvider>
      </TemaContextProvider>
    </>
  );
}

export default App;
