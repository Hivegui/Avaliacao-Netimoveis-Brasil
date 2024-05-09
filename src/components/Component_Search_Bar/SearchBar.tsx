import React, { useState } from 'react'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import { BiSearchAlt } from 'react-icons/bi'
import { TbBed } from 'react-icons/tb'

function SearchBar() {
  const [showLabel, setShowLabel] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Todos')
  const [roomSearch, setRoomSearch] = useState('') // Estado para armazenar a pesquisa de quartos

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setRoomSearch(option !== 'Todos' ? `${option} Quartos` : 'Todos os Quartos') // Define o texto do campo de busca com base na opção selecionada
  }
  

  const options = ['Todos', '1+', '2+', '3+', '4+']

  return (
    <div className="flex items-center justify-center py-5">
      <div className="flex border-2 rounded-full bg-white">
        <button className="flex items-center justify-center rounded-full px-4">
          <LocationMarkerIcon className="h-5 w-5 text-gray-400 hover:text-gray-300" />
        </button>
        <input
          className="px-4 py-3 w-65 rounded-full text-black-2 hover:bg-gray-200 transition duration-300 focus:outline-none"
          type="text"
          placeholder="Qual é a Localização?"
        />
        <div className="relative flex items-center">
          <div className="flex items-center justify-center rounded-full px-4">
            <button
              className="flex items-center justify-center"
              onClick={() => setShowLabel(!showLabel)}
            >
              <TbBed className="h-5 w-5 text-gray-400 hover:text-gray-300" />
            </button>
          </div>
          <div className="flex-grow">
            <input
              className="px-4 py-3 w-full text-black-2 hover:bg-gray-200 transition duration-300 focus:outline-none pl-8 rounded-full"
              type="text"
              placeholder={roomSearch || "Quantos Quartos?"} // Define o placeholder com base no texto do campo de busca
              value={roomSearch}
              readOnly
              onClick={() => setShowLabel(!showLabel)}
            />
          </div>

          {showLabel && (
            <div className="absolute mt-75 py-5 px-10 bg-white shadow-lg  rounded-xl text-gray-500 transition duration-300 focus:outline-none pl-10">
              <h1 className="mb-2 font-medium flex text-left">
                Número de Quartos
              </h1>
              <div className="flex">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className={`m-1 px-3 py-1 border rounded-full ${
                      option === selectedOption
                        ? 'bg-gray-100 border-purple-700 text-purple-700'
                        : 'bg-white'
                    }`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="border-t border-gray-300 mt-4">
                <div className="w-full max-w-xs mx-auto">
                  <label
                    htmlFor="property-type"
                    className="flex mt-5 text-sm font-medium text-gray-600"
                  >
                    Tipo de Propriedade
                  </label>
                  <select
                    id="property-type"
                    name="property-type"
                    className="mt-1 block outline-none rounded-lg w-full mb-3 pl-2 pr-10 py-2 text-base border appearance-none cursor-pointer sm:text-sm"
                    defaultValue="all-types"
                  >
                    <option value="all-types">Todos os tipos</option>
                    <option value="all-types">Casas</option>
                    <option value="all-types">Apartamentos</option>
                    <option value="all-types">Sítios</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="text-white bg-orange-500 border-l rounded-full px-6 py-4 flex items-center" onClick={() => setShowLabel(false)}>
          <BiSearchAlt className="h-5 w-5 mr-2" />
          <span>Buscar</span>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
