import Image from "next/image";

export default function Home() {
  const Nombre="Alvaro";
  const Apellido="Delgado"
  const Edad=26;
  const Ciudad="La Paz";
  const Intereses=["Desarrollo Web", "Ciberseguridad", "Inteligencia Artificial"];
  return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500">
          Bienvenido a mi portafolio
        </h1>
        <p className="mt-4 text-2xl">
          Creado por: {Nombre} {Apellido}
        </p>
        <p className="mt-2 text-lg text-gray-700">
          Estoy aprendiendo Next.js, TypeScript y Tailwind CSS
        </p>
        </div>
     </main>
  );
}
