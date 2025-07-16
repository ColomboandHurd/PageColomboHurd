"use client";

import React from 'react';
import Image from 'next/image';
import { AccordionListEAD } from '@/components/AccordionListEAD';
import FooterContacto from '@/components/FooterContacto';

export default function AutorizacionEmpleoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex flex-col items-center pt-16 pb-10 px-2">
      <div className="h-20" /> {/* Espaciador para el Navbar */}
      {/* Sección superior: título afirmativo e imagen */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-20 md:mb-32">
        {/* Título a la izquierda */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a365d] mb-6">
            Autorización de Empleo en Estados Unidos
          </h1>
        </div>
        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src="/autorizacion.png"
            alt="Autorización de Empleo en Estados Unidos"
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
              La Autorización de Empleo (EAD) es una tarjeta oficial que permite a no-ciudadanos trabajar legalmente en EE.UU. por un período determinado, usualmente de uno a dos años, sirviendo como prueba de autorización laboral.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: ¿Quiénes pueden aplicar? */}
      <section className="w-full max-w-5xl mx-auto pt-24 animate-fade-in-up flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8 text-center tracking-tight uppercase">¿Quiénes pueden aplicar?</h2>
        <div className="w-full flex justify-center">
          <AccordionListEAD />
        </div>
      </section>

      {/* Sección: Cómo solicitar la EAD */}
      <section className="w-full max-w-5xl mx-auto pt-24 animate-fade-in-up flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8 text-center tracking-tight uppercase">¿Cómo solicitar la EAD?</h2>
        <div className="w-full max-w-5xl mx-auto">
          <div className="p-8 md:p-10 shadow-lg border-l-4 border-[#b8860b] bg-white/50 rounded-r-lg mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              El proceso para obtener tu Autorización de Empleo (EAD) incluye una serie de pasos que deben seguirse con cuidado. Esta guía simplificada te orienta sobre lo esencial:
            </p>
            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="w-full text-left border-collapse">
                <thead className='bg-[#1a365d] text-white'>
                  <tr>
                    <th className="px-4 py-3 text-lg font-bold">Paso</th>
                    <th className="px-4 py-3 text-lg font-bold">Descripción</th>
                  </tr>
                </thead>
                <tbody className='bg-white'>
                  <tr className='border-b'>
                    <td className="px-4 py-3 font-semibold text-[#1a365d] align-top border-l-4 border-[#b8860b]">Completa el Formulario I-765</td>
                    <td className="px-4 py-3 text-gray-700">Asegúrate de llenar todos los campos requeridos con información precisa.</td>
                  </tr>
                  <tr className='border-b'>
                    <td className="px-4 py-3 font-semibold text-[#1a365d] align-top border-l-4 border-[#b8860b]">Reúne tus documentos</td>
                    <td className="px-4 py-3 text-gray-700">Necesitarás documentos de identidad, evidencia de tu estatus migratorio y fotografías tipo pasaporte.</td>
                  </tr>
                  <tr className='border-b'>
                    <td className="px-4 py-3 font-semibold text-[#1a365d] align-top border-l-4 border-[#b8860b]">Verifica si debes pagar una tarifa</td>
                    <td className="px-4 py-3 text-gray-700">Algunas personas están exentas, dependiendo de su situación migratoria.</td>
                  </tr>
                  <tr className='border-b'>
                    <td className="px-4 py-3 font-semibold text-[#1a365d] align-top border-l-4 border-[#b8860b]">Prepara tu solicitud</td>
                    <td className="px-4 py-3 text-gray-700">Asegúrate de que todos los formularios y documentos estén organizados y sin errores para evitar demoras.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-[#1a365d] align-top border-l-4 border-[#b8860b]">Sigue tu proceso</td>
                    <td className="px-4 py-3 text-gray-700">Una vez enviada la solicitud, recibirás una confirmación y número de referencia para hacer seguimiento.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de página de recursos */}
      <section className="w-full bg-transparent pt-24 pb-16 px-4 flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-around gap-12 text-center md:text-left">
          {/* Columna 1: Formulario */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Formulario</h3>
            <a href="https://www.uscis.gov/es/i-765" target="_blank" rel="noopener noreferrer" className="bg-[#b8860b] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 transition">I-765: Solicitud de Autorización de Empleo</a>
          </div>
          {/* Columna 2: Guías y requisitos */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Guías y Requisitos</h3>
            <a href="https://www.uscis.gov/es/i-765#instrucciones-especiales" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Instrucciones oficiales</a>
            <a href="https://www.uscis.gov/es/formularios/guias-para-presentacion-de-formularios/lista-de-cotejo-sobre-evidencia-inicial-requerida-para-el-formulario-i-765-para-propositos" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Lista de cotejo de documentos</a>
          </div>
          {/* Columna 3: Portal y seguimiento */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Portal y Seguimiento</h3>
            <a href="https://my.uscis.gov/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1a365d] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">Crear cuenta y seguimiento</a>
            <a href="https://www.uscis.gov/es/i-765" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Página oficial de USCIS: I-765</a>
          </div>
        </div>
      </section>
      <FooterContacto />
    </main>
  );
} 