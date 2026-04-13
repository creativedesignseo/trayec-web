import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function Contacto() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="section-title">Contacto</h1>
          <p className="mt-4 text-lg text-gray-600">
            Estamos disponibles las 24 horas. Llámanos o envíanos un mensaje.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-trayec-gray-bg p-6 sm:p-8">
              <h2 className="text-xl font-bold text-trayec-gray-text">Datos de contacto</h2>
              <dl className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-trayec-green text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-trayec-gray-text">Teléfono</dt>
                    <dd className="mt-1">
                      <a href="tel:694266258" className="text-lg font-bold text-trayec-green hover:text-trayec-green-dark">
                        694 266 258
                      </a>
                    </dd>
                    <dd className="text-xs text-gray-500">Disponible 24h / WhatsApp</dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-trayec-green text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-trayec-gray-text">Email</dt>
                    <dd className="mt-1">
                      <a href="mailto:trayec2024sl@gmail.com" className="text-base text-trayec-green hover:text-trayec-green-dark">
                        trayec2024sl@gmail.com
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-trayec-green text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-trayec-gray-text">Dirección</dt>
                    <dd className="mt-1 text-base text-gray-600">
                      Calle Saragossa 53, 3-1<br />
                      Barcelona
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-trayec-green text-white">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-trayec-gray-text">Horario</dt>
                    <dd className="mt-1 text-base text-gray-600">
                      Disponible 24 horas<br />
                      <span className="text-sm text-gray-500">Incluidos fines de semana y festivos</span>
                    </dd>
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

          {/* Form */}
          <div>
            <LeadForm title="Solicita información o presupuesto" />
          </div>
        </div>
      </div>
    </div>
  );
}
