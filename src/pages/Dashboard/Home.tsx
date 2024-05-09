import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BackgroundPrincipal from '../../images/baner/BannerDeInicio.png'
import Carousel from '../../components/Carrossel/Carrossel'
import SearchBar from '../../components/Component_Search_Bar/SearchBar'
import PropertySearch from '../../components/Component_Property_Search/PropertySearch'
import CardHover from '../../components/Card_Hover/CardHoverComponent'
import CardHoverImage from '../../components/Card_Hover/CardHoverImageComponent'
import AnuncieGratis from '../../images/baner/AnuncieGratis.png'
import CarrosselEstados from '../../components/Carrossel/CarrosselEstados'
import BannerPortugal from '../../images/baner/BannerPortugal.png'
import Apresentacao from '../../images/baner/Apresentacao.png'
import GrupoNetimoveis from '../../images/baner-card/GrupoNetimoveis.png'
import Financas from '../../images/baner-card/Financas.png'
import Conserto from '../../images/baner-card/Conserto.png'
// Ícones Importados
import { GoClock } from 'react-icons/go'
import { FaCircle } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { LuExternalLink } from 'react-icons/lu'


const Home = () => {
  const [activeTab, setActiveTab] = useState('alugar')

  return (
    <div className="relative bg-white dark:bg-black">
      {/* Background do Banner principal */}
      <header className="items-center justify-center relative">
        <img
          src={BackgroundPrincipal}
          alt="Background"
          className="w-full m-0 p-0 mb-20"
        />

        {/* Contêiner flexível para centralizar conteúdo do banner principal */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white bg-opacity-75 px-14 md:items-center md:text-center">
          <h1 className="text-lg mb-0 font-bold block">
            <span className="md:inline-block">Vende.</span>
            <span className="block md:inline-block">Aluga.</span>
            <span className="block md:inline-block">Conecta.</span>
          </h1>

          {/* Componente da Barra de pesquisa */}
          <div className="hidden md:block">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Alugar e Comprar responsivo */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-4 lg:px-4 xl:px-4">
        <div className="justify-start w-full border-b border-gray-300 mt-5 space-x-4 xl:hidden">
          <button
            className={`${
              activeTab === 'alugar'
                ? 'text-black-2 border-b-2 border-gray-500 dark:text-white'
                : ''
            }`}
            onClick={() => setActiveTab('alugar')}
          >
            Alugar
          </button>
          <button
            className={`${
              activeTab === 'comprar'
                ? 'text-black-2 border-b-2 border-orange-500 dark:text-white'
                : ''
            }`}
            onClick={() => setActiveTab('comprar')}
          >
            Comprar
          </button>
        </div>
      </div>

      {/* Componente de Busca - Propriedades da Busca da Barra de Pesquisa */}
      <div className="xl:hidden block justify-start w-full border-gray-300 mt-5 space-x-4">
        <PropertySearch />
      </div>

      <div className="px-5 sm:px-60 bg-white dark:bg-black">
        <a
          href="/"
          className="text-base py-2 font-bold text-black-2 dark:text-white"
        >
          <span>
            Novos Anúncios em{' '}
            <span className="text-orange-500">Belo Horizonte</span>
          </span>
          <svg
            className="w-4 h-4 text-orange-500 inline-block max-sm:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </a>
        {/* Ver todos os Imóveis */}
        <div className="mt-5">
          <Link
            to="http:/imoveis"
            className="text-blue-500 inline-flex items-center"
          >
            Ver todos os imóveis
            <span className="ml-1">
              <LuExternalLink />
            </span>
          </Link>
        </div>

        {/* Componente de Carrossel */}
        <div className="overflow-x-auto sm:overflow-x-hidden overflow-x-hidden overflow-y-hidden mt-5 bg-white dark:bg-black mb-25">
          <Carousel />
        </div>
      </div>

      {/* Título - Encontre um lugar que é a sua cara */}
      <div className="bg-blue-100 dark:bg-black dark:text-white flex">
        <div className="p-4 ml-60 mb-70 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-4">
            Encontre um lugar <br /> que é a sua cara
          </h1>
          <p className="text-xl mt-10">
            A Netimóveis te oferece uma experiência ágil e segura na <br /> hora
            de comprar ou alugar seu imóvel. Seja de maneira <br /> digital ou
            física, fazemos a diferença neste momento tão <br /> importante que
            é decidir um lar.
          </p>
        </div>

        {/* Componente de Card com Hover */}
        <CardHover />
      </div>

      {/* Componente de Hover */}
      <div className="">
        <CardHoverImage />
      </div>

      <div className="flex justify-center items-center h-screen bg-white dark:bg-black">
        {/* Banner com imagem de pesquisa */}
        <div className="flex flex-col-2 mt-0 items-start bg-white border border-gray-300 rounded-lg shadow">
          <img
            src={AnuncieGratis}
            alt="Anúncio Grátis"
            className="w-auto h-450px rounded-l-lg object-cover"
            style={{ width: '950px', height: '550px' }}
          />
          <div className="p-8">
            <h2 className="text-sm font-extrabold text-orange-500 mb-4">
              Quer Vender ou Alugar?
            </h2>
            <p className="text-gray-600 text-2xl font-extrabold mb-6 dark:text-black-2">
              Anuncie grátis <br /> para mais de 100 mil <br /> pessoas todos os
              dias.
            </p>
            <button className="border-2 mt-55 font-bold border-text-purple-800 text-purple-700 rounded-lg px-4 py-1 mr-2 transition-colors dark:text-blue-500">
              Anunciar Imóvel
            </button>
            <div className="flex items-center mt-4">
              <Link
                to="/"
                className="text-black-2 font-bold hover:underline block text-center mr-2"
              >
                Saiba quanto vale seu imóvel
              </Link>
              <FiArrowRight className="text-black-2 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 px-75">
        <h1 className="text-2xl text-left text-black-2 font-extrabold ml-5 dark:text-white">
          Prontos para te Receber em mais de 20 estados
        </h1>

        {/* Componente de Carrossel com Estados */}
        <CarrosselEstados />

        {/* Banner de Portugal */}
        <div className="relative">
          <img
            src={BannerPortugal}
            alt="Banner Portugal"
            className="w-full h-auto rounded-lg shadow-left-to-right"
          />
          <div className="absolute top-0 left-0 p-4 inset-0">
            <h2 className="text-white text-3xl ml-10 mt-8 font-bold">
              Encontre a oportunidade <br /> Perfeita em Portugal
            </h2>
          </div>
          <div className="absolute top-0 right-0 m-4 mr-15">
            <button className="bg-white font-semibold text-orange-500 mt-12 p-2 rounded-lg hover:bg-gray-100 duration-300 ease-in-out">
              Ver imóveis em Portugal
            </button>
          </div>
        </div>
      </div>
      {/* Bloco da esquerda com imagem */}
      <div className="flex w-full mt-30">
        <div className="w-full">
          <img
            src={Apresentacao}
            alt="Anúncio Grátis"
            className="w-full rounded-l-lg object-cover"
            style={{ width: '900', height: '500px' }}
          />
        </div>
        {/* Bloco da direita com o Aqui vai uma frase de efeito */}
        <div className="bg-gray-100 p-8 w-full text-center dark:bg-white">
          <h2 className="text-2xl font-bold mr-70 mb-4 dark:bg-white dark:text-black-2">
            Aqui vai uma frase de efeito
          </h2>
          <div className="mr-70 pl-5 space-y-2">
            <div className="flex items-start">
              <FaCircle className="mt-9 mr-2 text-gray-400 text-4xl dark:text-black-2" />
              <div className="font-sm mt-10 dark:text-black-2">
                <strong>Motivo para negociar com a Netimóveis:</strong>
                <p className="mt-5">
                  Aqui é desenvolvido esse motivo para negociar com a
                  Netimóveis. ipsum voluptatum quia voluptas sit aspernatur aut
                  odit aut fugit
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCircle className="mt-4 mr-2 text-gray-400 text-4xl dark:text-black-2" />
              <div className="font-sm mt-5 dark:text-black-2">
                <strong>Motivo para negociar com a Netimóveis:</strong>
                <p className="mt-5 dark:text-black-2">
                  Aqui é desenvolvido esse motivo para negociar com a
                  Netimóveis. ipsum voluptatum quia voluptas sit aspernatur aut
                  odit aut fugit
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCircle className="mt-4 mr-2 text-gray-400 text-4xl dark:text-black-2" />
              <div className="font-sm mt-5 dark:text-black-2">
                <strong>Motivo para negociar com a Netimóveis:</strong>
                <p className="mt-5">
                  Aqui é desenvolvido esse motivo para negociar com a
                  Netimóveis. ipsum voluptatum quia voluptas sit aspernatur aut
                  odit aut fugit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cabeçalho com Compradores, Vendedores ou Curiosos */}
      <div className="flex flex-col h-screen">
        <div className="text-center text-gray-600 p-4 mt-20">
          <h1 className="text-2xl font-bold text-justify ml-60 dark:text-white">
            Para compradores, vendedores ou curiosos :)
          </h1>
          <div className="flex justify-end mr-65 mt-2">
            <Link
              to="https://blog.netimoveis.com"
              target="_blank"
              className="text-black-2 font-bold hover:underline block text-center mr-2 dark:text-white"
            >
              Ver mais no Blog
            </Link>
            <FiArrowRight className="text-black-2 w-6 h-6 dark:text-orange-500" />
          </div>
        </div>
        <div className="flex justify-center items-center p-0 w-full">
          <div className="flex justify-center gap-40">
            <Link
              to="https://www.netimoveis.com/quem-somos#a-netimoveis"
              target="_blank"
              className="flex flex-col items-center"
            >
              <img
                src={GrupoNetimoveis}
                alt="Encontro NetiMóveis Brasil"
                className="rounded-xl object-cover"
                style={{ width: '350px', height: '230px' }}
              />
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <GoClock className="mr-2 text-left dark:text-white" />
                  <p className="text-sm text-left dark:text-white">
                    2 Min de Leitura
                  </p>
                </div>
                <div className="ml-4">
                  {' '}
                  <p className="text-orange-500 text-sm">Mundo Netimóveis</p>
                </div>
              </div>
              <h1 className="mt-2 text-left text-black-2 font-bold text-base dark:text-white">
                ENCONTRO NETIMÓVEIS BRASIL - N<br /> CONNECTIONS 2021 A FORÇA
                DOS <br /> NEGÓCIOS EM REDE
              </h1>
            </Link>
            <Link
              to="https://www.netimoveis.com/quem-somos#parceiros"
              target="_blank"
              className="flex flex-col items-center"
            >
              <img
                src={Financas}
                alt="Organização Financeira nas Imobiliárias"
                className="rounded-xl object-cover"
                style={{ width: '350px', height: '230px' }}
              />
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <GoClock className="mr-2 text-left dark:text-white" />
                  <p className="text-sm text-left dark:text-white">
                    3 Min de Leitura
                  </p>
                </div>
                <div className="ml-4">
                  {' '}
                  <p className="text-orange-500 text-sm">Mundo Netimóveis</p>
                </div>
              </div>
              <h1 className="mt-2 text-left text-black-2 font-bold text-base dark:text-white">
                ORGANIZAÇÃO FINANCEIRA NAS
                <br /> IMOBILIÁRIAS
              </h1>
            </Link>
            <Link
              to="https://www.netimoveis.com/quem-somos#solucoes-corporativas"
              target="_blank"
              className="flex flex-col items-center"
            >
              <img
                src={Conserto}
                alt="Eficiência na Gestão de Chamados de Manutenção"
                className="rounded-xl object-cover"
                style={{ width: '350px', height: '230px' }}
              />
              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <GoClock className="mr-2 text-left dark:text-white" />
                  <p className="text-sm text-left dark:text-white">
                    4 Min de Leitura
                  </p>
                </div>
                <div className="ml-4">
                  {' '}
                  <p className="text-orange-500 text-sm">Mundo Netimóveis</p>
                </div>
              </div>
              <h1 className="mt-2 text-left text-black-2 font-bold text-base dark:text-white">
                EFICIÊNCIA NA GESTÃO DE
                <br /> CHAMADOS DE MANUTENÇÃO
              </h1>
            </Link>
          </div>
        </div>

        {/* Seção 'Faça parte da Netimóveis' */}
        <div className="p-4 mt-30 text-black-2 bg-Gray">
          <h2 className="text-xl font-bold">Faça parte da Netimóveis</h2>
          <p>
            É uma empresa que se identifica com os valores e cultura da rede?
            Faça parte do time e utilize nossa tecnologia.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
