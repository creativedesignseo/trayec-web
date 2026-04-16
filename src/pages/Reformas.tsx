import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle, Sparkles, Hammer, Paintbrush, Ruler, Zap, ArrowRight } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

const serviciosReforma = [
  { icon: Hammer, title: 'Reformas de baño', desc: 'Cambio de sanitarios, plato de ducha, alicatado e instalaciones.' },
  { icon: Sparkles, title: 'Reformas de cocina', desc: 'Mobiliario, encimeras, electrodomésticos integrados y fontanería.' },
  { icon: Ruler, title: 'Reformas integrales', desc: 'Renovación completa de viviendas y locales comerciales.' },
  { icon: Paintbrush, title: 'Acabados', desc: 'Pintura, suelos, falsos techos e iluminación.' },
  { icon: Zap, title: 'Electricidad', desc: 'Instalaciones eléctricas completas, cambio de cuadros, puntos de luz y certificados.' },
];

export default function Reformas() {
  return (
    <div className="bg-white">
      <LocalBusinessSchema />
      <Helmet>
        <title>Reformas Integrales Barcelona | Baños y Cocinas | El Recolector</title>
        <meta name="description" content="Reformas integrales de baños, cocinas y viviendas completas en Barcelona y toda Cataluña. Presupuesto detallado sin coste y ejecución en plazos ajustados." />
        <link rel="canonical" href="https://trayec-web.netlify.app/reformas" />
      </Helmet>

      <div className="relative min-h-[65vh] sm:min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
            alt="Reformas integrales Barcelona"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid w-full gap-12 lg:grid-cols-2 items-center lg:h-full">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                <Sparkles className="h-4 w-4" />
                Reformas en Barcelona y Cataluña
              </div>
              <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Reformas integrales <span className="text-green-400">Baños y cocinas</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Transforma tu hogar o local con reformas de calidad. Presupuesto detallado sin coste y ejecución en plazos ajustados.
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
              <LeadForm servicio="Reformas" title="Presupuesto para reformas" variant="dark" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Nuestros servicios de reforma</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Desde pequeñas renovaciones hasta reformas integrales completas.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {serviciosReforma.map((s) => (
            <div key={s.title} className="flex gap-5 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">¿Por qué elegirnos para tu reforma?</h2>
              <ul className="mt-8 space-y-4">
                {[
                  'Presupuesto detallado sin sorpresas',
                  'Materiales de primera calidad',
                  'Ejecución en plazos acordados',
                  'Limpieza posterior incluida',
                  'Garantía en todos los trabajos',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-green-600 p-8 sm:p-10">
              <p className="text-2xl font-bold">¿Tienes un proyecto en mente?</p>
              <p className="mt-2 text-green-100">
                Cuéntanos qué necesitas y te preparamos un presupuesto ajustado sin compromiso.
              </p>
              <a href="tel:694266258" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-green-700 transition hover:bg-gray-100">
                Solicitar presupuesto <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
