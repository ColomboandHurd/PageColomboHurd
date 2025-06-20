'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isServiciosOpen, setIsServiciosOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServiciosOpen, setIsMobileServiciosOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const serviciosOptions = [
    { href: '/servicios/asilo', label: 'Asilo' },
    { href: '/servicios/autorizacion-empleo', label: 'Autorización de Empleo' },
    { href: '/servicios/green-card', label: 'Green Card' },
    { href: '/servicios/naturalizacion', label: 'Naturalización' },
    { href: '/servicios/perdon', label: 'Perdón' }
  ];

  return (
    <nav className="w-full bg-[var(--azul-legal)] fixed top-0 left-0 z-50 shadow">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center h-16">
          <Image src="/Logo.png" alt="Colombo & Hurd Logo" width={150} height={60} className="object-contain h-12 w-auto" priority />
        </Link>
        {/* Menú hamburguesa en móvil */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--dorado-elegante)]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {/* Enlaces en escritorio */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <Link href="/" className={isActive('/') ? 'active text-[var(--dorado-elegante)] font-bold' : ''}>Inicio</Link>
          <Link href="/informacion" className={isActive('/informacion') ? 'active text-[var(--dorado-elegante)] font-bold' : ''}>Información</Link>
          <Link href="/equipo" className={isActive('/equipo') ? 'active text-[var(--dorado-elegante)] font-bold' : ''}>Equipo</Link>
          <Link href="/noticias" className={isActive('/noticias') ? 'active text-[var(--dorado-elegante)] font-bold' : ''}>Noticias</Link>
          {/* Dropdown Servicios */}
          <div
            className="relative"
            onMouseEnter={() => setIsServiciosOpen(true)}
            onMouseLeave={() => setIsServiciosOpen(false)}
          >
            <button
              className={`servicios-btn flex items-center gap-1 px-2 py-1 rounded transition-colors ${isActive('/servicios') ? 'active text-[var(--dorado-elegante)] font-bold' : 'text-white'}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit', height: '100%' }}
            >
              Servicios
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isServiciosOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            {isServiciosOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div className="py-2">
                  {serviciosOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className="dropdown-link block px-4 py-3 hover:bg-[#FFD700] hover:text-[#C8102E] transition-colors duration-200 font-medium"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[var(--azul-legal)] shadow-lg flex flex-col items-center gap-2 py-6 z-40 animate-fade-in-up">
            <Link href="/" className={`w-full text-center py-2 ${isActive('/') ? 'text-[var(--dorado-elegante)] font-bold' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
            <Link href="/informacion" className={`w-full text-center py-2 ${isActive('/informacion') ? 'text-[var(--dorado-elegante)] font-bold' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>Información</Link>
            <Link href="/equipo" className={`w-full text-center py-2 ${isActive('/equipo') ? 'text-[var(--dorado-elegante)] font-bold' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>Equipo</Link>
            <Link href="/noticias" className={`w-full text-center py-2 ${isActive('/noticias') ? 'text-[var(--dorado-elegante)] font-bold' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>Noticias</Link>
            {/* Dropdown Servicios en móvil */}
            <button
              className="w-full flex items-center justify-center gap-1 py-2 text-white focus:outline-none"
              onClick={() => setIsMobileServiciosOpen((prev) => !prev)}
            >
              Servicios
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isMobileServiciosOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isMobileServiciosOpen && (
              <div className="w-full bg-white rounded-lg shadow-xl border border-gray-200 z-50 mt-2">
                <div className="py-2">
                  {serviciosOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className="block px-4 py-3 text-[#1a365d] hover:bg-[#FFD700] hover:text-[#C8102E] transition-colors duration-200 font-medium text-center"
                      onClick={() => { setIsMobileMenuOpen(false); setIsMobileServiciosOpen(false); }}
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 