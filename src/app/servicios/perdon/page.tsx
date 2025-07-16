"use client";

import React from 'react';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FooterContacto from '@/components/FooterContacto';

export default function PerdonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex flex-col items-center pt-16 pb-10 px-2">
      <div className="h-20" /> {/* Espaciador para el Navbar */}
      {/* Sección superior: título e imagen */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-20">
        {/* Título a la izquierda */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a365d] mb-6">
            Perdón Migratorio en Estados Unidos
          </h1>
        </div>
        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src="/perdon.png"
            alt="Perdón migratorio en Estados Unidos"
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
              El perdón migratorio (o waiver) es un recurso legal que permite a personas consideradas inadmisibles solicitar la eliminación de su prohibición de entrada o permanencia en el país. Es clave para obtener una visa o residencia a pesar de antecedentes complicados.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: ¿Quiénes pueden solicitarlo? */}
      <section className="w-full max-w-5xl mx-auto pt-24">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight uppercase text-[#1a365d]">¿Quiénes pueden solicitarlo?</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center">
            Personas con familiares ciudadanos o residentes que sufrirían dificultades extremas si se niega el perdón.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] p-6 flex items-center gap-4 rounded-r-lg">
              <span className="text-2xl text-[#b8860b] font-bold">•</span>
              <h3 className="text-lg font-semibold text-[#1a365d]">Entradas irregulares o estadías prolongadas</h3>
            </div>
            <div className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] p-6 flex items-center gap-4 rounded-r-lg">
              <span className="text-2xl text-[#b8860b] font-bold">•</span>
              <h3 className="text-lg font-semibold text-[#1a365d]">Deportaciones previas</h3>
            </div>
            <div className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] p-6 flex items-center gap-4 rounded-r-lg">
              <span className="text-2xl text-[#b8860b] font-bold">•</span>
              <h3 className="text-lg font-semibold text-[#1a365d]">Uso de documentos falsos</h3>
            </div>
            <div className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] p-6 flex items-center gap-4 rounded-r-lg">
              <span className="text-2xl text-[#b8860b] font-bold">•</span>
              <h3 className="text-lg font-semibold text-[#1a365d]">Ciertas condenas penales</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Requisitos generales */}
      <section className="w-full max-w-5xl mx-auto pt-24">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight uppercase text-[#1a365d]">Requisitos Generales</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center">
            Para solicitar un perdón migratorio es fundamental cumplir con los siguientes requisitos legales y documentales:
          </p>
          <div className="w-full flex flex-col gap-4">
            <Accordion className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#b8860b]" />}>
                <Typography className="font-bold text-[#1a365d]">Ver lista completa de requisitos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ol className="list-decimal pl-6 space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold text-[#1a365d]">Formulario Correspondiente:</span> Llenar y firmar el formulario adecuado (I-601, I-601A o I-212).
                  </li>
                  <li>
                    <span className="font-semibold text-[#1a365d]">Demostrar Sufrimiento Extremo:</span> Probar que un familiar calificado (cónyuge o padre/madre ciudadano o residente) sufriría dificultades extremas.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1a365d]">Evidencia Sólida:</span> Incluir documentos biográficos, pruebas de relación, antecedentes y traducciones certificadas.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1a365d]">Pagar la Tarifa:</span> Cubrir el costo establecido por USCIS para el formulario correspondiente.
                  </li>
                  <li>
                    <span className="font-semibold text-[#1a365d]">Datos Biométricos:</span> Asistir a la cita para toma de huellas, foto y firma si es requerido.
                  </li>
                </ol>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pie de página de recursos */}
      <section className="w-full bg-transparent pt-24 pb-16 px-4 flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-around gap-12 text-center md:text-left">
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Formularios</h3>
            <a href="https://www.uscis.gov/es/i-601" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Formulario I-601</a>
            <a href="https://www.uscis.gov/es/i-601a" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Formulario I-601A</a>
            <a href="https://www.uscis.gov/es/i-212" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Formulario I-212</a>
          </div>
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Guías y Recursos</h3>
            <a href="https://abogado.la/perdon-migratorio/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Guía sobre tipos de perdón</a>
            <a href="https://www.uscis.gov/es/forms/exenciones" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Página oficial de exenciones</a>
          </div>
        </div>
      </section>
      <FooterContacto />
    </main>
  );
} 