import React from 'react'
import ES from '../../images/carrossel-estados/ES.png'

export default function CardEspiritoSanto() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-sm relative">
      <div className="absolute left-0 p-3 mt-30">
        <h2 className="text-white text-2xl font-extrabold">Espirito Santo</h2>
      </div>
      <img className="w-full rounded-xl" src={ES} alt="Espirito Santo" />
      <div className="px-5 py-8 text-left">
        <div className="text-xs mb-2 text-gray-600 dark:text-white">
          • Casas à venda em Espirito Santo
        </div>
        <h1 className="text-gray-700 text-xs dark:text-white">
          • Apto. à venda em Espirito Santo
        </h1>
        <p className="text-gray-700 text-xs mt-3 dark:text-white">
          • Casas para Locação em Espirito Santo
        </p>
        <p className="text-gray-700 text-xs mt-3 dark:text-white">
          • Apto. para Locação em Espirito Santo
        </p>
      </div>
    </div>
  )
}
