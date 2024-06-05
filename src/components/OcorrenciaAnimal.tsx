import React, { useState } from 'react';
import PesquisarEndereco from '../components/PesquisarEndereco';
import PosicaoAtual from '../components/PosicaoAtual';

interface FormProps {
  step: number;
  setStep: (step: number) => void;
}

const OcorrenciaAnimal: React.FC<FormProps> = ({ step, setStep }) => {
  const [formData, setFormData] = useState({
    nome_form_animal: '',
    email_form_animal: '',
    tel_form_animal: '',
    nome_animal: '',
    condicao_animal: '',
    primeiros_socorros_animal: '',
    cep_animal: '',
    estado_animal: '',
    cidade_animal: '',
    rua_animal: '',
    complemento_animal: '',
    descricao_animal: '',
    foto_animal: null,
    latitude_animal: '',
    longitude_animal: '',
  });

  const [showAddressSearch, setShowAddressSearch] = useState(false);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const animalOptions = ['Golfinho', 'Baleia', 'Tartaruga', 'Foca'];
  const conditionOptions = ['Vivo', 'Morto', 'Ferido', 'Doente'];

  const handleAddressSelect = (address: {
    cep: string;
    estado: string;
    cidade: string;
    rua: string;
    complemento?: string;
  }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      cep_animal: address.cep,
      estado_animal: address.estado,
      cidade_animal: address.cidade,
      rua_animal: address.rua,
      complemento_animal: address.complemento || '',
    }));
    setShowAddressSearch(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : null,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Processar o envio do formulário
  };

  const handleLocationFound = (location: { lat: number; lng: number }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      latitude_animal: location.lat.toString(),
      longitude_animal: location.lng.toString(),
    }));
    setUseCurrentLocation(true);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="nome_form_animal" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              name="nome_form_animal"
              id="nome_form_animal"
              value={formData.nome_form_animal}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nome"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email_form_animal" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email_form_animal"
              id="email_form_animal"
              value={formData.email_form_animal}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="E-mail"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="tel_form_animal" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="text"
              name="tel_form_animal"
              id="tel_form_animal"
              value={formData.tel_form_animal}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Telefone"
            />
          </div>
          <button type="button" onClick={() => setStep(2)} className="bg-[#20A19A] text-white py-2 px-4 rounded">
            Próximo
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="nome_animal" className="block text-sm font-medium text-gray-700">
              Selecione o Animal
            </label>
            <select
              name="nome_animal"
              id="nome_animal"
              value={formData.nome_animal}
              onChange={handleInputChange}
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
            <label htmlFor="condicao_animal" className="block text-sm font-medium text-gray-700">
              Condição do Animal
            </label>
            <select
              name="condicao_animal"
              id="condicao_animal"
              value={formData.condicao_animal}
              onChange={handleInputChange}
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
            <label htmlFor="primeiros_socorros_animal" className="block text-sm font-medium text-gray-700">
              Prestou os Primeiros Socorros?
            </label>
            <select
              name="primeiros_socorros_animal"
              id="primeiros_socorros_animal"
              value={formData.primeiros_socorros_animal}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(1)} className="bg-gray-200 text-black py-2 px-4 rounded">
              Voltar
            </button>
            <button type="button" onClick={() => setStep(3)} className="bg-[#20A19A] text-white py-2 px-4 rounded">
              Próximo
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex justify-center gap-10 space-y-2 w-full">
            <button type="button" onClick={() => setShowAddressSearch(true)} className="bg-blue-500 text-white py-2 px-4 rounded mt-2 w-full">
              Pesquisar Endereço
            </button>
            <button
              type="button"
              onClick={() => setUseCurrentLocation(true)}
              className="bg-green-500 text-white py-2 px-4 rounded mt-2 w-full"
            >
              Usar Localização Atual
            </button>
          </div>

          {showAddressSearch && (
            <PesquisarEndereco onAddressSelect={handleAddressSelect} />
          )}

          {useCurrentLocation ? (
            <>
              <PosicaoAtual onLocationFound={handleLocationFound} />
              <div className="flex flex-col space-y-2">
                <label htmlFor="latitude_animal" className="block text-sm font-medium text-gray-700">
                  Latitude
                </label>
                <input
                  type="text"
                  name="latitude_animal"
                  id="latitude_animal"
                  value={formData.latitude_animal}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Latitude"
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="longitude_animal" className="block text-sm font-medium text-gray-700">
                  Longitude
                </label>
                <input
                  type="text"
                  name="longitude_animal"
                  id="longitude_animal"
                  value={formData.longitude_animal}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Longitude"
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="complemento_animal" className="block text-sm font-medium text-gray-700">
                  Complemento
                </label>
                <input
                  type="text"
                  name="complemento_animal"
                  id="complemento_animal"
                  value={formData.complemento_animal}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Complemento"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col space-y-2">
                <label htmlFor="cep_animal" className="block text-sm font-medium text-gray-700">
                  CEP
                </label>
                <input
                  type="text"
                  name="cep_animal"
                  id="cep_animal"
                  value={formData.cep_animal}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="CEP"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="estado_animal" className="block text-sm font-medium text-gray-700">
                  Estado
                </label>
                <input
                  type="text"
                  name="estado_animal"
                  id="estado_animal"
                  value={formData.estado_animal}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Estado"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="cidade_animal" className="block text-sm font-medium text-gray-700">
                  Cidade
                </label>
                <input
                  type="text"
                  name="cidade_animal"
                  id="cidade_animal"
                  value={formData.cidade_animal}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Cidade"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="rua_animal" className="block text-sm font-medium text-gray-700">
                  Rua
                </label>
                <input
                  type="text"
                  name="rua_animal"
                  id="rua_animal"
                  value={formData.rua_animal}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Rua"
                />
              </div>
            </>
          )}

          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(2)} className="bg-gray-200 text-black py-2 px-4 rounded">
              Voltar
            </button>
            <button type="button" onClick={() => setStep(4)} className="bg-[#20A19A] text-white py-2 px-4 rounded">
              Próximo
            </button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="foto_animal" className="block text-sm font-medium text-gray-700">
              Anexar Foto
            </label>
            <input
              type="file"
              name="foto_animal"
              id="foto_animal"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="descricao_animal" className="block text-sm font-medium text-gray-700">
              Descrição do Ocorrido
            </label>
            <textarea
              name="descricao_animal"
              id="descricao_animal"
              rows={4}
              value={formData.descricao_animal}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Descreva o ocorrido"
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(3)} className="bg-gray-200 text-black py-2 px-4 rounded">
              Voltar
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

export default OcorrenciaAnimal;
