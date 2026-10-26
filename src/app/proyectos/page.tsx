import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos — IKO+ STUDIO",
  description:
    "Proyectos desarrollados por IKO+ STUDIO: Mönada, Verlez y Nidu.",
};

const PROJECTS = [
  {
    title: "Mönada",
    type: "Landing page",
    desc: "Landing page para app social de eventos y salidas en Perú. Diseño con identidad visual propia, llamados a la acción para descarga y sección de proveedores.",
    tags: ["Next.js", "Netlify", "Responsive"],
    image: "/proyectos/monada.jpg",
    url: "https://appmonada.netlify.app/",
    features: [
      "Diseño con identidad de marca",
      "CTAs de descarga",
      "Sección de proveedores",
      "Optimización móvil",
    ],
  },
  {
    title: "Verlez",
    type: "Sitio web corporativo",
    desc: "Sitio web corporativo para plataforma de administración inteligente de edificios. Diseño oscuro con visualización 3D y navegación limpia.",
    tags: ["Sitio web", "Diseño corporativo", "Responsive"],
    image: "/proyectos/verlez.jpg",
    url: "https://verlez.com/",
    features: [
      "Diseño corporativo",
      "Visualización interactiva",
      "Múltiples secciones",
      "Diseño responsive",
    ],
  },
  {
    title: "Nidu",
    type: "Landing page",
    desc: "Landing page para marketplace de servicios técnicos del hogar con garantía. Diseño orientado a conversión con descarga de app y explicación del proceso.",
    tags: ["Landing page", "Google Play", "Responsive"],
    image: "/proyectos/nidu.jpg",
    url: "https://nidu.pro/",
    features: [
      "CTA de descarga en Google Play",
      "Explicación del proceso",
      "Diseño orientado a conversión",
      "Optimización móvil",
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
            Proyectos
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Algunos de los proyectos en los que hemos trabajado.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blanco border border-gray-300 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
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
              </a>
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
