"use client";

import React from 'react';

export default function ConsultaFloatingButton() {
  return (
    <a
      href="/consulta"
      className="fixed bottom-20 right-8 z-50 bg-gradient-to-r from-[#1a365d] to-[#2d5a87] hover:from-[#2d5a87] hover:to-[#1a365d] text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-4 group"
      style={{
        boxShadow: '0 8px 25px rgba(26, 54, 93, 0.25)'
      }}
      aria-label="Solicitar perfil gratis"
    >
      {/* Icono de checkmark/formulario */}
      <svg
        width="34"
        height="34"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      
      {/* Texto Perfil Gratis */}
      <span className="font-bold text-lg drop-shadow-lg group-hover:text-[#FFD700] transition-colors duration-300">Perfil Gratis</span>
      
      {/* Efecto de brillo dorado sutil */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/10 to-[#FFD700]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        ¡Solicita tu perfil gratuito!
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </div>
    </a>
  );
} 