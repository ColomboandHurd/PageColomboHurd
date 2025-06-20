"use client";

import React from 'react';
import Image from 'next/image';
import FooterContacto from '@/components/FooterContacto';

export default function NaturalizacionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex flex-col items-center pt-16 pb-10 px-2">
      <div className="h-20" /> {/* Espaciador para el Navbar */}
      {/* Sección superior: título e imagen */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-20 md:mb-32">
        {/* Título a la izquierda */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a365d] mb-6">
            Naturalización en Estados Unidos
          </h1>
        </div>
        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src="/naturalizacion.png"
            alt="Naturalización en Estados Unidos"
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
              La naturalización es el proceso mediante el cual una persona extranjera, que ya es residente permanente legal, puede convertirse en ciudadano de los Estados Unidos. Este paso otorga derechos plenos como votar y obtener pasaporte estadounidense.
            </p>
          </div>
        </div>
      </section>
      {/* Sección: Requisitos principales */}
      <section className="w-full max-w-5xl mx-auto pt-24">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight uppercase text-[#1a365d]">Requisitos principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <span className="text-3xl text-[#b8860b] font-bold">1</span>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-1">Residencia Permanente</h3>
                <p className="text-gray-700 text-base">Tener al menos 5 años como residente (o 3 si estás casado con un ciudadano estadounidense).</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <span className="text-3xl text-[#b8860b] font-bold">2</span>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-1">Exámenes</h3>
                <p className="text-gray-700 text-base">Aprobar los exámenes de inglés y educación cívica.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <span className="text-3xl text-[#b8860b] font-bold">3</span>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-1">Carácter Moral</h3>
                <p className="text-gray-700 text-base">Demostrar buen carácter moral.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <span className="text-3xl text-[#b8860b] font-bold">4</span>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-1">Presencia Física</h3>
                <p className="text-gray-700 text-base">Tener presencia física continua en EE.UU.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <span className="text-3xl text-[#b8860b] font-bold">5</span>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-1">Edad Mínima</h3>
                <p className="text-gray-700 text-base">Ser mayor de 18 años.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <span className="text-3xl text-[#b8860b] font-bold">6</span>
              <div>
                <h3 className="text-lg font-semibold text-[#1a365d] mb-1">No Antecedentes Penales</h3>
                <p className="text-gray-700 text-base">No haber cometido delitos que impidan la naturalización.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sección: Recursos para prepararte */}
      <section className="w-full max-w-5xl mx-auto">
        <div className="animate-fade-in-left">
          <h2 className="mt-24 text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight uppercase text-[#1a365d]">Recursos para prepararte</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-center">
            Convertirte en ciudadano requiere preparación. Estos recursos oficiales te ayudarán a estudiar:
          </p>
          <ul className="flex flex-col gap-8">
            <li className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] p-6 rounded-r-lg">
              <h3 className="font-bold text-[#1a365d] text-lg block mb-1">Guía de Estudio Oficial</h3>
              <p className="text-gray-700 block mb-2">Incluye las 100 preguntas del examen cívico, vocabulario y ejemplos.</p>
              <a href="https://www.uscis.gov/es/ciudadania/estudie-para-el-examen-de-ciudadania/materiales-para-el-examen-de-educacion-civica" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] underline font-semibold hover:text-[#1a365d] transition">Guía de estudio – USCIS</a>
            </li>
            <li className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] p-6 rounded-r-lg">
              <h3 className="font-bold text-[#1a365d] text-lg block mb-1">Videos Explicativos</h3>
              <p className="text-gray-700 block mb-2">Videos que muestran cómo es la entrevista y el examen.</p>
              <a href="https://www.uscis.gov/es/ciudadania/estudie-para-el-examen-de-ciudadania/videos-del-proceso-de-naturalizacion" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] underline font-semibold hover:text-[#1a365d] transition">Videos del proceso – USCIS</a>
            </li>
            <li className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] p-6 rounded-r-lg">
              <h3 className="font-bold text-[#1a365d] text-lg block mb-1">Aplicación Móvil Oficial</h3>
              <p className="text-gray-700 block mb-2">Estudia desde tu celular con preguntas interactivas y simulacros.</p>
              <a href="https://www.uscis.gov/es/ciudadania/estudie-para-el-examen-de-ciudadania/aplicacion-movil-uscis-civics-test-study-tools" target="_blank" rel="noopener noreferrer" className="text-[#b8860b] underline font-semibold hover:text-[#1a365d] transition">App USCIS Civics Test</a>
            </li>
          </ul>
        </div>
      </section>
      {/* Pie de página: Recursos y enlaces */}
      <section className="w-full bg-transparent pt-24 pb-16 px-4 flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-around gap-12 text-center md:text-left">
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Formulario y Pasos</h3>
            <a href="https://www.uscis.gov/es/n-400" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Formulario N-400</a>
            <a href="https://www.uscis.gov/es/ciudadania/aprenda-sobre-ciudadania/10-pasos-hacia-la-naturalizacion" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">10 Pasos hacia la Naturalización</a>
          </div>
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Materiales de Estudio</h3>
            <a href="https://www.uscis.gov/es/ciudadania/encuentre-materiales-de-estudio-y-recursos" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Recursos para el examen</a>
            <a href="https://www.usahello.org/es/ciudadania/curso-de-ciudadania/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Curso gratuito – USAHello</a>
          </div>
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Post-Naturalización</h3>
            <a href="https://www.uscis.gov/es/ciudadania/una-vez-que-se-haya-convertido-en-ciudadano-estadounidense" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Guía post-naturalización</a>
          </div>
        </div>
      </section>
      <FooterContacto />
    </main>
  );
} 