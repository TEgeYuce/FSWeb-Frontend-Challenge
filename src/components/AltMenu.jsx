//import React from 'react';
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { DilContext } from "../contexts/DilContext";

export const AltMenu = () => {

  const {ceviri} = useContext(DilContext);

  const socialLinks = [
    { icon: faAt, alt: "At sign" },
    { icon: faCodepen, alt: "Codepen" },
    { icon: faInstagram, alt: "Instagram" },
    { icon: faTwitter, alt: "Twitter" },
  ];

  return (
    <footer className=" bg-white dark:bg-[#252128]">
     
        <div className="flex flex-col items-center justify-center  gap-6 py-20">
          <h2 className="font-bold text-[#4832D3] text-5xl font-inter">
            {ceviri("footerMessage")}
          </h2>

          <p className="font-normal text-2xl text-center font-inter whitespace-pre-line dark:text-white ">
            {ceviri("footerText")}
          </p>

          <a
            href="mailto:tegeyucesan@gmail.com"
            className="font-medium text-[#4832D3] text-xl tracking-[1.00px] underline w-[269px] text-center"
          >
            tegeyucesan@gmail.com
          </a>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-[#4832D3] hover:text-white transition-colors"
                aria-label={link.alt}
              >
                <FontAwesomeIcon icon={link.icon} size="2x" />
              </a>
            ))}
          </div>
        </div>
      
    </footer>
  );
};
export default AltMenu;
