import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-negro text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="inline-flex items-baseline gap-0 text-lg">
              <span className="font-bold text-blanco">IKO</span>
              <span className="font-bold text-coral">+</span>
              <span className="font-normal text-gray-500 tracking-[0.2em] ml-1">
                STUDIO
              </span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              Páginas web y soluciones digitales para pequeños negocios y
              emprendedores. Lima, Perú.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-blanco text-sm font-semibold mb-4">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios#web" className="hover:text-blanco transition-colors">
                  Páginas Web
                </Link>
              </li>
              <li>
                <Link href="/servicios#addons" className="hover:text-blanco transition-colors">
                  Componentes E-commerce
                </Link>
              </li>
              <li>
                <Link href="/servicios#soluciones" className="hover:text-blanco transition-colors">
                  Soluciones a Medida
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-blanco text-sm font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nosotros" className="hover:text-blanco transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/metodologia" className="hover:text-blanco transition-colors">
                  Metodología
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-blanco transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-blanco transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-blanco text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidad" className="hover:text-blanco transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-blanco transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-700">Lima, Perú</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-700">
            &copy; 2026 IKO+ STUDIO. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
