"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  "Página web corporativa",
  "Landing page",
  "Comercio electrónico",
  "Aplicación móvil",
  "Sistema de gestión",
  "Software a medida",
  "Automatización",
  "Inteligencia artificial",
  "Integración de sistemas",
  "Mantenimiento y soporte",
  "No estoy seguro",
];

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("_hp_check") as HTMLInputElement)
      ?.value;
    if (honeypot) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <section className="py-20 sm:py-32 bg-blanco">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#34C759"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-negro">Mensaje enviado</h1>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Gracias por contactarnos. Revisaremos tu mensaje y te responderemos
            en un máximo de 48 horas hábiles.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-negro text-negro font-medium rounded-lg transition-colors text-sm"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-blanco py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Contacto
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl">
            Cuéntanos tu idea
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Completa el formulario y te responderemos en un máximo de 48 horas
            hábiles. Sin compromiso.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="pb-20 sm:pb-24 bg-blanco">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot */}
            <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
              <label htmlFor="_hp_check">No completar este campo</label>
              <input
                type="text"
                id="_hp_check"
                name="_hp_check"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-negro mb-2"
              >
                Nombre completo <span className="text-coral">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-negro placeholder:text-gray-400 focus:border-coral focus:ring-1 focus:ring-coral transition-colors text-sm"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-negro mb-2"
              >
                Email <span className="text-coral">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-negro placeholder:text-gray-400 focus:border-coral focus:ring-1 focus:ring-coral transition-colors text-sm"
                placeholder="tu@email.com"
              />
            </div>

            {/* Empresa */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-negro mb-2"
              >
                Empresa u organización
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-negro placeholder:text-gray-400 focus:border-coral focus:ring-1 focus:ring-coral transition-colors text-sm"
                placeholder="Nombre de tu empresa (opcional)"
              />
            </div>

            {/* Project type */}
            <div>
              <label
                htmlFor="project_type"
                className="block text-sm font-medium text-negro mb-2"
              >
                Tipo de proyecto <span className="text-coral">*</span>
              </label>
              <select
                id="project_type"
                name="project_type"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-negro focus:border-coral focus:ring-1 focus:ring-coral transition-colors text-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-negro mb-2"
              >
                Cuéntanos sobre tu proyecto <span className="text-coral">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-negro placeholder:text-gray-400 focus:border-coral focus:ring-1 focus:ring-coral transition-colors text-sm resize-y"
                placeholder="Describe brevemente lo que necesitas, qué problema quieres resolver y cualquier detalle relevante."
              />
            </div>

            {/* Privacy notice */}
            <p className="text-xs text-gray-500">
              Al enviar este formulario, aceptas nuestra{" "}
              <a
                href="/privacidad"
                className="text-coral hover:underline"
              >
                Política de Privacidad
              </a>
              . Usaremos tus datos únicamente para responder a tu consulta.
            </p>

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto px-8 py-3.5 bg-coral hover:bg-coral-hover disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors text-sm"
            >
              {sending ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
