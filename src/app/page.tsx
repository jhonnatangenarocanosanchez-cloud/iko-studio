import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    id: "web",
    title: "Landing Pages",
    desc: "Páginas de aterrizaje diseñadas para presentar tu negocio, producto o servicio en digital con un objetivo claro.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
  },
  {
    id: "web",
    title: "Sitios Web",
    desc: "Sitios informativos con WordPress, diseño responsive, formularios y panel de administración para que gestiones tu contenido.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
    ),
  },
  {
    id: "web",
    title: "Componentes E-commerce",
    desc: "Catálogo de productos, carrito de compras, checkout y configuración de pasarela de pagos como módulos adicionales.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    ),
  },
  {
    id: "soluciones",
    title: "Soluciones a Medida",
    desc: "Apps, software y otras soluciones digitales que se evalúan según las necesidades y el contexto de cada negocio.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    ),
  },
];

const PROBLEMS = [
  {
    problem: "No sé por dónde empezar con mi página web",
    solution: "Primero entendemos tu negocio y lo que necesitas. Luego recomendamos la solución más adecuada, sin compromisos.",
  },
  {
    problem: "El proveedor desaparece a mitad de proyecto",
    solution: "Proceso documentado, comunicación directa y compromiso de continuidad hasta la entrega.",
  },
  {
    problem: "Me entregan algo que no resuelve mi problema",
    solution: "Definimos el alcance, las responsabilidades y las exclusiones por escrito antes de empezar.",
  },
];

const METHODOLOGY = [
  { step: "01", title: "Discovery", desc: "Entendemos tu negocio, tus usuarios y el problema real." },
  { step: "02", title: "Diseño", desc: "Wireframes, prototipo y diseño visual validado contigo." },
  { step: "03", title: "Desarrollo", desc: "Código limpio, avances frecuentes con demos visibles." },
  { step: "04", title: "QA y Lanzamiento", desc: "Pruebas, correcciones, despliegue y capacitación." },
  { step: "05", title: "Posventa", desc: "Autogestión o postgestión mensual, según lo acordado." },
];

const PROJECTS = [
  {
    title: "Mönada",
    type: "Landing page",
    desc: "Landing page para app social de eventos y salidas en Perú.",
    tags: ["Next.js", "Netlify", "Responsive"],
    image: "/proyectos/monada.jpg",
    url: "https://appmonada.netlify.app/",
  },
  {
    title: "Verlez",
    type: "Sitio web corporativo",
    desc: "Sitio web para plataforma de administración inteligente de edificios.",
    tags: ["Sitio web", "Diseño corporativo", "Responsive"],
    image: "/proyectos/verlez.jpg",
    url: "https://verlez.com/",
  },
  {
    title: "Nidu",
    type: "Landing page",
    desc: "Landing page para marketplace de servicios técnicos del hogar con garantía.",
    tags: ["Landing page", "Google Play", "Responsive"],
    image: "/proyectos/nidu.jpg",
    url: "https://nidu.pro/",
  },
];

const FAQ = [
  {
    q: "¿Cuánto cuesta una página web?",
    a: "Cada proyecto se cotiza según su alcance, funcionalidades y necesidades específicas. Contáctanos para una cotización sin compromiso.",
  },
  {
    q: "¿Cuánto demora un proyecto típico?",
    a: "Una landing page toma entre 2 y 3 semanas. Un sitio web informativo entre 3 y 8 semanas. Siempre definimos tiempos antes de empezar.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "Desde el contrato inicial se elige entre autogestión del sitio o un plan de postgestión mensual con mantenimiento y soporte.",
  },
  {
    q: "¿Usan plantillas o todo es a medida?",
    a: "Cada proyecto se diseña y construye según las necesidades del negocio. No usamos plantillas genéricas.",
  },
  {
    q: "¿Trabajan solo con empresas en Lima?",
    a: "Iniciamos en Lima, pero trabajamos de forma remota. La comunicación es en español.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-blanco">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "repeating-conic-gradient(#FF6B4A 0% 25%, transparent 0% 50%)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-6">
            Páginas Web y Soluciones Digitales
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl">
            Tu negocio en{" "}
            <span className="text-coral">digital</span>, con una
            solución a tu medida.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed">
            IKO+ STUDIO ayuda a pequeños negocios y emprendedores a presentar
            sus productos en digital mediante páginas web y soluciones de
            software definidas según sus necesidades.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/proyectos"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-coral hover:bg-coral-hover text-white font-medium rounded-lg transition-colors text-sm"
            >
              Ver proyectos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-300 hover:border-negro text-negro font-medium rounded-lg transition-colors text-sm"
            >
              Cuéntanos tu idea
            </Link>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="bg-gray-100 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Lo que hacemos</h2>
          <p className="mt-4 text-gray-500 max-w-2xl">
            Desde una landing page hasta un sitio web completo con catálogo y
            pagos. Cada solución se define según tu negocio.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.title}
                href="/servicios"
                className="group bg-blanco border border-gray-300 rounded-xl p-6 hover:shadow-lg hover:border-coral/30 transition-all"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-negro group-hover:bg-coral/10 group-hover:text-coral transition-colors">
                  {s.icon}
                </div>
                <h3 className="mt-4 font-semibold text-negro">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
                <span className="mt-4 inline-block text-xs font-medium text-coral">
                  Ver más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problemas que resolvemos ── */}
      <section className="py-20 sm:py-24 bg-blanco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            El problema
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold max-w-xl">
            ¿Te suena familiar?
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="relative">
                <div className="bg-gray-100 rounded-xl p-6">
                  <p className="text-sm font-medium text-negro leading-relaxed">
                    &ldquo;{p.problem}&rdquo;
                  </p>
                </div>
                <div className="mt-4 pl-4 border-l-2 border-coral">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metodología ── */}
      <section id="metodologia" className="bg-negro text-blanco py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Metodología
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Cómo trabajamos</h2>
          <p className="mt-4 text-gray-500 max-w-2xl">
            Un proceso claro, colaborativo y transparente. Alcance, responsabilidades y costos definidos antes de empezar.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {METHODOLOGY.map((m) => (
              <div key={m.step} className="relative">
                <span className="text-4xl font-bold text-coral/20">{m.step}</span>
                <h3 className="mt-2 font-semibold text-blanco">{m.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyectos ── */}
      <section className="py-20 sm:py-24 bg-blanco">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Proyectos
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Proyectos
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl">
            Algunos de los proyectos en los que hemos trabajado.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
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
                  <h3 className="mt-2 font-semibold text-negro">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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

      {/* ── Beneficios ── */}
      <section className="bg-gray-100 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            Por qué IKO+
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Lo que nos diferencia
          </h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Claridad", desc: "Alcance, costos, responsabilidades y exclusiones definidos por escrito antes de empezar." },
              { title: "Criterio técnico", desc: "La solución se recomienda en función de la necesidad real, no del servicio más caro." },
              { title: "Responsabilidad", desc: "Lo que se construye afecta negocios reales. Nos hacemos cargo del resultado acordado." },
              { title: "Colaboración", desc: "Trabajamos con el cliente, no para el cliente. Participas en las decisiones clave." },
              { title: "Proceso documentado", desc: "Comunicación directa, avances visibles y documentación en cada etapa." },
              { title: "Posventa definida", desc: "Desde el contrato se elige autogestión o postgestión mensual. Sin sorpresas." },
            ].map((b, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-coral shrink-0" />
                <div>
                  <h3 className="font-semibold text-negro">{b.title}</h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-24 bg-blanco">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Preguntas frecuentes
          </h2>

          <div className="mt-12 space-y-8">
            {FAQ.map((f, i) => (
              <div key={i} className="border-b border-gray-300 pb-6">
                <h3 className="font-semibold text-negro">{f.q}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Contacto ── */}
      <section className="bg-negro text-blanco py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            ¿Necesitas una página web para tu negocio?
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Cuéntanos qué necesitas y te ayudamos a definir la solución
            más adecuada. Sin compromiso.
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-coral hover:bg-coral-hover text-white font-medium rounded-lg transition-colors text-sm"
            >
              Empecemos a hablar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
