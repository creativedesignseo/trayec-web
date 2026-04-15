import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const servicios = [
  { name: 'Vaciado de Pisos', href: '/vaciado-pisos' },
  { name: 'Recogida de Muebles', href: '/recogida-muebles' },
  { name: 'Reformas Integrales', href: '/reformas' },
  { name: 'Limpieza Post-Obra', href: '/limpieza-post-obra' },
  { name: 'Pintura Profesional', href: '/pintura' },
];

const baseNavLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Cómo funciona', href: '#proceso' },
  { name: 'Contacto', href: '/contacto' },
];

function scrollToHash(hash: string) {
  const id = hash.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);
  const [desktopServiciosOpen, setDesktopServiciosOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const desktopDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle initial hash on load
  useEffect(() => {
    if (location.hash) {
      const timeout = setTimeout(() => scrollToHash(location.hash), 100);
      return () => clearTimeout(timeout);
    }
  }, [location.pathname, location.hash]);

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServiciosOpen(false);
      }
    }
    if (desktopServiciosOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [desktopServiciosOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        e.preventDefault();
        scrollToHash(href);
      }
      // If not on home, React Router will navigate to /#hash
    }
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 lg:py-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img src="/logo.svg" alt="El Recolector" className="h-20 w-auto" />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            aria-label="Abrir menú"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${scrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <Link
            to="/"
            className={`text-sm font-semibold transition ${
              scrolled
                ? isActive('/')
                  ? 'text-green-600'
                  : 'text-slate-700 hover:text-green-600'
                : 'text-white/90 hover:text-white'
            }`}
          >
            Inicio
          </Link>

          <div className="relative" ref={desktopDropdownRef}>
            <button
              type="button"
              onClick={() => setDesktopServiciosOpen((v) => !v)}
              onMouseEnter={() => setDesktopServiciosOpen(true)}
              className={`inline-flex items-center gap-1 text-sm font-semibold transition ${
                scrolled
                  ? location.pathname.startsWith('/vaciado-pisos') ||
                    location.pathname.startsWith('/recogida-muebles') ||
                    location.pathname.startsWith('/reformas') ||
                    location.pathname.startsWith('/limpieza-post-obra') ||
                    location.pathname.startsWith('/pintura')
                    ? 'text-green-600'
                    : 'text-slate-700 hover:text-green-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Servicios
              <ChevronDown className={`h-4 w-4 transition ${desktopServiciosOpen ? 'rotate-180' : ''}`} />
            </button>

            {desktopServiciosOpen && (
              <div
                onMouseLeave={() => setDesktopServiciosOpen(false)}
                className="absolute top-full left-1/2 z-50 mt-3 w-56 -translate-x-1/2 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-100"
              >
                <Link
                  to="/#servicios"
                  onClick={(e) => {
                    handleNavClick(e, '#servicios');
                    setDesktopServiciosOpen(false);
                  }}
                  className="block rounded-xl px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50"
                >
                  Ver todos los servicios
                </Link>
                <div className="my-1 h-px bg-slate-100" />
                {servicios.map((s) => (
                  <Link
                    key={s.name}
                    to={s.href}
                    onClick={() => setDesktopServiciosOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-600"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {baseNavLinks.slice(1).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-semibold transition ${
                scrolled
                  ? location.pathname + location.hash === item.href || location.pathname === item.href
                    ? 'text-green-600'
                    : 'text-slate-700 hover:text-green-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <a
            href="tel:694266258"
            className={`inline-flex items-center gap-2 text-sm font-bold transition ${scrolled ? 'text-green-600' : 'text-white'}`}
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

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <img src="/logo.svg" alt="El Recolector" className="h-16 w-auto" />
              <button
                type="button"
                aria-label="Cerrar menú"
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-100">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-green-50 hover:text-green-600"
                  >
                    Inicio
                  </Link>

                  {/* Mobile Servicios accordion */}
                  <div className="-mx-3 rounded-lg px-3 py-2 hover:bg-green-50">
                    <button
                      type="button"
                      onClick={() => setMobileServiciosOpen((v) => !v)}
                      className="flex w-full items-center justify-between text-left text-base font-semibold text-slate-800"
                    >
                      <span className={mobileServiciosOpen ? 'text-green-600' : ''}>Servicios</span>
                      <ChevronDown className={`h-5 w-5 text-slate-500 transition ${mobileServiciosOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServiciosOpen && (
                      <div className="mt-2 space-y-1 border-l-2 border-green-100 pl-4">
                        <Link
                          to="/#servicios"
                          onClick={(e) => {
                            handleNavClick(e, '#servicios');
                            setMobileMenuOpen(false);
                          }}
                          className="block rounded-lg px-3 py-2 text-lg font-bold text-green-600 hover:bg-green-50"
                        >
                          Ver todos
                        </Link>
                        {servicios.map((s) => (
                          <Link
                            key={s.name}
                            to={s.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-lg px-3 py-2 text-lg font-bold text-slate-700 hover:bg-green-50 hover:text-green-600"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {baseNavLinks.slice(1).map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-green-50 hover:text-green-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a href="tel:694266258" className="flex items-center gap-2 text-lg font-bold text-green-600">
                    <Phone className="h-5 w-5" />
                    694 266 258
                  </a>
                  <a href="https://wa.me/34694266258" target="_blank" rel="noreferrer" className="btn-cta w-full">
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
