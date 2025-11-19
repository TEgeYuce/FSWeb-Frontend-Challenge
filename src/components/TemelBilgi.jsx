//import React from 'react';
import { useContext } from 'react';
import { DilContext } from '../contexts/DilContext';

const TemelBilgi = () => {
  const {ceviri} = useContext(DilContext);
    return (
        <div className="w-[325px]">
          <div className="flex flex-col items-start gap-6 p-0">
            <h2 className="font-medium text-white text-3xl leading-7 font-inter w-full">
              {ceviri("info")}
            </h2>
    
            <div className="flex items-start gap-2.5">
              <div className="flex-1">
                <p className="font-semibold text-[#cbf281] font-inter mb-6">
                  {ceviri("dob")}
                </p>
                <p className="font-semibold text-[#cbf281] font-inter mb-6">
                {ceviri("residence")}
                </p>
                <p className="font-semibold text-[#cbf281] font-inter mb-6">
                {ceviri("edStatus")}
                </p>
                <p className="font-semibold text-[#cbf281] font-inter mb-6">
                {ceviri("prefRole")}
                </p>
              </div>
    
              <div className="w-[200px]">
                <p className="font-normal text-white font-inter mb-6">
                  13.01.2003
                </p>
                <p className="font-normal text-white font-inter mb-6">
                  Kocaeli
                </p>
                <p className="font-normal text-white font-inter mb-6 w-[200px]">
                {ceviri("uni")}
                </p>
                <p className="font-normal text-white font-inter mb-6">
                  Full-Stack Web Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default TemelBilgi