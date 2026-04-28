import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { updateConsent } from '../lib/dataLayer';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === 'true') {
      updateConsent(true);
      return;
    }

    setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    updateConsent(true);
    setVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem('cookie_consent', 'false');
    updateConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-700 shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 pr-4">
            <p className="text-sm text-slate-300">
              Este sitio web utiliza cookies técnicas necesarias y, si aceptas, cookies de medición para mejorar campañas y servicios.{' '}
              <Link to="/politica-cookies" className="underline hover:text-green-400 transition">
                Más información
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleAccept}
              className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-500 transition"
            >
              Aceptar medición
            </button>
            <button
              onClick={handleClose}
              aria-label="Cerrar aviso de cookies"
              className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-slate-700 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
