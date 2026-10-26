import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones — IKO+ STUDIO",
  description: "Términos y condiciones de uso del sitio web de IKO+ STUDIO.",
};

export default function TerminosPage() {
  return (
    <section className="py-20 sm:py-24 bg-blanco">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-sm">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-negro">
          Términos y Condiciones
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Última actualización: octubre 2025
        </p>

        <div className="mt-10 space-y-8 text-sm text-gray-500 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              1. Identificación
            </h2>
            <p>
              Este sitio web es propiedad de IKO+ STUDIO, con domicilio en Lima,
              Perú. Al acceder y utilizar este sitio, aceptas estos términos y
              condiciones.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              2. Uso del sitio
            </h2>
            <p>
              Este sitio tiene carácter informativo. Su contenido describe los
              servicios ofrecidos por IKO+ STUDIO y no constituye una oferta
              contractual vinculante. Los precios, plazos y alcances indicados son
              orientativos y pueden variar según el proyecto.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              3. Propiedad intelectual
            </h2>
            <p>
              El diseño, código, textos, logotipos, isotipo y elementos gráficos
              de este sitio son propiedad de IKO+ STUDIO y están protegidos por
              las leyes de propiedad intelectual aplicables. No se permite su
              reproducción, distribución o modificación sin autorización expresa.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              4. Proyectos mostrados
            </h2>
            <p>
              Los proyectos presentados en la sección "Proyectos" son
              demostrativos y representan las capacidades técnicas y de diseño de
              IKO+ STUDIO. No implican la existencia de un cliente o contrato
              real, salvo que se indique explícitamente.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              5. Formulario de contacto
            </h2>
            <p>
              Los datos enviados a través del formulario de contacto se tratan
              conforme a nuestra Política de Privacidad. El envío del formulario
              no genera obligación contractual para ninguna de las partes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              6. Limitación de responsabilidad
            </h2>
            <p>
              IKO+ STUDIO no garantiza que el sitio esté libre de errores ni que
              funcione de forma ininterrumpida. No nos hacemos responsables de
              daños derivados del uso o imposibilidad de uso de este sitio.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              7. Enlaces externos
            </h2>
            <p>
              Este sitio puede contener enlaces a sitios de terceros. No somos
              responsables del contenido ni de las políticas de privacidad de
              esos sitios.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              8. Ley aplicable
            </h2>
            <p>
              Estos términos se rigen por las leyes de la República del Perú.
              Cualquier controversia se resolverá ante los tribunales competentes
              de Lima, Perú.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              9. Modificaciones
            </h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier
              momento. Los cambios entrarán en vigor desde su publicación en este
              sitio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
