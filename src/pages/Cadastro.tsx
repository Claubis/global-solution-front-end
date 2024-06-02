import React from 'react';
import Image from 'next/image';

import imagem from '../../public/assets/Cadastro/Cadastro_background.png'

export default function Cadastro() {
  return (
    <div className="relative mx-auto w-full min-h-screen bg-white">
      <div className="absolute inset-0">
        <Image
          src="/assets/Cadastro/Cadastro_background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      
      <div className="relative flex flex-col items-center justify-center min-h-screen">

        <header className="absolute top-0 left-0 w-full h-[80px] flex items-center px-10">
          <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
            <Image
              src="/assets/Header/logo-image.png"
              alt="Logo do grupo MiloTechs"
              width={50}
              height={53}
            />
            <ul className="flex space-x-8">
              <li className="text-white font-semibold text-lg">sobre o projeto</li>
              <li className="text-white font-semibold text-lg">crowdfunding</li>
              <li className="text-white font-semibold text-lg">roadmap</li>
              <li className="text-white font-semibold text-lg">pré-lançamento</li>
              <li className="text-white font-semibold text-lg">Educação</li>
            </ul>
            <button className="border border-white px-4 py-2">
              <span className="text-white font-semibold text-lg">apoie nossa missão</span>
            </button>
          </div>
        </header>

            <div className='flex border border-red-600 h-[80vh]'>

                <div className="w-full flex flex-col items-center justify-center bg-[#20A19A]">

                    <h2 className="text-white font-montserrat text-4xl mb-4 text-center">Crie sua conta</h2>

                    <p className="text-white font-montserrat text-lg text-center max-w-2xl">
                    Se você ainda não faz parte da nossa comunidade, junte-se hoje e comece a fazer a diferença! O cadastro é rápido e fácil. Preencha o formulário acima para começar a sua jornada na conservação marinha.
                    </p>

                </div>

                <div className=" bg-white bg-opacity-75 rounded-lg shadow-lg p-20 w-full">
                    
                    <h2 className="text-[#F1A027] font-montserrat text-2xl font-semibold mb-6 text-center">DIGITE SEUS DADOS</h2>
                
                    <form className="space-y-6">
                        <div className="flex flex-col space-y-2">
                        
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-lg p-2 w-full"
                            placeholder='Nome'
                        />
                        </div>

                        <div className="flex flex-col space-y-2">
                        
                        <input
                            type="text"
                            className="border-2 border-gray-300 rounded-lg p-2 w-full"
                            placeholder='Sobrenome'
                        />
                        </div>

                        <div className="flex flex-col space-y-2">
                       
                        <input
                            type="number"
                            className="border-2 border-gray-300 rounded-lg p-2 w-full"
                            placeholder='Telefone'
                        />
                        </div>

                        <div className="flex flex-col space-y-2">
                        
                        <input
                            type="email"
                            className="border-2 border-gray-300 rounded-lg p-2 w-full"
                            placeholder='E-mail'
                        />
                        </div>

                        <div className="flex flex-col space-y-2">
                     
                        <input
                            type="email"
                            className="border-2 border-gray-300 rounded-lg p-2 w-full"
                            placeholder='Confirme seu E-mail'
                        />
                        </div>

                        <div className='grid grid-cols-2 gap-3'>

                            <div className="flex flex-col space-y-2">
                            
                            <input
                                type="password"
                                className="border-2 border-gray-300 rounded-lg p-2 w-full"
                                placeholder='Senha'
                            />
                            </div>

                            <div className="flex flex-col space-y-2">
                        
                            <input
                                type="password"
                                className="border-2 border-gray-300 rounded-lg p-2 w-full"
                                placeholder='Confirme sua Senha'
                            />
                            </div>

                        </div>

                        <div className="flex justify-center mt-6">
                        <button className="bg-[#007871] text-white rounded-full py-2 px-8">
                            Criar Conta
                        </button>
                        </div>
                    </form>

            </div>

        </div>

        
      </div>
    </div>
  );
}
