import React, { useState } from 'react';
import Image from 'next/image';

import imagem from '../../public/assets/Feedback/Feedback_Rectangle33.png';

interface FormData {
  email_news: string;
}

const FormularioNews: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email_news: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email_news;
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

  return (
    <form
      name="form-newsletter"
      id="form-newsletter"
      onSubmit={handleSubmitNewsletter}
      className="absolute top-[280px] left-[900px] w-[422px] h-[413px] mt-20"
    >
      <Image src={imagem.src} alt="Imagem de fundo de um golfinho" width={500} height={200} />

      <div className="absolute top-[207px] left-[35px] w-[350px] h-[57px] bg-white">
        <input
          type="email"
          id="newsletter-email"
          name="email_feedback"
          value={formData.email_news}
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
  );
};

export default FormularioNews;