"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import FooterContacto from '@/components/FooterContacto';

const teamMembers = [
  {
    id: 1,
    name: "Dra. Lorena Guadalupe Cardenas Rosales",
    position: "Especialista en Visas de Trabajo y Residencia Permanente",
    age: "27 años",
    experience: "5 años de experiencia en derecho migratorio y humanitario",
    education: "Licenciatura en Derecho – Universidad de Los Andes\nMaestría en Derechos Humanos – Universidad Complutense de Madrid",
    specialties: ["Asilo y Refugio", "Visas Humanitarias", "Autorización de Empleo (EAD)"],
    description: "Comprometida con la defensa de los derechos de migrantes y refugiados. Ha tramitado casos de asilo político y visas humanitarias con un enfoque integral y humano.",
    image: "/equipo/draValeriaGomez.png",
    category: "asilo"
  },
  {
    id: 2,
    name: "Dra. Emma Brigitte Baker",
    position: "Especialista en Visas de Trabajo y Residencia Permanente",
    age: "32 años",
    experience: "7 años en visas de trabajo y residencia permanente",
    education: "Licenciatura en Derecho – Universidad Nacional Autónoma de México\nLLM en Derecho Migratorio – Georgetown University",
    specialties: ["Visa H1B", "Visa H2B", "EB-2 (Profesionales con grado avanzado)"],
    description: "Experta en peticiones H1B y H2B para profesionales y trabajadores temporales. Asesora a empresas multinacionales y startups tecnológicas.",
    image: "/equipo/draSofiaHerrera.png",
    category: "visas-trabajo"
  },
  {
    id: 3,
    name: "Dr. Joseph Matthew Alaniz",
    position: "Abogado de Visas de Empleo y Méritos",
    age: "30 años",
    experience: "6 años asesorando a inversionistas y profesionales",
    education: "Licenciatura en Derecho – Pontificia Universidad Católica de Chile\nMaestría en Derecho Internacional – Universidad de Columbia",
    specialties: ["EB-2 NIW (Interés Nacional)", "EB-3 (Trabajadores especializados)", "Naturalización"],
    description: "Se especializa en visas de empleo basadas en méritos (EB-2 NIW y EB-3). Ha logrado aprobaciones rápidas por razones excepcionales de interés nacional.",
    image: "/equipo/abogadoCarlos.png",
    category: "green-card"
  },
  {
    id: 4,
    name: "Dr. Ricardo Peña",
    position: "Abogado de Litigio y Trámites Migratorios",
    age: "38 años",
    experience: "10 años en litigio y trámites migratorios",
    education: "Licenciatura en Derecho – Universidad de Buenos Aires\nLLM en Derecho Procesal – NYU School of Law",
    specialties: ["Perdón (I-601/I-601A)", "Recursos de deportación", "Asilo político"],
    description: "Ha representado con éxito recursos de deportación y peticiones de perdón (waivers). Su experiencia en cortes de inmigración es amplia y rigurosa.",
    image: "/equipo/persona8.png",
    category: "litigio"
  },
  {
    id: 5,
    name: "Dr. Alejandro Medina",
    position: "Especialista en Admisiones Consulares y USCIS",
    age: "35 años",
    experience: "8 años en admisiones consulares y USCIS",
    education: "Licenciatura en Derecho – Universidad de Salamanca\nMaestría en Migración y Políticas Públicas – LSE",
    specialties: ["EB-2 (Avanzados)", "EB-3 (Especializados)", "Green Card Familiar y de Empleo"],
    description: "Gestiona procesos consolidados de visas de inmigrante y no inmigrante. Fuerte enfoque en cumplimiento regulatorio y mejora de tiempos de trámite.",
    image: "/equipo/abogadoJuan.png",
    category: "green-card"
  },
  {
    id: 6,
    name: "Dra. Jessie Charles",
    position: "Abogada Corporativa y Familiar",
    age: "40 años",
    experience: "12 años en asesoría corporativa y familiar",
    education: "Licenciatura en Derecho – Universidad de Sevilla\nMBA con énfasis en Derecho Migratorio – Wharton School",
    specialties: ["Visa H1B para ejecutivos", "EB-5 (Inversionistas)", "Asilo y Visas Humanitarias"],
    description: "Combina conocimientos empresariales con derecho migratorio para emprendedores e inversionistas. Asesora planes de crecimiento y traslado de ejecutivos.",
    image: "/equipo/persona6.png",
    category: "visas-trabajo"
  },
  {
    id: 7,
    name: "Dr. Patrick Alcalá",
    position: "Especialista en Naturalización y Ciudadanía",
    age: "29 años",
    experience: "4 años en servicios de naturalización y ciudadanía",
    education: "Licenciatura en Derecho – Universidad de Granada\nDiploma en Derecho Constitucional – Harvard University",
    specialties: ["Naturalización", "Ciudadanía derivada", "Green Card"],
    description: "Se dedica a casos de naturalización, trámite de ciudadanía y doble nacionalidad. Su enfoque es personalizado y orientado al cumplimiento de plazos.",
    image: "/equipo/persona16.png",
    category: "naturalizacion"
  },
  {
    id: 8,
    name: "Dr. Manuel Herrera",
    position: "Abogado Penal y Humanitario",
    age: "42 años",
    experience: "15 años en derecho migratorio penal y humanitario",
    education: "Licenciatura en Derecho – Universidad de Georgetown\nLLM en Derecho Penal Internacional – University of Oxford",
    specialties: ["Perdón (I-601/I-212)", "Defensa en cortes de inmigración", "Visas U y T (víctimas de delitos y trata)"],
    description: "Experto en intersección de inmigración y derecho penal. Atiende casos con antecedentes penales, perdones y defensas de deportación.",
    image: "/equipo/persona11.png",
    category: "litigio"
  },
  {
    id: 9,
    name: "Dr. Landon Reeve",
    position: "Abogado de Peticiones Familiares y Laborales",
    age: "34 años",
    experience: "9 años en peticiones familiares y laborales",
    education: "Licenciatura en Derecho – Universidad de São Paulo\nMaestría en Derecho Internacional de Familia – Yale Law School",
    specialties: ["Green Card Familiar (I-130)", "EB-2 y EB-3 por empleo", "Autorización de Empleo (EAD)"],
    description: "Enfocado en reagrupación familiar y patrocinio por empleo. Maneja peticiones I-130 e I-140 con altos índices de aprobación.",
    image: "/equipo/persona13.png",
    category: "derecho-familiar"
  },
  {
    id: 10,
    name: "Dr. Esteban Navarro",
    position: "Abogado de Litigio y Apelaciones",
    age: "37 años",
    experience: "11 años en litigio y asesoría estratégica",
    education: "Licenciatura en Derecho – Universidad de Toronto\nLLM en Derecho de Inmigración – University of California, Berkeley",
    specialties: ["Apelaciones AAO", "EB-2 NIW", "H1B y H2B"],
    description: "Combina habilidad litigiosa con estrategias de preparación documental. Brinda apoyo integral en apelaciones (AAO) y revisiones judiciales.",
    image: "/equipo/persona14.png",
    category: "litigio"
  },
  {
    id: 11,
    name: "Dra. Mariana Paredes",
    position: "Abogada de Derecho Familiar y Migratorio",
    age: "33 años",
    experience: "7 años en derecho familiar y migratorio",
    education: "Licenciatura en Derecho – Universidad Autónoma de Madrid\nMaestría en Derecho de Familia – Universidad de Barcelona",
    specialties: ["Reagrupación familiar", "Visas de cónyuge", "Green Card por matrimonio"],
    description: "Especialista en procesos de reunificación familiar y visas de cónyuge. Ha gestionado exitosamente casos de green card por matrimonio.",
    image: "/equipo/persona10.png",
    category: "derecho-familiar"
  },
  {
    id: 12,
    name: "Dr. Joseph Daniels Brickett",
    position: "Abogado de Visas de Estudio y Trabajo",
    age: "28 años",
    experience: "5 años en asesoría a estudiantes y profesionales extranjeros",
    education: "Licenciatura en Derecho – Universidad de la República (Uruguay)\nDiplomado en Derecho Internacional – Universidad de Chile",
    specialties: ["Visas F-1 y J-1", "OPT y CPT", "H-1B para recién graduados"],
    description: "Asesora a estudiantes internacionales y jóvenes profesionales en procesos de visa y transición a empleo en EE.UU.",
    image: "/equipo/drNicolasRivas.png",
    category: "visas-trabajo"
  },
  {
    id: 13,
    name: "Dr. Oscar Patiño",
    position: "Abogado de Apelaciones y Defensa Migratoria",
    age: "36 años",
    experience: "10 años en defensa migratoria y apelaciones",
    education: "Licenciatura en Derecho – Universidad Nacional de Córdoba\nEspecialización en Derecho Procesal – Universidad de Buenos Aires",
    specialties: ["Apelaciones migratorias", "Defensa ante deportación", "Perdón I-601A"],
    description: "Defensor de migrantes en procesos de deportación y apelaciones. Ha logrado revertir numerosas órdenes de remoción.",
    image: "/equipo/persona7.png",
    category: "litigio"
  },
  {
    id: 14,
    name: "Dr. Antonio Ayala",
    position: "Abogado de Empresas y Startups",
    age: "39 años",
    experience: "13 años en asesoría a empresas y startups tecnológicas",
    education: "Licenciatura en Derecho – Universidad de Monterrey\nMBA – Stanford Graduate School of Business",
    specialties: ["Visas L-1", "Transferencia de ejecutivos", "EB-1 para managers"],
    description: "Asesora a empresas en traslado de ejecutivos y obtención de visas para managers y personal clave.",
    image: "/equipo/persona12.png",
    category: "visas-trabajo" 
  },
  {
    id: 15,
    name: "Dr. Fernando Ramírez",
    position: "Abogado de Ciudadanía y Naturalización",
    age: "31 años",
    experience: "6 años en procesos de ciudadanía y doble nacionalidad",
    education: "Licenciatura en Derecho – Universidad de Costa Rica\nDiplomado en Derecho Internacional – Universidad de Salamanca",
    specialties: ["Ciudadanía por nacimiento", "Naturalización", "Ciudadanía derivada"],
    description: "Acompaña a clientes en procesos de obtención de ciudadanía y doble nacionalidad, con enfoque en casos complejos.",
    image: "/equipo/persona9.png",
    category: "naturalizacion"
  }
];

export default function EquipoPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#15396a] via-[#1e2a47] to-[#15396a] font-sans animate-fade-in-up">
      <div className="h-20 w-full" />
      <div className="w-full px-0 py-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight font-sans">Nuestro equipo</h1>
        <p className="text-base md:text-lg text-[#e0e7ef] text-center mb-10 max-w-2xl mx-auto font-sans font-normal">
          Somos un equipo de abogados especializados, comprometidos con brindar asesoría legal experta y personalizada en diversas áreas del derecho.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-4 w-full">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center w-full h-[400px] font-playfair overflow-hidden group transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="w-full flex justify-center items-center p-0">
                <div
                  className="w-56 h-80 relative flex items-center justify-center bg-[#f8fafc] group rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300"
                  onMouseEnter={() => setHovered(member.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={224}
                    height={320}
                    className={`object-cover w-full h-full rounded-2xl transition-all duration-300 ${
                      hovered === member.id ? 'ring-2 ring-inset ring-[#b8860b]' : ''
                    }`}
                  />
                  {hovered === member.id && (
                    <div className="absolute top-0 left-0 w-56 h-80 bg-[#1a365d] rounded-2xl shadow-2xl ring-2 ring-inset ring-[#b8860b] px-4 py-4 flex flex-col gap-3 justify-start items-center animate-fadeIn z-20 transition-all duration-300 ease-out overflow-y-auto font-sans text-[12px] leading-relaxed">
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
              <div className="w-full bg-transparent px-2 py-2 flex flex-col items-center z-10 mt-2">
                <h2
                  className="text-base md:text-lg font-extrabold mb-0 text-center leading-tight font-sans transition-colors duration-300 text-white drop-shadow"
                >
                  {member.name}
                </h2>
                <p className="font-medium text-xs md:text-sm text-[#e0e7ef] text-center font-sans drop-shadow">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Política de Tratamiento de Datos - Modal interactivo */}
      <PoliticaDatosModal />
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

{/* Política de Tratamiento de Datos - Modal interactivo */}
function PoliticaDatosModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Cerrar con Esc
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Cerrar al hacer clic fuera
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-8">
      <button
        onClick={() => setOpen(true)}
        className="text-[var(--dorado-elegante)] underline font-semibold text-lg hover:text-[var(--azul-legal)] transition-colors"
      >
        Política de Tratamiento de Datos Personales
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-[var(--azul-legal)] rounded-none shadow-2xl w-full h-full p-4 md:p-16 relative animate-scale-in flex flex-col justify-center items-center gap-4 overflow-auto"
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-white hover:text-red-400 text-3xl font-bold focus:outline-none"
              aria-label="Cerrar"
            >
              ×
            </button>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center text-white mb-6">
              Política de Tratamiento de Datos Personales
            </h2>
            <div className="text-lg md:text-2xl text-white leading-relaxed text-justify space-y-6 max-w-3xl mx-auto">
              <p>
                En Colombo & Hurd, la protección de tus datos personales es una prioridad. La información que nos proporcionas será utilizada exclusivamente para fines de contacto, asesoría y prestación de servicios legales migratorios, de acuerdo con la normativa vigente.
              </p>
              <p>
                Tus datos no serán compartidos con terceros sin tu consentimiento, salvo obligación legal. Puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición en cualquier momento, contactándonos a través de los medios oficiales.
              </p>
              <p>
                Para más información, escríbenos a{' '}
                <a href="mailto:info@colombo-hurdlaw.com" className="text-[var(--dorado-elegante)] underline hover:text-white">
                  info@colombo-hurdlaw.com
                </a>.
              </p>
            </div>
            <p className="italic text-white text-base text-center mt-6 opacity-80">
              *Este aviso cumple con la Ley de Protección de Datos Personales y garantiza la confidencialidad de tu información.*
            </p>
            {/* Botón cerrar debajo en móvil */}
            <button
              onClick={() => setOpen(false)}
              className="mt-8 w-full md:w-auto py-3 px-8 rounded-lg bg-white text-[var(--azul-legal)] font-semibold text-xl hover:bg-[var(--dorado-elegante)] hover:text-white transition-colors"
            >
              Cerrar
            </button>
          </div>
          <style jsx>{`
            @keyframes scaleIn {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .animate-scale-in {
              animation: scaleIn 0.18s;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fade-in {
              animation: fadeIn 0.18s;
            }
          `}</style>
        </div>
      )}
    </div>
  );
}
