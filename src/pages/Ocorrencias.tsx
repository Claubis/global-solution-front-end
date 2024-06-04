'use client'
import React, { useState } from 'react';
import imagem from '../../public/assets/FormOcorrencia/mapa.png';
import icone from '../../public/assets/FormOcorrencia/Released Fish.png';
import Image from 'next/image';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  animal: string;
  condition: string;
  firstAid: string;
  tipoResiduo: string;
  quantidade: string;
  areaPerigo: string;
  cep: string;
  estado: string;
  cidade: string;
  rua: string;
  complemento: string;
  foto: string;
  descricao: string;
}

interface FormErrors {
  nome: string;
  email: string;
  telefone: string;
  animal: string;
  condition: string;
  firstAid: string;
  tipoResiduo: string;
  quantidade: string;
  areaPerigo: string;
  cep: string;
  estado: string;
  cidade: string;
  rua: string;
  complemento: string;
  foto: string;
  descricao: string;
}


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
        <div className="bg-[#20A19A] h-[180px] flex flex-col items-center justify-center rounded-md mb-6 relative w-full">
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
          {selection === 'animal' && <AnimalForm step={step} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleFileChange={handleFileChange} handleSubmit={handleSubmit} formData={formData} errors={errors} />}
          {selection === 'poluente' && <PoluenteForm step={step} nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} handleFileChange={handleFileChange} handleSubmit={handleSubmit} formData={formData} errors={errors} />}
        </div>
      </div>
    </div>
  );
};

interface FormProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: any;
  errors: any;
}

const AnimalForm: React.FC<FormProps> = ({ step, nextStep, prevStep, handleChange, handleFileChange, handleSubmit, formData, errors }) => {
  const animalOptions = ['Golfinho', 'Baleia', 'Tartaruga', 'Foca']; // Exemplo de opções de animais
  const conditionOptions = ['Vivo', 'Morto', 'Ferido', 'Doente']; // Exemplo de opções de condições

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nome"
            />
            {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="E-mail"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Telefone"
            />
            {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}
          </div>
          <button type="button" onClick={nextStep} className="bg-[#20A19A] text-white py-2 px-4 rounded">
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="animal" className="block text-sm font-medium text-gray-700">
              Selecione o Animal
            </label>
            <select
              name="animal"
              id="animal"
              value={formData.animal}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              {animalOptions.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
            {errors.animal && <p className="text-red-500 text-sm">{errors.animal}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
              Condição do Animal
            </label>
            <select
              name="condition"
              id="condition"
              value={formData.condition}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              {conditionOptions.map((condition) => (
                <option key={condition} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
            {errors.condition && <p className="text-red-500 text-sm">{errors.condition}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstAid" className="block text-sm font-medium text-gray-700">
              Prestou os Primeiros Socorros?
            </label>
            <select
              name="firstAid"
              id="firstAid"
              value={formData.firstAid}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
            {errors.firstAid && <p className="text-red-500 text-sm">{errors.firstAid}</p>}
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-gray-200 text-black py-2 px-4 rounded">
              Back
            </button>
            <button type="button" onClick={nextStep} className="bg-[#20A19A] text-white py-2 px-4 rounded">
              Next
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">
              Endereço
            </label>
            <div className="flex gap-2">
              <button type="button" className="bg-gray-200 text-black py-2 px-4 rounded w-full">
                Inserir Manualmente
              </button>
              <button type="button" className="bg-gray-200 text-black py-2 px-4 rounded w-full">
                Usar Localização Atual
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
              CEP
            </label>
            <input
              type="text"
              name="cep"
              id="cep"
              value={formData.cep}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="CEP"
            />
            {errors.cep && <p className="text-red-500 text-sm">{errors.cep}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <input
              type="text"
              name="estado"
              id="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Estado"
            />
            {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">
              Cidade
            </label>
            <input
              type="text"
              name="cidade"
              id="cidade"
              value={formData.cidade}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Cidade"
            />
            {errors.cidade && <p className="text-red-500 text-sm">{errors.cidade}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="rua" className="block text-sm font-medium text-gray-700">
              Rua
            </label>
            <input
              type="text"
              name="rua"
              id="rua"
              value={formData.rua}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Rua"
            />
            {errors.rua && <p className="text-red-500 text-sm">{errors.rua}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">
              Complemento
            </label>
            <input
              type="text"
              name="complemento"
              id="complemento"
              value={formData.complemento}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Complemento"
            />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-gray-200 text-black py-2 px-4 rounded">
              Back
            </button>
            <button type="button" onClick={nextStep} className="bg-[#20A19A] text-white py-2 px-4 rounded">
              Next
            </button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="foto" className="block text-sm font-medium text-gray-700">
              Anexar Foto
            </label>
            <input
              type="file"
              name="foto"
              id="foto"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
              Descrição do Ocorrido
            </label>
            <textarea
              name="descricao"
              id="descricao"
              rows={4}
              value={formData.descricao}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Descreva o ocorrido"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-gray-200 text-black py-2 px-4 rounded">
              Back
            </button>
            <button type="submit" className="bg-[#20A19A] text-white py-2 px-4 rounded">
              Enviar
            </button>
          </div>
        </>
      )}
    </form>
  );
};

const PoluenteForm: React.FC<FormProps> = ({ step, nextStep, prevStep, handleChange, handleFileChange, handleSubmit, formData, errors }) => {
  const residuoOptions = ['Plástico', 'Metal', 'Vidro', 'Papel', 'Orgânico']; // Exemplo de opções de resíduos
  const perigoOptions = ['Sim', 'Não']; // Exemplo de opções de perigo

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nome"
            />
            {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="E-mail"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Telefone"
            />
            {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}
          </div>
          <button type="button" onClick={nextStep} className="bg-[#20A19A] text-white py-2 px-4 rounded">
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="tipoResiduo" className="block text-sm font-medium text-gray-700">
              Tipo de Resíduo
            </label>
            <select
              name="tipoResiduo"
              id="tipoResiduo"
              value={formData.tipoResiduo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              {residuoOptions.map((residuo) => (
                <option key={residuo} value={residuo}>
                  {residuo}
                </option>
              ))}
            </select>
            {errors.tipoResiduo && <p className="text-red-500 text-sm">{errors.tipoResiduo}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
              Quantidade
            </label>
            <input
              type="text"
              name="quantidade"
              id="quantidade"
              value={formData.quantidade}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Quantidade"
            />
            {errors.quantidade && <p className="text-red-500 text-sm">{errors.quantidade}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="areaPerigo" className="block text-sm font-medium text-gray-700">
              Coloca a Área em Perigo?
            </label>
            <select
              name="areaPerigo"
              id="areaPerigo"
              value={formData.areaPerigo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              {perigoOptions.map((perigo) => (
                <option key={perigo} value={perigo}>
                  {perigo}
                </option>
              ))}
            </select>
            {errors.areaPerigo && <p className="text-red-500 text-sm">{errors.areaPerigo}</p>}
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-gray-200 text-black py-2 px-4 rounded">
              Back
            </button>
            <button type="button" onClick={nextStep} className="bg-[#20A19A] text-white py-2 px-4 rounded">
              Next
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">
              Endereço
            </label>
            <div className="flex gap-2">
              <button type="button" className="bg-gray-200 text-black py-2 px-4 rounded w-full">
                Inserir Manualmente
              </button>
              <button type="button" className="bg-gray-200 text-black py-2 px-4 rounded w-full">
                Usar Localização Atual
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <label htmlFor="cep" className="block text-sm font-medium text-gray-700">
              CEP
            </label>
            <input
              type="text"
              name="cep"
              id="cep"
              value={formData.cep}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="CEP"
            />
            {errors.cep && <p className="text-red-500 text-sm">{errors.cep}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <input
              type="text"
              name="estado"
              id="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Estado"
            />
            {errors.estado && <p className="text-red-500 text-sm">{errors.estado}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="cidade" className="block text-sm font-medium text-gray-700">
              Cidade
            </label>
            <input
              type="text"
              name="cidade"
              id="cidade"
              value={formData.cidade}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Cidade"
            />
            {errors.cidade && <p className="text-red-500 text-sm">{errors.cidade}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="rua" className="block text-sm font-medium text-gray-700">
              Rua
            </label>
            <input
              type="text"
              name="rua"
              id="rua"
              value={formData.rua}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Rua"
            />
            {errors.rua && <p className="text-red-500 text-sm">{errors.rua}</p>}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">
              Complemento
            </label>
            <input
              type="text"
              name="complemento"
              id="complemento"
              value={formData.complemento}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Complemento"
            />
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-gray-200 text-black py-2 px-4 rounded">
              Back
            </button>
            <button type="button" onClick={nextStep} className="bg-[#20A19A] text-white py-2 px-4 rounded">
              Next
            </button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="foto" className="block text-sm font-medium text-gray-700">
              Anexar Foto
            </label>
            <input
              type="file"
              name="foto"
              id="foto"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
              Descrição do Ocorrido
            </label>
            <textarea
              name="descricao"
              id="descricao"
              rows={4}
              value={formData.descricao}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Descreva o ocorrido"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={prevStep} className="bg-gray-200 text-black py-2 px-4 rounded">
              Back
            </button>
            <button type="submit" className="bg-[#20A19A] text-white py-2 px-4 rounded">
              Enviar
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Ocorrencias;
