//import React from 'react';
import { useContext } from 'react';
import { DilContext } from '../contexts/DilContext';

const Hakkimda = () => {

  const {ceviri} = useContext(DilContext);
  return (
    <div className="w-[300px]">
    <div className="flex flex-col items-start gap-6 p-0">
      <h2 className="font-medium text-white text-3xl font-inter w-full pt-12 sm:pt-0">
        {ceviri("about")}
      </h2>

      <div className="flex items-start gap-2.5">
        <p className="text-white font-inter">{ceviri("aboutText")}</p>  
      </div>
    </div>
  </div>
  )
}

export default Hakkimda