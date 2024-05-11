import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Importando os ícones
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'
// Importando Componentes
import CardSaoPaulo from '../Cards_Estados/CardSaoPaulo'
import CardRioGrandedoSul from '../Cards_Estados/CardRioGrandedoSul'
import CardRiodeJaneiro from '../Cards_Estados/CardRiodeJaneiro'
import CardCuritiba from '../Cards_Estados/CardCuritiba'
import CardBahia from '../Cards_Estados/CardBahia'
import CardEspiritoSanto from '../Cards_Estados/CardEspiritoSanto'
import CardParaiba from '../Cards_Estados/CardParaiba'
import CardBrasilia from '../Cards_Estados/CardBrasilia'
import CardBeloHorizonte from '../Cards_Estados/CardBeloHorionte'
import CardSantaCatarina from '../Cards_Estados/CardSantaCatarina'

export default function CarouselEstados() {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],

    customPaging: function (i) {
      return (
        <button className="w-3 h-3 bg-gray-300 rounded-full focus:outline-none" />
      )
    },
  }

  const handlePrevClick = () => {
    sliderRef.current.slickPrev()
  }

  const handleNextClick = () => {
    sliderRef.current.slickNext()
  }

  return (
    <div className="relative">
      <div className="justify-end flex mb-7 mr-5 items-center space-x-4 z-10">
        {/* Botões de navegação - Ícone de voltar e de avançar */}
        <button
          type="button"
          className="w-8 h-8 rounded-full shadow-md bg-white hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-200 sm:flex"
          onClick={handlePrevClick}
        >
          <div className="flex justify-center items-center h-full w-full">
            <MdOutlineKeyboardArrowLeft className="h-5 w-5 text-gray-600 dark:text-black-2" />
          </div>
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded-full shadow-md bg-white hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-200 sm:flex"
          onClick={handleNextClick}
        >
          <div className="flex justify-center items-center h-full w-full">
            <MdOutlineKeyboardArrowRight className="h-5 w-5 text-gray-600 dark:text-black-2" />
          </div>
        </button>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {/* Componentes do Carrossel*/}
        <div className="px-6">
          <CardBeloHorizonte />
        </div>
        <div className="px-6">
          <CardSaoPaulo />
        </div>
        <div className="px-6">
          <CardRioGrandedoSul />
        </div>
        <div className="px-6">
          <CardRiodeJaneiro />
        </div>
        <div className="px-6">
          <CardEspiritoSanto />
        </div>
        <div className="px-6">
          <CardCuritiba />
        </div>
        <div className="px-6">
          <CardBahia />
        </div>
        <div className="px-6">
          <CardParaiba />
        </div>
        <div className="px-6">
          <CardBrasilia />
        </div>
        <div className="px-6 mb-30">
          <CardSantaCatarina />
        </div>
      </Slider>
    </div>
  )
}
