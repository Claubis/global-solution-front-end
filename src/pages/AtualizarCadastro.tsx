import React from 'react';
import { useSession } from 'next-auth/react';

export default function AtualizarCadastro() {
  const { data: session } = useSession();

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-[#B9E2E0]">
      
      <div className="flex flex-col md:flex-row items-center justify-center bg-white bg-opacity-80 shadow-lg w-[80%] h-[90%]">
        
        <div 
          className="flex flex-col items-center justify-center bg-cover bg-center w-full md:w-1/2 h-[80vh] border border-red-600" 
          style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url('/assets/AtualizarCadastro/atualizar.png')` }}>
          
          <div className="w-full h-full flex flex-col justify-center p-10">
            
            <h1 className="text-white text-6xl font-montserrat font-extrabold mb-10 text-left">
              Olá, <br />{session?.user?.name ?? session?.user?.email ?? 'Nome'}!
            </h1>
            
            <p className="text-white text-lg font-montserrat font-medium leading-10 text-left">
              Mantenha suas informações sempre <br /> atualizadas para garantir uma <br />experiência personalizada e <br /> eficiente. Clique no botão ao lado <br /> para editar seus dados pessoais.
            </p>

          </div>

        </div>

        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 h-[80vh] bg-white">
          
          <span className="text-[#F1A027] font-montserrat text-2xl font-bold mb-6 text-left">MEUS DADOS</span>
          
          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                className="bg-white border-0 border-b-2 border-[#8E99AB] focus:outline-none p-2 w-full font-montserrat font-normal"
                placeholder='Nome'
                defaultValue={session?.user?.name ?? ''}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                type="text"
                className="border-0 border-b-2 border-[#8E99AB] focus:outline-none p-2 w-full"
                placeholder='Sobrenome'
              />
            </div>
            <div className="flex flex-col space-y-2">
              <input
                type="number"
                className="border-0 border-b-2 border-[#8E99AB] focus:outline-none p-2 w-full"
                placeholder='Telefone'
              />
            </div>

            <div className="flex flex-col space-y-2">
              <input
                type="email"
                className="border-0 border-b-2 border-[#8E99AB] focus:outline-none p-2 w-full"
                placeholder='E-mail'
                defaultValue={session?.user?.email ?? ''}
              />
            </div>

            <div className="flex justify-center mt-6 gap-10">
              <button className="bg-[#007871] text-white rounded-full py-2 px-8">
                Atualizar Dados
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
