import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, Phone, User, MapPin, MessageSquare, Mail, Home, RotateCcw } from 'lucide-react';

interface LeadFormProps {
  servicio?: string;
  title?: string;
  variant?: 'light' | 'dark';
}

export default function LeadForm({ servicio = 'General', title = 'Solicita tu presupuesto gratis', variant = 'light' }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = String(data.get('nombre') || '').trim();
    const telefono = String(data.get('telefono') || '').trim();
    const email = String(data.get('email') || '').trim();
    const ciudad = String(data.get('ciudad') || '').trim();
    const mensaje = String(data.get('mensaje') || '').trim();
    const servicioValor = String(data.get('servicio') || 'General');

    const text = [
      `Hola soy de ELRECOLECTOR.ES pasame fotos y ubicación y te doy precio ahora mismo. Si encaja podemos hacerlo hoy.`,
      ``,
      `*Servicio:* ${servicioValor}`,
      `*Nombre:* ${nombre}`,
      `*Teléfono:* ${telefono}`,
      email ? `*Email:* ${email}` : '',
      `*Ciudad:* ${ciudad}`,
      mensaje ? `*Mensaje:* ${mensaje}` : '',
    ].filter(Boolean).join('\n');

    const phone = '34694266258';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.open(url, '_blank');
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    formRef.current?.reset();
  };

  if (submitted) {
    return (
      <div className={`rounded-3xl p-8 text-center ${variant === 'dark' ? 'bg-slate-800/80' : 'bg-green-50'}`}>
        <CheckCircle className="mx-auto h-14 w-14 text-green-500" />
        <h3 className={`mt-5 text-lg font-bold ${variant === 'dark' ? 'text-white' : 'text-green-700'}`}>¡Gracias por contactarnos!</h3>
        <p className={`mt-2 text-sm ${variant === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
          Hemos recibido tu solicitud. Un experto te contactará en menos de 10 minutos.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/"
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition hover:scale-105 ${
              variant === 'dark'
                ? 'bg-white text-slate-900 hover:bg-slate-100'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            <Home className="h-4 w-4" />
            Volver al inicio
          </Link>
          <button
            onClick={handleReset}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold ring-1 transition hover:scale-105 ${
              variant === 'dark'
                ? 'bg-slate-700 text-white ring-slate-600 hover:bg-slate-600'
                : 'bg-white text-slate-700 ring-slate-200 hover:bg-slate-50'
            }`}
          >
            <RotateCcw className="h-4 w-4" />
            Enviar otra solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl p-6 shadow-2xl backdrop-blur-sm sm:p-8 ${variant === 'dark' ? 'bg-slate-900/80 ring-1 ring-white/10' : 'bg-white ring-1 ring-slate-100'}`}>
      <h3 className={`text-xl font-bold ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`mt-1 text-sm ${variant === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>
        Contestaremos en menos de 10 minutos. Sin compromiso.
      </p>
      <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input type="hidden" name="servicio" value={servicio} />
        
        <div className="relative">
          <User className={`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400`} />
          <input
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            className={`w-full rounded-full border-0 py-3 pl-11 pr-4 text-sm outline-none ring-1 transition focus:ring-2 ${
              variant === 'dark'
                ? 'bg-slate-800 text-white placeholder-slate-400 ring-slate-700 focus:ring-green-500'
                : 'bg-slate-50 text-slate-900 placeholder-slate-400 ring-slate-200 focus:ring-green-500'
            }`}
          />
        </div>

        <div className="relative">
          <Phone className={`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400`} />
          <input
            name="telefono"
            type="tel"
            required
            placeholder="Teléfono"
            className={`w-full rounded-full border-0 py-3 pl-11 pr-4 text-sm outline-none ring-1 transition focus:ring-2 ${
              variant === 'dark'
                ? 'bg-slate-800 text-white placeholder-slate-400 ring-slate-700 focus:ring-green-500'
                : 'bg-slate-50 text-slate-900 placeholder-slate-400 ring-slate-200 focus:ring-green-500'
            }`}
          />
        </div>

        <div className="relative">
          <Mail className={`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400`} />
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            className={`w-full rounded-full border-0 py-3 pl-11 pr-4 text-sm outline-none ring-1 transition focus:ring-2 ${
              variant === 'dark'
                ? 'bg-slate-800 text-white placeholder-slate-400 ring-slate-700 focus:ring-green-500'
                : 'bg-slate-50 text-slate-900 placeholder-slate-400 ring-slate-200 focus:ring-green-500'
            }`}
          />
        </div>

        <div className="relative">
          <MapPin className={`absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400`} />
          <input
            name="ciudad"
            type="text"
            required
            placeholder="Ciudad o población"
            className={`w-full rounded-full border-0 py-3 pl-11 pr-4 text-sm outline-none ring-1 transition focus:ring-2 ${
              variant === 'dark'
                ? 'bg-slate-800 text-white placeholder-slate-400 ring-slate-700 focus:ring-green-500'
                : 'bg-slate-50 text-slate-900 placeholder-slate-400 ring-slate-200 focus:ring-green-500'
            }`}
          />
        </div>

        <div className="relative">
          <MessageSquare className={`absolute left-4 top-4 h-4 w-4 text-slate-400`} />
          <textarea
            name="mensaje"
            rows={3}
            placeholder="¿Qué necesitas?"
            className={`w-full rounded-2xl border-0 py-3 pl-11 pr-4 text-sm outline-none ring-1 transition focus:ring-2 ${
              variant === 'dark'
                ? 'bg-slate-800 text-white placeholder-slate-400 ring-slate-700 focus:ring-green-500'
                : 'bg-slate-50 text-slate-900 placeholder-slate-400 ring-slate-200 focus:ring-green-500'
            }`}
          />
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? 'Enviando...' : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Enviar solicitud
            </>
          )}
        </button>
        <p className={`text-center text-xs ${variant === 'dark' ? 'text-slate-400' : 'text-slate-400'}`}>
          Al enviar, aceptas nuestra política de privacidad.
        </p>
      </form>
    </div>
  );
}
