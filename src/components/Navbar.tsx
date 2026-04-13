import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Vaciado de Pisos', href: '/vaciado-pisos' },
  { name: 'Reformas', href: '/reformas' },
  { name: 'Limpieza', href: '/limpieza-post-obra' },
  { name: 'Pintura', href: '/pintura' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-extrabold text-trayec-green tracking-tight">
              TRAYEC
            </span>
            <span className="ml-1 text-xs font-medium text-trayec-gray-text block">
              Vaciados & Recogidas
            </span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-trayec-gray-text"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-6 lg:items-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition ${
                location.pathname === item.href
                  ? 'text-trayec-green'
                  : 'text-trayec-gray-text hover:text-trayec-green'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <a
            href="tel:694266258"
            className="inline-flex items-center gap-2 text-sm font-bold text-trayec-green hover:text-trayec-green-dark"
          >
            <Phone className="h-4 w-4" />
            694 266 258
          </a>
          <a
            href="https://wa.me/34694266258"
            target="_blank"
            rel="noreferrer"
            className="btn-cta"
          >
            WhatsApp
          </a>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold text-trayec-green">TRAYEC</span>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-trayec-gray-text"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-100">
                <div className="space-y-2 py-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-trayec-gray-text hover:bg-trayec-green-light hover:text-trayec-green"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-3">
                  <a
                    href="tel:694266258"
                    className="flex items-center gap-2 text-lg font-bold text-trayec-green"
                  >
                    <Phone className="h-5 w-5" />
                    694 266 258
                  </a>
                  <a
                    href="https://wa.me/34694266258"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-cta w-full"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
