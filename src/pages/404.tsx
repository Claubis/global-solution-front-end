import React from 'react';
import ImgAsset from '../../public/assets/assets_logovetorizado021.png';
import imagem2 from '../../public/assets/_404notfound_background.png';
import imagem3 from '../../public/assets/404.png';

const NotFoundPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(0deg, rgba(0,75,70,0.40), rgba(0,75,70,0.40)), url(${'/assets/_404notfound_background.png'})` }}></div>
      
      <div className="absolute top-16 left-0 right-0 mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-center text-center">
        
        <div className="text-white mb-8 flex flex-col justify-center items-center">
          <img src={imagem3.src} alt="" />

          <p className="text-2xl">Oops! Parece que navegamos para águas desconhecidas!</p>
        </div>

        <div className="mt-16 mb-8">
          <button className="relative bg-white text-teal-700 font-bold text-lg py-3 px-8 border border-white shadow-lg">
            <span className="absolute inset-0 bg-transparent border border-white"></span>
            <span className="relative">voltar a superfície</span>
          </button>
        </div>

      </div>

      <div className="absolute top-6 left-0 right-0 mx-auto max-w-screen-xl px-6 flex justify-between items-center">
        <img className="h-12 w-auto" src={ImgAsset.src} alt="Logo" />
        <ul className="flex space-x-8 text-white text-lg font-semibold">
          <li>sobre o projeto</li>
          <li>crowdfunding</li>
          <li>roadmap</li>
          <li>pré-lançamento</li>
          <li>educação</li>
          <li>
            <button className="bg-transparent border border-white py-1 px-4">apoie nossa missão</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotFoundPage;
