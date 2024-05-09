import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BannerHover from '../../images/baner/SolManha.png'
import { PiPawPrintFill, PiSunHorizonThin } from 'react-icons/pi'
import { FaBus, FaChevronRight, FaCircle } from 'react-icons/fa'
import { MdCellWifi, MdOutlineYard } from 'react-icons/md'

const CardHoverImage = () => {
  const [content, setContent] = useState('sol')
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3, // Alterado para 1 para navegar um slide por vez
    arrows: false, // Habilitar setas de navegação
  }

  let sliderRef // Ref para o Slider

  const nextSlide = () => {
    sliderRef.slickNext() // Navegar para o próximo slide
  }

  const solContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4 text-justify">
        Sol que ilumina <br /> as suas manhãs
      </h2>
      <p className="text-gray-600 dark:text-white mb-6 text-justify">
        Busque imóveis que pegam Sol durante a manhã para que <br /> você fique
        com vitamina D em dia ;)
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Buscar Imóveis
      </button>
    </>
  )

  const petContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4 text-justify">
        Aceitamos seu <br/> Doguinho 🐶
      </h2>
      <p className="text-gray-600 mb-6 text-justify dark:text-white">
        Sed ut perspiciatis unde omnis iste natus <br /> unde omnis iste natus
        error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Buscar Imóveis
      </button>
    </>
  )

  const varandaContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4 text-justify">
        Linda vista da <br/> Varanda
      </h2>
      <p className="text-gray-600 mb-6 text-justify dark:text-white">
        Sed ut perspiciatis unde omnis iste natus <br /> unde omnis iste natus
        error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Buscar Imóveis
      </button>
    </>
  )

  const onibusContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-justify dark:text-white">
        Ônibus na sua <br/> Porta
      </h2>
      <p className="text-gray-600 mb-6 text-justify dark:text-white">
        Sed ut perspiciatis unde omnis iste natus <br /> unde omnis iste natus
        error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Buscar Imóveis
      </button>
    </>
  )

  const quintalContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-justify dark:text-white">
        Imóveis com <br /> Quintal
      </h2>
      <p className="text-gray-600 mb-6 text-justify dark:text-white">
        Sed ut perspiciatis unde omnis iste natus <br /> unde omnis iste natus
        error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Buscar Imóveis
      </button>
    </>
  )

  const internetContent = (
    <>
      <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-justify dark:text-white">
        Imóveis com <br /> Internet
      </h2>
      <p className="text-gray-600 mb-6 text-justify dark:text-white">
        Sed ut perspiciatis unde omnis iste natus <br /> unde omnis iste natus
        error sit.
      </p>
      <button className="flex font-semibold text-purple-700 border border-purple-700 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white">
        Buscar Imóveis
      </button>
    </>
  )

  return (
    <div className="relative bg-white dark:bg-black">
      {/* Background da imagem */}
      <header className="items-center justify-center relative">
        <img
          src={BannerHover}
          alt="Background"
          style={{
            width: '100%', // Reduz a largura para 100% do contêiner pai
            height: '640px', // Reduz a altura para 640px
            objectFit: 'cover', // Mantém a proporção da imagem sem distorcer
          }}
        />
      </header>

      <div className="absolute inset-0 flex justify-start items-center ml-60">
        <div className="bg-white dark:bg-boxdark-2 p-6 ml-6 rounded-xl flex flex-col justify-center items-center">
          <div className="p-8 justify-center items-center">
            <div className="flex justify-center items-center space-x-4 mb-4">
              <Slider
                ref={(slider) => (sliderRef = slider)}
                {...settings}
                style={{ width: '100%', maxWidth: '400px', margin: 'auto' }}
              >
                {' '}
                {/* Pega Sol */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'sol' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('sol')}
                >
                  <div className="flex flex-col items-center">
                    <PiSunHorizonThin className="h-6 w-6 mb-1" />
                    <span>
                      Pega <br /> Sol
                    </span>
                  </div>
                </button>
                {/* Aceitam Pet */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'pet' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('pet')}
                >
                  <div className="flex flex-col items-center">
                    <PiPawPrintFill className="h-6 w-6 mb-1" />
                    <span>
                      Aceitam <br /> Pet
                    </span>
                  </div>
                </button>

                {/* Ônibus Perto */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'onibus' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('onibus')}
                >
                  <div className="flex flex-col items-center">
                    <FaBus className="h-6 w-6 mb-1" />
                    <span>
                      Ônibus <br /> Perto
                    </span>
                  </div>
                </button>

                {/* Tem Varanda */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'varanda' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('varanda')}
                >
                  <div className="flex flex-col items-center">
                    <FaCircle className="h-6 w-6 mb-1" />
                    <span>
                      Tem <br /> Varanda
                    </span>
                  </div>
                </button>
                
                {/* Tem Quintal */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'quintal' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('quintal')}
                >
                  <div className="flex flex-col items-center">
                    <MdOutlineYard className="h-6 w-6 mb-1" />
                    <span>
                      Tem <br /> Quintal
                    </span>
                  </div>
                </button>
                {/* Com Boa Internet */}
                <button
                  className={`text-black-2 font-semibold py-2 px-4 hover:text-orange-500 dark:text-white dark:hover:text-orange-500 focus:outline-none flex flex-col items-center ${
                    content === 'internet' ? 'border-b-2 border-orange-500' : ''
                  }`}
                  onClick={() => setContent('internet')}
                >
                  <div className="flex flex-col items-center">
                    <MdCellWifi className="h-6 w-6 mb-1" />
                    <span>
                      Com Boa <br /> Internet
                    </span>
                  </div>
                </button>
              </Slider>
              <FaChevronRight
                className="text-black-2 cursor-pointer inline-block"
                onClick={nextSlide}
              />
            </div>
            <div className="text-center">
              {content === 'sol'
                ? solContent
                : content === 'pet'
                ? petContent
                : content === 'onibus'
                ? varandaContent
                : content === 'varanda'
                ? onibusContent
                : content === 'quintal'
                ? quintalContent
                : content === 'internet'
                ? internetContent
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardHoverImage
