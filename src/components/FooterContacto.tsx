import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function FooterContacto() {
  return (
    <footer className="w-full bg-[var(--azul-legal)] px-0 text-white pt-10 pb-4">
      <div className="w-full flex flex-col md:flex-row items-stretch justify-between h-full px-4 md:px-12 xl:px-24 gap-8 md:gap-0">
        {/* Espacio a la izquierda solo en escritorio */}
        <div className="hidden md:block" style={{ width: '120px' }} />
        {/* Columna 1: Logo y eslogan */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1 w-full md:w-auto mx-auto md:mx-0 mb-8 md:mb-0 px-2">
          <Image src="/Logo.png" alt="Colombo & Hurd Logo" width={140} height={70} className="mb-4 mx-auto" />
          <p className="text-lg font-semibold text-[var(--dorado-elegante)] mb-2 text-center md:text-left">Tu futuro migratorio, nuestra misión.</p>
          <div className="h-1 w-16 bg-[var(--dorado-elegante)] rounded mb-4 mx-auto md:mx-0" />
          <p className="text-base opacity-90 text-center md:text-left">
            Firma boutique fundada por inmigrantes, dedicada a asistir a clientes de todo el mundo, desde grandes corporaciones hasta emprendedores, inversionistas y familias que desean vivir y trabajar en Estados Unidos.
          </p>
        </div>
        {/* Separador visual solo en escritorio */}
        <div className="hidden md:block h-48 w-px bg-white/20 mx-4 self-center" />
        {/* Columna 2: Contacto y oficina */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full md:w-auto mx-auto md:mx-0 gap-3 mb-8 md:mb-0 px-2">
          <h3 className="text-2xl font-bold text-white mb-2 text-center md:text-left">Contáctanos</h3>
          <div className="flex items-center gap-2 text-lg justify-center md:justify-start">
            <EnvelopeIcon className="h-6 w-6 text-[var(--dorado-elegante)]" />
            <a href="mailto:info@colombo-hurdlaw.com" className="hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">info@colombo-hurdlaw.com</a>
          </div>
          <div className="flex items-center gap-2 text-lg justify-center md:justify-start">
            <PhoneIcon className="h-6 w-6 text-[var(--dorado-elegante)]" />
            <a href="https://wa.me/19495947776" className="hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">+1 (949) 5947776</a>
          </div>
          <div className="flex items-center gap-2 text-lg justify-center md:justify-start">
            <MapPinIcon className="h-6 w-6 text-[var(--dorado-elegante)]" />
            <span>1146 E. Green St. Pasadena, CA 91106</span>
          </div>
        </div>
        {/* Separador visual solo en escritorio */}
        <div className="hidden md:block h-48 w-px bg-white/20 mx-4 self-center" />
        {/* Columna 3: Redes sociales (ícono + enlace) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full md:w-auto mx-auto md:mx-0 gap-4 mb-8 md:mb-0 px-2">
          <h3 className="text-2xl font-bold text-white mb-2 text-center md:text-left">Redes Sociales</h3>
          <div className="flex flex-col gap-3 w-full items-center">
            <a href="https://www.facebook.com/profile.php?id=61577115076052" className="flex items-center justify-center gap-2 text-lg font-medium hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">
              {/* Facebook */}
              <svg width="24" height="24" fill="currentColor" className="text-[var(--dorado-elegante)]" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              <span>Facebook</span>
            </a>
            <a href="https://wa.me/19495947776" className="flex items-center justify-center gap-2 text-lg font-medium hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">
              {/* WhatsApp */}
              <svg width="24" height="24" fill="currentColor" className="text-[var(--dorado-elegante)]" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.77 3.06 1.18 4.79 1.18h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM12.04 20.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.84-1.32-1.28-2.84-1.28-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42s2.42 3.63 2.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.14c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.55.12-.64.82-.79.98-.29.18-.55.06c-.25-.12-1.07-.39-2.04-1.26s-1.45-1.95-1.61-2.28c-.16-.33-.02-.51.11-.64s.25-.29.38-.44c.12-.12.16-.2.24-.33.08-.12.04-.25-.02-.37s-.55-1.32-.75-1.81c-.2-.48-.4-.42-.55-.42h-.48c-.16 0-.42.06-.64.3s-.86.84-.86 2.04c0 1.2.88 2.37 1 2.53s1.75 2.67 4.22 3.72c.59.25 1.05.4 1.41.51.6.18 1.14.15 1.56.09.48-.06 1.47-.6 1.68-1.18s.21-1.09.15-1.18c-.06-.09-.16-.15-.31-.27z"/></svg>
              <span>WhatsApp</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-2 text-lg font-medium hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">
              {/* Instagram */}
              <svg width="24" height="24" fill="currentColor" className="text-[var(--dorado-elegante)]" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.316 2.697 2.297 2.491 3.409 2.433 4.69 2.375 5.97 2.363 6.379 2.363 12c0 5.621.012 6.03.07 7.31.058 1.281.264 2.393 1.245 3.374.981.981 2.093 1.187 3.374 1.245 1.28.058 1.689.07 7.31.07s6.03-.012 7.31-.07c1.281-.058 2.393-.264 3.374-1.245.981-.981 1.187-2.093 1.245-3.374.058-1.28.07-1.689.07-7.31s-.012-6.03-.07-7.31c-.058-1.281-.264-2.393-1.245-3.374C19.393.334 18.281.128 17 .07 15.719.012 15.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-2 text-lg font-medium hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">
              {/* LinkedIn */}
              <svg width="24" height="24" fill="currentColor" className="text-[var(--dorado-elegante)]" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z"/></svg>
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center justify-center gap-2 text-lg font-medium hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">
              {/* TikTok */}
              <svg width="24" height="24" fill="currentColor" className="text-[var(--dorado-elegante)]" viewBox="0 0 24 24"><path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-7 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm3.5 7.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z"/></svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>
        {/* Separador visual solo en escritorio */}
        <div className="hidden md:block h-48 w-px bg-white/20 mx-4 self-center" />
        {/* Columna 4: Recursos */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 w-full md:w-auto mx-auto md:mx-0 gap-4 px-2">
          <h3 className="text-2xl font-bold text-white mb-2 text-center md:text-left">Recursos</h3>
          <ul className="flex flex-col gap-2 w-full items-center md:items-start">
            <li><a href="https://www.uscis.gov/es" className="hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">Blog de inmigración</a></li>
            <li><a href="https://www.state.gov/visas/" className="hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">Guía de visas</a></li>
            <li><a href="https://ais.usvisa-info.com/es-CO/iv/information/faqs" className="hover:text-[var(--dorado-elegante)] transition-colors" target="_blank" rel="noopener noreferrer">Preguntas frecuentes</a></li>
            <li><a href="/informacion#testimonios" className="hover:text-[var(--dorado-elegante)] transition-colors">Testimonios</a></li>
          </ul>
        </div>
      </div>
      <div className="text-white text-sm opacity-70 text-center border-t border-white/10 mt-8 pt-4">
        &copy; {new Date().getFullYear()} Colombo & Hurd. Todos los derechos reservados.
      </div>
    </footer>
  );
} 