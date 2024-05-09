import React from 'react'
import PB from '../../images/carrossel-estados/PB.png'

export default function CardParaiba() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-sm relative">
      <div className="absolute left-0 p-3 mt-30">
        <h2 className="text-white text-2xl font-extrabold">Paraiba</h2>
      </div>
      <img className="w-full rounded-xl" src={PB} alt="Paraiba" />
      <div className="px-5 py-8 text-left">
        <div className="text-xs mb-2 text-gray-600 dark:text-white">
          • Casas à venda em Paraiba
        </div>
        <h1 className="text-gray-700 text-xs dark:text-white">
          • Apto. à venda em Paraiba
        </h1>
        <p className="text-gray-700 text-xs mt-3 dark:text-white">
          • Casas para Locação em Paraiba
        </p>
        <p className="text-gray-700 text-xs mt-3 dark:text-white">
          • Apto. para Locação em Paraiba
        </p>
      </div>
    </div>
  )
}
