import React, { useState } from 'react';
import axios from 'axios';


const Investimentos: React.FC = () => {
  const [formData, setFormData] = useState({
    nome_inv: '',
    email_inv: '',
    telefone_inv: '',
    nomeEmpresa_inv: '',
    quantiquantia_contribuida_inv: '',
    msg_inv: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { nome_inv, email_inv, telefone_inv, nomeEmpresa_inv, quantiquantia_contribuida_inv, msg_inv } = formData;
    if (!nome_inv || !email_inv || !telefone_inv || !nomeEmpresa_inv || !quantiquantia_contribuida_inv || !msg_inv ) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    try {
      await axios.post('https://seu-endpoint.com/api/investidores', formData);
      alert('Mensagem enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-auto bg-white flex" id='Crowdfunding'>
   
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row  justify-center items-center">
        
        <div className="text-center md:text-left mb-16 md:mb-0 md:w-1/2 flex flex-col gap-5">

            <h1 className="text-6xl font-montserrat font-extrabold text-orange-500">apoie nossa <br /> missão</h1>
        
            <p className='text-[#007871] font-montserrat font-semibold'>Torne-se um Investidor no Projeto</p>

            <p className="text-lg mt-4 leading-10 font-montserrat font-normal">
            Se você está interessado em se tornar um investidor e fazer parte da nossa missão de conservação, convidamos você a preencher nosso formulário de interesse. Nele, você poderá fornecer suas informações de contato e nos contar um pouco sobre seu interesse no projeto. Nossa equipe entrará em contato para discutir como podemos trabalhar juntos para fazer uma diferença positiva no mundo.
          </p>
        </div>

        <form className="w-full max-w-2xl bg-white p-8 md:w-1/2" onSubmit={handleSubmit}>

        <div className='grid grid-cols-2 gap-5 font-montserrat font-medium'>

          <div className="mb-4 rounded-md">
            
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#B9E2E0] text-[#057872]"
              id="nome"
              type="text"
              placeholder="Nome"
              name="nome"
              value={formData.nome_inv}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
           
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-[#B9E2E0] text-[#057872]"
              id="email"
              type="email"
              placeholder="E-mail"
              name="email"
              value={formData.email_inv}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#B9E2E0] text-[#057872]"
              id="telefone"
              type="text"
              placeholder="Telefone"
              name="telefone"
              value={formData.telefone_inv}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-[#B9E2E0] text-[#057872]"
              id="nomeEmpresa"
              type="text"
              placeholder="Nome da Empresa"
              name="nomeEmpresa"
              value={formData.nomeEmpresa_inv}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#B9E2E0] text-[#057872]"
              id="valorContribuir"
              type="number"
              placeholder="Valor a Contribuir"
              name="valorContribuir"
              value={formData.quantiquantia_contribuida_inv}
              onChange={handleChange}
            />
          </div>
          

          </div>

          <div className="mb-6 mt-5">
           
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-[#B9E2E0] text-[#057872]"
              id="mensagem"
              placeholder="Mensagem"
              name="mensagem"
              value={formData.msg_inv}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex items-center justify-between">

            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-montserrat font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              enviar mensagem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Investimentos;
