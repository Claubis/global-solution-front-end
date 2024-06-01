import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <section className='relative flex justify-center items-center w-full bg-white overflow-auto h-[80px]'>
      <div className='absolute top-0 left-0 w-full h-[80px] bg-teal-700 flex items-center'>
        <div className='flex justify-between items-center w-full max-w-screen-xl mx-auto px-6'>
          <div className='flex-shrink-0'>
            <Image
              src="/assets/Header/logo-image.png"
              alt="Logo do grupo MiloTechs"
              width={70}
              height={100}
            />
          </div>
          <div className='flex items-center space-x-8'>
            <ul className='flex space-x-8'>
              <li className='text-white font-semibold text-lg'>sobre o projeto</li>
              <li className='text-white font-semibold text-lg'>crowdfunding</li>
              <li className='text-white font-semibold text-lg'>roadmap</li>
              <li className='text-white font-semibold text-lg'>pre-lancamento</li>
              <li className='text-white font-semibold text-lg'>Educação</li>
            </ul>

            <div className='flex items-center space-x-6'>

              <button className='border border-white p-2'>
                <span className='text-white font-semibold text-lg'>apoie nossa missão</span>
              </button>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
