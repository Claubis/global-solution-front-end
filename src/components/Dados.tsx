import React from 'react';

export default function Dados() {
  return (
    <div className="relative w-full h-[280px] bg-[#90DAD6]">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg h-[280px] "></div>
      
      {/* Contêiner da primeira seção */}
      <div className="absolute left-[13.92%] transform -translate-x-1/2 top-7 text-center">
        <span className="text-teal-900 font-montserrat text-[84px] font-extrabold leading-[126px]">1552</span>
        <div className="mt-[10px] text-[#007871] font-montserrat text-[18px] font-medium leading-[27px]">
          animais encontrados encalhados <br />no litoral Paranaense
        </div>
      </div>

      {/* Contêiner da segunda seção */}
      <div className="absolute left-[50%] transform -translate-x-1/2 top-7 text-center">
        <span className="text-teal-900 font-montserrat text-[84px] font-extrabold leading-[126px]">250</span>
        <div className="mt-[10px] text-[#007871] font-montserrat text-[18px] font-medium leading-[27px]">
          encalhes registrados <br /> durante o mês de Agosto no Paraná
        </div>
      </div>

      {/* Contêiner da terceira seção */}
      <div className="absolute left-[85.66%] transform -translate-x-1/2 top-7 text-center">
        <span className="text-teal-900 font-montserrat text-[84px] font-extrabold leading-[126px]">75%</span>
        <div className="mt-[10px] text-[#007871] font-montserrat text-[18px] font-medium leading-[27px]">
          envolveram a espécie pinguim-de-magalhães
        </div>

      </div>

      {/* Substituindo imagens por divs com bordas */}
      <div className="absolute left-[30.5%] top-[51px] h-[160px] w-[3px] bg-teal-900"></div>

      <div className="absolute left-[70.5%] top-[51px] h-[160px] w-[3px] bg-teal-900"></div>

      <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2 text-center text-[#007871] font-montserrat text-[14px] font-medium leading-[21px]">
        Fonte: referencia do site
      </div>
    </div>
  );
}
