import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios — IKO+ STUDIO",
  description:
    "Páginas web, landing pages y soluciones digitales para pequeños negocios y emprendedores. Diseño y desarrollo a medida en Lima, Perú.",
};

const WEB_SERVICES = [
  {
    title: "Landing page",
    desc: "Página de aterrizaje con diseño enfocado en un objetivo: presentar tu producto, servicio o negocio. Incluye formulario de contacto, diseño responsive y estructura optimizada.",
    ideal: "Emprendedor o negocio que necesita presentarse en digital con un objetivo claro.",
    time: "2-3 semanas",
  },
  {
    title: "Sitio web informativo",
    desc: "Sitio con múltiples secciones desarrollado en WordPress. Incluye diseño responsive, formularios, panel de administración para que gestiones tu contenido.",
    ideal: "Negocio que necesita una presencia web profesional con varias páginas y contenido actualizable.",
    time: "3-8 semanas",
  },
];

const ADDONS = [
  {
    title: "Catálogo de productos",
    desc: "Módulo de catálogo digital con fichas de producto, categorías y filtros. Se integra al sitio web.",
  },
  {
    title: "Carrito y checkout",
    desc: "Sistema de carrito de compras con proceso de compra paso a paso. Requiere catálogo.",
  },
  {
    title: "Pasarela de pagos",
    desc: "Configuración e integración de pasarela de pagos (Mercado Pago, Niubiz u otra). Requiere carrito.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blanco py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Servicios
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-2xl">
            Páginas web y soluciones digitales
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl">
            Diseñamos y desarrollamos la presencia digital de tu negocio.
            Cada solución se define según tus necesidades, con alcance,
            responsabilidades y costos claros desde el inicio.
          </p>
        </div>
      </section>

      {/* Web services */}
      <section id="web" className="py-16 sm:py-20 border-t border-gray-300/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Páginas Web</h2>
          <p className="mt-2 text-gray-500 max-w-xl">
            Nuestra oferta principal. Desde una landing hasta un sitio web
            completo con administración de contenido.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {WEB_SERVICES.map((s) => (
              <div
                key={s.title}
                className="border border-gray-300 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-negro text-lg">{s.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-300/50 space-y-2">
                  <p className="text-xs text-gray-500">
                    <span className="font-medium text-negro">Ideal para:</span>{" "}
                    {s.ideal}
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium text-negro">Tiempo estimado:</span>{" "}
                    {s.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section id="addons" className="py-16 sm:py-20 border-t border-gray-300/50 bg-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Componentes adicionales</h2>
          <p className="mt-2 text-gray-500 max-w-xl">
            Módulos que se agregan al sitio web según lo que necesite tu negocio.
            Cada uno tiene su alcance y costo definido.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDONS.map((a) => (
              <div
                key={a.title}
                className="border border-gray-300 rounded-xl p-6 bg-blanco"
              >
                <h3 className="font-semibold text-negro">{a.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom solutions */}
      <section id="soluciones" className="py-16 sm:py-20 border-t border-gray-300/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Soluciones a medida</h2>
          <p className="mt-2 text-gray-500 max-w-xl">
            Si tu negocio necesita algo más allá de una página web — una
            aplicación móvil, un sistema de gestión u otra solución digital —
            lo evaluamos caso por caso.
          </p>
          <div className="mt-6 border border-gray-300 rounded-xl p-6">
            <p className="text-sm text-gray-500 leading-relaxed">
              Cada solución a medida parte de un diagnóstico: entender el
              problema, evaluar la viabilidad y definir un alcance realista
              con responsabilidades, costos y tiempos claros. No ofrecemos
              servicios cuya capacidad no hayamos verificado.
            </p>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              <span className="font-medium text-negro">¿Tienes una necesidad específica?</span>{" "}
              <Link href="/contacto" className="text-coral hover:underline">
                Contáctanos
              </Link>{" "}
              y evaluamos juntos si podemos ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Post-sale */}
      <section className="py-16 sm:py-20 border-t border-gray-300/50 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Posventa</h2>
          <p className="mt-2 text-gray-500 max-w-xl">
            Desde el contrato inicial se elige una de dos opciones:
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 rounded-xl p-6 bg-blanco">
              <h3 className="font-semibold text-negro">Autogestión</h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Recibes el sitio terminado con documentación y capacitación
                para gestionarlo por tu cuenta. No se asume administración
                posterior.
              </p>
            </div>
            <div className="border border-gray-300 rounded-xl p-6 bg-blanco">
              <h3 className="font-semibold text-negro">Postgestión mensual</h3>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                Plan mensual con mantenimiento, actualizaciones de seguridad,
                soporte y mejoras acordadas. Alcance y tarifa definidos
                desde el inicio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-negro text-blanco py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            ¿No estás seguro de qué necesitas?
          </h2>
          <p className="mt-4 text-gray-500">
            Cuéntanos tu situación y te ayudamos a definir la solución más
            adecuada. Sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-coral hover:bg-coral-hover text-white font-medium rounded-lg transition-colors text-sm"
          >
            Hablemos
          </Link>
        </div>
      </section>
    </>
  );
}
