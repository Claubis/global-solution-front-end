import React from 'react';

const roadmapData = [
  {
    title: "PESQUISA E PLANEJAMENTO",
    description: "Gerar os dados e estatísticas que serão utilizados para demonstrar o que será desenvolvido neste projeto.",
    color: "#F1A027"
  },
  {
    title: "EDUCAÇÃO E TREINAMENTOS",
    description: "Produção de vídeos e conteúdos que orientarão usuários e parceiros sobre os procedimentos adequados, incluindo contatos relevantes e recursos disponíveis para casos de animais encalhados ou acúmulos de lixo.",
    color: "#20A19A"
  },
  {
    title: "MARKETING E DIVULGAÇÃO",
    description: "Divulgar nosso projeto em diversas redes sociais e promover boas práticas para proteger os animais e garantir o descarte adequado de resíduos.",
    color: "#F1A027"
  },
  {
    title: "RECOMPENSA",
    description: "As políticas e práticas de recompensa devem ser claramente delineadas e aplicadas a todos os usuários, parceiros e investidores que superam os objetivos da organização.",
    color: "#20A19A"
  },
  {
    title: "DESENVOLVIMENTO DO PROTÓTIPO",
    description: "Desenvolvimento de um site que identifica os locais onde animais e resíduos estão encalhados ou depositados. Este site será acessível a todos os públicos e compatível com diversos dispositivos.",
    color: "#F1A027"
  },
  {
    title: "MONITORAR DESEMPENHO",
    description: "Implementação de Business Intelligence para permitir que parceiros, investidores e usuários monitorem serviços em aberto, número de ocorrências e regiões afetadas.",
    color: "#20A19A"
  },
  {
    title: "INTEGRAÇÃO",
    description: "Integração do site com APIs do Google Maps, Gmail e Telegram, simplificando a usabilidade e oferecendo a oportunidade de desenvolver diversas soluções voltadas para a preservação do nosso planeta.",
    color: "#F1A027"
  },
  {
    title: "FEEDBACK VISUAL",
    description: "Desenvolvimento de um formulário para captar opiniões, sugestões e críticas relacionadas ao projeto.",
    color: "#20A19A"
  },
];

const Roadmap: React.FC = () => {
  return (
    <div className="bg-[#F5EAE8] min-h-screen py-10">
      <div className="text-center mb-12">
        <h1 className="text-[#F1A027] font-montserrat font-bold text-7xl ">roadmap</h1>
        <p className="text-[#000] font-montserrat font-semibold text-2xl mt-4">
          Descubra o caminho que estamos trilhando para tornar a conservação marinha mais acessível e eficaz. Nosso roadmap destaca os principais marcos e etapas futuras para o desenvolvimento e aprimoramento do aplicativo MiloTech.
        </p>
      </div>
      <div className="relative container mx-auto">
        
        {roadmapData.map((item, index) => (
          <div key={index} className="mb-8 flex justify-between items-center w-full" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
            <div className="order-1 w-5/12"></div>
            <div className={`order-1 w-5/12 px-1 py-4 bg-white rounded-lg shadow-md border-l-8`} style={{ borderColor: item.color }}>
              <h3 className="mb-3 font-montserrat font-bold text-2xl" style={{ color: item.color }}>{item.title}</h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">{item.description}</p>
            </div>
            <div className="order-1 flex justify-center items-center w-24 h-24 bg-white border-2 border-gray-200 rounded-full z-10 shadow-xl">
              <h1 className="mx-auto text-white font-semibold text-lg" style={{ color: item.color }}>{index + 1}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
