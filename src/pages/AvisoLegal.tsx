import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function AvisoLegal() {
  return (
    <div className="bg-white pt-24 lg:pt-28">
      <Helmet>
        <title>Aviso Legal | El Recolector</title>
        <meta name="description" content="Aviso legal de El Recolector. Datos del titular, CIF B56321581, dirección y contacto." />
        <link rel="canonical" href="https://trayec-web.netlify.app/aviso-legal" />
      </Helmet>

      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Aviso Legal</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Información legal del titular de este sitio web.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Datos del titular</h2>
            <p className="mt-4 text-slate-600">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que el titular de este sitio web es:
            </p>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" /> <strong>Razón social:</strong> El Recolector</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" /> <strong>CIF / NIF:</strong> B56321581</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" /> <strong>Dirección fiscal:</strong> Calle Saragossa 53, 3-1, 08006 Barcelona</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" /> <strong>Teléfono:</strong> 694 266 258</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" /> <strong>Email:</strong> info@elrecolector.es</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. Objeto</h2>
            <p className="mt-4 text-slate-600">
              El presente sitio web tiene por objeto facilitar a los usuarios información sobre los servicios de vaciado de pisos, recogida de muebles, reformas, limpieza y pintura ofrecidos por El Recolector, así como permitir la solicitud de presupuestos y contacto con la empresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. Propiedad intelectual e industrial</h2>
            <p className="mt-4 text-slate-600">
              Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño, código fuente, etc.) son propiedad de El Recolector o de terceros que han autorizado su uso. Queda prohibida la reproducción, distribución, comunicación pública o transformación de dichos contenidos sin autorización expresa del titular.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Responsabilidad</h2>
            <p className="mt-4 text-slate-600">
              El Recolector no se hace responsable de los daños o perjuicios que pudieran derivarse de la utilización de la información contenida en este sitio web, ni de la falta de disponibilidad o accesibilidad del mismo. Tampoco se responsabiliza del contenido de enlaces externos que puedan aparecer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Legislación aplicable y jurisdicción</h2>
            <p className="mt-4 text-slate-600">
              El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, el usuario y El Recolector se someten a los juzgados y tribunales de Barcelona, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
