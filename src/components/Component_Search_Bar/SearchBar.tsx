import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/solid'
import { TbBed } from "react-icons/tb";
import React from 'react'

function SearchBar() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="flex border-2 rounded-full bg-white">
        <button className="flex items-center justify-center rounded-full px-4">
          <LocationMarkerIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" />
        </button>
        <input
          className="px-4 py-2 w-60 rounded-full text-black-2 hover:bg-gray-200 transition duration-300 focus:outline-none"
          type="text"
          placeholder="Qual é a Localização?"
        />
        <div className="w-px h-8"></div> {/* Barra cinza como separador */}
        <button className="flex items-center justify-center rounded-full px-4">
          <TbBed  className="h-5 w-5 text-gray-400 hover:text-gray-300" />
        </button>
        <input
          className="px-4 py-2 w-60 rounded-full text-black-2 hover:bg-gray-200 transition duration-300 focus:outline-none"
          type="text"
          placeholder="Quantos Quartos?"
        />
        <button className="text-white bg-orange-500 border-l rounded-full px-4 py-2">
          <SearchIcon className="h-5 w-5 rounded-full" />
        </button>
      </div>
    </div>
  )
}

export default SearchBar
