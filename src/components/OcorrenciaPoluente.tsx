import React, { useState } from 'react';
import PesquisarEndereco from '../components/PesquisarEndereco';
import PosicaoAtual from '../components/PosicaoAtual';

interface FormProps {
  step: number;
  setStep: (step: number) => void;
}

const OcorrenciaPoluente: React.FC<FormProps> = ({ step, setStep }) => {
  const [formData, setFormData] = useState({
    nome_form_poluente: '',
    email_form_poluente: '',
    tel_form_poluente: '',
    tipo_residuo: '',
    quantidade_residuo: '',
    area_perigo: '',
    cep_poluente: '',
    estado_poluente: '',
    cidade_poluente: '',
    rua_poluente: '',
    complemento_poluente: '',
    descricao_poluente: '',
    foto_poluente: null,
    latitude_poluente: '',
    longitude_poluente: '',
  });

  const [showAddressSearch, setShowAddressSearch] = useState(false);
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const residuoOptions = ['Plástico', 'Metal', 'Vidro', 'Papel', 'Orgânico'];
  const perigoOptions = ['Sim', 'Não'];

  const handleAddressSelect = (address: {
    cep: string;
    estado: string;
    cidade: string;
    rua: string;
    complemento?: string;
  }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      cep_poluente: address.cep,
      estado_poluente: address.estado,
      cidade_poluente: address.cidade,
      rua_poluente: address.rua,
      complemento_poluente: address.complemento || '',
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
      latitude_poluente: location.lat.toString(),
      longitude_poluente: location.lng.toString(),
    }));
    setUseCurrentLocation(true);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <div className="flex flex-col space-y-2">
            <label htmlFor="nome_form_poluente" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              name="nome_form_poluente"
              id="nome_form_poluente"
              value={formData.nome_form_poluente}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Nome"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email_form_poluente" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email_form_poluente"
              id="email_form_poluente"
              value={formData.email_form_poluente}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="E-mail"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="tel_form_poluente" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="text"
              name="tel_form_poluente"
              id="tel_form_poluente"
              value={formData.tel_form_poluente}
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
            <label htmlFor="tipo_residuo" className="block text-sm font-medium text-gray-700">
              Tipo de Resíduo
            </label>
            <select
              name="tipo_residuo"
              id="tipo_residuo"
              value={formData.tipo_residuo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              {residuoOptions.map((residuo) => (
                <option key={residuo} value={residuo}>
                  {residuo}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="quantidade_residuo" className="block text-sm font-medium text-gray-700">
              Quantidade
            </label>
            <input
              type="text"
              name="quantidade_residuo"
              id="quantidade_residuo"
              value={formData.quantidade_residuo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Quantidade"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="area_perigo" className="block text-sm font-medium text-gray-700">
              Coloca a Área em Perigo?
            </label>
            <select
              name="area_perigo"
              id="area_perigo"
              value={formData.area_perigo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Selecione...</option>
              {perigoOptions.map((perigo) => (
                <option key={perigo} value={perigo}>
                  {perigo}
                </option>
              ))}
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
                <label htmlFor="latitude_poluente" className="block text-sm font-medium text-gray-700">
                  Latitude
                </label>
                <input
                  type="text"
                  name="latitude_poluente"
                  id="latitude_poluente"
                  value={formData.latitude_poluente}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Latitude"
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="longitude_poluente" className="block text-sm font-medium text-gray-700">
                  Longitude
                </label>
                <input
                  type="text"
                  name="longitude_poluente"
                  id="longitude_poluente"
                  value={formData.longitude_poluente}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Longitude"
                  readOnly
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="complemento_poluente" className="block text-sm font-medium text-gray-700">
                  Complemento
                </label>
                <input
                  type="text"
                  name="complemento_poluente"
                  id="complemento_poluente"
                  value={formData.complemento_poluente}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Complemento"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col space-y-2">
                <label htmlFor="cep_poluente" className="block text-sm font-medium text-gray-700">
                  CEP
                </label>
                <input
                  type="text"
                  name="cep_poluente"
                  id="cep_poluente"
                  value={formData.cep_poluente}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="CEP"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="estado_poluente" className="block text-sm font-medium text-gray-700">
                  Estado
                </label>
                <input
                  type="text"
                  name="estado_poluente"
                  id="estado_poluente"
                  value={formData.estado_poluente}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Estado"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="cidade_poluente" className="block text-sm font-medium text-gray-700">
                  Cidade
                </label>
                <input
                  type="text"
                  name="cidade_poluente"
                  id="cidade_poluente"
                  value={formData.cidade_poluente}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Cidade"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="rua_poluente" className="block text-sm font-medium text-gray-700">
                  Rua
                </label>
                <input
                  type="text"
                  name="rua_poluente"
                  id="rua_poluente"
                  value={formData.rua_poluente}
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
            <label htmlFor="foto_poluente" className="block text-sm font-medium text-gray-700">
              Anexar Foto
            </label>
            <input
              type="file"
              name="foto_poluente"
              id="foto_poluente"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="descricao_poluente" className="block text-sm font-medium text-gray-700">
              Descrição do Ocorrido
            </label>
            <textarea
              name="descricao_poluente"
              id="descricao_poluente"
              rows={4}
              value={formData.descricao_poluente}
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

export default OcorrenciaPoluente;
