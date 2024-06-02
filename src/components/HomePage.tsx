import React from 'react';
import imagem1 from '../../public/assets/Desktop_Rectangle20.png';
import Header from '../components/Header';
import imagem2 from '../../public/assets/Slide Up.png'

const HomePage: React.FC = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen">
      {/* Imagem de fundo cobrindo toda a tela */}
      <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,120,113,0.70), rgba(0,120,113,0.70)), url(${imagem1.src})` }}>
        {/* Menu no topo */}
        <Header />
        <div className="container mx-auto px-4 py-16 flex items-center justify-end min-h-screen">
          <div className="text-right text-white">
            <h1 className="text-6xl font-montserrat">Transforme sua paixão</h1>
            <p className="text-6xl">pelo mar em ação</p>

            <p className="mt-4 text-2xl">Descubra como cada um de nós pode fazer a diferença. Use nossa plataforma para registrar encalhes, participar de iniciativas de conservação e aprender mais sobre como você pode ajudar a salvar nossos oceanos.</p>
    
            <div className="mt-6 flex justify-end">
              <button className="bg-[#F1A027] text-white px-4 py-2 rounded mr-2">Registrar ocorrência</button>
              <button className="bg-transparent text-white px-4 py-2 rounded border border-white">Saiba mais</button>
            </div>

            

          </div>

        </div>

        <div className='flex justify-end items-end'>
                <img src={imagem2.src} alt="Seta para voltar ao menu" className='w-100'/>
        </div>

      </div>

            

    </div>
  );
};

export default HomePage;
