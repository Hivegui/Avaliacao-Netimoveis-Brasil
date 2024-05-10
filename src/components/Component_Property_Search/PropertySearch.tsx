import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { CiLocationOn } from 'react-icons/ci';
import { TbBed } from 'react-icons/tb';
import useCepSearch from '../../hooks/useSearchCep';

function PropertySearch() {
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState('');
  const { loading, error, address, searchAddressByCep } = useCepSearch();

  const handleSearch = () => {
    // Chamando a função correta para buscar o endereço com base no CEP fornecido
    searchAddressByCep(location);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-6 w-full relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-gray-700">
          <CiLocationOn className="h-5 w-5 mb-6 mt-3 text-gray-400" />
          <span className="ml-2 mt-4 mb-6">Localização</span>{' '}
        </div>
        <input
          id="location"
          type="text"
          placeholder="Qual é a Localização?"
          className="pl-10 mt-3 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none h-20"
          style={{ padding: '2rem 1rem', paddingTop: '3.5rem' }}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="mb-6 w-full relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm font-bold text-gray-700">
          <TbBed className="h-5 w-5 mb-7 ml-1 mt-3 text-gray-400" />
          <span className="ml-2 mb-7 mt-3">N° de Quartos</span>
        </div>
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

      <button
        type="button"
        className="flex w-full items-center justify-center px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
        onClick={handleSearch} // Chame a função handleSearch ao clicar no botão
      >
        <SearchIcon className="h-7 mr-2" />
        Buscar Imóveis
      </button>

      {/* Aqui você pode exibir mensagens de carregamento, erro ou endereço retornado pelo hook useCepSearch */}
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {address.cep && (
        <div>
          <p>Endereço encontrado:</p>
          <p>CEP: {address.cep}</p>
          <p>Logradouro: {address.street}</p>
          <p>Bairro: {address.neighborhood}</p>
          <p>Cidade: {address.city}</p>
          <p>Estado: {address.state}</p>
        </div>
      )}
      {/* Adicione uma mensagem para quando nenhum endereço for encontrado */}
      {!loading && !error && !address.cep && <p>Nenhum endereço encontrado.</p>}
    </div>
  );
}

export default PropertySearch;
