import Navbar from '@/components/Navbar';
import Image from 'next/image';
import AbogadosBanner from '@/components/AbogadosBanner';
import ImmigrationBlocks from '@/components/ImmigrationBlocks';
import ConsultaGratis from '@/components/ConsultaGratis';
import FooterContacto from '@/components/FooterContacto';

export default function Home() {
  return (
    <main className="pt-32 md:pt-40">
      <Navbar />
      <div className="mb-20 md:mb-32">
        <AbogadosBanner />
      </div>
      <ConsultaGratis />
      {/* Sección visual elegante de bienvenida */}
      <section className="hero-section mb-20 md:mb-32 w-full flex justify-center items-center min-h-[380px] bg-white">
        <div className="hero-content flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-5xl w-full px-4">
          <div className="hero-img-box bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center w-full max-w-xs md:max-w-sm">
            <Image
              src="/servicios.png"
              alt="Servicios de inmigración"
              width={340}
              height={340}
              className="hero-img rounded-xl shadow-md w-full h-auto object-contain"
              priority
            />
          </div>
          <div className="hero-info flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="hero-title text-3xl md:text-4xl font-extrabold text-[#1a365d] mb-4">Soluciones Migratorias Profesionales</h1>
            <p className="hero-desc text-base md:text-lg text-[#4a5568] mb-4">
              Asesoría experta y acompañamiento personalizado para tu proceso migratorio. <br />
              Confía en un equipo de abogados con experiencia, ética y resultados comprobados.
            </p>
            <ul className="hero-list list-none p-0 text-base md:text-lg text-[#1976d2] mb-0">
              <li className="mb-1">✔️ Visas de trabajo y residencia</li>
              <li className="mb-1">✔️ Estrategias legales a tu medida</li>
              <li>✔️ Atención en español e inglés</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="mb-20 md:mb-32">
        <ImmigrationBlocks />
      </div>
      <div className="mt-16 md:mt-20" />
      <FooterContacto />
    </main>
  );
}
