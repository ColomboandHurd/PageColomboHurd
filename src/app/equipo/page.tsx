"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import FooterContacto from '@/components/FooterContacto';

const teamMembers = [
  {
    id: 1,
    name: "Dra. Valeria Gómez",
    position: "Abogada Asociada",
    age: "27 años",
    experience: "5 años de experiencia en derecho migratorio y humanitario",
    education: "Licenciatura en Derecho - Universidad de Los Andes\nMaestría en Derechos Humanos - Universidad Complutense de Madrid",
    specialties: ["Asilo y Refugio", "Visas Humanitarias", "Protección Internacional"],
    description: "Comprometida con la defensa de los derechos de migrantes y refugiados. Ha trabajado en casos de asilo político y visas humanitarias con un enfoque integral y humano.",
    image: "/equipo/draValeriaGomez.png"
  },
  {
    id: 2,
    name: "Dr. Nicolás Rivas",
    position: "Coordinador de Litigios Migratorios",
    age: "30 años",
    experience: "7 años de experiencia representando clientes en tribunales migratorios",
    education: "Doctorado en Derecho - Universidad Nacional Autónoma de México\nCurso de Litigación Oral en EE. UU.",
    specialties: ["Defensa ante Deportaciones", "Apelaciones Migratorias", "Litigación Oral"],
    description: "Especialista en defensa migratoria, con énfasis en procesos de deportación y apelaciones complejas. Apasionado por la justicia migratoria.",
    image: "/equipo/drNicolasRivas.png"
  },
  {
    id: 3,
    name: "Dra. Sofía Herrera",
    position: "Especialista en Visas de Inversión",
    age: "26 años",
    experience: "4 años asesorando empresarios extranjeros",
    education: "Licenciatura en Derecho - Pontificia Universidad Javeriana\nCertificación en Derecho de Negocios Internacionales – HarvardX",
    specialties: ["Visas E-2", "Derecho Corporativo Migratorio", "Estrategias de Inversión Legal"],
    description: "Asesora a inversionistas en procesos de visa E-2 y expansión de negocios. Tiene enfoque en planificación migratoria estratégica.",
    image: "/equipo/draSofiaHerrera.png"
  },
  {
    id: 4,
    name: "Dr. Andrés Medina",
    position: "Abogado Senior de Naturalización",
    age: "32 años",
    experience: "9 años apoyando procesos de Green Card y ciudadanía",
    education: "Licenciatura en Derecho - Universidad de Buenos Aires\nMaestría en Derecho Internacional - Universidad de Georgetown",
    specialties: ["Green Card por Familia o Trabajo", "Ciudadanía por Naturalización", "Ajuste de Estatus"],
    description: "Reconocido por su precisión en procesos de residencia permanente y ciudadanía. Brinda atención cercana y personalizada.",
    image: "/equipo/drAndresMedina.png"
  },
  {
    id: 5,
    name: "Dr. Matías Ortega",
    position: "Abogado Junior",
    age: "25 años",
    experience: "3 años en derecho consular y procesamiento de visas",
    education: "Licenciatura en Derecho - Universidad de Lima\nPrácticas profesionales en consulado de EE. UU. en Perú",
    specialties: ["Visas F-1 y J-1", "Procesos Consulares", "Reunificación Familiar"],
    description: "Joven promesa del derecho migratorio, con enfoque en asesoría consular para estudiantes, trabajadores temporales y reunificación familiar.",
    image: "/equipo/drMatiasOrtega.png"
  }
];

export default function EquipoPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-[#15396a] font-sans animate-fade-in-up">
      <div className="h-20 w-full" />
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight font-sans">Nuestro equipo</h1>
        <p className="text-base md:text-lg text-[#e0e7ef] text-center mb-10 max-w-2xl mx-auto font-sans font-normal">
          Somos un equipo de abogados especializados, comprometidos con brindar asesoría legal experta y personalizada en diversas áreas del derecho.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-4 w-full justify-center items-center mx-auto justify-items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col items-center min-w-[224px] max-w-[224px] font-playfair overflow-hidden group w-full border border-gray-700 transform hover:scale-105 mx-auto"
            >
              <div className="w-full flex justify-center items-center p-0">
                <div
                  className="w-56 h-80 relative flex items-center justify-center bg-[#f8fafc] border-b border-[#e0e7ef] group"
                  onMouseEnter={() => setHovered(member.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={224}
                    height={320}
                    className={`object-cover w-full h-full rounded-t-xl transition-all duration-300 ${
                      hovered === member.id ? 'ring-2 ring-inset ring-[#b8860b]' : ''
                    }`}
                  />
                  {hovered === member.id && (
                    <div className="absolute top-0 left-0 w-56 h-80 bg-[#1a365d] rounded-t-xl shadow-2xl ring-2 ring-inset ring-[#b8860b] px-4 py-4 flex flex-col gap-3 justify-start items-center animate-fadeIn z-20 transition-all duration-300 ease-out overflow-y-auto font-sans text-[12px] leading-relaxed">
                      <div className="w-full text-center space-y-3 text-white font-sans antialiased">
                        <div>
                          <span className="block font-bold mb-1 text-[#FFD700] font-sans text-[13px] tracking-wide">
                            Edad: <span className="font-medium text-white">{member.age}</span>
                          </span>
                        </div>
                        <div>
                          <span className="block font-bold mb-1 text-[#FFD700] font-sans text-[13px] tracking-wide">Experiencia</span>
                          <span className="block text-white font-medium font-sans">{member.experience}</span>
                        </div>
                        <div>
                          <span className="block font-bold mb-1 text-[#FFD700] font-sans text-[13px] tracking-wide">Educación</span>
                          <span className="block text-white font-medium font-sans whitespace-pre-line leading-tight font-smooth">{member.education}</span>
                        </div>
                        <div>
                          <span className="block font-bold mb-1 text-[#FFD700] font-sans text-[13px] tracking-wide">Descripción</span>
                          <span className="block italic text-white font-medium font-sans leading-tight font-smooth">{member.description}</span>
                        </div>
                        <div>
                          <span className="block font-bold mb-1 text-[#FFD700] font-sans text-[13px] tracking-wide">Especialidades</span>
                          <div className="flex flex-wrap gap-1.5 mt-1 justify-center">
                            {member.specialties.map((spec, idx) => (
                              <span key={idx} className="bg-white font-bold text-[11px] px-3 py-1 rounded-full border-2 border-[#FFD700] shadow-lg transition-all duration-200 text-[#1a365d] font-sans font-smooth transform-gpu">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full bg-transparent rounded-b-xl shadow-none px-2 py-2 flex flex-col items-center z-10">
                <h2
                  className="text-base md:text-lg font-extrabold mb-0 text-center leading-tight font-sans transition-colors duration-300 text-black"
                >
                  {member.name}
                </h2>
                <p className="font-medium text-xs md:text-sm text-[#b1a16c] text-center font-sans">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-48" />
      <FooterContacto />
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        .group:hover .z-20::-webkit-scrollbar {
          width: 4px;
        }
        .group:hover .z-20::-webkit-scrollbar-thumb {
          background: #bdbdbd;
          border-radius: 4px;
        }
        .group:hover .z-20::-webkit-scrollbar-track {
          background: transparent;
        }
        .group:hover .z-20 {
          scrollbar-width: thin;
          scrollbar-color: #bdbdbd transparent;
        }
        
        /* Mejoras para nitidez */
        .font-smooth {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .will-change-transform {
          will-change: transform;
        }
        
        .subpixel-antialiased {
          -webkit-font-smoothing: subpixel-antialiased;
        }
      `}</style>
    </main>
  );
} 