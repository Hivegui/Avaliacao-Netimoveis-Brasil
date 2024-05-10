import React, { useEffect, useRef, useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { CiLocationOn } from 'react-icons/ci';
import { TbBed } from 'react-icons/tb';
import useCepSearch from '../../hooks/useSearchCep';

function PropertySearch() {
  const [location, setLocation] = useState('');
  const [rooms, setRooms] = useState('');
  const { loading, error, address, searchAddressByCep } = useCepSearch();

  const addressInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyC-oyhsVGRK9uMQfDyabBOS56gMJlGj1Mc&libraries=places'
    script.async = true
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      const addressAutocomplete = new window.google.maps.places.Autocomplete(
        addressInputRef.current!,
        {
          componentRestrictions: { country: 'BR' },
        }
      )
      addressAutocomplete.addListener('place_changed', () => {
        const nearPlace = addressAutocomplete.getPlace()
      })
    })

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSearch = () => {
    searchAddressByCep(location);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 relative">
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
          ref={addressInputRef}
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
          <option value="1">Todos</option>
          <option value="2">1+</option>
          <option value="3">2+</option>
          <option value="4">3+</option>
          <option value="5">4+</option>
        </select>
      </div>

      <button
        type="button"
        className="flex w-full items-center justify-center px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
        onClick={handleSearch}
      >
        <SearchIcon className="h-7 mr-2" />
          Buscar Imóveis
      </button>
    </div>
  );
}

export default PropertySearch;