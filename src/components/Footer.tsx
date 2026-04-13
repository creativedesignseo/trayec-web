import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  servicios: [
    { name: 'Vaciado de Pisos', href: '/vaciado-pisos' },
    { name: 'Recogida de Muebles', href: '/recogida-muebles' },
    { name: 'Reformas', href: '/reformas' },
    { name: 'Limpieza Post-Obra', href: '/limpieza-post-obra' },
    { name: 'Pintura', href: '/pintura' },
  ],
  empresa: [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Aviso Legal', href: '/legal' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-trayec-gray-bg border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <span className="text-2xl font-extrabold text-trayec-green tracking-tight">
                TRAYEC
              </span>
              <span className="text-xs font-medium text-trayec-gray-text block">
                Vaciados & Recogidas
              </span>
            </Link>
            <p className="text-sm text-gray-600">
              Servicio profesional de vaciado de pisos, recogida de muebles, reformas, limpieza y pintura en toda Cataluña.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/34694266258"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              >
                WhatsApp
              </a>
              <a
                href="tel:694266258"
                className="rounded-full bg-trayec-green px-4 py-2 text-sm font-semibold text-white hover:bg-trayec-green-dark"
              >
                Llamar
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-trayec-gray-text">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.servicios.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-600 hover:text-trayec-green">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-trayec-gray-text">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.empresa.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-gray-600 hover:text-trayec-green">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-trayec-gray-text">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-trayec-green" />
                <a href="tel:694266258" className="hover:text-trayec-green">
                  694 266 258
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-trayec-green" />
                <a href="mailto:trayec2024sl@gmail.com" className="hover:text-trayec-green">
                  trayec2024sl@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-trayec-green" />
                Calle Saragossa 53, 3-1<br />Barcelona
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-trayec-green" />
                Disponible 24 horas
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Trayec 2024 S.L — B56321581. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
