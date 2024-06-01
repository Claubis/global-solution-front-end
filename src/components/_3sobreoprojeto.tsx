import React from 'react'
import imagem from '../../public/assets/Projeto/_3sobreoprojeto_play.png'
import imagem1 from '../../public/assets/Projeto/video.png'

export default function _3sobreoprojeto () {
	return (
		<div className='_3sobreoprojeto__3sobreoprojeto'>
			<div className='background'>
				<div className='fundo'/>
				<div className='Rectangle48'/>
			</div>
			<div className='videopitch'><div className='video' style={{backgroundImage: `url(${imagem1.src}),linear-gradient(0deg, rgba(217,217,217,1.00), rgba(217,217,217,1.00))`}}/>
				<img className='play' src = {imagem.src} />
			</div>
			<div className='text'>
				<span className='subtitle'>apresentaÃ§Ã£o</span>
				<span className='text_1'>Estamos entusiasmados em apresentar nosso pitch, onde detalhamos a visÃ£o e a missÃ£o do projeto. Esta apresentaÃ§Ã£o irÃ¡ levÃ¡-lo atravÃ©s dos objetivos fundamentais do nosso aplicativo, como ele funciona, e o impacto significativo que esperamos alcanÃ§ar na conservaÃ§Ã£o marinha. Acompanhe para descobrir como estamos transformando a paixÃ£o pelo oceano em aÃ§Ãµes prÃ¡ticas para proteger a vida marinha.</span>
			</div>
			<span className='title'>sobre o projeto</span>
		</div>
	)
}