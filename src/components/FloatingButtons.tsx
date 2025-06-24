"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import ConsultaFloatingButton from './ConsultaFloatingButton';

export default function FloatingButtons() {
  const pathname = usePathname();
  
  // No mostrar el botón de consulta en la página de inicio ni en la página de consulta
  const showConsultaButton = pathname !== '/' && pathname !== '/consulta';

  return (
    <>
      <WhatsAppFloatingButton pathname={pathname} />
      {showConsultaButton && <ConsultaFloatingButton />}
    </>
  );
} 