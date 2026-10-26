import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros — IKO+ STUDIO",
  description:
    "IKO+ STUDIO resuelve necesidades digitales concretas mediante soluciones de software para pequeños negocios y emprendedores en Lima, Perú.",
};

const VALUES = [
  {
    title: "Claridad",
    desc: "Alcance, responsabilidades, exclusiones y costos definidos por escrito antes de empezar cualquier proyecto.",
  },
  {
    title: "Responsabilidad",
    desc: "Lo que construimos afecta negocios reales. Nos hacemos cargo del resultado acordado, no solo de la entrega.",
  },
  {
    title: "Criterio técnico",
    desc: "La solución se recomienda en función de la necesidad real del negocio, no del servicio más caro o complejo.",
  },
  {
    title: "Colaboración",
    desc: "Los mejores resultados se logran trabajando con el cliente. Participas en las decisiones clave de tu proyecto.",
  },
  {
    title: "Aprendizaje",
    desc: "Evaluamos herramientas y enfoques nuevos. Cada proyecto es una oportunidad de mejorar el proceso.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blanco py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Nosotros
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl">
            Soluciones digitales concretas
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
            IKO+ STUDIO nace para resolver necesidades digitales concretas
            mediante soluciones de software. Trabajamos con pequeños negocios
            y emprendedores que buscan presentar sus productos o servicios en
            digital, empezando por lo que más necesitan.
          </p>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
                Propósito
              </h2>
              <p className="text-2xl sm:text-3xl font-bold leading-snug">
                Resolver necesidades concretas mediante software útil y bien
                ejecutado.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-negro">Qué hacemos</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Diseñamos y desarrollamos páginas web y soluciones digitales
                  para negocios que necesitan presentarse en digital. Cada
                  proyecto se define según las necesidades del cliente, con
                  alcance y costos claros.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-negro">Para quién</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Pequeños negocios y emprendedores, inicialmente en Lima,
                  que buscan fortalecer su presencia digital — con o sin
                  local físico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 sm:py-20 bg-blanco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Lo que nos guía</h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-coral shrink-0" />
                <div>
                  <h3 className="font-semibold text-negro">{v.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Cómo decidimos la solución
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl">
            Entender el problema, recomendar una alternativa proporcionada y
            acordar por escrito el alcance, responsabilidades, costos de
            terceros y posventa.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-300 rounded-xl p-6">
              <h3 className="font-semibold text-negro">Diagnóstico</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Entendemos tu negocio y lo que necesitas antes de proponer
                cualquier solución.
              </p>
            </div>
            <div className="border border-gray-300 rounded-xl p-6">
              <h3 className="font-semibold text-negro">Propuesta</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Recomendamos la solución más adecuada con alcance,
                exclusiones y costos definidos.
              </p>
            </div>
            <div className="border border-gray-300 rounded-xl p-6">
              <h3 className="font-semibold text-negro">Ejecución</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Diseñamos y desarrollamos lo acordado con avances visibles
                y comunicación directa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-negro text-blanco py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿Quieres saber si podemos ayudarte?
          </h2>
          <p className="mt-4 text-gray-500">
            Cuéntanos qué necesita tu negocio y lo evaluamos juntos.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-coral hover:bg-coral-hover text-white font-medium rounded-lg transition-colors text-sm"
          >
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}
