import React from 'react';
import imagem from '../../public/assets/Projeto/_3sobreoprojeto_play.png';
import imagem1 from '../../public/assets/Projeto/video.png';

export default function AboutProject() {
  return (
    <div className=" mx-auto w-full min-h-screen bg-white py-10" id='AboutProject'>
      
      <h1 className="top-10 text-[#F1A027] font-montserrat font-extrabold text-[84px] leading-[126px] text-center">
        sobre o projeto
      </h1>

      <div className='flex justify-between'>

          <div className="flex-col justify-start items-center pl-5 w-full p-10">

            <h2 className="text-[#20A19A] font-montserrat font-bold text-[40px] leading-[60px]">apresentação</h2>

            <p className="mt-4 text-black font-montserrat text-[20px] leading-[40px]">
              Estamos entusiasmados em apresentar nosso pitch, onde detalhamos a visão e a missão do projeto. Esta apresentação irá levá-lo através dos objetivos fundamentais do nosso aplicativo, como ele funciona, e o impacto significativo que esperamos alcançar na conservação marinha. Acompanhe para descobrir como estamos transformando a paixão pelo oceano em ações práticas para proteger a vida marinha.
            </p>

          </div>

          <div className=" flex justify-center items-center p-10">
            <div className="relative w-[800.92px] h-[497.87px] bg-gray-200 bg-cover" style={{ backgroundImage: `url(${imagem1.src})` }}>
              <img className="absolute inset-0 w-[129.88px] h-[129.88px] m-auto" src={imagem.src} alt="Play" />
            </div>
          </div>

      </div>
      
    </div>
  );
}
