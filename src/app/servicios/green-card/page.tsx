"use client";

import React from 'react';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FooterContacto from '@/components/FooterContacto';

export default function GreenCardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] flex flex-col items-center pt-16 pb-10 px-2">
      <div className="h-20" /> {/* Espaciador para el Navbar */}
      {/* Sección superior: Título e imagen */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-20 md:mb-32">
        {/* Título a la izquierda */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a365d] mb-6">
            Green Card
          </h1>
        </div>
        {/* Imagen a la derecha */}
        <div className="flex-1 flex justify-center items-start">
          <Image
            src="/greencard.png"
            alt="Green Card"
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
              La Green Card (Tarjeta de Residente Permanente) permite a personas extranjeras vivir y trabajar legalmente en Estados Unidos de forma indefinida. Es un paso clave hacia la estabilidad migratoria y, en muchos casos, hacia la ciudadanía.
            </p>
          </div>
        </div>
      </section>
      {/* Sección: Vías de obtención */}
      <section className="w-full max-w-5xl mx-auto pt-24">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight uppercase text-[#1a365d]">Vías de obtención</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Puedes solicitar la Green Card a través de distintas categorías:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 shadow-md border-l-4 border-[#b8860b] p-6 rounded-r-lg">
              <span className="block text-xl font-bold text-[#1a365d] mb-2">Familiar</span>
              <span className="text-gray-700">Cónyuge, padres o hijos de ciudadanos/residentes</span>
            </div>
            <div className="bg-white/80 shadow-md border-l-4 border-[#b8860b] p-6 rounded-r-lg">
              <span className="block text-xl font-bold text-[#1a365d] mb-2">Empleo</span>
              <span className="text-gray-700">Trabajadores calificados, inversionistas o con habilidades especiales</span>
            </div>
            <div className="bg-white/80 shadow-md border-l-4 border-[#b8860b] p-6 rounded-r-lg">
              <span className="block text-xl font-bold text-[#1a365d] mb-2">Refugiado o asilado</span>
              <span className="text-gray-700">Personas con protección humanitaria</span>
            </div>
            <div className="bg-white/80 shadow-md border-l-4 border-[#b8860b] p-6 rounded-r-lg">
              <span className="block text-xl font-bold text-[#1a365d] mb-2">Lotería de visas</span>
              <span className="text-gray-700">Seleccionados por el programa de diversidad</span>
            </div>
          </div>
        </div>
      </section>
      {/* Sección: Preguntas frecuentes */}
      <section className="w-full max-w-5xl mx-auto pt-24">
        <div className="animate-fade-in-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-tight uppercase text-[#1a365d]">Preguntas frecuentes</h2>
          <div className="w-full flex flex-col gap-4 mt-8">
            <Accordion className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#b8860b]" />}>
                <Typography className="font-bold text-[#1a365d]">¿Cómo saber si califico para una Green Card?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Puedes calificar si tienes un familiar directo ciudadano o residente, una oferta de empleo, estatus de refugiado o asilado, o si fuiste seleccionado en la lotería de visas. Cada vía tiene requisitos específicos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#b8860b]" />}>
                <Typography className="font-bold text-[#1a365d]">¿Si me caso con un ciudadano estadounidense obtengo la Green Card automáticamente?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No. Aunque el matrimonio con un ciudadano puede ser una vía, deberás pasar por un proceso de solicitud, entrevistas y verificación para demostrar que la relación es legítima.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#b8860b]" />}>
                <Typography className="font-bold text-[#1a365d]">¿Qué es una Green Card condicional?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Es una residencia temporal de 2 años otorgada cuando el matrimonio tiene menos de dos años al momento de la aprobación. Debe convertirse en permanente antes de su vencimiento.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#b8860b]" />}>
                <Typography className="font-bold text-[#1a365d]">¿Cuánto tiempo debo esperar para solicitar la ciudadanía?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Generalmente, puedes aplicar después de 5 años como residente permanente. Si obtuviste la Green Card por matrimonio con un ciudadano, el plazo puede reducirse a 3 años.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="bg-white/80 shadow-lg border-l-4 border-[#b8860b] rounded-r-lg">
              <AccordionSummary expandIcon={<ExpandMoreIcon className="text-[#b8860b]" />}>
                <Typography className="font-bold text-[#1a365d]">¿Qué pasa si pierdo mi Green Card o cambia mi situación?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Debes solicitar una renovación o reemplazo con el Formulario I-90. Si enfrentas problemas legales o cambias de categoría, es importante consultar con un abogado migratorio.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      {/* Pie de página: Recursos */}
      <section className="w-full bg-transparent pt-24 pb-16 px-4 flex justify-center items-center">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-stretch justify-around gap-12 text-center md:text-left">
          {/* Columna 1: Formularios principales */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Formularios Clave</h3>
            <a href="https://www.uscis.gov/sites/default/files/document/forms/i-485.pdf" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1a365d] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">Formulario I-485 (PDF)</a>
            <a href="https://www.uscis.gov/sites/default/files/document/forms/i-90.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Formulario I-90 (Renovación)</a>
          </div>
          {/* Columna 2: Requisitos y guías */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Requisitos y Guías</h3>
            <a href="https://www.uscis.gov/es/formularios/guias-para-presentacion-de-formularios/lista-de-cotejo-sobre-evidencia-inicial-requerida-para-el-formulario-i-485-para-propositos" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Lista de cotejo de evidencia</a>
            <a href="https://www.uscis.gov/es/residencia-permanente-tarjeta-verde/categorias-de-elegibilidad-a-la-residencia-permanente" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Categorías de elegibilidad</a>
          </div>
          {/* Columna 3: Portales y seguimiento */}
          <div className="flex flex-col justify-start items-center md:items-start gap-4">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-2 uppercase tracking-wide">Portales y Recursos</h3>
            <a href="https://www.uscis.gov/es/green-card" target="_blank" rel="noopener noreferrer" className="bg-white text-[#1a365d] font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">Portal oficial de la Green Card</a>
            <a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry.html" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#b8860b] hover:underline transition">Programa de Lotería de Visas</a>
          </div>
        </div>
      </section>
      <FooterContacto />
    </main>
  );
} 