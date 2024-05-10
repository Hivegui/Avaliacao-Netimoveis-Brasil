import React, { useEffect, useRef, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { TbBedFilled } from 'react-icons/tb'
import { BiSearchAlt } from 'react-icons/bi'

function SearchBar() {
  const addressInputRef = useRef<HTMLInputElement>(null)
  const roomsInputRef = useRef<HTMLInputElement>(null)
  const [rooms, setRooms] = useState<string>('')

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

  return (
    <div className="flex w-full mb-30 bg-white rounded-full overflow-hidden mt-5 relative px-2 py-2">
      {/* Campo de Localização */}
      <div className="relative w-90 mr-2">
        <div className="h-17 flex items-center">
          <CiLocationOn className="absolute left-3 top-3 text-gray-500 h-10 w-5" />
          <input
            type="text"
            name="address_input"
            placeholder="Qual é a Localização?"
            ref={addressInputRef}
            className="w-90 h-full pl-10 pr-2 rounded-full text-black-2 placeholder:font-bold placeholder-black-2 border-gray-300 hover:bg-gray-100"
          />
        </div>
      </div>
      {/* Campo de Número de Quartos */}
      <div className="flex w-full relative">
        <div className="h-17 flex items-center relative">
          <TbBedFilled className="absolute left-3 top-3 text-gray-500 h-10 w-5" />
          <input
            type="number"
            name="rooms_input"
            placeholder="N° de Quartos"
            ref={roomsInputRef}
            className="w-90 h-full pl-10 pr-2 rounded-full text-black-2 placeholder:font-bold placeholder-black-2 border-gray-300 hover:bg-gray-100"
          />
          <button className="absolute right-1 top-1 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-4">
            <BiSearchAlt className="inline-block w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
