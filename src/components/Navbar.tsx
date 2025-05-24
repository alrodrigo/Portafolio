'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar({ toggleTheme }: { toggleTheme: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSpidermanMode } = useTheme();

  return (
    <header className={`fixed w-full z-50 shadow-sm transition-all duration-300 ${
      isSpidermanMode 
        ? 'bg-red-600 text-white' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold ${
          isSpidermanMode 
            ? 'text-white' 
            : 'text-blue-600'
        }`}>
          {isSpidermanMode ? (
            <span className="flex items-center">
              <span className="inline-block mr-1">🕸️</span>
              <span>Spider</span>
              <span className="text-black">Dev</span>
            </span>
          ) : (
            <>
              AD<span className="text-gray-800">.dev</span>
            </>
          )}
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#home" className={`transition-colors ${
            isSpidermanMode 
              ? 'text-white hover:text-blue-200' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Inicio
          </Link>
          <Link href="#sobre-mi" className={`transition-colors ${
            isSpidermanMode 
              ? 'text-white hover:text-blue-200' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Sobre mí
          </Link>
          <Link href="#proyectos" className={`transition-colors ${
            isSpidermanMode 
              ? 'text-white hover:text-blue-200' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Proyectos
          </Link>
          <Link href="#skills" className={`transition-colors ${
            isSpidermanMode 
              ? 'text-white hover:text-blue-200' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Habilidades
          </Link>
          <Link href="#contacto" className={`transition-colors ${
            isSpidermanMode 
              ? 'text-white hover:text-blue-200' 
              : 'text-gray-700 hover:text-blue-600'
          }`}>
            Contacto
          </Link>
          
          <button 
            onClick={toggleTheme}
            className={`ml-4 px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all ${
              isSpidermanMode 
                ? 'bg-blue-800 hover:bg-blue-900 text-white border-2 border-white' 
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
            aria-label={isSpidermanMode ? "Desactivar modo Spider-Man" : "Activar modo Spider-Man"}
          >
            {isSpidermanMode ? "Modo Normal" : "Modo Spider-Man"}
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className={`block md:hidden ${
            isSpidermanMode ? 'text-white' : 'text-gray-700'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`block md:hidden container mx-auto px-4 pb-4 ${
          isSpidermanMode ? 'bg-red-600' : ''
        }`}>
          <nav className="flex flex-col gap-2">
            <Link 
              href="#home" 
              className={`py-2 border-b transition-colors ${
                isSpidermanMode 
                  ? 'text-white hover:text-blue-200 border-red-500' 
                  : 'text-gray-700 hover:text-blue-600 border-gray-100'
              }`}
            >
              Inicio
            </Link>
            <Link 
              href="#sobre-mi" 
              className={`py-2 border-b transition-colors ${
                isSpidermanMode 
                  ? 'text-white hover:text-blue-200 border-red-500' 
                  : 'text-gray-700 hover:text-blue-600 border-gray-100'
              }`}
            >
              Sobre mí
            </Link>
            <Link 
              href="#proyectos" 
              className={`py-2 border-b transition-colors ${
                isSpidermanMode 
                  ? 'text-white hover:text-blue-200 border-red-500' 
                  : 'text-gray-700 hover:text-blue-600 border-gray-100'
              }`}
            >
              Proyectos
            </Link>
            <Link 
              href="#skills" 
              className={`py-2 border-b transition-colors ${
                isSpidermanMode 
                  ? 'text-white hover:text-blue-200 border-red-500' 
                  : 'text-gray-700 hover:text-blue-600 border-gray-100'
              }`}
            >
              Habilidades
            </Link>
            <Link 
              href="#contacto" 
              className={`py-2 transition-colors ${
                isSpidermanMode 
                  ? 'text-white hover:text-blue-200' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contacto
            </Link>
            <button 
              onClick={toggleTheme}
              className={`mt-2 px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all w-full ${
                isSpidermanMode 
                  ? 'bg-blue-800 hover:bg-blue-900 text-white border-2 border-white' 
                  : 'bg-red-600 hover:bg-red-700 text-white'
              }`}
              aria-label={isSpidermanMode ? "Desactivar modo Spider-Man" : "Activar modo Spider-Man"}
            >
              {isSpidermanMode ? "Modo Normal" : "Modo Spider-Man"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
