import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle, Shield, Droplets, Sparkles, Home as HomeIcon, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

export default function Limpieza() {
  return (
    <div className="bg-white">
      <LocalBusinessSchema />
      <Helmet>
        <title>Limpieza Barcelona | El Recolector</title>
        <meta name="description" content="Servicio profesional de limpieza en Barcelona y toda Cataluña. Dejamos tu espacio impecable. Presupuesto gratis y respuesta en menos de 1h." />
        <link rel="canonical" href="https://trayec-web.netlify.app/limpieza" />
      </Helmet>

      <div className="relative min-h-[65vh] sm:min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
            alt="Limpieza Barcelona"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid w-full gap-12 lg:grid-cols-2 items-center lg:h-full">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                <Sparkles className="h-4 w-4" />
                Limpieza profesional en Cataluña
              </div>
              <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Limpieza
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Dejamos tu piso, local o nave impecable después de una reforma o vaciado. Limpieza profunda con productos profesionales.
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
            <div className="relative flex flex-col justify-center pt-8 lg:pt-0">
              <LeadForm servicio="Limpieza" title="Solicita limpieza profesional" variant="dark" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Servicios de limpieza especializada</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Nos adaptamos al estado del espacio para dejarlo listo para entrar a vivir o trabajar.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: HomeIcon, title: 'Limpieza de espacios', desc: 'Eliminación de polvo, suciedad acumulada y restos tras el vaciado completo.' },
            { icon: Droplets, title: 'Limpieza de obra', desc: 'Retirada de restos de cemento, pintura y polvo de construcción.' },
            { icon: Shield, title: 'Desinfección profunda', desc: 'Tratamiento antibacteriano y desinfección de todas las superficies.' },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
              <div className="inline-flex rounded-xl bg-green-100 p-3 text-green-600">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="section-title">¿Por qué contratar nuestra limpieza?</h2>
              <ul className="mt-8 space-y-4">
                {[
                  'Productos profesionales y maquinaria especializada',
                  'Equipos entrenados para limpiezas profundas',
                  'Productos respetuosos con el medio ambiente',
                  'Presupuesto ajustado sin compromiso',
                  'Disponibilidad inmediata en toda Cataluña',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-green-600 p-8 text-white shadow-xl sm:p-10">
              <p className="text-2xl font-bold">¿Necesitas limpieza urgente?</p>
              <p className="mt-2 text-green-100">
                Llámanos y agenda tu limpieza para hoy mismo. Atendemos urgencias.
              </p>
              <a href="tel:694266258" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-green-700 transition hover:bg-gray-100">
                694 266 258 <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
