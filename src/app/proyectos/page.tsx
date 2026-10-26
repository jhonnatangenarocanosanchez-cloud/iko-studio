import Link from "next/link";
import { Isotipo } from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos — IKO+ STUDIO",
  description:
    "Ejemplos representativos del tipo de páginas web y soluciones digitales que diseñamos y desarrollamos.",
};

const PROJECTS = [
  {
    title: "Landing page de producto",
    type: "Landing page",
    desc: "Página de aterrizaje con diseño enfocado en conversión, formulario de contacto integrado, secciones de beneficios y llamados a la acción claros.",
    tags: ["Next.js", "Tailwind CSS", "Responsive"],
    features: [
      "Diseño persuasivo",
      "Formulario de contacto",
      "Optimización móvil",
      "Carga rápida",
    ],
  },
  {
    title: "Sitio web corporativo",
    type: "Sitio WordPress",
    desc: "Sitio informativo con múltiples secciones, panel de administración para gestionar contenido, formularios y diseño responsive.",
    tags: ["WordPress", "PHP", "SEO básico"],
    features: [
      "Panel de administración",
      "Múltiples secciones",
      "Formularios de contacto",
      "Diseño responsive",
    ],
  },
  {
    title: "Tienda con catálogo digital",
    type: "E-commerce",
    desc: "Sitio web con catálogo de productos, filtros por categoría, carrito de compras, proceso de checkout y pasarela de pagos integrada.",
    tags: ["WordPress", "WooCommerce", "Pasarela de pagos"],
    features: [
      "Catálogo con filtros",
      "Carrito de compras",
      "Checkout paso a paso",
      "Pagos en línea",
    ],
  },
];

export default function ProyectosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blanco py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Proyectos
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl">
            Ejemplos de lo que hacemos
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Ejemplos representativos del tipo de soluciones que diseñamos y
            desarrollamos para pequeños negocios y emprendedores.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Proyectos demostrativos — representan el tipo de trabajo que
            realizamos.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="bg-blanco border border-gray-300 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-negro flex items-center justify-center">
                  <Isotipo size={48} />
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium text-coral uppercase tracking-wider">
                    {p.type}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-negro">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="mt-4">
                    <p className="text-xs font-medium text-negro mb-2">
                      Funcionalidades:
                    </p>
                    <ul className="space-y-1">
                      {p.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-gray-500 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-coral shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-300/50 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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
            ¿Necesitas algo similar?
          </h2>
          <p className="mt-4 text-gray-500">
            Cuéntanos qué necesita tu negocio y definimos la solución juntos.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-coral hover:bg-coral-hover text-white font-medium rounded-lg transition-colors text-sm"
          >
            Cuéntanos tu idea
          </Link>
        </div>
      </section>
    </>
  );
}
