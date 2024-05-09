import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Import de Ícones
import { LiaKeySolid } from 'react-icons/lia'
import { PiCurrencyDollarLight } from 'react-icons/pi'
import { TbHomeMove } from 'react-icons/tb'
import { FaChevronRight } from 'react-icons/fa'
import { IoArrowForwardOutline } from "react-icons/io5";


const CardHover = () => {
  const [content, setContent] = useState('alugar') // Estado para controlar o conteúdo exibido

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  }

  let sliderRef

  const nextSlide = () => {
    sliderRef.slickNext()
  }

  // Definições de conteúdo para cada botão
  const alugarContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4 text-justify">
        Alugar sem complicação
      </h2>
      <p className="text-gray-600 text-sm dark:text-white mb-6 text-justify">
        Alugue imóveis qualificados e sem repetição. Sed ut <br />
        perspiciatis unde omnis iste natus error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Ver imóveis para Alugar
      </button>
      <div className="flex flex-col items-start mt-6">
        <a
          href="#"
          className="text-black-2 underline hover:underline mb-2 hover:text-purple-700"
        >
          Veja como Alugar sem Fiador
        </a>
        <a
          href="#"
          className="text-black-2 underline hover:underline hover:text-purple-700"
        >
          Saiba como funciona o Aluguel na Netimóveis
        </a>
      </div>
    </>
  )

  const comprarContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4 text-justify">
        Compre com Segurança
      </h2>
      <p className="text-gray-600 text-sm dark:text-white mb-6 text-justify">
        Compre seu imóvel com segurança e agilidade. Sed ut
        <br />
        perspiciatis unde omnis iste natus error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Ver imóveis para Comprar
      </button>
      <div className="flex flex-col items-start mt-6">
        <a
          href="#"
          className="text-black-2 underline hover:underline mb-2 hover:text-purple-700"
        >
          Simule seu Financiamento
        </a>
        <a
          href="#"
          className="text-black-2 underline hover:underline hover:text-purple-700"
        >
          Saiba como funciona a Compra na Netimóveis
        </a>
      </div>
    </>
  )

  const anunciarContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4 text-justify">
        Anuncie seu Imóvel
      </h2>
      <p className="text-gray-600 text-sm dark:text-white mb-6 text-justify">
        Anuncie gratuitamente na maior rede de imobiliárias do Brasil.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Anunciar Imóvel
      </button>
      <div className="flex items-center mt-6">
        <a href="#" className="text-black-2 font-bold flex items-center">
          Descubra Quanto Cobrar
          <IoArrowForwardOutline className="ml-1 text-black-2 text-xl" />
        </a>
      </div>
    </>
  )

  return (
    <div className="relative bg-gray-100 dark:bg-black">
      <div className="abalugarute inset-0 flex justify-start items-center ml-60">
        <div className="bg-white dark:bg-boxdark-2 p-6 ml-6 rounded-xl flex flex-col justify-center items-center">
          <div className="p-8 justify-center items-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Slider
                ref={(slider) => (sliderRef = slider)}
                {...settings}
                style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}
              >
                {/* Alugar Imóvel */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'alugar' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('alugar')}
                >
                  <div className="flex flex-col items-center">
                    <LiaKeySolid className="h-6 w-6 mb-1 text-gray-600 transform rotate-[90deg]" />
                    <span>
                      Alugar <br /> Imóvel
                    </span>
                  </div>
                </button>

                {/* Comprar Imóvel */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'comprar' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('comprar')}
                >
                  <div className="flex flex-col items-center">
                    <PiCurrencyDollarLight className="h-6 w-6 mb-1 text-gray-600" />
                    <span>
                      Comprar <br /> Imóvel
                    </span>
                  </div>
                </button>

                {/* Anunciar Imóvel */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'anunciar' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('anunciar')}
                >
                  <div className="flex flex-col items-center">
                    <TbHomeMove className="h-6 w-6 mb-1 text-gray-600" />
                    <span>Anunciar Imóvel</span>
                  </div>
                </button>
              </Slider>
            </div>
            {/* Conteúdo */}
            <div className="text-center h-60 w-auto  overflow-hidden">
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
    </div>
  )
}

export default CardHover
