//import React from 'react';
import { useContext } from 'react'
import ProjeKartlar from './ProjeKartlar';
import { DilContext } from '../contexts/DilContext';

const Projeler = () => {
  const {ceviri} = useContext(DilContext);
  return (
    <section className="bg-[#cbf281] dark:bg-[#211F0B]">
      <div className="w-full sm:w-4/6 mx-auto p-6">
      <div className='my-10'>
        <h1 className="text-[#4832D3] font-bold text-6xl font-inter dark:text-[#CBF281]">{ceviri("projects")}</h1>
        <div className="flex flex-col items-center py-10">
        <ProjeKartlar />
        </div>
      </div>
      </div>
    </section>
  );
}

export default Projeler