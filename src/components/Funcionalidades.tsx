import React from 'react'
import Link from 'next/link'


import imagem from '../../public/assets/funcionalidades/mockup-cel-2.png'
import imagem3 from '../../public/assets/funcionalidades/_4funcionalidades_BookAndPencil.png'
import imagem4 from '../../public/assets/funcionalidades/_4funcionalidades_Siren.png'
import imagem5 from '../../public/assets/funcionalidades/_4funcionalidades_Country.png'
import imagem6 from '../../public/assets/funcionalidades/_4funcionalidades_TailOfWhale.png'
import imagem7 from '../../public/assets/funcionalidades/mockup-cel-1.png'

export default function Funcionalidades() {
  return (
    <div className="relative mx-auto w-full h-[2140px] bg-[#F5EAE8]">

      	<div className="absolute inset-0 bg-[#F5EAE8]"></div>

		<div className="relative flex flex-col items-center">

			<div className="relative w-full h-[400px] bg-[#20A19A] flex items-center justify-center">
				<span className="text-white text-2xl font-montserrat text-center px-10">
				O aplicativo da MiloTech está sendo desenvolvido para transformar a maneira como lidamos com encalhes de animais marinhos e também para nos capacitar a combater a poluição e desastres ambientais marítimos. Utilizando tecnologia avançada, o app facilitará o reporte e o monitoramento desses eventos, contribuindo significativamente para a conservação marinha.
				</span>
			</div>

			<div className=" w-full mt-10 p-10">

				<h1 className="text-[#20A19A] font-montserrat font-extrabold text-[57.6px] leading-[86.4px] text-left">
					funcionalidades
				</h1>

			</div>

			<div className="flex justify-between items-center w-full max-w-[1296px]">

				<div className="w-1/2 pr-5">
						
						<div className="flex items-center mb-10">
						<div className="w-[75px] h-[75px] bg-[#B9E2E0] rounded-full flex items-center justify-center">
							<img className="w-[44px] h-[44px]" src={imagem6.src} alt="Tail of Whale" />
						</div>
						<div className="ml-5">
							<h2 className="text-[#048E8C] font-montserrat font-bold text-[18px] leading-[27px]">Registro de Incidentes</h2>
							<p className="text-[#000] font-montserrat text-[18px] leading-[27px]">Utilize o aplicativo para registrar não só encalhes de animais marinhos, mas também ocorrências de resíduos poluentes e desastres ambientais marítimos, incluindo a localização exata, detalhes do incidente e fotos.</p>
						</div>
						</div>

						<div className="flex items-center mb-10">
						<div className="w-[75px] h-[75px] bg-[#B9E2E0] rounded-full flex items-center justify-center">
							<img className="w-[44px] h-[44px]" src={imagem5.src} alt="Country" />
						</div>
						<div className="ml-5">
							<h2 className="text-[#048E8C] font-montserrat font-bold text-[18px] leading-[27px]">Mapa Interativo</h2>
							<p className="text-[#000] font-montserrat text-[18px] leading-[27px]">O aplicativo oferece um mapa interativo que mostra todos os encalhes reportados em tempo real, permitindo aos usuários visualizar e monitorar a situação nas suas proximidades ou em escala global.</p>
						</div>
						</div>

				</div>

				{/* Imagens aqui */}
				<div className="w-[755px] h-[755px] relative">
					<img className="bottom-0 left-0 w-[534px] h-[526px]" src={imagem7.src} alt="Vector 1" />
				</div>

			</div>

			<div className="flex justify-between items-center w-full max-w-[1296px]">
			
				{/* Imagens aqui */}

				<div className="w-[355px] relative">
					<img className="bottom-0 left-0 w-full" src={imagem.src} alt="Vector" />
				</div>
				
				<div className="w-1/2 pr-5">
					
					<div className="flex justify-center items-center mb-10">
						<div className="w-[75px] h-[75px] bg-[#B9E2E0] rounded-full flex items-center justify-center">
							<img className="w-[44px] h-[44px]" src={imagem4.src} alt="Siren" />
						</div>
						<div className="ml-5">
							<h2 className="text-[#048E8C] font-montserrat font-bold text-[18px] leading-[27px]">Alertas e Notificações</h2>
							<p className="text-[#000] font-montserrat text-[18px] leading-[27px]">Receba alertas sobre novos encalhes, avistamentos de resíduos poluentes, ou desastres ambientais nas suas proximidades, baseados em suas configurações de localização e preferências.</p>
						</div>
					</div>

					<div className="flex items-center mb-10">
					<div className="w-[75px] h-[75px] bg-[#B9E2E0] rounded-full flex items-center justify-center">
						<img className="w-[44px] h-[44px]" src={imagem3.src} alt="Book and Pencil" />
					</div>
					<div className="ml-5">
						<h2 className="text-[#048E8C] font-montserrat font-bold text-[18px] leading-[27px]">Educação e Recursos</h2>
						<p className="text-[#000] font-montserrat text-[18px] leading-[27px]">Acesse uma variedade de recursos educativos que abordam desde a biologia marinha até técnicas para lidar com poluição e resgate de animais, enriquecendo seu conhecimento sobre o meio ambiente marinho e práticas de sustentabilidade.</p>
					</div>

					
					</div>

					<button className="mt-10 px-8 py-3 bg-[#F1A027] text-white font-montserrat font-semibold text-[14px] rounded-md">
						<Link href="/Cadastro">Faça seu cadastro</Link>
					</button>

				</div>
			
			</div>

		

		</div>

    </div>
  )
}
