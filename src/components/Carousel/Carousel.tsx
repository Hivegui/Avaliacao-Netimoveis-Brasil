import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Importando os ícones
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md' 
import FirstCard from '../Cards_Anuncios/FirstCardComponent'
import SecondCard from '../Cards_Anuncios/SecondCardComponent'
import ThirdCard from '../Cards_Anuncios/ThirdCardComponent'
import FourCard from '../Cards_Anuncios/FourCardComponent'

export default function Carousel() {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
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
    <div className="relative mb-5">
      {/* Botões de navegação */}
      <div className="justify-end flex mb-7 mr-5 items-center space-x-4 z-10">
        {/* Ícone de voltar */}
        <button
          type="button"
          className="w-8 h-8 rounded-full shadow-md bg-white hover:bg-gray-100 dark:bg-white dark:hover:bg-gray-200 hidden md:block"
          onClick={handlePrevClick}
        >
          <div className="flex justify-center items-center h-full w-full">
            <MdOutlineKeyboardArrowLeft className="h-5 w-5 text-gray-600 dark:text-black-2" />
          </div>
        </button>
        {/* Ícone de avançar */}
        <button
          type="button"
          className="w-8 h-8 rounded-full shadow-md bg-white hover:bg-gray-100 dark:hover:bg-gray-200 dark:bg-bg-white hidden md:block"
          onClick={handleNextClick}
        >
          <div className="flex justify-center items-center h-full w-full">
            <MdOutlineKeyboardArrowRight className="h-5 w-5 text-gray-600 dark:text-black-2" />
          </div>
        </button>
      </div>

      {/* Contêiner dos cards */}
      <Slider {...settings} ref={sliderRef}>
        {/* Componentes do Carrossel*/}
        <div className="px-4">
          <FirstCard />
        </div>
        <div className="px-4">
          <SecondCard />
        </div>
        <div className="px-4">
          <ThirdCard />
        </div>
        <div className="px-4">
          <FourCard />
        </div>
        <div className="px-4">
          <FirstCard />
        </div>
        <div className="px-4">
          <SecondCard />
        </div>
        <div className="px-4">
          <ThirdCard />
        </div>
        <div className="px-4">
          <FourCard />
        </div>
        <div className="px-4">
          <FirstCard />
        </div>
        <div className="px-4">
          <SecondCard />
        </div>
        <div className="px-4">
          <ThirdCard />
        </div>
        <div className="px-4">
          <FourCard />
        </div>
        <div className="px-4">
          <FirstCard />
        </div>
        <div className="px-4">
          <SecondCard />
        </div>
        <div className="px-4">
          <ThirdCard />
        </div>
        <div className="px-4">
          <FourCard />
        </div>
      </Slider>
    </div>
  )
}
