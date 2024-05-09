import React, { useState } from 'react'
import { LiaKeySolid } from 'react-icons/lia'
import { PiCurrencyDollarLight } from 'react-icons/pi'
import { TbHomeMove } from 'react-icons/tb'

const CardHover = () => {
  const [content, setContent] = useState('alugar')

  const alugarContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-justify">
        Alugue sem Complicação
      </h2>
      <p className="text-gray-600 mb-6 text-justify">
        Alugue imóveis qualificados e sem repetição. Sed ut perspiciatis <br />{' '}
        unde omnis iste natus error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Ver imóveis para Alugar
      </button>
      <div className="flex flex-col items-start mt-6">
        <a
          href="#"
          className="text-blue-500 hover:underline mb-2 hover:text-purple-700"
        >
          Veja como Alugar sem Fiador
        </a>
        <a
          href="#"
          className="text-blue-500 hover:underline hover:text-purple-700"
        >
          Saiba como funciona o Aluguel na Netimóveis
        </a>
      </div>
    </>
  )

  const comprarContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-justify">
        Compre com Segurança
      </h2>
      <p className="text-gray-600 mb-6 text-justify">
        Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis <br />{' '}
        unde omnis iste natus error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Ver imóveis para Comprar
      </button>
      <div className="flex flex-col items-start mt-6">
        <a
          href="#"
          className="text-blue-500 hover:underline mb-2 hover:text-purple-700"
        >
          Simule seu Financiamento
        </a>
        <a
          href="#"
          className="text-blue-500 hover:underline hover:text-purple-700"
        >
          Saiba como funciona a Compra na Netimóveis
        </a>
      </div>
    </>
  )

  const anunciarContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-justify">
        Anuncie seu Imóvel
      </h2>
      <p className="text-gray-600 mb-6 text-justify">
        Anuncie gratuitamente na maior rede de imobiliários do Brasil. <br />{' '}simply dummy text of the printing and typesetting industry.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Anunciar Imóvel
      </button>
      <div className="flex flex-col items-start mt-6">
        <a
          href="#"
          className="text-blue-500 hover:underline mb-2 hover:text-purple-700"
        >
          Descubra Quanto Cobrar
        </a>
      </div>
    </>
  )

  return (
    <div className="bg-blue-100 dark:bg-black dark:text-white flex">
      <div className="bg-white dark:bg-boxdark-2 p-6 mt-20 mb-50 ml-60 rounded-xl flex flex-col justify-center items-center">
        <div className="bg-white p-8 flex flex-col justify-center items-center">
          <div className="flex justify-center space-x-4 mb-4">
            {/* Alugar Imóvel */}
            <button
              className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:hover:text-orange-500 focus:outline-none flex flex-col items-center dark:text-black-2 ${
                content === 'alugar' ? 'border-b-2 border-orange-500' : ''
              }`}
              onClick={() => setContent('alugar')}
              style={{ marginRight: '2.5rem' }}
            >
              <LiaKeySolid className="h-6 w-6 mb-1 transform rotate-[90deg]" />
              <span>Alugar<br/> Imóvel</span>
            </button>
            {/* Comprar Imóvel */}
            <button
              className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-black-2 dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                content === 'comprar' ? 'border-b-2 border-orange-500' : ''
              }`}
              onClick={() => setContent('comprar')}
              style={{ marginRight: '2.5rem' }}
            >
              <PiCurrencyDollarLight className="h-6 w-6 mb-1" />
              <span>Comprar <br/>Imóvel</span>
            </button>
            {/* Anunciar Imóvel */}
            <button
              className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-black-2 dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                content === 'anunciar' ? 'border-b-2 border-orange-500' : ''
              }`}
              onClick={() => setContent('anunciar')}
              style={{ marginRight: '2.5rem' }}
            >
              <TbHomeMove className="h-6 w-6 mb-1" />
              <span>Anunciar <br/>Imóvel</span>
            </button>
          </div>

          <div className="text-center">
            {content === 'alugar'
              ? alugarContent
              : content === 'comprar'
              ? comprarContent
              : content === 'anunciar'
              ? anunciarContent
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHover
