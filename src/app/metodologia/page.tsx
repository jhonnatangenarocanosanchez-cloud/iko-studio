import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metodología — IKO+ STUDIO",
  description:
    "Un proceso claro, colaborativo y transparente para construir productos digitales. Discovery, diseño, desarrollo, QA y soporte.",
};

const PHASES = [
  {
    step: "01",
    title: "Discovery",
    duration: "1-2 semanas",
    desc: "Entendemos tu negocio, tus usuarios y el problema real. Revisamos lo que existe, identificamos restricciones y definimos el alcance.",
    deliverables: [
      "Documento de requisitos",
      "Mapa de funcionalidades",
      "Cronograma y presupuesto",
    ],
  },
  {
    step: "02",
    title: "Diseño UX/UI",
    duration: "2-3 semanas",
    desc: "Wireframes, flujos de usuario y diseño visual. Prototipamos y validamos contigo antes de escribir una línea de código.",
    deliverables: [
      "Wireframes",
      "Prototipo interactivo",
      "Diseño visual aprobado",
    ],
  },
  {
    step: "03",
    title: "Desarrollo",
    duration: "4-12 semanas",
    desc: "Avances frecuentes con demos visibles, código limpio. Ves el avance real y puedes dar feedback temprano.",
    deliverables: [
      "Código fuente versionado",
      "Ambiente de staging",
      "Demos semanales",
    ],
  },
  {
    step: "04",
    title: "QA y Lanzamiento",
    duration: "1-2 semanas",
    desc: "Pruebas exhaustivas en dispositivos reales, corrección de bugs, optimización de performance y despliegue en producción.",
    deliverables: [
      "Reporte de pruebas",
      "Sitio/app en producción",
      "Documentación técnica",
    ],
  },
  {
    step: "05",
    title: "Posventa",
    duration: "Según acuerdo",
    desc: "Desde el contrato se elige autogestión (documentación y capacitación) o postgestión mensual (mantenimiento, soporte y mejoras acordadas).",
    deliverables: [
      "Documentación y capacitación",
      "Plan de postgestión (si aplica)",
      "Soporte según lo acordado",
    ],
  },
];

const PRINCIPLES = [
  {
    title: "Transparencia",
    desc: "Avance visible, comunicación directa y documentación en cada etapa del proyecto.",
  },
  {
    title: "Iteración",
    desc: "No esperamos 3 meses para mostrarte algo. Cada semana hay algo nuevo que ver y validar.",
  },
  {
    title: "Alcance definido",
    desc: "Antes de empezar, definimos exactamente qué se entrega, qué no, y cuánto cuesta.",
  },
  {
    title: "Calidad desde el inicio",
    desc: "Code review, tests, CI/CD y documentación no son extras — son parte del proceso.",
  },
];

export default function MetodologiaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blanco py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Metodología
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl">
            Cómo trabajamos
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Un proceso claro, colaborativo y transparente. Sin sorpresas.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {PHASES.map((p) => (
              <div
                key={p.step}
                className="bg-blanco border border-gray-300 rounded-xl p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <span className="text-5xl font-bold text-coral/20 shrink-0">
                    {p.step}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h2 className="text-xl font-bold text-negro">{p.title}</h2>
                      <span className="text-xs font-medium text-coral bg-coral/10 px-3 py-1 rounded-full w-fit">
                        {p.duration}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-500 leading-relaxed">{p.desc}</p>
                    <div className="mt-4">
                      <p className="text-xs font-medium text-negro mb-2">
                        Entregables:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.deliverables.map((d) => (
                          <span
                            key={d}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 sm:py-20 bg-blanco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Principios de trabajo
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-coral shrink-0" />
                <div>
                  <h3 className="font-semibold text-negro">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-negro text-blanco py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Listo para empezar?
          </h2>
          <p className="mt-4 text-gray-500">
            Cuéntanos tu proyecto y definimos juntos el mejor camino.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-coral hover:bg-coral-hover text-white font-medium rounded-lg transition-colors text-sm"
          >
            Empecemos
          </Link>
        </div>
      </section>
    </>
  );
}
