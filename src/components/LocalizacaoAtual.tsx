import React from 'react';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_FALLBACK_API_KEY';

interface LocalizacaoAtualProps {
  onLocationSelect: (address: {
    cep: string;
    estado: string;
    cidade: string;
    rua: string;
    complemento?: string;
  }) => void;
}

const LocalizacaoAtual: React.FC<LocalizacaoAtualProps> = ({ onLocationSelect }) => {
  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results[0]) {
                const addressComponents = data.results[0].address_components;
                const address = {
                  cep: '',
                  estado: '',
                  cidade: '',
                  rua: '',
                  complemento: '',
                };
                addressComponents.forEach((component: any) => {
                  const types = component.types;
                  if (types.includes('postal_code')) {
                    address.cep = component.long_name;
                  } else if (types.includes('administrative_area_level_1')) {
                    address.estado = component.short_name;
                  } else if (types.includes('administrative_area_level_2')) {
                    address.cidade = component.long_name;
                  } else if (types.includes('route')) {
                    address.rua = component.long_name;
                  } else if (types.includes('sublocality_level_1') || types.includes('locality')) {
                    address.complemento = component.long_name;
                  }
                });
                onLocationSelect(address);
              }
            });
        },
        (error) => {
          console.error('Error obtaining location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <button
      type="button"
      onClick={handleUseCurrentLocation}
      className="bg-green-500 text-white py-2 px-4 rounded mt-2 w-full"
    >
      Usar Localização Atual
    </button>
  );
};

export default LocalizacaoAtual;
