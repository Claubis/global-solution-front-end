import React from 'react';

export default function UpdateData() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#B9E2E0]">
      
	  <div className="flex flex-col md:flex-row items-center justify-center bg-white bg-opacity-80 shadow-lg w-[80%] h-[90%]">
        
		<div 
		className="flex flex-col items-center justify-center bg-cover bg-center w-full md:w-1/2 h-[80vh] border border-red-600" 
		style={{ backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.30), rgba(0,0,0,0.30)), url('/assets/Login/loginverdados_imagegradiente.png')` }}>
          
		  <div className="w-full h-full flex flex-col justify-center p-10">
            
			<h1 className="text-white text-6xl font-bold mb-4 text-left">Olá, <br />Nome!</h1>
            
			<p className="text-white text-lg leading-10 text-left">
              Estamos felizes em vê-lo novamente! Aqui na sua área pessoal, você pode gerenciar suas informações e configurações de conta para continuar aproveitando todas as funcionalidades do aplicativo da melhor forma possível.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 h-[80vh] bg-white">

          <span className="text-[#F1A027] font-montserrat text-2xl font-semibold mb-6 text-left">MEUS DADOS</span>

          <form className="space-y-6">
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                className="bg-white border-0 border-b-2 border-[#8E99AB] focus:outline-none p-2 w-full"
                placeholder='Nome'
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
              />
            </div>

            <div className="flex justify-center mt-6 gap-10">
              <button className="bg-[#007871] text-white rounded-full py-2 px-8">
                Atualizar Dados
              </button>
              <button className="bg-gray-400 text-white rounded-full py-2 px-8">
                Deletar Conta
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
