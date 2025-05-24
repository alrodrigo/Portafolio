'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const { isSpidermanMode } = useTheme();
  
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isSpidermanMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="block">Hola, soy</span>
            <span className={`block mt-2 ${isSpidermanMode ? 'text-white' : 'text-blue-600'}`}>
              {isSpidermanMode ? 'Tu Amigable Vecino' : 'Alvaro Delgado'}
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mt-6 ${isSpidermanMode ? 'text-white' : 'text-gray-600'}`}>
            {isSpidermanMode 
              ? '¡Desarrollador web con superpoderes para crear webs asombrosas!' 
              : 'Desarrollador web apasionado por crear experiencias digitales únicas'}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#proyectos" 
              className={`px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-colors btn
                ${isSpidermanMode 
                  ? 'bg-red-600 hover:bg-red-700 text-white transform hover:-translate-y-1' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              Ver proyectos
            </a>
            <a 
              href="#contacto" 
              className={`px-6 py-3 rounded-full font-medium transition-colors btn
                ${isSpidermanMode 
                  ? 'bg-blue-800 text-white hover:bg-blue-900 transform hover:-translate-y-1' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              Contactar
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className={`relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 hero-avatar ${isSpidermanMode ? 'animate-spider-swing' : ''}`}>
            {isSpidermanMode ? (
              <>
                <div className="absolute inset-0 rounded-full bg-red-100 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-red-600 to-blue-800 overflow-hidden border-4 border-black">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 rounded-full bg-red-600 flex items-center justify-center">
                        <div className="w-3/4 h-3/4 rounded-full bg-blue-800 p-1">
                          <div className="w-full h-full rounded-full bg-red-600 relative">
                            {/* Ojos de Spiderman */}
                            <div className="absolute top-1/4 left-1/4 w-1/6 h-1/3 bg-white rounded-full transform rotate-12"></div>
                            <div className="absolute top-1/4 right-1/4 w-1/6 h-1/3 bg-white rounded-full transform -rotate-12"></div>
                            {/* Patrón de telaraña */}
                            <div className="absolute inset-0 opacity-30" style={{ 
                              backgroundImage: "radial-gradient(circle, transparent 0%, transparent 70%, black 70%, black 100%), linear-gradient(0deg, transparent 0%, transparent 45%, black 45%, black 55%, transparent 55%, transparent 100%), linear-gradient(90deg, transparent 0%, transparent 45%, black 45%, black 55%, transparent 55%, transparent 100%)",
                              backgroundSize: "10px 10px",
                            }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                    AD
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
