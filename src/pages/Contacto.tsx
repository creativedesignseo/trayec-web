import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

export default function Contacto() {
  return (
    <div className="bg-white">
      <LocalBusinessSchema />
      <Helmet>
        <title>Contacto | El Recolector | Vaciado de Pisos Barcelona</title>
        <meta name="description" content="Contacta con El Recolector. Teléfono 694 266 258. Servicio de vaciado de pisos, recogida de muebles y reformas en Barcelona y toda Cataluña. Disponible 24h." />
        <link rel="canonical" href="https://trayec-web.netlify.app/contacto" />
      </Helmet>

      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Contacto</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Estamos disponibles las 24 horas. Llámanos o envíanos un mensaje y te respondemos en menos de 1 hora.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-4 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-100">
              <h2 className="text-xl font-bold text-slate-900">Datos de contacto</h2>
              <dl className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-slate-500">Teléfono</dt>
                    <dd className="mt-1">
                      <a href="tel:694266258" className="text-xl font-bold text-slate-900 hover:text-green-600">
                        694 266 258
                      </a>
                    </dd>
                    <dd className="text-sm text-slate-500">Disponible 24h / WhatsApp</dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-slate-500">Email</dt>
                    <dd className="mt-1">
                      <a href="mailto:trayec2024sl@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-green-600">
                        trayec2024sl@gmail.com
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-slate-500">Dirección</dt>
                    <dd className="mt-1 text-lg font-semibold text-slate-900">
                      Calle Saragossa 53, 3-1<br />
                      Barcelona
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-slate-500">Horario</dt>
                    <dd className="mt-1 text-lg font-semibold text-slate-900">
                      Disponible 24 horas
                    </dd>
                    <dd className="text-sm text-slate-500">Incluidos fines de semana y festivos</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:694266258" className="btn-primary flex-1 text-center">
                Llamar ahora
              </a>
              <a
                href="https://wa.me/34694266258"
                target="_blank"
                rel="noreferrer"
                className="btn-cta flex-1 text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <LeadForm title="Solicita información o presupuesto" />
          </div>
        </div>
      </div>
    </div>
  );
}
