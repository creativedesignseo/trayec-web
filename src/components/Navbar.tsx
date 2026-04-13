import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Cómo funciona', href: '#proceso' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className={`text-2xl font-black tracking-tight transition-colors ${scrolled ? 'text-green-600' : 'text-white'}`}>
              TRAYEC
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${scrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold transition ${
                scrolled
                  ? location.pathname === item.href || location.hash === item.href
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

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white px-6 py-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xl font-black text-green-600">TRAYEC</span>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-100">
                <div className="space-y-2 py-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
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
