import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
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

            <ul className="flex space-x-8">
              
              <li className="text-white font-semibold text-lg"><Link href="#AboutProject">sobre o projeto</Link></li>
              <li className="text-white font-semibold text-lg"><Link href="/Crowdfunding">crowdfunding</Link></li>
              <li className="text-white font-semibold text-lg"><Link href="#Roadmap">roadmap</Link></li>
              <li className="text-white font-semibold text-lg">pré-lançamento</li>
              <li className="text-white font-semibold text-lg"><Link href="#Educacao">Educação</Link></li>
            </ul>
            
          </div>

          <div className="flex items-center space-x-6">
              <button className="border border-white p-2">
                <span className="text-white font-semibold text-lg"><Link href="/Cadastro">apoie nossa missão</Link></span>
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
