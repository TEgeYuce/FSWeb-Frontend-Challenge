//import React from 'react';
import { useContext } from 'react'
import { DilContext } from '../contexts/DilContext'

const ProjeKartlar = () => {
  const {ceviri} = useContext(DilContext);
  return (
    <div className='flex flex-col gap-10 w-full'>
      <div className=' flex bg-white h-full rounded-2xl shadow-2xl flex-col sm:flex-row sm:h-[380px] dark:bg-[#3A3A3A]'>
        <img src="/resimler/aichatbot.png" alt="proje1img" className='w-full sm:w-[450px] rounded-2xl pr-0 sm:pr-10 '/>
        <div className='flex flex-col p-5 gap-10 my-auto'>
          <h2 className="text-[#4832D3] font-inter text-2xl font-bold text-center sm:text-left dark:text-[#BAB2E7]">Workintech FSWeb S11D3 AI ChatBot</h2>
          <p className="font-inter dark:text-white">{ceviri("projectDesc")} {ceviri("projectInfoChatbot")}</p>
          <div className='flex gap-2'>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>Google AI Studio</p>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>Google API Key</p>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>React</p>
          </div>
          <div className='flex gap-10'>
            <a className="font-inter underline font-bold dark:text-[#CBF281]" href="#">{ceviri("projectView")}</a><a className="font-inter underline font-bold dark:text-[#CBF281]" href="https://github.com/TEgeYuce/S11D3-AI-ChatBot">GitHub Link</a>

          </div>
        </div>
      </div>
      <div className=' flex bg-white h-full rounded-2xl shadow-2xl flex-col sm:flex-row sm:h-[380px] dark:bg-[#3A3A3A]'>
        <img src="/resimler/fspizza.png" alt="proje2img" className='w-full sm:w-[450px] rounded-2xl pr-0 sm:pr-10 '/>
        <div className='flex flex-col p-5 gap-10 my-auto'>
        <h2 className="text-[#4832D3] font-inter text-2xl font-bold text-center sm:text-left dark:text-[#BAB2E7]">Workintech FSWeb S8 Challenge Pizza</h2>
          <p className="font-inter dark:text-white">{ceviri("projectDesc")} {ceviri("projectInfoPizza")}</p>
          <div className='flex gap-2'>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>Axios</p>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>React</p>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>HTML</p>
            <p className='border-2 border-[#4832D3] rounded-2xl px-4 py-1 text-white bg-[#4832D3] font-inter dark:bg-[#BAB2E7] dark:border-[#BAB2E7]'>CSS</p>
          </div>
          <div className='flex gap-10'>
            <a className="font-inter underline font-bold dark:text-[#CBF281]" href="#">{ceviri("projectView")}</a><a className="font-bold font-inter underline dark:text-[#CBF281]" href="https://github.com/TEgeYuce/fsweb-s8-challenge-pizza">GitHub Link</a>

          </div>
        </div>
      </div>
      </div>
  )
}

export default ProjeKartlar