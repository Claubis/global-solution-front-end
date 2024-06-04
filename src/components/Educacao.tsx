import React, { useState } from 'react';

export default function Educacao() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ?  -1 : index);
  };

  return (
    <div className="flex flex-col items-center w-full min-h-[100vh] bg-[#20A19A] border border-[#CECECE] box-border relative" id='Educacao'>
      <span className="absolute left-[94px] top-[55px] w-[435px] h-[126px] flex justify-end text-right text-white font-montserrat text-[84px] font-bold leading-[126px] z-10">
        educação
      </span>

      <div className="flex flex-col items-center w-full max-w-[1246px] bg-white rounded-[40px] border border-[#B3B3B3] box-border p-10 z-10 mt-[218px] mb-20">
        <div className="mb-4 w-full">
          <div className="text-left text-black font-montserrat text-[24px] font-semibold leading-[36px] cursor-pointer" onClick={() => toggle(1)}>
            1. O que fazer ao encontrar um animal encalhado? (Animal Vivo)
          </div>
          {activeIndex === 1 && (
            <div className="mt-2 text-black font-montserrat text-[20px] leading-[30px]">
              Mantenha distância: Evite se aproximar muito ou tocar o animal. Animais encalhados podem estar estressados ou doentes.
              <br /><br />
              Proteja o animal: Cubra o animal com toalhas úmidas, exceto nas narinas, para protegê-lo do sol e evitar o ressecamento da pele.
              <br /><br />
              Notifique as autoridades: Entre em contato imediatamente com os serviços de resgate de animais marinhos ou a autoridade ambiental local.
              <br /><br />
              Evite devolver ao mar: Animais encalhados podem precisar de avaliação médica antes de serem devolvidos ao oceano.
            </div>
          )}
          <div className="border-b border-[#B3B3B3] mt-4"></div>
        </div>

        <div className="mb-4 w-full">
          <div className="text-left text-black font-montserrat text-[24px] font-semibold leading-[36px] cursor-pointer" onClick={() => toggle(2)}>
            2. O que fazer ao encontrar um animal encalhado? (Está Morto)
          </div>
          {activeIndex === 2 && (
            <div className="mt-2 text-black font-montserrat text-[20px] leading-[30px]">
              Notifique as autoridades: Contate imediatamente os serviços de resgate de animais marinhos ou a autoridade ambiental local.
              <br /><br />
              Mantenha distância: Evite se aproximar ou tocar o animal morto. Eles podem ser portadores de doenças que são perigosas para humanos e outros animais.
              <br /><br />
              Não tente remover: Deixe a remoção do animal para os profissionais qualificados.
            </div>
          )}
          <div className="border-b border-[#B3B3B3] mt-4"></div>
        </div>
        
        <div className="mb-4 w-full">
          <div className="text-left text-black font-montserrat text-[24px] font-semibold leading-[36px] cursor-pointer" onClick={() => toggle(3)}>
            3. O que fazer ao encontrar um poluente na praia
          </div>
          {activeIndex === 3 && (
            <div className="mt-2 text-black font-montserrat text-[20px] leading-[30px]">
              Não toque: Poluentes podem ser perigosos. Evite contato direto com substâncias desconhecidas.
              <br /><br />
              Notifique as autoridades: Informe às autoridades ambientais locais sobre a presença do poluente.
              <br /><br />
              Siga orientações: Espere por instruções das autoridades sobre como proceder.
            </div>
          )}
          <div className="border-b border-[#B3B3B3] mt-4"></div>
        </div>
      </div>

      <span className="absolute left-[589px] top-[73px] w-[764px] h-[96px] text-white font-montserrat text-[21px] leading-[31.5px] z-10">
        Navegue pelos tópicos abaixo para aprender como responder adequadamente em situações críticas, ajudando a proteger nossa vida marinha e o ambiente costeiro:
      </span>
    </div>
  );
}
