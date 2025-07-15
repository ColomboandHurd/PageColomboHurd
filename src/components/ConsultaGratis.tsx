"use client";
import Link from 'next/link';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { trackButtonClick } from '@/lib/gtag';

export default function ConsultaGratis() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    trackButtonClick('evaluar_perfil');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    if (!nombre || !telefono || !correo) {
      setError("Por favor completa todos los campos.");
      setLoading(false);
      return;
    }
    try {
      const { error } = await supabase
        .from('DataBaseColomboPage')
        .insert([
          {
            nombre,
            telefono,
            correo,
            fecha_nacimiento: null,
            nacionalidad: null,
            fecha_ingreso: null,
            solicito_asilo: null,
            tiempo_tramite_asilo: null,
            puerto_entrada: null,
            puerto_entrada_otro: null,
            tiene_hijos_eeuu: null,
            cantidad_hijos: null,
            nivel_educativo: null,
            tiene_oferta_empleo: null,
            tiene_titulo: null,
            tiene_experiencia: null,
            ha_generado_impacto: null,
            lugar_residencia: null,
            ocupacion: null,
            ocupacion_otra: null,
            ingresos: null,
            resultado_visa: null,
            resultados_adicionales: null
          }
        ]);
      if (error) {
        setError("Ocurrió un error al guardar tus datos. Intenta nuevamente.");
      } else {
        setSuccess(true);
        setNombre("");
        setTelefono("");
        setCorreo("");
      }
    } catch {
      setError("Ocurrió un error inesperado. Intenta nuevamente.");
    }
    setLoading(false);
  };

  return (
    <section className="w-full flex flex-col items-center justify-between py-28 min-h-[820px] bg-white animate-fade-in-up px-4 mt-24">
      {/* Texto superior pequeño */}
      <p className="text-base md:text-lg font-medium text-[var(--azul-legal)] text-center mb-6 max-w-3xl">
        Green Card para profesionales sin patrocinador ni inversión significativa necesaria.
      </p>
      {/* Título principal más grande */}
      <h1 className="font-extrabold text-[var(--azul-legal)] text-center leading-tight mb-10 max-w-full px-2 whitespace-normal break-words">
        <span className="block text-3xl md:text-5xl">
          ¡TU CAMINO HACIA <span className="text-[var(--dorado-elegante)] underline">LA RESIDENCIA EN EE. UU.</span>
        </span>
        <span className="block text-3xl md:text-5xl mt-2">
          COMIENZA AQUÍ! OBTÉN TU EVALUACIÓN DE PERFIL <span className="text-[var(--dorado-elegante)] underline">TOTALMENTE GRATIS</span>
        </span>
      </h1>
      {/* Formulario con botón Enviar debajo del E-mail */}
      <form className="w-full max-w-xl flex flex-col items-center gap-2 mb-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[var(--dorado-elegante)] focus:outline-none text-xl"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Número de celular"
          className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[var(--dorado-elegante)] focus:outline-none text-xl"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[var(--dorado-elegante)] focus:outline-none text-xl"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
        />
        {/* Botón Enviar debajo del E-mail */}
        <button
          type="submit"
          className="w-full px-10 py-5 rounded-full bg-[var(--dorado-elegante)] text-white text-2xl font-extrabold shadow-2xl hover:bg-[var(--azul-legal)] hover:text-[var(--dorado-elegante)] transition-all duration-300 uppercase tracking-wider border-4 border-transparent hover:border-[var(--dorado-elegante)] focus:outline-none focus:ring-4 focus:ring-[var(--dorado-elegante)]"
          style={{ letterSpacing: '0.12em' }}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
        {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        {success && <p className="text-green-600 text-center mt-2">¡Tus datos fueron enviados correctamente!</p>}
        <p className="text-base md:text-lg text-[var(--azul-legal)] text-center max-w-2xl">
          Ingresa tus detalles y recibe una evaluación gratuita de tu perfil
        </p>
      </form>
      {/* Título y botón EVALUAR MI PERFIL un poco más arriba del límite inferior */}
      <div className="w-full flex flex-col items-center pt-0 mb-0" style={{marginTop: '-32px'}}>
        <h2 className="text-lg md:text-xl font-bold text-[var(--azul-legal)] text-center mb-8">
          Perfil profesional evaluado por expertos en migración
        </h2>
        <Link href="/consulta" className="w-full max-w-xl">
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-full px-10 py-5 rounded-full bg-[var(--dorado-elegante)] text-white text-2xl font-extrabold shadow-2xl hover:bg-[var(--azul-legal)] hover:text-[var(--dorado-elegante)] transition-all duration-300 uppercase tracking-wider border-4 border-transparent hover:border-[var(--dorado-elegante)] focus:outline-none focus:ring-4 focus:ring-[var(--dorado-elegante)]"
            style={{ letterSpacing: '0.12em' }}
          >
            EVALUAR MI PERFIL
          </button>
        </Link>
      </div>
      <div className="h-10 md:h-16" />
    </section>
  );
} 