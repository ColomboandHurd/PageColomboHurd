'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './TestimoniosCarrusel.css'; // Para estilos personalizados de flechas

const testimonios = [
  {
    nombre: 'María Elena Rodríguez',
    estrellas: 5,
    nacionalidad: 'México',
    texto: 'Gracias a este equipo, todo fue claro desde el inicio. Estoy muy agradecida por su profesionalismo.'
  },
  {
    nombre: 'Carlos Andrés Mendoza',
    estrellas: 4,
    nacionalidad: 'Colombia',
    texto: 'Mi familia y yo vivimos una experiencia transformadora. Estoy muy agradecido por la calidez humana del servicio.'
  },
  {
    nombre: 'Ana Sofía González',
    estrellas: 5,
    nacionalidad: 'Venezuela',
    texto: 'Siempre atentos y rápidos. Se siente la diferencia cuando alguien realmente se preocupa por tu caso.'
  },
  {
    nombre: 'Luis Fernando Torres',
    estrellas: 4,
    nacionalidad: 'Perú',
    texto: 'Gracias al equipo volví a tener esperanza. Hoy ya soy residente legal en EE.UU. después de tantos años.'
  },
  {
    nombre: 'Isabella Martínez',
    estrellas: 5,
    nacionalidad: 'Argentina',
    texto: 'Agradezco mucho que hayan agilizado todo tan rápido. Este viaje familiar fue posible gracias a ustedes.'
  },
  {
    nombre: 'Diego Alejandro Silva',
    estrellas: 4,
    nacionalidad: 'Chile',
    texto: 'Una atención impecable. Siempre tuve una respuesta clara y transparente en cada paso del proceso.'
  },
  {
    nombre: 'Valentina Herrera',
    estrellas: 5,
    nacionalidad: 'Ecuador',
    texto: 'Me sentí acompañada todo el tiempo. El trato fue cercano y profesional desde el principio.'
  },
  {
    nombre: 'Gabriel Antonio Ruiz',
    estrellas: 4,
    nacionalidad: 'Guatemala',
    texto: 'No conocía bien el proceso, pero me guiaron paso a paso con paciencia y claridad. ¡Gracias infinitas!'
  },
  {
    nombre: 'Camila Patricia Vargas',
    estrellas: 5,
    nacionalidad: 'Costa Rica',
    texto: 'Me sorprendió la rapidez y la atención personalizada. Estoy muy satisfecha con todo el proceso.'
  },
  {
    nombre: 'Roberto Carlos Jiménez',
    estrellas: 4,
    nacionalidad: 'Honduras',
    texto: 'Este equipo hizo posible algo que parecía imposible. Eternamente agradecido por su compromiso.'
  }
];

export default function TestimoniosCarrusel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigation, setNavigation] = useState({ prevEl: null, nextEl: null });

  useEffect(() => {
    setNavigation({ prevEl: prevRef.current, nextEl: nextRef.current });
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-12 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-[var(--azul-legal)] mb-6 text-center">Testimonios de nuestros clientes</h2>
      <div className="relative w-full max-w-5xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}
          slidesPerGroup={1}
          navigation={navigation}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="w-full"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >
          {testimonios.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-[var(--azul-legal)] text-white rounded-xl shadow-md px-5 py-6 flex flex-col items-center min-h-[200px] w-full max-w-md mx-auto transition-all duration-500">
                <span className="text-lg font-semibold mb-1 text-center">{t.nombre}</span>
                <div className="flex items-center mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-base ${i < t.estrellas ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {i < t.estrellas ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-[var(--dorado-elegante)] mb-2 text-center">{t.nacionalidad}</span>
                <p className="text-sm md:text-base text-white/90 text-center leading-snug">{t.texto}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Flechas personalizadas funcionales */}
        <div ref={prevRef} className="swiper-button-prev custom-swiper-nav" />
        <div ref={nextRef} className="swiper-button-next custom-swiper-nav" />
      </div>
    </section>
  );
} 