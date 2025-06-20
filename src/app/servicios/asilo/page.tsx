"use client";

import React from 'react';
import Image from 'next/image';
import FooterContacto from '@/components/FooterContacto';

export default function AsiloPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex flex-col items-center pt-16 pb-10 px-2">
      <div className="h-20" /> {/* Espaciador para el Navbar */}
      {/* Sección superior: título afirmativo e imagen */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-20 md:mb-32">
        {/* Título a la izquierda */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a365d] mb-6">
            Asilo en Estados Unidos
          </h1>
        </div>
        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src="/asilo.png"
            alt="Asilo en Estados Unidos"
            width={300}
            height={300}
            className="rounded-2xl shadow-2xl object-contain"
            priority
          />
        </div>
      </section>

      {/* Sección: Definición */}
      <section className="w-full max-w-5xl mx-auto pt-24">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6 text-center tracking-tight uppercase">Definición</h2>
          <div className="p-8 md:p-10 shadow-lg border-l-4 border-[#b8860b] bg-white/50 rounded-r-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              El asilo es una protección legal y humanitaria que otorga Estados Unidos a personas que han sufrido persecución o temen ser perseguidas en su país de origen. Busca salvaguardar la vida, la libertad y la dignidad de quienes se ven obligados a huir por motivos reconocidos internacionalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Causales de elegibilidad con tabla */}
      <section className="w-full max-w-5xl mx-auto pt-24">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8 text-center tracking-tight uppercase">
            Causales de elegibilidad
          </h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full border-collapse">
              <thead className="bg-[#1a365d]">
                <tr>
                  <th className="px-6 py-4 text-lg font-bold text-left text-white">Causal</th>
                  <th className="px-6 py-4 text-lg font-bold text-left text-white">Descripción</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-[#1a365d] border-l-4 border-[#b8860b]">Raza</td>
                  <td className="px-6 py-4 text-gray-700">Persecución por motivos raciales.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-[#1a365d] border-l-4 border-[#b8860b]">Religión</td>
                  <td className="px-6 py-4 text-gray-700">Persecución por creencias religiosas.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-[#1a365d] border-l-4 border-[#b8860b]">Nacionalidad</td>
                  <td className="px-6 py-4 text-gray-700">Persecución por origen nacional.</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold text-[#1a365d] border-l-4 border-[#b8860b]">Grupo social particular</td>
                  <td className="px-6 py-4 text-gray-700">Pertenencia a un grupo social vulnerable.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#1a365d] border-l-4 border-[#b8860b]">Opinión política</td>
                  <td className="px-6 py-4 text-gray-700">Persecución por ideas o posturas políticas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modalidades de solicitud */}
      <section className="w-full flex justify-center pt-24">
        <div className="w-full max-w-5xl animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight uppercase text-[#1a365d]">
            Modalidades de solicitud
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Afirmativo */}
            <div className="flex flex-col p-8 shadow-lg border-l-4 border-[#1a365d] rounded-r-lg bg-white/50 min-h-[220px]">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Afirmativo</h3>
              <span className="text-sm text-gray-500 mb-2">(USCIS)</span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Se solicita directamente ante USCIS cuando la persona no está en proceso de deportación. Es un proceso voluntario y proactivo.
              </p>
            </div>
            {/* Defensivo */}
            <div className="flex flex-col p-8 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg bg-white/50 min-h-[220px]">
              <h3 className="text-2xl font-bold text-[#b8860b] mb-2 uppercase tracking-wide">Defensivo</h3>
              <span className="text-sm text-gray-500 mb-2">(Proceso de deportación)</span>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Se solicita como defensa ante un proceso de deportación en la corte de inmigración. Es una alternativa para quienes enfrentan remoción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección final: Formulario y recursos */}
      <section className="w-full bg-transparent pt-24 pb-16 px-4 flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-around gap-12 text-center md:text-left">
          {/* Columna 1: Formulario requerido */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Formulario Requerido</h3>
            <p className="text-gray-600 text-base max-w-md">El formulario <span className="font-bold">I-589</span> es indispensable para solicitar asilo en EE.UU.</p>
            <a
              href="https://www.uscis.gov/sites/default/files/document/forms/i-589.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b8860b] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-200"
              download
            >
              Descargar Formulario I-589
            </a>
          </div>
          {/* Columna 2: Recursos y más información */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">¿Necesitas más información?</h3>
            <p className="text-gray-600 text-base max-w-md">Encuentra recursos oficiales y respuestas a tus preguntas en el sitio oficial de USCIS.</p>
            <a
              href="https://www.uscis.gov/es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#b8860b] hover:underline font-semibold transition-colors duration-200 text-lg"
            >
              Visita el sitio oficial de USCIS
            </a>
          </div>
        </div>
      </section>
      <FooterContacto />
    </main>
  );
} 