import React from 'react';
import Link from 'next/link';

import imagem from '../../public/assets/SessaoPrincipal/Desktop_Rectangle20.png'

const SessaoPrincipal: React.FC = () => {
  return (
    
    <div className="relative bg-gray-100 min-h-screen">
      
        {/* Imagem de fundo cobrindo toda a tela */}

        <div className="relative bg-cover bg-center min-h-screen p-4 md:p-20" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,120,113,0.70), rgba(0,120,113,0.70)), url(${imagem.src})` }}>

          {/* Menu no topo */}

          <div className="container mx-auto px-4 py-16 flex justify-start md:justify-end items-center min-h-screen">

            <div className="text-left md:text-right text-white">

              <h1 className="text-4xl md:text-6xl font-montserrat font-extrabold">Transforme <br />sua paixão</h1>
              
              <h2 className="text-4xl md:text-6xl font-montserrat font-extrabold ">pelo mar em ação</h2>

              <p className="mt-4 text-2xl font-montserrat font-medium">Descubra como cada um de nós pode fazer a diferença. Use nossa plataforma <br />para registrar encalhes, participar de iniciativas de conservação e aprender mais <br /> sobre como você pode ajudar a salvar nossos oceanos.</p>
      
              <div className="mt-6 grid gap-5 w-full md:flex md:justify-end items-end">
                
                <button className="bg-[#F1A027] text-white px-4 py-2 rounded mr-2 font-montserrat font-semibold w-full md:w-[300px]"><Link href="/OcorrenciasAnimal">Registrar ocorrência</Link></button>
                
                <button className="bg-transparent text-white px-4 py-2 rounded border border-white font-montserrat font-semibold w-full md:w-[300px]"><Link href="/Login">Saiba mais</Link></button>

              </div>

            </div>

          </div>

        </div>

    </div>

  );
};

export default SessaoPrincipal;
