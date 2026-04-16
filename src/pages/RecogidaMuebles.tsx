import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle, Truck } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

const beneficios = [
  'Evaluación gratuita del estado de los muebles',
  'Recogida gratuita si son recuperables',
  'Retirada de electrodomésticos y enseres',
  'Gestión responsable y reciclaje certificado',
  'Respuesta en menos de 1 hora',
  'Servicio en toda Cataluña',
];

export default function RecogidaMuebles() {
  return (
    <div className="bg-white">
      <LocalBusinessSchema />
      <Helmet>
        <title>Recogida de Muebles Gratis Barcelona | El Recolector</title>
        <meta name="description" content="Recogida de muebles, electrodomésticos y enseres en Barcelona y toda Cataluña. Si están en buen estado, la retirada puede ser gratuita. Presupuesto sin coste." />
        <link rel="canonical" href="https://trayec-web.netlify.app/recogida-muebles" />
      </Helmet>

      <div className="relative min-h-[65vh] sm:min-h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
            alt="Recogida de muebles en Cataluña"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
        </div>
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-4 pt-28 pb-24 sm:px-6 lg:px-8 lg:pt-36 lg:pb-24">
          <div className="grid w-full gap-12 lg:grid-cols-2 items-center lg:h-full">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                <Truck className="h-4 w-4" />
                Recogida en Barcelona y Cataluña
              </div>
              <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Recogida de muebles <span className="text-green-400">gratis y a domicilio</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Retiramos muebles, electrodomésticos y enseres en toda Cataluña. Si están en buen estado, la recogida puede ser totalmente gratuita.
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
              <LeadForm servicio="Recogida de Muebles" title="Solicita recogida de muebles" variant="dark" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">¿Cómo funciona la recogida de muebles?</h2>
            <p className="mt-4 text-lg text-slate-600">
              Envíanos fotos o descríbenos qué necesitas retirar. Evaluamos el estado de los muebles y te damos presupuesto. Si son reutilizables, la recogida es gratuita.
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
              src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80"
              alt="Recogida muebles profesional"
              loading="lazy"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-green-600 p-6 text-white shadow-xl sm:-right-10">
              <p className="text-4xl font-black">100%</p>
              <p className="text-sm font-medium opacity-90">Reciclaje</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">¿Qué recogemos?</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {['Sofás y sillones', 'Camas y colchones', 'Electrodomésticos', 'Muebles de cocina', 'Armarios y vestidores', 'Electrónica', 'Ropa y textiles', 'Objetos varios'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-600 py-16 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          ¿Tienes muebles para recoger?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Presupuesto gratis en menos de 1 hora. Servicio en toda Cataluña.
        </p>
        <a href="tel:694266258" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-green-700 shadow-lg transition hover:bg-gray-100">
          <Phone className="h-5 w-5" />
          694 266 258
        </a>
      </div>
    </div>
  );
}
