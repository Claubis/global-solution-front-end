import React, { useState } from 'react';
import Image from 'next/image';

import imagem from '../../public/assets/Feedback/Feedback_Rectangle33.png';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}


const StarIcon: React.FC<{ filled: boolean; onClick: () => void }> = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    className={`h-10 w-10 cursor-pointer ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
    fill={filled ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.073 6.36h6.704c.969 0 1.371 1.24.588 1.81l-5.396 3.928 2.073 6.36c.3.921-.755 1.683-1.54 1.193l-5.396-3.928-5.396 3.928c-.785.49-1.84-.272-1.54-1.193l2.073-6.36-5.396-3.928c-.783-.57-.38-1.81.588-1.81h6.704l2.073-6.36z"
    />
  </svg>
);

const Feedback: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    // Substitua pela URL real do seu endpoint de back-end
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log('Feedback enviado:', result);
  };

  const handleSubmitNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email;
    // Substitua pela URL real do seu endpoint de back-end
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    const result = await response.json();
    console.log('Newsletter enviada:', result);
  };

  const handleSetRating = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="w-full h-[860px] bg-white relative">

      <div className="absolute top-0 left-0 bg-[#077B74]">
        

        <div className="flex flex-col px-20 justify-center items-center mb-20 mt-10">

          <span className="text-6xl font-montserrat font-extrabold text-teal-200 leading-[78px] text-center">fale conosco</span>

          <span className="mt-4 text-lg font-montserrat font-medium text-white leading-[27px] text-center">
            Temos interesse em ouvir suas sugestões, dúvidas ou feedback. Entre em contato conosco para saber mais sobre o projeto, nossas atividades de conservação ou como você pode se envolver mais.
          </span>

        </div>
      
      </div>

      <form
        name="form-feedback"
        id="form-feedback"
        onSubmit={handleSubmitFeedback}
        className="absolute top-[280px] left-[118px] w-[711px] h-[413px] space-y-4 mt-20 font-montserrat font-medium"
      >
        <div className="flex space-x-4">
          <div className="w-[350px] h-[57px] rounded-full bg-[#B9E2E0] p-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nome"
              required
              className="w-full bg-transparent focus:outline-none text-lg font-medium text-[#057872]"
            />
          </div>

          <div className="w-[350px] h-[57px] rounded-full bg-[#B9E2E0] p-4">
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Telefone"
              required
              className="w-full bg-transparent focus:outline-none text-lg font-medium text-teal-700"
            />
          </div>
        </div>

        <div className="w-full h-[57px] rounded-full bg-[#B9E2E0] p-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            required
            className="w-full bg-transparent focus:outline-none text-lg font-medium text-teal-700"
          />
        </div>

        <div className="w-full h-[182px] rounded-[25px] bg-[#B9E2E0] p-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Mensagem"
            required
            className="w-full h-full bg-transparent focus:outline-none text-lg font-medium text-teal-700"
          />
        </div>

        <div className="w-full flex items-center justify-between">

            <div className="flex flex-grow space-x-1 justify-around">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} filled={index < rating} onClick={() => handleSetRating(index)} />
              ))}
            </div>

            <button
              type="submit"
              className="w-[342px] h-[57px] rounded-full bg-teal-700 flex items-center justify-center text-lg font-medium text-white"
            >
              enviar mensagem
            </button>
        </div>

      </form>

      <form
        name="form-newsletter"
        id="form-newsletter"
        onSubmit={handleSubmitNewsletter}
        className="absolute top-[280px] left-[900px] w-[422px] h-[413px] mt-20"
      >
        <Image src={imagem.src} alt="Imagem de fundo de um golfinho" width={500} height={200}/>

        <div className="absolute top-[207px] left-[35px] w-[350px] h-[57px] bg-white">
          <input
            type="email"
            id="newsletter-email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="absolute w-full h-full bg-transparent pl-4 text-lg font-medium text-teal-700 focus:outline-none flex justify-center items-center bg-[#FCF8F7]"
            placeholder="E-mail"
            required
          />
        </div>

        <span className="absolute top-[50px] left-[29px] w-[320px] text-2xl font-montserrat font-extrabold text-white leading-[36px]">
          assine a newsletter
        </span>

      
        <span className="absolute top-[107px] left-[29px] w-[361px] text-lg font-montserrat font-medium text-white leading-[27px]">
          Assine nossa newsletter e mergulhe nas últimas novidades sobre conservação marinha.
        </span>

        <div className="absolute top-[288px] left-[35px] w-[350px] h-[48px]">
          <div className="absolute top-0 left-0 w-full h-full bg-[#F1A027]"></div>
          <button type="submit" className="absolute top-[11px] left-1/2 transform -translate-x-1/2 text-lg font-montserrat font-medium text-teal-700">
            enviar
          </button>
        </div>

        
        
      </form>

    </div>
  );
};

export default Feedback;
