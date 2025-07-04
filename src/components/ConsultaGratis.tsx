"use client";
import Link from 'next/link';
import { trackButtonClick } from '@/lib/gtag';

export default function ConsultaGratis() {
  const handleButtonClick = () => {
    trackButtonClick('evaluar_perfil');
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-28 bg-white mt-32 mb-32 animate-fade-in-up">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--azul-legal)] mb-8 text-center animate-fade-in-up">
        <span className="text-[var(--azul-legal)] font-extrabold">En </span><span className="text-[var(--dorado-elegante)] font-extrabold">Colombo&Hurd,</span> <span className="text-[var(--azul-legal)] font-extrabold">queremos lo mejor para ti.</span><br />
        <span className="font-normal text-2xl md:text-3xl text-[var(--azul-legal)]">Evaluando tu perfil, podemos ayudarte a definir a qué tipo de visa puedes aplicar inmediatamente<br />o qué proceso/servicio podemos ofrecerte según tu situación y necesidad.</span>
      </h2>
      <Link href="/consulta">
        <button
          onClick={handleButtonClick}
          className="px-16 py-7 rounded-full bg-[var(--dorado-elegante)] text-white text-3xl font-extrabold shadow-2xl hover:bg-[var(--azul-legal)] hover:text-[var(--dorado-elegante)] transition-all duration-300 uppercase tracking-wider animate-fade-in-up transform hover:scale-110 hover:shadow-yellow-400/50 border-4 border-transparent hover:border-[var(--dorado-elegante)] focus:outline-none focus:ring-4 focus:ring-[var(--dorado-elegante)]"
          style={{ marginTop: '0.5cm', animationDelay: '0.3s', letterSpacing: '0.12em' }}
        >
          Evaluar Perfil sin costo
        </button>
      </Link>
      {/* Diagrama visual de pasos */}
      <div className="mt-20 w-full flex justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <svg width="600" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
          {/* Línea principal */}
          <rect x="60" y="38" width="480" height="4" rx="2" fill="#b8860b" />
          {/* Paso 1 */}
          <circle cx="60" cy="40" r="28" fill="#1a365d" />
          <text x="60" y="45" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">1</text>
          <text x="60" y="100" textAnchor="middle" fill="#1a365d" fontSize="16">Consulta</text>
          {/* Paso 2 */}
          <circle cx="300" cy="40" r="28" fill="#1a365d" />
          <text x="300" y="45" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">2</text>
          <text x="300" y="100" textAnchor="middle" fill="#1a365d" fontSize="16">Análisis</text>
          {/* Paso 3 */}
          <circle cx="540" cy="40" r="28" fill="#1a365d" />
          <text x="540" y="45" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">3</text>
          <text x="540" y="100" textAnchor="middle" fill="#1a365d" fontSize="16">Respuesta</text>
        </svg>
      </div>
    </section>
  );
} 