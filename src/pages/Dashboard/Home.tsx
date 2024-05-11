import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Import de Componentes
import SearchBar from '../../components/Component_Search_Bar/SearchBar'
import Carousel from '../../components/Carousel/Carousel'
import CarouselEstados from '../../components/Carousel/CarouselStates'
import PropertySearch from '../../components/Component_Property_Search/PropertySearch'
import CardHover from '../../components/Card_Hover/CardHoverComponent'
import CardHoverImage from '../../components/Card_Hover/CardHoverImageComponent'
// Import de Imagens
import BackgroundPrincipal from '../../images/baner/BannerDeInicio.png'
import AnuncieGratis from '../../images/baner/AnuncieGratis.png'
import BannerPortugal from '../../images/baner/BannerPortugal.png'
import BannerPortugalLower from '../../images/baner/BannerPortugalLower.png'
import Apresentacao from '../../images/baner/Apresentacao.png'
import GrupoNetimoveis from '../../images/baner-card/GrupoNetimoveis.png'
import Financas from '../../images/baner-card/Financas.png'
import Conserto from '../../images/baner-card/Conserto.png'
import FacaParte from '../../images/baner/FacaParte.png'
import ParteUp from '../../images/baner/ParteUp.png'
import ApplePlay from '../../images/baner-card/AppleStore.png'
import GooglePlay from '../../images/baner-card/GooglePlay.png'
// Ícones Importados
import { GoClock } from 'react-icons/go'
import { FaCircle } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { LuExternalLink } from 'react-icons/lu'
import Footer from '../../components/Footer'

const Home = () => {
  const [activeTab, setActiveTab] = useState('alugar')
  const [activeTab2, setActiveTab2] = useState('tipos')

  return (
    <div className="relative bg-white dark:bg-black mt-16">
      {/* Background do Banner principal */}
      <header className="items-center justify-center relative">
        <img
          src={BackgroundPrincipal}
          alt="Background"
          className="w-full m-0 p-0 mb-20"
        />

        {/* Contêiner flexível para centralizar conteúdo do banner principal */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left text-white bg-opacity-75 px-14 md:items-center md:text-center">
          <h1 className="text-xl mb-0 font-bold block">
            <span className="md:inline-block">Vende.</span>
            <span className="block md:inline-block">Aluga.</span>
            <span className="block md:inline-block">Conecta.</span>
          </h1>

          {/* Componente da Barra de pesquisa */}
          <div className="hidden xl:block">
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
                ? 'text-black-2 border-b-1 dark:text-orange-500 dark:font-bold border-b border-orange-500'
                : 'text-gray-500 dark:text-white'
            }`}
            onClick={() => setActiveTab('alugar')}
          >
            Alugar
          </button>
          <button
            className={`${
              activeTab === 'comprar'
                ? 'text-black-2 border-b-1 dark:text-orange-500 dark:font-bold border-b border-orange-500'
                : 'text-gray-500 dark:text-white'
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

      <div className="px-5 bg-white dark:bg-black sm:px-60">
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
        <div className="overflow-x-auto overflow-x-hidden sm-px-1 overflow-y-hidden mt-5 bg-white dark:bg-black mb-25 xl:overflow-x-hidden sm-px-1 block">
          <Carousel />
        </div>
      </div>
      {/* Título - Encontre um lugar que é a sua cara */}
      <div className="bg-gray-100 dark:bg-black dark:text-white flex flex-col lg:flex-row lg:text-bold lg:ml-0 lg:text-left lg:mb-10">
        <div className="p-4 lg:ml-60 mb-70 mt-20">
          <h1 className="text-4xl lg:text-5xl text-gray-600 font-medium mb-4">
            <span className="block">
              Encontre um lugar <br />
              que e a sua cara
            </span>
          </h1>

          <div className="text-2xl font-extrabold mb-4 md:hidden text-left lg:top-50">
            <div className="lg:hidden mt-15 ml-5">
              <div className="relative">
                <h1 className="text-gray-500 dark:text-white pl-3 border-l-2 border-orange-300">
                  Alugue <br />
                </h1>
                <p className="pl-3">sem complicação</p>
              </div>
            </div>

            <h1 className="block lg:hidden mt-5 ml-7 text-base font-normal lg:mb-0">
              Alugue imóveis qualificados e sem <br /> repitição. Sed ut
              perspiciatis unde <br /> omnis iste natus error sit.
            </h1>

            <button className="flex font-medium text-sm text-purple-600 border border-purple-600 px-3 py-2 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white mt-8 ml-6 lg:ml-0">
              Ver imóveis para Alugar
            </button>

            <div className="flex flex-col items-start mt-6">
              <a
                href="#"
                className="text-xs border-b border-gray-300 ml-5 font-medium text-gray-700 dark:text-white mb-2"
              >
                Veja como Alugar sem Fiador
              </a>
              <a
                href="#"
                className="text-xs border-b border-gray-300 ml-5 font-medium text-gray-700 dark:text-white mb-2"
              >
                Saiba como funciona o Aluguel na Netimóveis
              </a>
            </div>
          </div>

          <div className="text-2xl font-extrabold mb-4 md:hidden text-left lg:top-50">
            <div className="lg:hidden mt-15 ml-5">
              <div className="relative">
                <h1 className="text-gray-500 dark:text-white pl-3 border-l-2 border-orange-300">
                  Compre <br />
                </h1>
                <p className="pl-3">com Segurança</p>
              </div>
            </div>

            <h1 className="block lg:hidden mt-5 ml-7 text-base font-normal lg:mb-0">
              Compre seu imóvel com segurança e <br /> agilidade. Sed ut
              perspiciatis unde <br /> omnis iste natus error sit.
            </h1>

            <button className="flex font-medium text-lg text-purple-600 border border-purple-600 px-3 py-2 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white mt-8 ml-6 lg:ml-0">
              Ver imóveis para Comprar
            </button>

            <div className="flex flex-col items-start mt-6">
              <a
                href="#"
                className="text-xs border-b border-gray-300 ml-5 font-medium text-gray-700 dark:text-white mb-2"
              >
                Descubra seu Poder de Compra
              </a>
              <a
                href="#"
                className="text-xs border-b border-gray-300 ml-5 font-medium text-gray-700 dark:text-white mb-2"
              >
                Saiba como Comprar na Netimóveis
              </a>
            </div>
          </div>

          <p className="text-xl mt-10 hidden lg:block">
            A Netimóveis te oferece uma experiência ágil e segura na <br /> hora
            de comprar ou alugar seu imóvel. Seja de maneira <br /> digital ou
            física, fazemos a diferença neste momento tão <br /> importante que
            é decidir um lar.
          </p>
        </div>

        <div className="mt-20">
          <CardHover />
        </div>
      </div>

      {/* Componente de Hover */}
      <div className="mb-20">
        <CardHoverImage />
      </div>

      <div>
        {/* Parte abaixo de 1280px */}
        <div className="block md:hidden">
          <div>
            <h1 className="mt-30 mb-5 ml-5 text-orange-500 text-base font-bold">
              Quer vender?
            </h1>
            <p className="ml-5 text-gray-600 text-3xl font-bold">
              Anuncie grátis <br /> para mais de 100 mil <br /> pessoas todos os
              dias.
            </p>
          </div>
          <button className="border mt-10 ml-5 font-bold border-text-purple-800 text-purple-700 rounded-lg px-3 py-2 transition-colors dark:text-blue-500">
            Anunciar Imóvel
          </button>
          <div className="flex items-center mt-4">
            <Link
              to="/"
              className="text-gray-600 ml-5 border-b border-gray-400 font-bold hover:underline block text-center mr-2"
            >
              Saiba quanto vale seu imóvel
            </Link>
          </div>
          <div className="mt-10 ml-5 mr-5">
            <img
              src={AnuncieGratis}
              alt="Anúncio Grátis"
              className="w-screen h-450px rounded-l-lg object-cover mt-5"
              style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
            />
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
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
              <h1 className="text-sm font-extrabold text-orange-500 mb-4">
                Quer Vender ou Alugar?
              </h1>
              <p className="text-gray-600 text-2xl font-extrabold mb-6 dark:text-black-2">
                Anuncie grátis <br /> para mais de 100 mil <br /> pessoas todos
                os dias.
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
      </div>

      {/* Não aparece acima de 640px */}
      <div className="grid-cols-1 px-75 hidden sm:hidden md:block">
        <h1 className="text-2xl text-left text-black-2 font-extrabold ml-5 dark:text-white">
          Prontos para te Receber em mais de 10 estados
        </h1>

        {/* Componente de Carrossel com Estados */}
        <CarouselEstados />

        {/* Banner de Portugal */}
        <div className="relative">
          <img
            src={BannerPortugal}
            alt="Banner Portugal"
            className="w-full h-auto rounded-lg shadow-left-to-right sm:rounded-lg"
          />
          <div className="absolute top-0 left-0 h-full w-10/12 rounded-lg bg-gradient-to-r from-black to-transparent opacity-70 sm:rounded-lg"></div>

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
      {/* Não aparece acima de 640px */}

      {/* Aparece abaixo de 640px */}
      <div className="">
        <div className="grid grid-cols-1 md:hidden xl:hidden">
          <h1 className="text-lg mt-15 py-0 px-0 text-left text-black-2 font-extrabold ml-5 dark:text-white">
            Prontos para te Receber em <br />
            mais de 10 estados
          </h1>
        </div>

        {/* Componente de Carrossel renderizado apenas abaixo de 640px */}
        <div className="sm:hidden">
          <CarouselEstados />
        </div>

        <div className="md:hidden xl:hidden bg-gray-100">
          {/* Bloco do Banner Portugal */}
          <div className="relative">
            <img
              src={BannerPortugalLower}
              alt="Banner Portugal"
              className="object-cover px-4 shadow-left-to-right md:w-1/2 xl:w-1/3 mx-auto"
            />

            <div className="absolute top-0 left-0 p-4 inset-0">
              <h2 className="text-white text-lg text-left ml-2 mt-4 font-bold">
                Encontre a oportunidade <br /> Perfeita em Portugal
              </h2>
            </div>
            <div className="absolute top-0 right-35 m-4">
              <button className="bg-white font-semibold text-base text-orange-500 mt-30 p-2 rounded-lg hover:bg-gray-100 duration-300 ease-in-out">
                Ver imóveis em Portugal
              </button>
            </div>
          </div>

          {/* Bloco do Anúncio Grátis */}
          <div className="w-full mt-20">
            <img
              src={Apresentacao}
              alt="Anúncio Grátis"
              className="w-full rounded-l-lg object-cover"
              style={{ height: '200px' }}
            />
          </div>

          {/* Bloco da frase de efeito e motivos - TELA ABAIXO DE 640PX */}
          <div>
            <h2 className="text-lg ml-5 mt-10 font-semibold bg-gray-100 dark:bg-white dark:text-black-2">
              Aqui vai uma frase de efeito
            </h2>

            <div className="flex flex-col items-start bg-gray-100">
              {/* Aqui vão os motivos */}
              <div className="flex flex-col items-start bg-gray-100">
                <div className="flex items-start">
                  <div className="absolute mt-10 dark:text-black-2">
                    <FaCircle className="text-gray-400 ml-5 text-2xl dark:text-gray-400" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold text-gray-600 mt-20 ml-5">
                      Motivo para negociar com a Netimóveis:
                    </h3>
                    <p className="mt-5 ml-5 mr-5">
                      Aqui é desenvolvido esse motivo para negociar com a
                      Netimóveis. ipsum voluptatum quia voluptas sit aspernatur
                      aut odit aut fugit
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="absolute mt-10 dark:text-black-2">
                    <FaCircle className="text-gray-400 ml-5 text-2xl dark:text-gray-400" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold text-gray-600 mt-20 ml-5">
                      Motivo para negociar com a Netimóveis:
                    </h3>
                    <p className="mt-5 ml-5 mr-5">
                      Aqui é desenvolvido esse motivo para negociar com a
                      Netimóveis. ipsum voluptatum quia voluptas sit aspernatur
                      aut odit aut fugit
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="absolute mt-10 dark:text-black-2">
                    <FaCircle className="text-gray-400 ml-5 text-2xl dark:text-gray-400" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold text-gray-600 mt-20 ml-5">
                      Motivo para negociar com a Netimóveis:
                    </h3>
                    <p className="mt-5 ml-5 mr-5">
                      Aqui é desenvolvido esse motivo para negociar com a
                      Netimóveis. ipsum voluptatum quia voluptas sit aspernatur
                      aut odit aut fugit
                    </p>
                  </div>
                </div>
              </div>
              {/* Final dos motivos */}
            </div>
          </div>

          {/* Bloco de link para o blog */}
          <div className="mt-15 bg-white text-gray-600">
            <div className="mt-15 bg-white text-gray-600">
              <h2 className="text-xl ml-4 font-bold dark:text-white">
                Para compradores, vendedores ou curiosos :)
              </h2>
              <div className="flex justify-start mt-5">
                <Link
                  to="https://blog.netimoveis.com"
                  target="_blank"
                  className="text-blue-500 ml-4 font-medium hover:underline dark:text-white"
                >
                  Ver mais no Blog
                </Link>
                <LuExternalLink className="text-blue-500 w-6 h-6 ml-3 dark:text-orange-500" />
              </div>
            </div>

            <div className="grid grid-cols justify-center mt-10">
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
                <div className="flex text-left mt-4">
                  <div className="flex">
                    <GoClock className="mr-2 text-left dark:text-white" />
                    <p className="text-sm mr-2 dark:text-white">
                      2 Min de Leitura
                    </p>
                  </div>
                  <div className="ml-4">
                    {' '}
                    <p className="text-orange-500 text-sm">Mundo Netimóveis</p>
                  </div>
                </div>
                <h1 className="mt-2 mb-10 text-left text-black-2 font-bold text-base dark:text-white">
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
                {/* Segundo Blog */}
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
            {/* Final do blog aqui */}
          </div>
          {/* Bloco das imagens com links */}
            <div className="relative bg-center mt-20">
              <img
                src={ParteUp}
                alt="Eficiência na Gestão de Chamados de Manutenção"
                className="absolute w-full"
              />
            </div>
            {/* Coloquei suas imagens com links aqui */}
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
          <h2 className="text-2xl font-bold mr-70 mb-4 dark:bg-white dark:text-black-2 hidden md:block">
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
      <div className="flex flex-col h-screen bg-gray-100">
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
        {/* Imagem Faça Parte Netimóveis */}
        <div className="relative mt-20 flex text-center bg-gray-100">
          <img
            src={FacaParte}
            alt="Faça Parte"
            className="rounded-lg object-cover ml-75"
            style={{
              width: '70%',
              height: '330px',
            }}
          />
        </div>
        <div className="flex flex-col items-start justify-start mt-30">
          <div className="flex space-x-4 p-4 ml-40 border-b-2 border-gray-300 w-full">
            <button
              className={`px-4 py-2 font-bold ${
                activeTab2 === 'tipos'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab2('tipos')}
            >
              Tipos de Propriedades
            </button>
            {/* Botão Populares para Venda */}
            <button
              className={`px-4 py-2 font-bold ${
                activeTab2 === 'venda'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab2('venda')}
            >
              Populares para Venda
            </button>
            {/* Botão Populares para Locação */}
            <button
              className={`px-4 py-2 font-bold ${
                activeTab2 === 'locacao'
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-400'
              }`}
              onClick={() => setActiveTab2('locacao')}
            >
              Populares para Locação
            </button>
          </div>
          <div className="p-4">
            {activeTab2 === 'tipos'}
            {activeTab2 === 'venda'}
            {activeTab2 === 'locacao'}
          </div>
          <div>
            <div className="grid grid-cols-3 ml-50 w-90%">
              <div className="mr-20">
                <Link to="/" className="font-bold text-gray-600 text-lg">
                  Alugar
                </Link>
                <ul className="mt-5">
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Apartamentos</Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Casas</Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Terrenos</Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Lojas</Link>
                  </li>
                </ul>
              </div>
              <div className="mr-50">
                <Link to="/" className="font-bold text-gray-600 text-lg">
                  Comprar
                </Link>
                <ul className="mt-5">
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Casas à Venda</Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">
                      Imóv. em Condomínios
                    </Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Comprar terrenos</Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Lançamentos</Link>
                  </li>
                </ul>
              </div>
              <div className="mr-0">
                <Link to="/" className="font-bold text-gray-600 text-lg">
                  Comercial
                </Link>
                <ul className="mt-5">
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">
                      Imóveis com Escritório
                    </Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Prédio comercial</Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">
                      Galpão de Armazenamento
                    </Link>
                  </li>
                  <li className="mb-10">
                    <Link to="/caminho-do-apartamento">Salão de Eventos</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 py-10 w-full bg-gray-300">
            <div className="grid grid-cols-4 ml-40">
              {/* Coluna 1 */}
              <div className="ml-10">
                <Link to="/" className="font-bold text-blue-900 text-lg">
                  A Netimóveis
                </Link>
                <ul>
                  <li className="mt-2">Quem somos</li>
                  <li className="mt-2">Como Funciona</li>
                  <li className="mt-2">Seja um parceiro</li>
                  <li className="mt-2">Quero me associar</li>
                  <li className="mt-2">Acessoria de imprensa</li>
                  <li className="mt-2">Soluções Corporativas</li>
                  <li className="mt-2">Covid-19</li>
                </ul>
              </div>
              {/* Coluna 2 */}
              <div className="ml-5">
                <Link to="/" className="font-bold text-blue-900 text-lg">
                  Recursos
                </Link>
                <ul>
                  <li className="mt-2">Comprar</li>
                  <li className="mt-2">Alugar</li>
                  <li className="mt-2">Lançamentos</li>
                  <li className="mt-2">Anunciar Imóvel</li>
                  <li className="mt-2">Simular Financiamento</li>
                  <li className="mt-2">Imobiliárias</li>
                  <li className="mt-2">Blog</li>
                </ul>
              </div>
              {/* Coluna 3 */}
              <div className="ml-0">
                <Link to="/" className="font-bold text-blue-900 text-lg">
                  Contato
                </Link>
                <ul>
                  <li className="mt-2">Fale Conosco</li>
                  <li className="mt-2">Perguntas Frequentes</li>
                  <li className="mt-2">Suporte</li>
                </ul>
              </div>
              {/* Coluna 4 */}
              <div className="ml-10">
                <Link to="/" className="font-bold text-blue-900 text-lg">
                  Nossos Aplicativos
                </Link>
                <ul>
                  <li className="mt-2">Loc Fácil Netimóveis</li>
                  <li className="mt-2">Pro Imob Netimóveis</li>
                </ul>
                <div className="flex">
                  <img
                    src={ApplePlay}
                    alt="App Store"
                    className="w-35 h-11 mt-2 mr-2"
                  />
                  <img
                    src={GooglePlay}
                    alt="Google Play"
                    className="w-35 h-14"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
