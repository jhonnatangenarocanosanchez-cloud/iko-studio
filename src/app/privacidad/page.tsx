import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — IKO+ STUDIO",
  description: "Política de privacidad y protección de datos personales de IKO+ STUDIO.",
};

export default function PrivacidadPage() {
  return (
    <section className="py-20 sm:py-24 bg-blanco">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-sm">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-coral mb-3">
          Legal
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-negro">
          Política de Privacidad
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Última actualización: octubre 2025
        </p>

        <div className="mt-10 space-y-8 text-sm text-gray-500 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              1. Responsable del tratamiento
            </h2>
            <p>
              IKO+ STUDIO, con domicilio en Lima, Perú, es responsable del
              tratamiento de los datos personales proporcionados a través de este
              sitio web.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              2. Datos que recopilamos
            </h2>
            <p>Recopilamos únicamente los datos que tú proporcionas voluntariamente:</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Nombre de empresa u organización (opcional)</li>
              <li>Tipo de proyecto</li>
              <li>Descripción del proyecto</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Tus datos se utilizan exclusivamente para responder a tu consulta,
              evaluar el proyecto descrito y, en su caso, elaborar una propuesta
              comercial. No utilizamos tus datos para marketing no solicitado.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              4. Base legal
            </h2>
            <p>
              El tratamiento de tus datos se basa en tu consentimiento expreso al
              enviar el formulario de contacto, conforme a la Ley N.° 29733 — Ley
              de Protección de Datos Personales del Perú y su reglamento.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              5. Conservación de datos
            </h2>
            <p>
              Los datos se conservan durante el tiempo necesario para atender tu
              consulta y, como máximo, durante 12 meses desde el último contacto.
              Después de ese período, los datos se eliminan de forma segura.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              6. Tus derechos
            </h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, cancelación y
              oposición (derechos ARCO) enviando un correo a la dirección de
              contacto indicada en este sitio.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              7. Cookies
            </h2>
            <p>
              Este sitio no utiliza cookies de rastreo ni herramientas de analítica
              de terceros. Puede utilizar cookies técnicas esenciales para el
              funcionamiento del sitio.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              8. Compartición de datos
            </h2>
            <p>
              No vendemos, alquilamos ni compartimos tus datos personales con
              terceros, salvo obligación legal.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              9. Seguridad
            </h2>
            <p>
              Implementamos medidas técnicas y organizativas razonables para
              proteger tus datos personales contra acceso no autorizado, pérdida
              o destrucción.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-negro mb-3">
              10. Cambios en esta política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta política. La fecha de
              última actualización se indicará al inicio del documento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
