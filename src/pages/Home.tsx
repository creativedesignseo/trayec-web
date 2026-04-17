import { Helmet } from 'react-helmet-async';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import { Truck, Paintbrush, Home as HomeIcon, Sparkles, Clock, Shield, MapPin, Phone, ChevronDown, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';

const servicios = [
  {
    name: 'Vaciado de Pisos',
    description: 'Vaciado completo de pisos, locales, naves y trasteros. Rápido, limpio y profesional.',
    icon: HomeIcon,
    href: '/vaciado-pisos',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Recogida de Muebles',
    description: 'Retiramos muebles, electrodomésticos y enseres. Evaluamos su estado sin coste.',
    icon: Truck,
    href: '/recogida-muebles',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Reformas Integrales',
    description: 'Reformas de baños, cocinas y viviendas completas. Presupuesto sin compromiso.',
    icon: Sparkles,
    href: '/reformas',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Limpieza',
    description: 'Dejamos el espacio impecable después del vaciado o la reforma.',
    icon: Shield,
    href: '/limpieza',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Pintura Profesional',
    description: 'Pintura de interiores y exteriores con acabados profesionales y duraderos.',
    icon: Paintbrush,
    href: '/pintura',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=600&q=80',
  },
];

const pasos = [
  {
    step: '01',
    title: 'Contacta',
    description: 'Llámanos o envía el formulario. Te respondemos en menos de 1 hora.',
  },
  {
    step: '02',
    title: 'Presupuesto',
    description: 'Evaluamos el trabajo y te damos un presupuesto claro y sin sorpresas.',
  },
  {
    step: '03',
    title: 'Ejecución',
    description: 'Realizamos el servicio en el día y hora acordados. Limpio y profesional.',
  },
];

const faqs = [
  {
    question: '¿El presupuesto tiene algún coste?',
    answer: 'No. Todos nuestros presupuestos son completamente gratuitos y sin compromiso.',
  },
  {
    question: '¿Cuánto tardáis en responder?',
    answer: 'Garantizamos una respuesta en menos de 1 hora durante todo el día, incluso fines de semana.',
  },
  {
    question: '¿Cubrís toda Cataluña?',
    answer: 'Sí. Trabajamos en Barcelona, Tarragona, Girona y Lleida, incluyendo todos los municipios.',
  },
  {
    question: '¿La recogida de muebles puede ser gratuita?',
    answer: 'Sí. Si los muebles o electrodomésticos están en buen estado y son recuperables, la retirada puede ser gratuita.',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      <LocalBusinessSchema />
      <Helmet>
        <title>El Recolector | Vaciado de Pisos y Recogida de Muebles en Cataluña</title>
        <meta name="description" content="Servicio profesional de vaciado de pisos, recogida de muebles, reformas, limpieza y pintura en Barcelona y toda Cataluña. Presupuesto gratis y respuesta en menos de 1h." />
        <link rel="canonical" href="https://elrecolector.es/" />
      </Helmet>

      {/* Hero */}
      <div className="relative min-h-[65vh] sm:min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80"
            alt="Camión de mudanzas El Recolector en Barcelona"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
        </div>

        <div className="relative mx-auto flex min-h-[65vh] sm:min-h-[80vh] max-w-7xl items-center px-4 pt-28 pb-24 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">
          <div className="grid w-full gap-12 lg:grid-cols-2 items-center lg:h-full">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Disponible 24h en toda Cataluña
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Vaciado de pisos <span className="text-green-400">urgente</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Servicio rápido, limpio y profesional. Presupuesto sin coste y respuesta en menos de 1 hora. El Recolector, tu empresa de confianza en Barcelona y toda Cataluña.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:694266258" className="btn-cta inline-flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  694 266 258
                </a>
                <a href="#servicios" className="btn-outline">
                  Ver servicios
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                <div>
                  <p className="text-3xl font-bold text-white">+1</p>
                  <p className="text-sm text-slate-400">Año de experiencia</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">+500</p>
                  <p className="text-sm text-slate-400">Servicios realizados</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">&lt;1h</p>
                  <p className="text-sm text-slate-400">Tiempo de respuesta</p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col justify-center pt-8 lg:pt-0">
              <LeadForm title="Pide tu presupuesto gratis" variant="dark" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust */}
      <div className="border-b bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500">
            Servicio profesional en toda Cataluña · Barcelona · Tarragona · Girona · Lleida
          </p>
        </div>
      </div>

      {/* About */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden pb-8 pr-8">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
              alt="Equipo El Recolector trabajando"
              loading="lazy"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute bottom-4 right-4 rounded-2xl bg-green-600 p-5 text-white shadow-xl sm:bottom-6 sm:right-6 sm:p-6">
              <p className="text-4xl font-black">24h</p>
              <p className="text-sm font-medium opacity-90">Disponibles</p>
            </div>
          </div>
          <div>
            <h2 className="section-title">
              Tu equipo de confianza para vaciados y recogidas de muebles
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              En El Recolector combinamos rapidez, profesionalidad y respeto por el medio ambiente. Reciclamos todo lo que podemos y garantizamos un servicio limpio de principio a fin.
            </p>
            <ul className="mt-6 space-y-3">
              {['Presupuesto sin coste', 'Respuesta en menos de 1 hora', 'Reciclaje responsable', 'Cobertura total Cataluña'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-4">
              <Link to="/sobre-nosotros" className="btn-primary">
                Conócenos
              </Link>
              <a href="tel:694266258" className="inline-flex items-center gap-2 font-semibold text-green-600 hover:text-green-700">
                <Phone className="h-5 w-5" />
                Llámanos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div id="servicios" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Nuestros servicios</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Soluciones integrales para hogares, locales y naves industriales en toda Cataluña.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.map((s) => (
              <Link
                key={s.name}
                to={s.href}
                className="group card-modern overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex rounded-full bg-green-500 p-2.5 text-white shadow-lg">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-green-600">
                    Saber más <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Proceso */}
      <div id="proceso" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">¿Cómo funciona?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              Tres pasos simples para resolver tu vaciado o reforma.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pasos.map((p, i) => (
              <div key={p.step} className="relative rounded-2xl bg-slate-800/50 p-8 ring-1 ring-white/10">
                <span className="text-5xl font-black text-green-400/40">{p.step}</span>
                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-slate-300">{p.description}</p>
                {i < 2 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-slate-600 md:block">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diferenciales */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">¿Por qué elegir El Recolector?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Nos diferenciamos por la rapidez, la transparencia y el trato cercano. Tu tiempo y tranquilidad son lo primero.
            </p>
            <div className="mt-8 space-y-6">
              {[
                { icon: Clock, title: 'Respuesta en menos de 1h', desc: 'Sabemos que muchos casos son urgentes. Por eso garantizamos contacto rápido.' },
                { icon: Shield, title: 'Presupuesto sin coste', desc: 'Evaluamos tu caso sin compromiso. Precio claro desde el primer momento.' },
                { icon: MapPin, title: 'Toda Cataluña', desc: 'Desde Barcelona capital hasta el pueblo más pequeño de Girona o Lleida.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
              alt="Profesionalidad El Recolector"
              loading="lazy"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Testimonios */}
      <div className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { name: 'María G.', text: 'Necesitaba vaciar un piso heredado urgentemente. En menos de 2 horas tenían todo listo y limpio.', stars: 5 },
              { name: 'Jordi R.', text: 'Profesionales y puntuales. El presupuesto fue justo y no hubo sorpresas. Totalmente recomendables.', stars: 5 },
              { name: 'Ana P.', text: 'Recogieron los muebles de mi oficina sin coste porque estaban en buen estado. Muy sostenible.', stars: 5 },
            ].map((t, i) => (
              <div key={i} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex gap-1 text-green-500">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-slate-700">"{t.text}"</p>
                <p className="mt-4 text-sm font-bold text-slate-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-slate-50 ring-1 ring-slate-100">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 text-slate-500 transition ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            ¿Listo para vaciar tu piso o reformar tu espacio?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Llámanos ahora y recibe tu presupuesto sin compromiso. Atendemos urgencias y trabajos programados en toda Cataluña.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:694266258" className="btn-cta inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              694 266 258
            </a>
            <a
              href="https://wa.me/34694266258"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
