import React from 'react'
import Image from 'next/image'

/* Instalar npm i @material-tailwind/react
*/
//import { Carousel } from "@material-tailwind/react";

import imagem from '../../public/assets/Carrosel/_2misso_carouselimage.png'
import imagem4 from '../../public/assets/Carrosel/_2misso_arrowfoward.png'
import imagem5 from '../../public/assets/Carrosel/_2misso_arrowback.png'
import imagem6 from '../../public/assets/Carrosel/_2misso_contbackground.png'
import imagem7 from '../../public/assets/Carrosel/_2misso_Address.png'
import imagem8 from '../../public/assets/Carrosel/_2misso_Storytelling.png'
import imagem9 from '../../public/assets/Carrosel/_2misso_Alarm.png'

export default function Missao() {
  return (
    
    <div className="bg-[#F5EAE8] relative mx-auto w-full h-[1200px]">
      
	      <Image className="absolute top-0 left-0 w-full h-[70px] object-cover" src={imagem6.src} alt="background" width={100} height={100}/>

        <div className="absolute top-0 left-[139px] w-[332px] h-[357px] bg-white bg-opacity-30 border border-white rounded-[40px] p-4 flex flex-col items-center">
          
          <Image className="w-[80px] h-[80px] object-cover" src={imagem7.src} alt="Address" width={100} height={100}/>

          <h2 className="mt-[47px] text-[#048E8C] font-montserrat font-bold text-[20px]">Reporte Instantâneo</h2>

          <p className="mt-[12px] text-center text-[#048E8C] font-montserrat font-medium text-[18px] leading-[27px]">
            Marque rapidamente a localização de encalhes e alerte as autoridades locais com apenas alguns toques.
          </p>

        </div>

        <div className="absolute top-0 left-[551px] w-[332px] h-[363px] bg-white bg-opacity-30 border border-white rounded-[40px] p-4 flex flex-col items-center">
          
          <Image className="w-[80px] h-[80px] object-cover" src={imagem9.src} alt="Alarm" width={100} height={100}/>

          <h2 className="mt-[47px] text-[#048E8C] font-montserrat font-bold text-[20px]">Fique Informado</h2>

          <p className="mt-[12px] text-center text-[#048E8C] font-montserrat font-medium text-[18px] leading-[27px]">
            Receba notificações em tempo real sobre encalhes próximos e eventos de conservação marinha.
          </p>

        </div>

        <div className="absolute top-[3px] left-[963px] w-[332px] h-[360px] bg-white bg-opacity-30 border border-white rounded-[40px] p-4 flex flex-col items-center">
          
          <Image className="w-[80px] h-[80px] object-cover" src={imagem8.src} alt="Storytelling" width={100} height={100}/>

          <h2 className="mt-[47px] text-[#048E8C] font-montserrat font-bold text-[20px]">Aprenda e Contribua</h2>

          <p className="mt-[12px] text-center text-[#048E8C] font-montserrat font-medium text-[18px] leading-[27px]">
            Acesse materiais educativos e saiba como suas ações podem fazer a diferença na conservação dos oceanos.
          </p>

        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 top-[500px] w-[90%] h-[600px]">
          
          <Image className="absolute object-cover rounded-xl" src={imagem.src} alt="carousel image" width={1400} height={800}/>

          <div className="absolute w-full h-full flex justify-between items-center">
            
            <Image className=" object-cover cursor-pointer" src={imagem5.src} alt="arrow back" width={100} height={100}/>

            <Image className=" object-cover cursor-pointer" src={imagem4.src} alt="arrow forward" width={100} height={100}/>
          </div>

          <p className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-6 font-montserrat text-[24px] font-medium leading-[36px]">
            A missão do MarVida é capacitar cidadãos e comunidades a agir rapidamente diante de encalhes de animais marinhos, utilizando tecnologia para facilitar o monitoramento e a resposta. Encalhes podem ser desastrosos para as espécies afetadas, muitas vezes resultando em mortes que poderiam ser evitadas com ações imediatas.
          </p>
          
        </div>
	  
    </div>
  );
}
