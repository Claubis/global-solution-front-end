
import imagem from '../../public/assets/Desktop_Instagram.png'
import imagem1 from '../../public/assets/Desktop_Facebook.png'
import imagem2 from '../../public/assets/Desktop_TwitterX.png'

export default function Footer(){
    return(

        <footer className="bg-[#B9E2E0] text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">© 2024 MiloTechs. Todos os direitos reservados.</p>
                <div className="flex justify-center space-x-4">
                    <img className="h-6 w-6" src={imagem.src} alt="Instagram" />
                    <img className="h-6 w-6" src={imagem1.src} alt="Facebook" />
                    <img className="h-6 w-6" src={imagem2.src} alt="Twitter" />
                </div>
            </div>
      </footer>

    );
}

