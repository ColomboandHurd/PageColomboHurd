"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import ConsultaFloatingButton from './ConsultaFloatingButton';

export default function FloatingButtons() {
  const pathname = usePathname();
  
  // Mostrar el botón de consulta en todas las páginas excepto en la página de inicio
  const showConsultaButton = pathname !== '/';

  return (
    <>
      <WhatsAppFloatingButton />
      {showConsultaButton && <ConsultaFloatingButton />}
    </>
  );
} 