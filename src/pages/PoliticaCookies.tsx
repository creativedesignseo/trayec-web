import { Helmet } from 'react-helmet-async';

export default function PoliticaCookies() {
  return (
    <div className="bg-white pt-24 lg:pt-28">
      <Helmet>
        <title>Política de Cookies | ELRECOLECTOR.ES</title>
        <meta name="description" content="Política de cookies de ELRECOLECTOR.ES. Información sobre las cookies que utilizamos y cómo gestionarlas." />
        <link rel="canonical" href="https://elrecolector.es/politica-cookies" />
      </Helmet>

      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Política de Cookies</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Información sobre el uso de cookies en nuestro sitio web.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. ¿Qué son las cookies?</h2>
            <p className="mt-4 text-slate-600">
              Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, tablet o móvil) cuando los visita. Su finalidad principal es reconocer al usuario y recordar sus preferencias para mejorar la experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. ¿Qué cookies utilizamos?</h2>
            <p className="mt-4 text-slate-600">
              En <strong>elrecolector.es</strong> solo utilizamos <strong>cookies técnicas</strong>, que son necesarias para el correcto funcionamiento del sitio web y no requieren consentimiento previo del usuario conforme a la normativa vigente (LSSI-CE y RGPD).
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Cookie</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Tipo</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Finalidad</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-sm text-slate-700 font-mono">cookie_consent</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Técnica</td>
                    <td className="px-6 py-4 text-sm text-slate-700">Recordar la aceptación del banner de cookies</td>
                    <td className="px-6 py-4 text-sm text-slate-700">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. Cookies de terceros</h2>
            <p className="mt-4 text-slate-600">
              <strong>No utilizamos cookies de terceros</strong> para publicidad, análisis de comportamiento, redes sociales ni seguimiento de usuario. No se comparte información de navegación con plataformas externas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Cómo desactivar las cookies</h2>
            <p className="mt-4 text-slate-600">
              Puede configurar su navegador para que le avise cuando se envíen cookies o para rechazarlas todas. Tenga en cuenta que desactivar las cookies técnicas puede afectar al correcto funcionamiento de algunas funciones del sitio web.
            </p>
            <p className="mt-4 text-slate-600">
              A continuación le indicamos cómo gestionar las cookies en los principales navegadores:
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-600">
              <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
              <li><strong>Mozilla Firefox:</strong> Preferencias → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Microsoft Edge:</strong> Configuración → Cookies y permisos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos de sitios web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Modificaciones</h2>
            <p className="mt-4 text-slate-600">
              ELRECOLECTOR.ES se reserva el derecho a modificar la presente Política de Cookies para adaptarla a cambios normativos o técnicos. Cualquier actualización será publicada en esta página.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
