import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <section className="relative flex justify-center items-center w-full h-[80px] bg-[#077B74]">
      
      <div className="absolute top-0 left-0 w-full h-[80px] flex items-center bg-transparent px-10">
        <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
              src="/assets/Header/logo-image.png"
              alt="Logo do grupo MiloTechs"
              width={70}
              height={80}
            /></Link>
            
          </div>

          <div className="flex items-center space-x-8">

            <ul className="flex space-x-8 font-montserrat font-semibold">
              
              <li className="text-white font-semibold text-lg"><Link href="#sobreProjeto">sobre o projeto</Link></li>
              <li className="text-white font-semibold text-lg"><Link href='#Funcionalidades'>funcionalidades</Link></li>
              <li className="text-white font-semibold text-lg"><Link href="/Investimentos">crowdfunding</Link></li>
              <li className="text-white font-semibold text-lg"><Link href="#Roadmap">roadmap</Link></li>
              
              <li className="text-white font-semibold text-lg"><Link href="#Educacao">educação</Link></li>
              <li className="text-white font-semibold text-lg"><Link href="/Contato">contato</Link></li>
            </ul>
            
          </div>

          <div className='flex gap-5'>

              <div className="flex items-center space-x-6">
                  
                  <button className="border border-white p-2">
                    <span className="text-white font-semibold text-lg"><Link href="/Cadastro">apoie nossa missão</Link></span>
                  </button>

              </div>

              <div className="flex items-center space-x-6">
                  
                  <button className="border border-white p-2">
                    <span className="text-white font-semibold text-lg"><Link href="/Login">Login</Link></span>
                  </button>

              </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Menu;
