// End.js
import React, { useState } from 'react';
import PosicaoAtual from '../components/PosicaoAtual';

const End = () => {
  const [showPosition, setShowPosition] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Minha Localização Atual</h1>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded"
        onClick={() => setShowPosition(true)}
      >
        Usar Localização Atual
      </button>

      {showPosition && (
        <PosicaoAtual />
      )}
    </div>
  );
};

export default End;
