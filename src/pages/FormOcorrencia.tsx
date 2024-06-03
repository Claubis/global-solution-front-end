'use client'
import React, { useState } from 'react';
import imagem from '../../public/assets/FormOcorrencia/mapa.png';
import icone from '../../public/assets/FormOcorrencia/Released Fish.png'; // Substitua pelo caminho correto do ícone

const FormOcorrencia: React.FC = () => {
  const [selection, setSelection] = useState<string>('');
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep(prevStep => prevStep + 1);
  const prevStep = () => setStep(prevStep => prevStep - 1);

  return (
    <div className='flex justify-center items-center min-h-screen bg-[#F5EAE8] p-6'>
      <div className='w-full md:w-1/2 p-7'>
        <img src={imagem.src} alt="Mapa" className="w-full h-full object-cover rounded-lg" />
      </div>

      <div className="bg-white rounded-xl min-h-[100vh] md:h-auto w-full md:w-1/2 p-10 flex flex-col items-center">
        <div className="bg-[#20A19A] h-[180px] flex flex-col items-center justify-center rounded-md mb-6 relative w-full">
          <img src={icone.src} alt="Ícone" className="absolute top-4 left-4 w-16 h-16" />
          <h1 className="text-2xl font-bold text-white">Registrar Ocorrência</h1>
        </div>

        <div className="flex justify-center gap-5 w-full bg-gray-200 p-3">
          <button onClick={() => { setSelection('animal'); setStep(1); }} className="bg-white text-black py-2 px-4 rounded w-full">
            Encalhe
          </button>
          <button onClick={() => { setSelection('poluente'); setStep(1); }} className="bg-gray-200 text-black py-2 px-4 rounded w-full">
            Poluente (Lixo)
          </button>
        </div>

        <div className="w-full mt-6">
          {selection === 'animal' && <AnimalForm step={step} nextStep={nextStep} prevStep={prevStep} />}
          {selection === 'poluente' && <PoluenteForm />}
        </div>
      </div>
    </div>
  );
};

interface AnimalFormProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
}

const AnimalForm: React.FC<AnimalFormProps> = ({ step, nextStep, prevStep }) => {
  const animalOptions = ['Golfinho', 'Baleia', 'Tartaruga', 'Foca']; // Exemplo de opções de animais
  const conditionOptions = ['Vivo', 'Morto', 'Ferido', 'Doente']; // Exemplo de opções de condições

  return (
    <form className="space-y-6">
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
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nome"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="E-mail"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="text"
              name="telefone"
              id="telefone"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Telefone"
            />
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
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              {animalOptions.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700">
              Condição do Animal
            </label>
            <select
              name="condition"
              id="condition"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              {conditionOptions.map((condition) => (
                <option key={condition} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstAid" className="block text-sm font-medium text-gray-700">
              Prestou os Primeiros Socorros?
            </label>
            <select
              name="firstAid"
              id="firstAid"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
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

const PoluenteForm: React.FC = () => (
  <form className="space-y-6">
    <div className="flex flex-col space-y-2">
      <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
        Nome
      </label>
      <input
        type="text"
        name="nome"
        id="nome"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Nome"
      />
    </div>
    <div className="flex flex-col space-y-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        E-mail
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="E-mail"
      />
    </div>
    <div className="flex flex-col space-y-2">
      <label htmlFor="tipoResiduo" className="block text-sm font-medium text-gray-700">
        Tipo de Resíduo
      </label>
      <input
        type="text"
        name="tipoResiduo"
        id="tipoResiduo"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Tipo de Resíduo"
      />
    </div>
    <button type="submit" className="bg-[#20A19A] text-white py-2 px-4 rounded">
      Enviar
    </button>
  </form>
);

export default FormOcorrencia;
