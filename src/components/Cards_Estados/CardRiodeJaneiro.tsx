import React from 'react'
import RJ from '../../images/carrossel-estados/RJ.png'

export default function CardRiodeJaneiro() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-sm relative">
      <div className="absolute left-0 p-3 mt-30">
        <h2 className="text-white text-2xl font-extrabold">Rio de Janeiro</h2>
      </div>
      <img className="w-full rounded-xl" src={RJ} alt="Rio de Janeiro" />
      <div className="px-5 py-8 text-left">
        <div className="text-xs mb-2 text-gray-600 dark:text-white">
          • Casas à venda em Rio de Janeiro
        </div>
        <h1 className="text-gray-700 text-xs dark:text-white">
          • Apto. à venda em Rio de Janeiro
        </h1>
        <p className="text-gray-700 text-xs mt-3 dark:text-white">
          • Casas para Locação em Rio de Janeiro
        </p>
        <p className="text-gray-700 text-xs mt-3 dark:text-white">
          • Apto. para Locação em Rio de Janeiro
        </p>
      </div>
    </div>
  )
}
