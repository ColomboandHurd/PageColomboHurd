"use client";
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function FormularioDB() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje('');
    if (!nombre || !telefono || !correo) {
      setMensaje('Por favor completa todos los campos.');
      return;
    }
    setLoading(true);
    const { error } = await supabase.from('DatabaseColomboPage').insert({ nombre, telefono, correo });
    setLoading(false);
    if (error) {
      console.error('Error de Supabase:', error);
      setMensaje('Error al guardar. Intenta de nuevo.');
    } else {
      setMensaje('¡Datos enviados correctamente!');
      setNombre('');
      setTelefono('');
      setCorreo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-2">Formulario de contacto (DB)</h2>
      <input
        type="text"
        placeholder="Nombre completo"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--dorado-elegante)] focus:outline-none text-lg"
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={telefono}
        onChange={e => setTelefono(e.target.value)}
        className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--dorado-elegante)] focus:outline-none text-lg"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={e => setCorreo(e.target.value)}
        className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[var(--dorado-elegante)] focus:outline-none text-lg"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 rounded-full bg-[var(--dorado-elegante)] text-white text-xl font-bold shadow hover:bg-[var(--azul-legal)] hover:text-[var(--dorado-elegante)] transition-all duration-300 uppercase tracking-wider border-4 border-transparent hover:border-[var(--dorado-elegante)] focus:outline-none focus:ring-4 focus:ring-[var(--dorado-elegante)]"
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
      {mensaje && <p className="text-center text-[var(--azul-legal)] font-semibold mt-2">{mensaje}</p>}
    </form>
  );
} 