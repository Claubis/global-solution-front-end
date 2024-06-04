import React from 'react';

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

const OcorrenciaAnimal: React.FC<FormProps> = ({ step, nextStep, prevStep, handleChange, handleFileChange, handleSubmit, formData, errors }) => {
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

export default OcorrenciaAnimal;
