import React, { useState } from 'react';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome_usuario: '',
    sobrenome_usuario: '',
    telefone_usuario: '',
    email_usuario: '',
    confirmEmail_usuario: '',
    senha_usuario: '',
    confirmSenha_usuario: ''
  });

  const [errors, setErrors] = useState({
    nome_usuario: '',
    sobrenome_usuario: '',
    telefone_usuario: '',
    email_usuario: '',
    confirmEmail_usuario: '',
    senha_usuario: '',
    confirmSenha_usuario: ''
  });

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validação dos campos
    if (!formData.nome_usuario) {
      newErrors.nome_usuario = 'Nome é obrigatório';
      valid = false;
    } else {
      newErrors.nome_usuario = '';
    }

    if (!formData.sobrenome_usuario) {
      newErrors.sobrenome_usuario = 'Sobrenome é obrigatório';
      valid = false;
    } else {
      newErrors.sobrenome_usuario = '';
    }

    if (!formData.telefone_usuario) {
      newErrors.telefone_usuario = 'Telefone é obrigatório';
      valid = false;
    } else {
      newErrors.telefone_usuario = '';
    }

    if (!formData.email_usuario) {
      newErrors.email_usuario = 'E-mail é obrigatório';
      valid = false;
    } else {
      newErrors.email_usuario = '';
    }

    if (formData.email_usuario !== formData.confirmEmail_usuario) {
      newErrors.confirmEmail_usuario = 'Os e-mails não coincidem';
      valid = false;
    } else {
      newErrors.confirmEmail_usuario = '';
    }

    if (!formData.confirmEmail_usuario) {
      newErrors.confirmEmail_usuario = 'Confirmação de e-mail é obrigatória';
      valid = false;
    }

    if (!formData.senha_usuario) {
      newErrors.senha_usuario= 'Senha é obrigatória';
      valid = false;
    } else if (!/^(?=.*[a-zA-Z]{2,})(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d{6,}).{10,}$/.test(formData.senha_usuario)) {
      newErrors.senha_usuario = 'A senha deve ter pelo menos duas letras, um caractere especial e seis números';
      valid = false;
    } else {
      newErrors.senha_usuario = '';
    }

    if (formData.senha_usuario !== formData.confirmSenha_usuario) {
      newErrors.confirmSenha_usuario = 'As senhas não coincidem';
      valid = false;
    } else {
      newErrors.confirmSenha_usuario = '';
    }

    if (!formData.confirmSenha_usuario) {
      newErrors.confirmSenha_usuario = 'Confirmação é obrigatória';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://seu-endpoint-backend/api/cadastro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const result = await response.json();
        console.log('Sucesso:', result);
        // Adicione aqui qualquer lógica adicional após o envio bem-sucedido
      } catch (error) {
        console.error('Erro:', error);
      }
    }
  };

  return (
    <div className="relative mx-auto w-full min-h-screen bg-[#B9E2E0]">
      <div className="absolute inset-0 bg-white bg-opacity-40"></div>

      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <div className='flex border h-auto p-0 bg-white shadow-lg w-full max-w-6xl gap-0'>
          
          <div className="w-full flex flex-col justify-center bg-[#20A19A] p-10 text-white">

            <h2 className="font-montserrat font-extrabold text-6xl mb-10 text-left ">crie sua <br /> conta</h2>

            <p className="font-montserrat font-medium text-lg text-left max-w-2xl leading-10">
              Se você ainda não faz parte da nossa comunidade, <br /> junte-se hoje e comece a fazer a diferença! O cadastro <br /> é rápido e fácil. Preencha o formulário ao lado para <br /> começar a sua jornada na conservação marinha.
            </p>
          </div>

          <div className='w-full p-10'>
            <h2 className="text-[#F1A027] font-montserrat text-2xl font-bold mb-6 text-center">DIGITE SEUS DADOS</h2>
            
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              
              <div className="flex flex-col space-y-2 font-montserrat font-normal">
                <input
                  type="text"
                  name="nome"
                  value={formData.nome_usuario}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder='Nome'
                />
                {errors.nome_usuario && <p className="text-red-500 text-sm">{errors.nome_usuario}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  name="sobrenome"
                  value={formData.sobrenome_usuario}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder='Sobrenome'
                />
                {errors.sobrenome_usuario && <p className="text-red-500 text-sm">{errors.sobrenome_usuario}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="number"
                  name="telefone"
                  value={formData.telefone_usuario}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder='Telefone'
                />
                {errors.telefone_usuario && <p className="text-red-500 text-sm">{errors.telefone_usuario}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email_usuario}
                  onChange={handleChange}
                  className="w-full p-2  rounded"
                  placeholder='E-mail'
                />
                {errors.email_usuario && <p className="text-red-500 text-sm">{errors.email_usuario}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  name="confirmEmail"
                  value={formData.confirmEmail_usuario}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder='Confirme seu E-mail'
                />
                {errors.confirmEmail_usuario && <p className="text-red-500 text-sm">{errors.confirmEmail_usuario}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className="flex flex-col space-y-2">
                  <input
                    type="password"
                    name="senha"
                    value={formData.senha_usuario}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                    placeholder='Senha'
                  />
                  {errors.senha_usuario && <p className="text-red-500 text-sm">{errors.senha_usuario}</p>}
                  <div className='h-[2px] bg-[#8E99AB]'></div>
                </div>

                <div className="flex flex-col space-y-2">
                  <input
                    type="password"
                    name="confirmSenha"
                    value={formData.confirmSenha_usuario}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                    placeholder='Confirme sua Senha'
                  />
                  {errors.confirmSenha_usuario && <p className="text-red-500 text-sm">{errors.confirmSenha_usuario}</p>}
                  <div className='h-[2px] bg-[#8E99AB]'></div>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button className="bg-[#007871] text-white rounded-full py-2 px-8" type="submit">
                  Criar Conta
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
