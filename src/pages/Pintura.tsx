import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle, Paintbrush, Palette, Brush, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

export default function Pintura() {
  return (
    <div className="bg-white">
      <LocalBusinessSchema />
      <Helmet>
        <title>Pintores Económicos Barcelona | Interiores y Exteriores | El Recolector</title>
        <meta name="description" content="Pintores profesionales en Barcelona y toda Cataluña. Pintura de interiores, exteriores, baños y cocinas. Presupuesto gratis y acabados de calidad." />
        <link rel="canonical" href="https://trayec-web.netlify.app/pintura" />
      </Helmet>

      <div className="relative min-h-[65vh] sm:min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1920&q=80"
            alt="Pintores profesionales Barcelona"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 pt-28 pb-24 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">
          <div className="grid w-full gap-12 lg:grid-cols-2 items-center lg:h-full">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                <Paintbrush className="h-4 w-4" />
                Pintores en Barcelona y Cataluña
              </div>
              <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Pintores económicos <span className="text-green-400">Barcelona</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Pintura de interiores y exteriores con acabados profesionales. Presupuesto sin coste y materiales de calidad. Servicio en toda Cataluña.
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
              <LeadForm servicio="Pintura" title="Presupuesto de pintura gratis" variant="dark" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Nuestros servicios de pintura</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Acabados impecables para hogares, locales y oficinas.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Paintbrush, title: 'Pintura interior', desc: 'Habitaciones, salones, pasillos y techos con acabado liso o texturizado.' },
            { icon: Palette, title: 'Pintura exterior', desc: 'Fachadas, patios, terrazas y barandillas con pintura resistente a la intemperie.' },
            { icon: Brush, title: 'Esmaltes y lacados', desc: 'Puertas, ventanas y mobiliario con acabados duraderos y elegantes.' },
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

      <div className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">¿Por qué elegirnos como pintores?</h2>
              <ul className="mt-8 space-y-4">
                {[
                  'Presupuesto gratuito y sin compromiso',
                  'Materiales de primeras marcas',
                  'Preparación completa de superficies',
                  'Limpieza posterior incluida',
                  'Garantía de acabado profesional',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-green-600 p-8 text-white shadow-xl sm:p-10">
              <p className="text-2xl font-bold">¿Tienes un proyecto de pintura?</p>
              <p className="mt-2 text-green-100">
                Cuéntanos las características del espacio y te damos precio hoy mismo.
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
