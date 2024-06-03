import React from 'react';

export default function AboutMission() {
  return (
    <div className="flex flex-col w-full bg-white p-8 justify-end">

      <div>
        <h1 className="text-teal-900 font-montserrat text-[84px] font-extrabold mb-8 flex justify-center">
        apoie nossa missão  
      </h1>
      </div>

      <div>
        <h2 className="text-black font-montserrat text-[32px] font-medium leading-[48px] mb-4 justify-center items-center text-center">
      Para tornar este visionário aplicativo uma realidade, precisamos do seu apoio.
      </h2>
      </div>

      <div className="flex flex-col w-full bg-white p-8 justify-end gap-10">

          <h2 className="text-black font-montserrat text-[40px] font-extrabold leading-[19.5px] flex justify-center items-center gap-5">
      Contribua para o Nosso Financiamento Coletivo
      </h2>

          <p className='text-black font-montserrat text-[20px] leading-[19.5px] flex justify-center items-center'>Estamos lançando uma campanha de financiamento coletivo para cobrir os custos de desenvolvimento e implementação do aplicativo. Cada contribuição é vital e nos aproxima de nosso objetivo. Ao apoiar nossa campanha, você não está apenas ajudando a lançar uma solução inovadora para a conservação marinha, mas também se torna parte de uma comunidade comprometida com a proteção dos oceanos.</p>

      </div>

      <div className="flex flex-col bg-white p-8 justify-end gap-10">
        <h3 className="text-black font-montserrat text-[40px] font-extrabold leading-[19.5px] flex justify-center items-center">Como Contribuir</h3>

        <p>Participar é fácil! Visite nosso formulário de financiamento coletivo para fazer sua contribuição. Escolha o valor da doação que se encaixa com sua capacidade de apoio e saiba que qualquer valor faz uma diferença significativa.</p>
      </div>

      <div className="flex flex-col bg-white p-8 justify-end gap-10">
        <h4 className="text-black font-montserrat text-[40px] font-extrabold leading-[19.5px] flex justify-center items-center">Recompensas para Nossos Apoiadores</h4>

        <p>Participar é fácil! Visite nosso formulário de financiamento coletivo para fazer sua contribuição. Escolha o valor da doação que se encaixa com sua capacidade de apoio e saiba que qualquer valor faz uma diferença significativa.</p>
      </div>

      <div className="flex flex-col p-5 border bg-[#F1A027]">
        <button className='text-white'>faça sua contribuição</button>
      </div>
      
    </div>
  );
}
