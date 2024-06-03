import React from 'react';
import Image from 'next/image';

import imagem1 from '../../public/assets/Login/loginverdados_Line8_1.png'

export default function Cadastro() {
  return (
    <div className="relative mx-auto w-full min-h-screen bg-[#B9E2E0]">
      

      <div className="absolute inset-0 bg-white bg-opacity-40"></div>
      
      <div className="relative flex flex-col items-center justify-center min-h-screen">


            <div className='flex border border-red-600 h-[80vh] p-10'>

                <div className="w-full flex flex-col justify-center bg-[#20A19A] px-20">

                    <h2 className="text-white font-montserrat-700 text-4xl mb-4 text-left">Crie sua conta</h2>

                    <p className="text-white font-montserrat text-lg text-left max-w-2xl leading-10">
                    Se você ainda não faz parte da nossa comunidade, junte-se hoje e comece a fazer a diferença! O cadastro é rápido e fácil. Preencha o formulário acima para começar a sua jornada na conservação marinha.
                    </p>

                </div>

                <div className=" bg-white shadow-lg p-20 w-full">
                    
                    <h2 className="text-[#F1A027] font-montserrat text-2xl font-semibold mb-6 text-center">DIGITE SEUS DADOS</h2>
                
                    <form className="space-y-6">
                        <div className="flex flex-col space-y-2">
                        
                        <input
                            type="text"
                            className="w-full"
                            placeholder='Nome'
                            
                        />
                        <img className='Line8_1' src = {imagem1.src} />
                        </div>

                        <div className="flex flex-col space-y-2">
                        
                        <input
                            type="text"
                            className="w-full"
                            placeholder='Sobrenome'
                        />
                        <img className='Line8_1' src = {imagem1.src} />
                        </div>

                        <div className="flex flex-col space-y-2">
                       
                        <input
                            type="number"
                            className="w-full"
                            placeholder='Telefone'
                        />
                        <img className='Line8_1' src = {imagem1.src} />
                        </div>

                        <div className="flex flex-col space-y-2">
                        
                        <input
                            type="email"
                            className="w-full"
                            placeholder='E-mail'
                        />
                        <img className='Line8_1' src = {imagem1.src} />
                        </div>

                        <div className="flex flex-col space-y-2">
                     
                        <input
                            type="email"
                            className="w-full"
                            placeholder='Confirme seu E-mail'
                        />
                        <img className='Line8_1' src = {imagem1.src} />
                        </div>

                        <div className='grid grid-cols-2 gap-3'>

                            <div className="flex flex-col space-y-2">
                            
                            <input
                                type="password"
                                className="w-full"
                                placeholder='Senha'
                            />
                            <img className='Line8_1' src = {imagem1.src} />
                            </div>

                            <div className="flex flex-col space-y-2">
                        
                            <input
                                type="password"
                                className="w-full"
                                placeholder='Confirme sua Senha'
                            />
                            <img className='Line8_1' src = {imagem1.src} />
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
