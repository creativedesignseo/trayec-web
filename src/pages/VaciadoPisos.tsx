import { Phone, MapPin, Clock, Shield, CheckCircle, Truck, Home as HomeIcon } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const beneficios = [
  'Presupuesto sin coste y sin compromiso',
  'Respuesta en menos de 1 hora garantizada',
  'Reciclaje responsable de todos los enseres',
  'Limpieza posterior incluida',
  'Servicio disponible 24h y fines de semana',
  'Cobertura en toda Cataluña',
];

const ciudades = [
  'Barcelona', 'Badalona', 'Hospitalet', 'Cornellà', 'Sabadell', 'Terrassa',
  'Tarragona', 'Reus', 'Girona', 'Figueres', 'Lleida'
];

export default function VaciadoPisos() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
            alt="Vaciado de pisos en Cataluña"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Disponible 24h en toda Cataluña
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Vaciado de pisos <span className="text-green-400">Barcelona y Cataluña</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Servicio profesional de vaciado de pisos, locales, naves y trasteros. Rápido, limpio y con presupuesto gratis. Te llamamos en menos de 1 hora.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:694266258" className="btn-cta inline-flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  694 266 258
                </a>
                <a href="https://wa.me/34694266258" target="_blank" rel="noreferrer" className="btn-outline">
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="relative">
              <LeadForm servicio="Vaciado de Pisos" title="Presupuesto gratis para vaciado" variant="dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">¿Por qué contratar nuestro vaciado de pisos?</h2>
            <p className="mt-4 text-lg text-slate-600">
              En Trayec 2024 S.L nos encargamos de todo: desde la retirada de muebles hasta la limpieza final. Nos adaptamos a tu horario y gestionamos el reciclaje de todo lo recuperable.
            </p>
            <ul className="mt-8 space-y-4">
              {beneficios.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="Equipo de vaciado"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-green-600 p-6 text-white shadow-xl sm:-right-10">
              <p className="text-4xl font-black">&lt;1h</p>
              <p className="text-sm font-medium opacity-90">Respuesta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tipos de vaciado */}
      <div className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">¿Qué tipo de vaciado necesitas?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Adaptamos nuestro servicio a cualquier tipo de espacio y situación.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: HomeIcon, title: 'Vaciado de pisos', desc: 'Viviendas completas, áticos, plantas bajas y áticos.' },
              { icon: Truck, title: 'Locales comerciales', desc: 'Tiendas, oficinas, naves industriales y almacenes.' },
              { icon: Shield, title: 'Trasteros y garajes', desc: 'Espacios reducidos con acceso complicado.' },
              { icon: Clock, title: 'Vaciado urgente', desc: 'Herencias, desahucios y situaciones que requieren rapidez.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="inline-flex rounded-xl bg-green-100 p-3 text-green-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cobertura */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Vaciado de pisos en toda Cataluña
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Desplazamos nuestro equipo a cualquier punto de Barcelona, Tarragona, Girona y Lleida. No importa el tamaño del trabajo.
              </p>
              <a href="tel:694266258" className="btn-cta mt-8 inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                694 266 258
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {ciudades.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/10">
                  <MapPin className="h-3.5 w-3.5 text-green-400" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden bg-green-600">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ¿Necesitas vaciar un piso hoy?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Presupuesto gratis, sin compromiso y respuesta inmediata. Atendemos urgencias en Barcelona y toda Cataluña.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:694266258" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-green-700 shadow-lg transition hover:bg-gray-100">
              <Phone className="h-5 w-5" />
              Llamar ahora
            </a>
            <a href="https://wa.me/34694266258" target="_blank" rel="noreferrer" className="btn-outline">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
