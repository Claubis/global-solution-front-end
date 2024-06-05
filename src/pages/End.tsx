import React, { useState } from 'react';
import LocalizacaoAtual from '../components/LocalizacaoAtual';

const End: React.FC = () => {
  const [dadosAPI, setDadosAPI] = useState<any>(null);

  const handleLocationSelect = (data: any) => {
    setDadosAPI(data);
  };

  return (
    <div>
      <h1>Pesquisar Endereço</h1>
      <LocalizacaoAtual onLocationSelect={handleLocationSelect} />
      <div>
        <h2>Dados da API de Geolocalização:</h2>
        <pre>{JSON.stringify(dadosAPI, null, 2)}</pre>
      </div>
    </div>
  );
};

export default End;
