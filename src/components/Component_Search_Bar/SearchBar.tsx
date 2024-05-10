import React, { useEffect, useRef, useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';

function SearchBar() {
  const addressInputRef = useRef<HTMLInputElement>(null);
  const roomsInputRef = useRef<HTMLInputElement>(null);
  const [rooms, setRooms] = useState<string>(''); // Estado para controlar o número de quartos selecionados

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC-oyhsVGRK9uMQfDyabBOS56gMJlGj1Mc&libraries=places';
    script.async = true;
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      const addressAutocomplete = new window.google.maps.places.Autocomplete(
        addressInputRef.current!,
        {
          componentRestrictions: { country: 'BR' }, // Restringir a busca ao Brasil
        }
      );
      addressAutocomplete.addListener('place_changed', () => {
        const nearPlace = addressAutocomplete.getPlace();
        // Faça o que deseja com o local próximo aqui
      });
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex w-full mb-30 bg-white rounded-full overflow-hidden space-x-1">
      {/* Campo de Localização */}
      <div className="relative w-90">
        <div className="h-17 flex items-center">
          <CiLocationOn className="absolute left-10 text-gray-500 h-10 w-5" />
          <input
            type="text"
            name="address_input"
            placeholder="Qual é a Localização?"
            ref={addressInputRef}
            className="w-full h-full pl-19 pr-2 rounded-full text-black-2 placeholder:font-bold placeholder-black-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 hover:bg-gray-100"
          />
        </div>
      </div>
      {/* Campo de Número de Quartos */}
      <input
        type="number"
        name="rooms_input"
        placeholder="N° de Quartos"
        ref={roomsInputRef}
        className="w-90 rounded-full text-black-2 p-2 pl-15 hover:bg-gray-100 focus:ring focus:outline-none focus:shadow-outline"
      />
      {/* Rótulo do Campo de Número de Quartos */}
      <div className="mb-6 w-full relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-gray-700">
          <span className="ml-2 mb-7 mt-3">N° de Quartos</span>
        </div>
        {/* Select para selecionar o número de quartos */}
        <select
          id="rooms"
          className="mt-3 block w-full px-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none h-20 bg-no-repeat bg-transparent pr-8 appearance-none"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          style={{
            padding: '1rem 1rem',
            paddingTop: '2.3rem',
            backgroundImage:
              "url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22currentColor%22%3e%3cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22 /%3e%3c/svg%3e')",
            backgroundSize: '1rem',
            backgroundPosition: 'right 1.5rem top 20%',
          }}
        >
          <option value="">Quantos Quartos?</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
