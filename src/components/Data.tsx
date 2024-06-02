import React from 'react';
import imagem from '../../public/assets/data/dados_Line5.png';
import imagem1 from '../../public/assets/data/dados_Line6.png';

export default function Data() {
  return (
    <div className="relative w-full h-[280px] overflow-auto bg-[#20A19A]">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg h-[280px] bg-teal-100 opacity-10"></div>
      
      <span className="absolute top-7 left-[150px] text-teal-900 font-montserrat text-[84px] font-extrabold leading-[126px]">23</span>
      <span className="absolute top-7 left-[641px] text-teal-900 font-montserrat text-[84px] font-extrabold leading-[126px]">250</span>
      <span className="absolute top-4 left-[1154px] text-teal-900 font-montserrat text-[84px] font-extrabold leading-[126px]">75%</span>
      
      <img className="absolute left-[378px] top-[51px] h-[149px] border border-teal-900" src={imagem.src} alt="Line 5" />
      
      <span className="absolute top-[153px] left-1/2 transform -translate-x-1/2 text-center text-teal-900 font-montserrat text-[18px] font-medium leading-[27px]">
        dados sobre os encalhes de animais
      </span>
      
      <span className="absolute top-[250px] left-1/2 transform -translate-x-1/2 text-center text-teal-900 font-montserrat text-[14px] font-medium leading-[21px]">
        Fonte: referencia do site
      </span>
      
      <span className="absolute top-[153px] left-[85.66%] transform -translate-x-1/2 text-center text-teal-900 font-montserrat text-[18px] font-medium leading-[27px]">
        dados sobre os encalhes de animais
      </span>
      
      <span className="absolute top-[153px] left-[13.92%] transform -translate-x-1/2 text-center text-teal-900 font-montserrat text-[18px] font-medium leading-[27px]">
        dados sobre os encalhes de animais
      </span>
      
      <img className="absolute left-[990px] top-[51px] h-[149px] border border-teal-900" src={imagem1.src} alt="Line 6" />
    </div>
  );
}
