'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';

// Definición del tipo de proyecto
type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
  // Propiedades para el modo Spider-Man
  spideyTitle?: string;
  spideyDescription?: string;
};

export default function Projects() {
  const { isSpidermanMode } = useTheme();
  const [webShootingIndex, setWebShootingIndex] = useState<number | null>(null);
  
  // Lista de proyectos de ejemplo
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce App",
      description: "Una tienda en línea completa con carrito de compras y pasarela de pagos",
      spideyTitle: "Tienda de Gadgets de Superhéroe",
      spideyDescription: "¡La mejor tienda web para conseguir todo lo que un superhéroe necesita!",
      imageUrl: "/project1.jpg", // Esto lo tendrás que agregar
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "https://ejemplo.com",
      codeLink: "https://github.com/ejemplo/ecommerce"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Panel de control para visualización de datos con gráficos interactivos",
      spideyTitle: "Monitor de Sentido Arácnido",
      spideyDescription: "Panel para seguir todas las amenazas en la ciudad con gráficos interactivos",
      imageUrl: "/project2.jpg", // Esto lo tendrás que agregar
      tags: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
      demoLink: "https://ejemplo.com",
      codeLink: "https://github.com/ejemplo/dashboard"
    },
    {
      id: 3,
      title: "Chat Application",
      description: "Aplicación de chat en tiempo real con soporte para salas privadas",
      spideyTitle: "Comunicador de Superhéroes",
      spideyDescription: "App para mantenerse en contacto con otros héroes y coordinar misiones",
      imageUrl: "/project3.jpg", // Esto lo tendrás que agregar
      tags: ["React", "Socket.io", "Express", "Redis"],
      demoLink: "https://ejemplo.com",
      codeLink: "https://github.com/ejemplo/chat-app"
    },
    {
      id: 4,
      title: "Portfolio Template",
      description: "Plantilla de portafolio moderna y personalizable para desarrolladores",
      spideyTitle: "Identidades Secretas Web",
      spideyDescription: "¡Crea tu propia página web de superhéroe con este increíble template!",
      imageUrl: "/project4.jpg", // Esto lo tendrás que agregar
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://ejemplo.com",
      codeLink: "https://github.com/ejemplo/portfolio"
    }
  ];

  const handleProjectMouseEnter = (id: number) => {
    if (isSpidermanMode) {
      setWebShootingIndex(id);
    }
  };

  const handleProjectMouseLeave = () => {
    if (isSpidermanMode) {
      setWebShootingIndex(null);
    }
  };

  return (
    <section id="proyectos" className={`py-20 ${isSpidermanMode ? 'bg-red-600' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 ${
          isSpidermanMode 
            ? 'text-white spidey-pulse' 
            : ''
        }`}>
          Mis <span className={isSpidermanMode ? 'text-blue-800' : 'text-blue-600'}>
            {isSpidermanMode ? 'Proyectos Asombrosos' : 'Proyectos'}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${
                isSpidermanMode 
                  ? 'bg-blue-900 border-2 border-white' 
                  : 'bg-white'
              }`}
              onMouseEnter={() => handleProjectMouseEnter(project.id)}
              onMouseLeave={handleProjectMouseLeave}
              style={{ position: 'relative' }}
            >
              {isSpidermanMode && webShootingIndex === project.id && (
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="h-10 w-4 bg-gray-200 animate-pulse" style={{ 
                    backgroundImage: 'linear-gradient(0deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)'
                  }}></div>
                </div>
              )}
              
              <div className="relative h-48 w-full bg-gray-200">
                {isSpidermanMode ? (
                  <div className={`absolute inset-0 flex items-center justify-center text-white bg-gradient-to-r from-red-600 to-blue-800 ${
                    webShootingIndex === project.id ? 'animate-pulse' : ''
                  }`}>
                    <div className="text-center">
                      <div className="text-2xl font-bold">Proyecto {project.id}</div>
                      <div className="mt-2">🕸️</div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    [Imagen del Proyecto]
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isSpidermanMode ? 'text-white' : ''
                }`}>
                  {isSpidermanMode ? project.spideyTitle : project.title}
                </h3>
                <p className={`mb-4 ${
                  isSpidermanMode ? 'text-gray-200' : 'text-gray-600'
                }`}>
                  {isSpidermanMode ? project.spideyDescription : project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 text-xs rounded-full ${
                        isSpidermanMode 
                          ? 'bg-red-500 text-white border border-white' 
                          : 'bg-blue-100 text-blue-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        isSpidermanMode 
                          ? 'text-white hover:text-gray-200' 
                          : 'text-blue-600 hover:underline'
                      }`}
                    >
                      {isSpidermanMode ? '¡Ver en acción!' : 'Demo'} <span className="ml-1">→</span>
                    </a>
                  )}
                  {project.codeLink && (
                    <a 
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        isSpidermanMode 
                          ? 'text-white hover:text-gray-200' 
                          : 'text-gray-700 hover:underline'
                      }`}
                    >
                      {isSpidermanMode ? 'Ver telaraña' : 'Código'} <span className="ml-1">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
