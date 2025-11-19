import { useContext } from "react";
import Switch from "../assets/Switch.jsx";
import { DilContext } from "../contexts/DilContext.jsx";

const UstMenu = () => {
  const { toggleLang, currentLang } = useContext(DilContext);


  return (
    <div className="bg-[linear-gradient(to_right,_#4832D3_70%,_#cbf281_70%)] dark:bg-[linear-gradient(to_right,_#171043_70%,_#211F0B_70%)]">
      <header className=" flex justify-between mx-auto px-6 py-10 w-full sm:w-4/6">
        <p className="text-4xl font-inter font-bold text-[#cbf281]">TEgeYuce</p>
        <div className="flex justify-center gap-6 sm:gap-8 sm:pr-10 items-center ">
          <button
            onClick={() => toggleLang()}
            className=" font-bold text-[#D2D2D2] dark:text-[#D2D2D2] font-inter min-w-[100px]"
          >
            {currentLang === "en" ? (
              <>
                <span className="text-[#cbf281] dark:text-[#8173DA]">
                  TÜRKÇE
                </span>
                'YE GEÇİN
              </>
            ) : (
              <>
                SWITCH TO{" "}
                <span className="text-[#cbf281] dark:text-[#8173DA]">
                  ENGLISH
                </span>
              </>
            )}
          </button>

          <Switch />
        </div>
      </header>
    </div>
  );
};

export default UstMenu;
