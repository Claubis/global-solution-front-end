import React from 'react';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex">
        <div className="w-1/2 bg-cover bg-center p-8" style={{ backgroundImage: `url('/assets/login-bg.png')` }}>
          <div className="h-full flex flex-col justify-center text-white">
            <h2 className="text-4xl font-bold mb-4">Bem-vindo de volta!</h2>
            <p className="text-lg mb-8">
              Se você já faz parte da nossa comunidade, estamos felizes em vê-lo de volta! Insira suas credenciais ao lado para continuar acessando o site e contribuir para a conservação marinha. Seu engajamento é essencial para ajudar a proteger a vida marinha.
            </p>
          </div>
        </div>
        <div className="w-1/2 p-8">
          <h3 className="text-2xl font-bold text-orange-500 mb-6">LOGIN</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email" 
                type="email" 
                placeholder="E-mail"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="password" 
                type="password" 
                placeholder="Senha"
              />
            </div>
            <div className="mb-6 text-right">
              <a className="inline-block align-baseline font-bold text-sm text-orange-500 hover:text-orange-800" href="#">
                Esqueceu sua senha?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button 
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="button"
              >
                Login
              </button>
              <button 
                className="bg-white text-gray-700 font-bold py-2 px-4 rounded border border-gray-300 flex items-center justify-center focus:outline-none focus:shadow-outline" 
                type="button"
              >
                <img src="/assets/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
