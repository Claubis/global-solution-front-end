'use client';
import React, { useState } from 'react';
import OcorrenciaAnimal from '../components/OcorrenciaAnimal';
import OcorrenciaPoluente from '../components/OcorrenciaPoluente';
import imagem from '../../public/assets/FormOcorrencia/mapa.png';
import icone from '../../public/assets/FormOcorrencia/Released Fish.png';
import Image from 'next/image';

const Ocorrencias: React.FC = () => {
  const [selection, setSelection] = useState<string>('animal');
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    animal: '',
    condition: '',
    firstAid: '',
    tipoResiduo: '',
    quantidade: '',
    areaPerigo: '',
    cep: '',
    estado: '',
    cidade: '',
    rua: '',
    complemento: '',
    foto: '',
    descricao: ''
  });

  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    telefone: '',
    animal: '',
    condition: '',
    firstAid: '',
    tipoResiduo: '',
    quantidade: '',
    areaPerigo: '',
    cep: '',
    estado: '',
    cidade: '',
    rua: '',
    complemento: '',
    foto: '',
    descricao: ''
  });

  const validateStep = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (step === 1) {
      if (!formData.nome) {
        newErrors.nome = 'Nome é obrigatório';
        valid = false;
      } else {
        newErrors.nome = '';
      }
      if (!formData.email) {
        newErrors.email = 'E-mail é obrigatório';
        valid = false;
      } else {
        newErrors.email = '';
      }
      if (!formData.telefone) {
        newErrors.telefone = 'Telefone é obrigatório';
        valid = false;
      } else {
        newErrors.telefone = '';
      }
    }

    if (step === 2) {
      if (selection === 'animal') {
        if (!formData.animal) {
          newErrors.animal = 'Seleção do animal é obrigatória';
          valid = false;
        } else {
          newErrors.animal = '';
        }
        if (!formData.condition) {
          newErrors.condition = 'Condição do animal é obrigatória';
          valid = false;
        } else {
          newErrors.condition = '';
        }
        if (!formData.firstAid) {
          newErrors.firstAid = 'Informação sobre primeiros socorros é obrigatória';
          valid = false;
        } else {
          newErrors.firstAid = '';
        }
      } else {
        if (!formData.tipoResiduo) {
          newErrors.tipoResiduo = 'Tipo de resíduo é obrigatório';
          valid = false;
        } else {
          newErrors.tipoResiduo = '';
        }
        if (!formData.quantidade) {
          newErrors.quantidade = 'Quantidade é obrigatória';
          valid = false;
        } else {
          newErrors.quantidade = '';
        }
        if (!formData.areaPerigo) {
          newErrors.areaPerigo = 'Informação sobre a área em perigo é obrigatória';
          valid = false;
        } else {
          newErrors.areaPerigo = '';
        }
      }
    }

    if (step === 3) {
      if (!formData.cep) {
        newErrors.cep = 'CEP é obrigatório';
        valid = false;
      } else {
        newErrors.cep = '';
      }
      if (!formData.estado) {
        newErrors.estado = 'Estado é obrigatório';
        valid = false;
      } else {
        newErrors.estado = '';
      }
      if (!formData.cidade) {
        newErrors.cidade = 'Cidade é obrigatória';
        valid = false;
      } else {
        newErrors.cidade = '';
      }
      if (!formData.rua) {
        newErrors.rua = 'Rua é obrigatória';
        valid = false;
      } else {
        newErrors.rua = '';
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const prevStep = () => setStep(prevStep => prevStep - 1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (e.target) {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateStep()) {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value as string | Blob);
      });

      try {
        const response = await fetch('http://seu-endpoint-backend/api/cadastro', {
          method: 'POST',
          body: formDataToSend
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
    <div className='flex justify-center items-center min-h-screen bg-[#F5EAE8] p-6'>
      <div className='w-full md:w-1/2 p-7'>
        <Image src={imagem.src} alt="Mapa" className="w-full h-full object-cover rounded-lg" width={200} height={100} />
      </div>

      <div className="bg-white rounded-xl min-h-[100vh] md:h-auto w-full md:w-1/2 p-10 flex flex-col items-center">
        <div className={`h-[180px] flex flex-col items-center justify-center rounded-md mb-6 relative w-full ${selection === 'animal' ? 'bg-[#20A19A]' : 'bg-[#F1A027]'}`}>
          <Image src={icone.src} alt="Ícone" className="absolute top-4 left-4 w-16 h-16" width={100} height={100}/>
          <h1 className="text-2xl font-bold text-white">Registrar Ocorrência</h1>
        </div>

        <div className="flex justify-center gap-5 w-full bg-gray-200 p-3">
          <button onClick={() => { setSelection('animal'); setStep(1); }} className={`py-2 px-4 rounded w-full ${selection === 'animal' ? 'bg-white text-black' : 'bg-gray-200 text-black'}`}>
            Encalhe
          </button>
          <button onClick={() => { setSelection('poluente'); setStep(1); }} className={`py-2 px-4 rounded w-full ${selection === 'poluente' ? 'bg-white text-black' : 'bg-gray-200 text-black'}`}>
            Poluente (Lixo)
          </button>
        </div>

        <div className="w-full mt-6">
          {selection === 'animal' && <OcorrenciaAnimal step={step} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleFileChange={handleFileChange} handleSubmit={handleSubmit} formData={formData} errors={errors} />}
          {selection === 'poluente' && <OcorrenciaPoluente step={step} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleFileChange={handleFileChange} handleSubmit={handleSubmit} formData={formData} errors={errors} />}
        </div>
      </div>
    </div>
  );
};

export default Ocorrencias;
