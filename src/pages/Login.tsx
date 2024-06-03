'use client'
import React, { useState } from 'react';
import imagem from '../../public/assets/Login/login_imagegradiente.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const router = useRouter();

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://seu-endpoint-backend/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
          console.log('Login bem-sucedido:', result);
          // Redirecionar ou realizar outras ações após login bem-sucedido
          router.push('/dashboard');
        } else {
          console.error('Erro no login:', result);
          // Tratar erro de login
        }
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5EAE8] p-6">
      <div
        className="w-full md:w-1/2 h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${imagem.src})` }}
      >
        <div className="flex flex-col justify-center h-full p-10">
          <h1 className="text-4xl font-bold text-left text-white">bem-vindo <br/>de volta!</h1>
          <p className="text-left text-white font-medium mt-4">
            Se você já faz parte da nossa comunidade, estamos felizes em vê-lo de volta! Insira suas credenciais ao lado para continuar acessando o site e contribuir para a conservação marinha. Seu engajamento é essencial para ajudar a proteger a vida marinha.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl h-[80vh] w-[447px] p-10 flex flex-col items-center">
        <div className="w-full">
          <h1 className="text-2xl font-bold text-[#F1A027] text-center">LOGIN</h1>
          <p className="text-center text-black font-medium mt-4">Insira seus dados nos campos abaixo ou utilize o acesso rápido com o Google para facilitar o processo.</p>
        </div>

        <form className="w-full mt-6 space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded bg-[#B9E2E0] text-[#057872] placeholder-[#057872]"
              placeholder="E-mail"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded bg-[#B9E2E0] text-[#057872] placeholder-[#057872]"
              placeholder="Senha"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="flex justify-end w-full">
            <a href="#" className="text-black text-sm">Esqueceu sua senha?</a>
          </div>

          <div className="flex justify-between w-full">
            <button type="submit" className="w-1/2 py-2 px-4 bg-[#20A19A] text-white rounded hover:bg-[#1B807A] mr-2">Login</button>
            <button type="button" className="w-1/2 py-2 px-4 bg-gray-200 text-black flex items-center justify-center rounded hover:bg-gray-300">
              <span className="mr-2">G Google</span>
            
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
