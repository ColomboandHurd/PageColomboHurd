"use client";

import React from 'react';

export default function ServiciosPage() {
  const servicios = [
    {
      id: 1,
      titulo: "Visas de Trabajo",
      descripcion: "H1B, L1, O1, TN y otras visas de trabajo para profesionales calificados.",
      icono: "💼",
      color: "from-blue-600 to-blue-800",
      detalles: [
        "Visa H1B para profesionales",
        "Visa L1 para transferencias",
        "Visa O1 para talentos extraordinarios",
        "Visa TN para profesionales NAFTA"
      ]
    },
    {
      id: 2,
      titulo: "Residencia Permanente",
      descripcion: "Green Card a través de trabajo, familia o inversión.",
      icono: "🟢",
      color: "from-green-600 to-green-800",
      detalles: [
        "EB-1 para trabajadores extraordinarios",
        "EB-2 NIW para profesionales",
        "EB-3 para trabajadores calificados",
        "EB-5 para inversores"
      ]
    },
    {
      id: 3,
      titulo: "Ciudadanía",
      descripcion: "Proceso de naturalización para obtener la ciudadanía estadounidense.",
      icono: "🇺🇸",
      color: "from-red-600 to-red-800",
      detalles: [
        "Naturalización por residencia",
        "Ciudadanía para cónyuges",
        "Ciudadanía para hijos",
        "Renovación de certificados"
      ]
    },
    {
      id: 4,
      titulo: "Reunificación Familiar",
      descripcion: "Reunir familias a través de visas familiares y ajuste de estatus.",
      icono: "👨‍👩‍👧‍👦",
      color: "from-purple-600 to-purple-800",
      detalles: [
        "Visas para cónyuges",
        "Visas para hijos",
        "Visas para padres",
        "Ajuste de estatus familiar"
      ]
    },
    {
      id: 5,
      titulo: "Asilo y Refugio",
      descripcion: "Protección legal para personas que temen persecución en su país.",
      icono: "🛡️",
      color: "from-orange-600 to-orange-800",
      detalles: [
        "Asilo político",
        "Refugio humanitario",
        "Protección temporal",
        "Cancelación de deportación"
      ]
    },
    {
      id: 6,
      titulo: "Permisos y Documentos",
      descripcion: "Renovación y gestión de documentos migratorios.",
      icono: "📋",
      color: "from-teal-600 to-teal-800",
      detalles: [
        "Renovación de Green Card",
        "Permisos de trabajo",
        "Permisos de viaje",
        "Documentos de identidad"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-[#15396a] font-sans">
      <div className="container mx-auto px-4 pt-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[20vh] mb-12">
          <section className="relative bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-white/80 px-12 rounded-3xl shadow-2xl border-4 border-[#C8102E] flex flex-col items-center max-w-4xl mx-auto mb-8 overflow-hidden" style={{ paddingTop: '1.5cm', paddingBottom: '1.5cm' }}>
            <div className="absolute inset-0 bg-white/10 pointer-events-none rounded-3xl" />
            <div className="relative z-10 flex flex-col items-center w-full">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center font-['Poppins'] tracking-wide mb-8 drop-shadow-lg underline decoration-[#FFD700] decoration-4 underline-offset-[0.5cm]">
                Nuestros Servicios Legales
              </h1>
              <p className="text-base md:text-lg text-white max-w-3xl text-center leading-relaxed font-['Inter'] mb-8 px-4 py-2 rounded-xl bg-[#112244]/60 shadow-md backdrop-blur-sm border border-[#FFD700]/30">
                Ofrecemos servicios legales integrales en inmigración con más de 15 años de experiencia. Nuestro equipo de abogados especializados te guiará en cada paso de tu proceso migratorio.
              </p>
            </div>
          </section>
        </div>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden"
            >
              {/* Header del servicio */}
              <div className={`bg-gradient-to-r ${servicio.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{servicio.icono}</span>
                  <div>
                    <h3 className="text-xl font-bold font-['Poppins']">{servicio.titulo}</h3>
                    <p className="text-sm opacity-90 mt-1">{servicio.descripcion}</p>
                  </div>
                </div>
              </div>
              
              {/* Detalles del servicio */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-[#C8102E] mb-4 font-['Poppins']">
                  Incluye:
                </h4>
                <ul className="space-y-2">
                  {servicio.detalles.map((detalle, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-4 h-4 text-[#C8102E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-['Inter']">{detalle}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Botón de contacto */}
                <div className="mt-6 flex justify-center w-full">
                  <a
                    href={`https://wa.me/19495947776?text=Quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20${encodeURIComponent(servicio.titulo)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFD700] text-[#1a365d] font-bold text-lg rounded-3xl transition-colors duration-300 font-['Poppins'] flex items-center justify-center gap-2"
                    style={{
                      minWidth: '320px',
                      maxWidth: '100%',
                      padding: '20px 48px',
                      display: 'block',
                      textAlign: 'center',
                      lineHeight: '1.2',
                      fontWeight: 700,
                      fontSize: '1.35rem',
                      border: 'none',
                    }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#e6be00'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#FFD700'}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24" className="text-green-600"><path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.463 3.484 1.341 4.997l-1.409 5.151a1.001 1.001 0 0 0 1.225 1.225l5.151-1.409a9.953 9.953 0 0 0 4.997 1.341c5.522 0 9.997-4.475 9.997-9.997s-4.475-9.997-9.997-9.997zm0 17.994a7.96 7.96 0 0 1-4.073-1.142.999.999 0 0 0-.708-.104l-3.463.947.947-3.463a1 1 0 0 0-.104-.708A7.96 7.96 0 0 1 4.01 12c0-4.418 3.582-8 7.994-8 4.418 0 8 3.582 8 8 0 4.412-3.582 7.994-8 7.994zm4.425-5.571c-.242-.121-1.434-.707-1.655-.788-.221-.081-.382-.121-.543.121-.161.242-.623.788-.764.949-.141.161-.282.181-.523.06-.242-.121-1.022-.377-1.946-1.201-.719-.641-1.205-1.433-1.347-1.675-.141-.242-.015-.373.106-.494.109-.108.242-.282.363-.423.121-.141.161-.242.242-.403.081-.161.04-.302-.02-.423-.06-.121-.543-1.312-.744-1.797-.196-.471-.396-.406-.543-.414l-.463-.008c-.161 0-.423.06-.646.302-.221.242-.846.826-.846 2.012 0 1.186.866 2.332.987 2.493.121.161 1.705 2.604 4.136 3.548.578.199 1.028.318 1.379.408.579.147 1.106.126 1.523.077.465-.056 1.434-.586 1.637-1.152.202-.566.202-1.051.141-1.152-.06-.101-.221-.161-.463-.282z"/></svg>
                    Solicitar servicio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de contacto */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#C8102E] mb-4 font-['Poppins']">
              ¿Necesitas Asesoría Personalizada?
            </h2>
            <p className="text-gray-700 mb-6 font-['Inter']">
              Nuestros abogados especializados están listos para ayudarte con tu caso específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FFD700] text-[#C8102E] font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors duration-300 font-['Poppins']">
                Consulta Gratuita
              </button>
              <button className="bg-[#C8102E] text-white font-bold py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-300 font-['Poppins']">
                Contactar Abogado
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 