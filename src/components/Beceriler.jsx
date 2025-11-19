//import React from 'react';
import { useContext } from "react";
import BecerilerItem from "./BecerilerItem";
import { DilContext } from "../contexts/DilContext";

const Beceriler = () => {
  const {ceviri} = useContext(DilContext);
 

  return (
    <section className="bg-white dark:bg-[#252128]">
      <div className="flex w-full flex-col mx-auto py-10 px-6 justify-between sm:w-4/6 sm:flex-row">
        <h1 className="text-6xl text-[#4832D3] font-bold font-inter dark:text-[#CBF281]">{ceviri("skills")}</h1>
        <BecerilerItem />
      </div>
    </section>
  );
};

export default Beceriler;
