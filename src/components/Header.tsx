import Logo from '../images/logo/Logo-Header.png'
import React from 'react'
import DarkModeSwitcher from './DarkModeSwitcher'
import { HiMiniBars3 } from 'react-icons/hi2'

function Header() {
    return (
      <header className="bg-white shadow-xl py-4 dark:bg-black fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="netimóveis" className="h-8 mr-4 top-4" />
          </div>

          <div className="flex items-center">
            <nav className="items-start text-left mr-90 hidden xl:block">
              <a href="/" className="text-gray-800 px-4 dark:text-white dark:hover:text-orange-500">
                Imobiliárias
              </a>
              <a href="/" className="text-gray-800 px-4 dark:text-white dark:hover:text-orange-500">
                Quero me Associar
              </a>
              <a href="/" className="text-gray-800 px-4 dark:text-white dark:hover:text-orange-500">
                Sobre
              </a>
              <a href="/" className="text-gray-800 px-4 dark:text-white dark:hover:text-orange-500">
                Blog
              </a>
            </nav>
          </div>
          <div className="items-center hidden xl:block">
            <button className="border-2 border-text-purple-800 text-purple-800 rounded-full px-4 py-1 mr-2 transition-colors dark:text-blue-500">
              Anunciar Imóvel
            </button>
            <button className="text-gray-800 rounded px-4 py-1 transition-colors dark:text-white dark:hover:text-orange-500">
              Entrar
            </button>
          </div>

          {/* Dark Mode Switch */}
          <div className="flex items-end gap-3">
            <ul className="flex items-end gap-2">
              <DarkModeSwitcher />
            </ul>
          </div>

          <div className="xl:hidden block">
            <HiMiniBars3 className="w-6 h-6 " />
          </div>
        </div>
      </header>
    )
}

export default Header
