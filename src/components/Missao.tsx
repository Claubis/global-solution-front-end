import React from 'react'
import imagem from '../../public/assets/Carrosel/_2misso_carouselimage.png'
import imagem1 from '../../public/assets/Carrosel/_2misso_Line2.png'
import imagem2 from '../../public/assets/Carrosel/_2misso_Line3.png'
import imagem3 from '../../public/assets/Carrosel/_2misso_Line4.png'
import imagem4 from '../../public/assets/Carrosel/_2misso_arrowfoward.png'
import imagem5 from '../../public/assets/Carrosel/_2misso_arrowback.png'
import imagem6 from '../../public/assets/Carrosel/_2misso_contbackground.png'
import imagem7 from '../../public/assets/Carrosel/_2misso_Address.png'
import imagem8 from '../../public/assets/Carrosel/_2misso_Storytelling.png'
import imagem9 from '../../public/assets/Carrosel/_2misso_Alarm.png'


export default function _2misso () {
	return (
		<div className='_2misso__2misso bg-[#F5EAE8]'>
			

			<img className='contbackground' src = {imagem6.src} />

			<div className='card1'>
				<div className='Rectangle39'/>
				<img className='Address' src = {imagem7.src} />
				<span className='ReporteInstantneo'>Reporte InstantÃ¢neo</span>
				<span className='Marquerapidamentealocalizaodeencalhesealerteasautoridadeslocaiscomapenasalgunstoques'>Marque rapidamente a localizaÃ§Ã£o de encalhes e alerte as autoridades locais com apenas alguns toques.</span>
			</div>
			<div className='card3'>
				<div className='Rectangle41'/>
				<span className='AprendaeContribua'>Aprenda e Contribua</span>
				<span className='Acessemateriaiseducativosesaibacomosuasaespodemfazeradiferenanaconservaodosoceanos'>Acesse materiais educativos e saiba como suas aÃ§Ãµes podem fazer a diferenÃ§a na conservaÃ§Ã£o dos oceanos.</span>
				<img className='Storytelling' src = {imagem8.src} />
			</div>
			<div className='card2'>
				<div className='Rectangle40'/>
				<span className='FiqueInformado'>Fique Informado</span>
				<span className='Recebanotificaesemtemporealsobreencalhesprximoseeventosdeconservaomarinha'>Receba notificaÃ§Ãµes em tempo real sobre encalhes prÃ³ximos e eventos de conservaÃ§Ã£o marinha.</span>
				<img className='Alarm' src = {imagem9.src} />
			</div>

			<div className='caroussel min-h-full'>
				<img className='carouselimage' src = {imagem.src} />
				<div className='carouselglassbox'/>
				<span className='carouseltext'>A missÃ£o do MarVida Ã© capacitar cidadÃ£os e comunidades a agir rapidamente diante de encalhes de animais marinhos, utilizando tecnologia para facilitar o monitoramento e a resposta. Encalhes podem ser desastrosos para as espÃ©cies afetadas, muitas vezes resultando em mortes que poderiam ser evitadas com aÃ§Ãµes imediatas.</span>
				<div className='Group33'>
					<img className='Line2' src = {imagem1.src} />
					<img className='Line3' src = {imagem2.src} />
					<img className='Line4' src = {imagem3.src} />
				</div>
				<img className='arrowfoward' src = {imagem4.src} />
				<img className='arrowback' src = {imagem5.src} />

			
			</div>

			
		</div>
	)
}