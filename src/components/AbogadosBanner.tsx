import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function AbogadosBanner() {
  return (
    <section className="w-full flex justify-center items-center py-12 bg-transparent">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl px-4">
        {/* Imagen a la izquierda con animación de flotación */}
        <div className="flex-shrink-0 shadow-xl rounded-3xl overflow-hidden bg-white p-2 animate-float" style={{ boxShadow: '0 8px 40px 0 rgba(30, 58, 138, 0.10)' }}>
          <Image
            src="/servicios.png"
            alt="IMMIGRATION SERVICES"
            width={420}
            height={420}
            className="object-cover rounded-2xl w-[340px] h-[340px] md:w-[420px] md:h-[420px]"
            priority
          />
        </div>
        {/* Bloque de texto a la derecha */}
        <div className="flex-1 bg-white rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col justify-center min-h-[340px] max-w-2xl animate-fade-in-up" style={{ boxShadow: '0 8px 40px 0 rgba(30, 58, 138, 0.10)' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#18345c] mb-6 leading-tight">Soluciones Migratorias<br className="hidden md:block"/>Profesionales</h2>
          <p className="text-lg md:text-xl text-[#2d425a] mb-6 font-medium leading-relaxed max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl" style={{textAlign:'left'}}>
            Asesoría experta y acompañamiento personalizado para tu proceso migratorio.<br/>
            Confía en un equipo de abogados con experiencia, ética y resultados comprobados.
          </p>
          <ul className="space-y-4 mt-2">
            <li className="flex items-center gap-3 text-base md:text-lg font-semibold text-[#2563eb]">
              <CheckCircleIcon className="w-6 h-6 text-[#2563eb]" />
              Visas de trabajo y residencia
            </li>
            <li className="flex items-center gap-3 text-base md:text-lg font-semibold text-[#2563eb]">
              <CheckCircleIcon className="w-6 h-6 text-[#2563eb]" />
              Estrategias legales a tu medida
            </li>
            <li className="flex items-center gap-3 text-base md:text-lg font-semibold text-[#2563eb]">
              <CheckCircleIcon className="w-6 h-6 text-[#2563eb]" />
              Atención en español e inglés
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// Animación CSS para movimiento sutil
// Agrega esto a tu archivo globals.css o dentro de un bloque <style jsx global> si usas Next.js
/*
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 3.5s ease-in-out infinite;
}
*/