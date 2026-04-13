import { Truck, Paintbrush, Home as HomeIcon, Sparkles, Clock, Shield, MapPin, Phone } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const servicios = [
  {
    name: 'Vaciado de Pisos',
    description: 'Vaciado completo de pisos, locales, naves y trasteros. Rápido, limpio y profesional.',
    icon: HomeIcon,
    href: '/vaciado-pisos',
  },
  {
    name: 'Recogida de Muebles',
    description: 'Retiramos muebles, electrodomésticos y enseres. Si son recuperables, la recogida puede ser gratuita.',
    icon: Truck,
    href: '/recogida-muebles',
  },
  {
    name: 'Reformas Integrales',
    description: 'Reformas de baños, cocinas y viviendas completas. Presupuesto sin compromiso.',
    icon: Sparkles,
    href: '/reformas',
  },
  {
    name: 'Limpieza Post-Obra',
    description: 'Dejamos el espacio impecable después del vaciado o la reforma.',
    icon: Shield,
    href: '/limpieza-post-obra',
  },
  {
    name: 'Pintura',
    description: 'Pintura de interiores y exteriores con acabados profesionales y duraderos.',
    icon: Paintbrush,
    href: '/pintura',
  },
];

const diferenciales = [
  {
    name: 'Respuesta en menos de 1h',
    description: 'Te contactamos de inmediato para agendar tu servicio.',
    icon: Clock,
  },
  {
    name: 'Presupuesto sin costo',
    description: 'Evaluamos tu caso y te damos precio real, sin compromiso.',
    icon: Shield,
  },
  {
    name: 'Toda Cataluña',
    description: 'Barcelona, Tarragona, Girona y Lleida. Cubrimos toda la provincia.',
    icon: MapPin,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-trayec-green">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-inset ring-white/20">
                Disponible 24 horas en toda Cataluña
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Vaciado de pisos y recogida de muebles
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/90">
                Servicio rápido, limpio y profesional. Presupuesto sin costo y respuesta en menos de 1 hora. Trayec 2024 S.L, tu empresa de confianza en Barcelona y toda Cataluña.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="tel:694266258" className="btn-cta inline-flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  694 266 258
                </a>
                <a
                  href="https://wa.me/34694266258"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-trayec-green transition hover:bg-gray-100"
                >
                  WhatsApp
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-white/80">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Empresa autorizada</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Toda Cataluña</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <LeadForm title="Pide tu presupuesto gratis" />
            </div>
          </div>
        </div>
      </div>

      {/* Servicios */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Nuestros servicios</h2>
          <p className="mt-4 text-lg text-gray-600">
            Soluciones integrales para hogares, locales y naves industriales.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => (
            <a
              key={servicio.name}
              href={servicio.href}
              className="group rounded-2xl bg-white p-6 shadow ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-trayec-green-light p-3 text-trayec-green group-hover:bg-trayec-green group-hover:text-white transition">
                <servicio.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-trayec-gray-text">
                {servicio.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{servicio.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-trayec-green">
                Saber más
                <span aria-hidden="true" className="ml-1">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Diferenciales */}
      <div className="bg-trayec-gray-bg">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="section-title">¿Por qué elegir Trayec?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Más de un año ofreciendo servicio profesional en Cataluña.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciales.map((item) => (
              <div key={item.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="inline-flex rounded-xl bg-trayec-orange/10 p-3 text-trayec-orange">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-trayec-gray-text">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="bg-trayec-green">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Necesitas vaciar un piso o recoger muebles?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
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
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-trayec-green transition hover:bg-gray-100"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
