'use client';

import { useTheme } from '@/context/ThemeContext';

export default function AboutMe() {
  const { isSpidermanMode } = useTheme();
  
  return (
    <section id="sobre-mi" className={`py-20 ${
      isSpidermanMode ? 'bg-blue-800 text-white' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {isSpidermanMode ? (
            <>
              <span className="text-white">Identidad</span>{" "}
              <span className="text-red-500">Secreta</span>
            </>
          ) : (
            <>
              Sobre <span className="text-blue-600">Mí</span>
            </>
          )}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h3 className={`text-2xl font-bold mb-4 ${
              isSpidermanMode ? 'text-white' : ''
            }`}>
              {isSpidermanMode ? 
                'Desarrollador de día, Superhéroe de noche' : 
                'Desarrollador Web de La Paz, Bolivia'}
            </h3>
            <p className={`leading-relaxed mb-4 ${
              isSpidermanMode ? 'text-gray-200' : 'text-gray-600'
            }`}>
              {isSpidermanMode ? (
                <>
                  De día, me dedico a tejer webs (web apps) y atrapar bugs en mi red. 
                  Mi sentido arácnido me alerta sobre errores en el código antes de que 
                  aparezcan en producción, y puedo escalar cualquier problema técnico 
                  por complejo que sea.
                </>
              ) : (
                <>
                  Soy un apasionado desarrollador web de 26 años de edad con base en La Paz. Me especializo
                  en crear experiencias digitales excepcionales utilizando tecnologías modernas como
                  React, Next.js y TypeScript.
                </>
              )}
            </p>
            <p className={`leading-relaxed mb-6 ${
              isSpidermanMode ? 'text-gray-200' : 'text-gray-600'
            }`}>
              {isSpidermanMode ? (
                <>
                  Con grandes poderes de programación vienen grandes responsabilidades. 
                  Me esfuerzo por construir aplicaciones web que no solo sean funcionales 
                  sino también increíblemente atractivas y fáciles de usar. Mi objetivo es 
                  crear webs asombrosas que dejen a los usuarios pegados como si fueran telarañas.
                </>
              ) : (
                <>
                  Con un enfoque en el desarrollo frontend y un ojo para el diseño, me esfuerzo
                  por construir aplicaciones web que no solo sean funcionales sino también atractivas
                  y fáciles de usar. Tengo un interés particular en la ciberseguridad y la inteligencia
                  artificial, buscando constantemente integrar estas tecnologías en mis proyectos.
                </>
              )}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  isSpidermanMode ? 'bg-red-500' : 'bg-blue-600'
                }`}></div>
                <span className={
                  isSpidermanMode ? 'text-gray-200' : 'text-gray-700'
                }>
                  {isSpidermanMode ? 'Desarrollo Web-arácnido' : 'Desarrollo Web'}
                </span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  isSpidermanMode ? 'bg-red-500' : 'bg-blue-600'
                }`}></div>
                <span className={
                  isSpidermanMode ? 'text-gray-200' : 'text-gray-700'
                }>
                  {isSpidermanMode ? 'Seguridad de la telaraña' : 'Ciberseguridad'}
                </span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  isSpidermanMode ? 'bg-red-500' : 'bg-blue-600'
                }`}></div>
                <span className={
                  isSpidermanMode ? 'text-gray-200' : 'text-gray-700'
                }>
                  {isSpidermanMode ? 'Sentido arácnido AI' : 'Inteligencia Artificial'}
                </span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  isSpidermanMode ? 'bg-red-500' : 'bg-blue-600'
                }`}></div>
                <span className={
                  isSpidermanMode ? 'text-gray-200' : 'text-gray-700'
                }>
                  {isSpidermanMode ? 'Diseño de trajes web' : 'UI/UX Design'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-6 rounded-lg shadow-lg ${
                isSpidermanMode ? 'bg-red-600 text-white' : 'bg-white'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  isSpidermanMode ? 'text-white' : 'text-blue-600'
                }`}>2+</div>
                <div className={
                  isSpidermanMode ? 'text-white font-medium' : 'text-gray-700 font-medium'
                }>
                  {isSpidermanMode ? 'Años balanceándome entre webs' : 'Años de experiencia'}
                </div>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${
                isSpidermanMode ? 'bg-blue-900 text-white' : 'bg-white'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  isSpidermanMode ? 'text-white' : 'text-blue-600'
                }`}>15+</div>
                <div className={
                  isSpidermanMode ? 'text-white font-medium' : 'text-gray-700 font-medium'
                }>
                  {isSpidermanMode ? 'Villanos de código atrapados' : 'Proyectos completados'}
                </div>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${
                isSpidermanMode ? 'bg-blue-900 text-white' : 'bg-white'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  isSpidermanMode ? 'text-white' : 'text-blue-600'
                }`}>5+</div>
                <div className={
                  isSpidermanMode ? 'text-white font-medium' : 'text-gray-700 font-medium'
                }>
                  {isSpidermanMode ? 'Ciudadanos salvados' : 'Clientes satisfechos'}
                </div>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${
                isSpidermanMode ? 'bg-red-600 text-white' : 'bg-white'
              }`}>
                <div className={`text-4xl font-bold mb-2 ${
                  isSpidermanMode ? 'text-white' : 'text-blue-600'
                }`}>10+</div>
                <div className={
                  isSpidermanMode ? 'text-white font-medium' : 'text-gray-700 font-medium'
                }>
                  {isSpidermanMode ? 'Poderes web dominados' : 'Certificaciones'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
