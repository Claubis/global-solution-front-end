import React from 'react'
import imagem from '../../public/assets/Login/loginverdados_background.png'
import imagem1 from '../../public/assets/Login/loginverdados_logoimage.png'
import imagem2 from '../../public/assets/Login/loginverdados_Vector.png'
import imagem3 from '../../public/assets/Login/loginverdados_Line8.png'
import imagem4 from '../../public/assets/Login/loginverdados_Line8_1.png'
import imagem5 from '../../public/assets/Login/loginverdados_Line8_2.png'
import imagem6 from '../../public/assets/Login/loginverdados_Line9.png'

export default function Login () {
	return (
		<div className='loginverdados_loginverdados'>
			<img className='background' src = {imagem.src} />
			<div className='menu'>
				<div className='button'>
					<div className='Rectangle28'/>
					<span className='apoienossamisso'>apoie nossa missÃ£o</span>
				</div>
				<span className='educao'>educacao</span>
				<span className='prlanamento'>pre-lancamento</span>
				<span className='roadmap'>roadmap</span>
				<span className='crowdfunding'>crowdfunding</span>
				<span className='sobreoprojeto'>sobre o projeto</span>
				<img className='logoimage' src = {imagem1.src} />
			</div>
			<div className='rectangleright'/>
			<div className='rectangleleft'><div className='imagegradiente' style={{backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.30), rgba(0,0,0,0.30)),url(${'/assets/Login/loginverdados_imagegradiente.png'})`}}/>
				<div className='glassmorphism'/>
			</div>
			<img className='Vector' src = {imagem2.src} />
			<div className='textleft'>
				<span className='text'>Estamos felizes em ve-lo novamente! Aqui na sua Ã¡rea pessoal, vocÃª pode gerenciar suas informaÃ§Ãµes e configuraÃ§Ãµes de conta para continuar aproveitando todas as funcionalidades do aplicativo da melhor forma possÃ­vel.</span>
				<span className='title'>olá¡, Nome!</span>
			</div>
			<span className='text_1'>MEUS DADOS</span>
			<div className='buttons'>
				<div className='buttonatualizar'>
					<div className='Rectangle33'/>
					<span className='AtualizarDados'>Atualizar Dados</span>
				</div>
				<div className='buttondeletar'>
					<div className='Rectangle33_1'/>
					<span className='DeletarConta'>Deletar Conta</span>
				</div>
			</div>
			<div className='inputlastname'>
				<span className='Sobrenome'>Sobrenome</span>
				<img className='Line8' src = {imagem3.src} />
			</div>
			<div className='inputtelephone'>
				<span className='Telefone'>Telefone</span>
				<img className='Line8_1' src = {imagem4.src} />
			</div>
			<div className='inputtelephone_1'>
				<span className='Email'>E-mail</span>
				<img className='Line8_2' src = {imagem5.src} />
			</div>
			<div className='inputname'>
				<span className='Nome'>Nome</span>
				<img className='Line9' src = {imagem6.src} />
			</div>
		</div>
	)
}