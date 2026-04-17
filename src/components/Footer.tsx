import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  servicios: [
    { name: 'Vaciado de Pisos', href: '/vaciado-pisos' },
    { name: 'Recogida de Muebles', href: '/recogida-muebles' },
    { name: 'Reformas', href: '/reformas' },
    { name: 'Limpieza', href: '/limpieza' },
    { name: 'Pintura', href: '/pintura' },
  ],
  empresa: [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ],
  legal: [
    { name: 'Aviso Legal', href: '/aviso-legal' },
    { name: 'Privacidad', href: '/politica-privacidad' },
    { name: 'Cookies', href: '/politica-cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block">
              <img src="/logo.svg" alt="El Recolector" className="h-14 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-slate-400">
              Servicio profesional de vaciado de pisos, recogida de muebles, reformas, limpieza y pintura en toda Cataluña.
            </p>

            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              <p className="text-sm font-semibold text-white">Solicita tu presupuesto gratis</p>
              <div className="mt-3 flex gap-2">
                <input
                  type="tel"
                  placeholder="Tu teléfono"
                  className="flex-1 rounded-full border-0 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none ring-1 ring-slate-700 focus:ring-2 focus:ring-green-500"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  <span className="hidden sm:inline">Enviar</span>
                  <ArrowRight className="h-4 w-4 sm:ml-2" />
                </button>
              </div>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7 lg:justify-items-end">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Servicios</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.servicios.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-slate-400 hover:text-green-400 transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Empresa</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.empresa.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-slate-400 hover:text-green-400 transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Legal</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-slate-400 hover:text-green-400 transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contacto</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2 text-sm text-slate-400">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <a href="tel:694266258" className="hover:text-green-400">694 266 258</a>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-400">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <a href="mailto:info@elrecolector.es" className="hover:text-green-400">info@elrecolector.es</a>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  Calle Saragossa 53, 3-1<br />Barcelona
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-400">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  Disponible 24h
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            Copyright © {new Date().getFullYear()} El Recolector . Reservados todos los derechos
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/34694266258" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white hover:opacity-90 transition">
              WhatsApp
            </a>
            <a href="tel:694266258" className="rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white hover:bg-green-500 transition">
              Llamar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
