import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Import de Componentes
import Carousel from '../../components/Carrossel/Carrossel'
import SearchBar from '../../components/Component_Search_Bar/SearchBar'
import PropertySearch from '../../components/Component_Property_Search/PropertySearch'
import CardHover from '../../components/Card_Hover/CardHoverComponent'
import CardHoverImage from '../../components/Card_Hover/CardHoverImageComponent'
import CarrosselEstados from '../../components/Carrossel/CarrosselEstados'
// Import de Imagens
import BackgroundPrincipal from '../../images/baner/BannerDeInicio.png'
import AnuncieGratis from '../../images/baner/AnuncieGratis.png'
import BannerPortugal from '../../images/baner/BannerPortugal.png'
import Apresentacao from '../../images/baner/Apresentacao.png'
import GrupoNetimoveis from '../../images/baner-card/GrupoNetimoveis.png'
import Financas from '../../images/baner-card/Financas.png'
import Conserto from '../../images/baner-card/Conserto.png'
import FacaParte from '../../images/baner/FacaParte.png'
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
                ? 'text-black-2 border-b-1 border-gray-500 dark:text-white'
                : ''
            }`}
            onClick={() => setActiveTab('alugar')}
          >
            Alugar
          </button>
          <button
            className={`${
              activeTab === 'comprar'
                ? 'text-black-2 border-b-1 border-orange-500 dark:text-white'
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
        <div className="overflow-x-auto sm:overflow-x-hidden overflow-x-hidden sm-px-1 overflow-y-hidden mt-5 bg-white dark:bg-black mb-25">
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
          <div className="flex space-x-4 p-4 ml-40 border-b-2 border-gray-300">
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
            <div className="grid grid-cols-3 ml-50">
              <div className="mr-20">
                <h3 className="font-bold text-lg">Alugar</h3>
                <ul>
                  <li className="mt-2">Apartamentos</li>
                  <li className="mt-2">Casas</li>
                  <li className="mt-2">Terrenos</li>
                  <li className="mt-2">Lojas</li>
                </ul>
              </div>
              <div className="mr-52">
                <h3 className="font-bold text-lg">Comprar</h3>
                <ul>
                  <li className="mt-2">Casas à Venda</li>
                  <li className="mt-2">Imóv. em Condomínios</li>
                  <li className="mt-2">Comprar terrenos</li>
                  <li className="mt-2">Lançamentos</li>
                </ul>
              </div>
              <div className="ml-0">
                <h3 className="font-bold text-lg">Comercial</h3>
                <ul>
                  <li className="mt-2">Imóveis com Escritório</li>
                  <li className="mt-2">Prédio comercial</li>
                  <li className="mt-2">Galpão de Armazenamento</li>
                  <li className="mt-2">Salão de Eventos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 bg-gray-200">
            <div className="grid grid-cols-4 ml-40 bg-gray-200">
              {/* Coluna 1 */}
              <div className="ml-10 bg-gray-200">
                <h3 className="font-bold">A Netimóveis</h3>
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
              <div className="ml-20">
                <h3 className="font-bold">Recursos</h3>
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
              <div className="ml-30">
                <h3 className="font-bold">Contato</h3>
                <ul>
                  <li className="mt-2">Fale Conosco</li>
                  <li className="mt-2">Perguntas Frequentes</li>
                  <li className="mt-2">Suporte</li>
                </ul>
              </div>
              {/* Coluna 4 */}
              <div className="ml-10">
                <h3 className="font-bold">Nossos Aplicativos</h3>
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
        <div className="mt-15">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home
