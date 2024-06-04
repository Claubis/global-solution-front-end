import React from 'react';

export default function SobreMissao() {
  return (
    <div className="flex flex-col w-full bg-white p-8 justify-end items-center">
      <div className="w-full flex justify-center mb-8">
        <h1 className="text-[#007871] font-montserrat text-[84px] font-extrabold">
          apoie nossa missão
        </h1>
      </div>

      <div className="w-full flex justify-center mb-4">
        <h2 className="text-black font-montserrat text-[24px] font-extralight text-center">
          Para tornar este visionário aplicativo uma realidade, precisamos do seu apoio.
        </h2>
      </div>

      <div className="flex flex-col w-full bg-white p-8 justify-end gap-10 items-center">
        <h2 className="text-black font-montserrat text-[40px] font-extrabold leading-[50px] text-center">
          Contribua para o Nosso <br /> Financiamento Coletivo
        </h2>

        <p className='text-black font-montserrat font-extralight text-[20px] leading-[40px] text-center'>
          Estamos lançando uma campanha de financiamento coletivo para cobrir os custos de desenvolvimento e implementação do aplicativo. Cada contribuição é vital e nos aproxima de nosso objetivo. Ao apoiar nossa campanha, você não está apenas ajudando a lançar uma solução inovadora para a conservação marinha, mas também se torna parte de uma comunidade comprometida com a proteção dos oceanos.
        </p>
      </div>

      <div className="flex flex-col w-[70%] bg-[#B9E2E0] p-8 gap-10 rounded-xl items-center">
        <h3 className="text-black font-montserrat text-[32px] font-extrabold leading-[19.5px]">
          Como Contribuir
        </h3>

        <p className="text-center">
          Participar é fácil! Visite nosso formulário de financiamento coletivo para fazer sua <br /> contribuição. Escolha o valor da doação que se encaixa com sua capacidade de <br />apoio e saiba que qualquer valor faz uma diferença significativa.
        </p>
      </div>

      <div className="flex flex-col w-full bg-white p-8 gap-10 mt-20 items-center">
        <h4 className="text-black font-montserrat text-[40px] font-extrabold leading-[19.5px] text-center">
          Recompensas para Nossos Apoiadores
        </h4>

        <p className='text-md text-center font-montserrat font-extralight'>
          Acreditamos que cada gesto de apoio merece ser reconhecido. Por isso, <br /> oferecemos recompensas atraentes para agradecer aos nossos doadores:
        </p>
      </div>

      <div className="flex flex-col p-5 bg-[#F1A027] max-w-[300px] text-center justify-center items-center mt-5">
        <button className='text-white font-montserrat font-semibold'>faça sua contribuição</button>
      </div>
    </div>
  );
}
