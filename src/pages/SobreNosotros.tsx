import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, Shield } from 'lucide-react';
import LocalBusinessSchema from '../components/LocalBusinessSchema';

export default function SobreNosotros() {
  return (
    <div className="bg-white pt-24 lg:pt-28">
      <LocalBusinessSchema />
      <Helmet>
        <title>Sobre Nosotros | ELRECOLECTOR.ES | Vaciados y Reformas Cataluña</title>
        <meta name="description" content="Conoce ELRECOLECTOR.ES. Empresa profesional de vaciado de pisos, recogida de muebles, reformas, limpieza y pintura en Barcelona y toda Cataluña." />
        <link rel="canonical" href="https://elrecolector.es/sobre-nosotros" />
      </Helmet>

      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Sobre Nosotros</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            ELRECOLECTOR.ES — Tu empresa de confianza para vaciados, recogidas y reformas en Cataluña.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="section-title">Profesionales del vaciado y la reforma</h2>
            <p className="mt-4 text-lg text-slate-600">
              En ELRECOLECTOR.ES llevamos más de un año ofreciendo servicios profesionales de vaciado de pisos, recogida de muebles, reformas integrales, limpieza y pintura en toda Cataluña.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Nuestro objetivo es simple: hacer que cada cliente quede satisfecho con un servicio rápido, limpio y transparente. Nos encargamos de todo, desde el primer contacto hasta la limpieza final.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Disponibilidad', value: '24h' },
                { label: 'Cobertura', value: 'Toda Cataluña' },
                { label: 'Respuesta', value: '10m' },
                { label: 'Presupuesto', value: 'Gratis' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-green-50 p-4">
                  <p className="text-2xl font-black text-green-600">{stat.value}</p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {[
              { icon: Shield, title: 'Compromiso', desc: 'Cumplimos con los plazos y el presupuesto acordado. Sin sorpresas.' },
              { icon: Clock, title: 'Rapidez', desc: 'Sabemos que muchas situaciones son urgentes. Respondemos y actuamos con velocidad.' },
              { icon: MapPin, title: 'Cobertura total', desc: 'Desde Barcelona capital hasta los pueblos más pequeños de Girona o Lleida.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
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
      </div>

      <div className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">¿Tienes un proyecto en mente?</h2>
          <p className="mt-2 text-slate-600">Llámanos y te daremos presupuesto sin compromiso.</p>
          <a href="tel:694266258" className="btn-primary mt-6 inline-flex items-center gap-2">
            <Phone className="h-5 w-5" />
            694 266 258
          </a>
        </div>
      </div>
    </div>
  );
}
