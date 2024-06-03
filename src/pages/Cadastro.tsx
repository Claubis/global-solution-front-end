import React, { useState } from 'react';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    confirmEmail: '',
    senha: '',
    confirmSenha: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    confirmEmail: '',
    senha: '',
    confirmSenha: ''
  });

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validação dos campos
    if (!formData.nome) {
      newErrors.nome = 'Nome é obrigatório';
      valid = false;
    } else {
      newErrors.nome = '';
    }

    if (!formData.sobrenome) {
      newErrors.sobrenome = 'Sobrenome é obrigatório';
      valid = false;
    } else {
      newErrors.sobrenome = '';
    }

    if (!formData.telefone) {
      newErrors.telefone = 'Telefone é obrigatório';
      valid = false;
    } else {
      newErrors.telefone = '';
    }

    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (formData.email !== formData.confirmEmail) {
      newErrors.confirmEmail = 'Os e-mails não coincidem';
      valid = false;
    } else {
      newErrors.confirmEmail = '';
    }

    if (!formData.confirmEmail) {
      newErrors.confirmEmail = 'Confirmação de e-mail é obrigatória';
      valid = false;
    }

    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória';
      valid = false;
    } else if (!/^(?=.*[a-zA-Z]{2,})(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d{6,}).{10,}$/.test(formData.senha)) {
      newErrors.senha = 'A senha deve ter pelo menos duas letras, um caractere especial e seis números';
      valid = false;
    } else {
      newErrors.senha = '';
    }

    if (formData.senha !== formData.confirmSenha) {
      newErrors.confirmSenha = 'As senhas não coincidem';
      valid = false;
    } else {
      newErrors.confirmSenha = '';
    }

    if (!formData.confirmSenha) {
      newErrors.confirmSenha = 'Confirmação é obrigatória';
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
        <div className='flex border h-auto p-0 bg-white shadow-lg w-full max-w-4xl gap-0'>
          
          <div className="w-full flex flex-col justify-center bg-[#20A19A] p-10 text-white">
            <h2 className="font-montserrat-700 text-4xl mb-4 text-left">Crie sua conta</h2>
            <p className="font-montserrat text-lg text-left max-w-2xl leading-10">
              Se você ainda não faz parte da nossa comunidade, junte-se hoje e comece a fazer a diferença! O cadastro é rápido e fácil. Preencha o formulário ao lado para começar a sua jornada na conservação marinha.
            </p>
          </div>

          <div className='w-full p-10'>
            <h2 className="text-[#F1A027] font-montserrat text-2xl font-semibold mb-6 text-center">DIGITE SEUS DADOS</h2>
            
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder='Nome'
                />
                {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder='Sobrenome'
                />
                {errors.sobrenome && <p className="text-red-500 text-sm">{errors.sobrenome}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="number"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder='Telefone'
                />
                {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2  rounded"
                  placeholder='E-mail'
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  className="w-full p-2 rounded"
                  placeholder='Confirme seu E-mail'
                />
                {errors.confirmEmail && <p className="text-red-500 text-sm">{errors.confirmEmail}</p>}
                <div className='h-[2px] bg-[#8E99AB]'></div>
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className="flex flex-col space-y-2">
                  <input
                    type="password"
                    name="senha"
                    value={formData.senha}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                    placeholder='Senha'
                  />
                  {errors.senha && <p className="text-red-500 text-sm">{errors.senha}</p>}
                  <div className='h-[2px] bg-[#8E99AB]'></div>
                </div>

                <div className="flex flex-col space-y-2">
                  <input
                    type="password"
                    name="confirmSenha"
                    value={formData.confirmSenha}
                    onChange={handleChange}
                    className="w-full p-2 rounded"
                    placeholder='Confirme sua Senha'
                  />
                  {errors.confirmSenha && <p className="text-red-500 text-sm">{errors.confirmSenha}</p>}
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
