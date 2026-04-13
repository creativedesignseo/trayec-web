import { useState } from 'react';
import { Send, CheckCircle, Phone, User, MapPin, MessageSquare } from 'lucide-react';

interface LeadFormProps {
  servicio?: string;
  title?: string;
  variant?: 'light' | 'dark';
}

export default function LeadForm({ servicio = 'General', title = 'Solicita tu presupuesto gratis', variant = 'light' }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className={`rounded-3xl p-8 text-center ${variant === 'dark' ? 'bg-slate-800/80' : 'bg-green-50'}`}>
        <CheckCircle className="mx-auto h-14 w-14 text-green-500" />
        <h3 className={`mt-5 text-lg font-bold ${variant === 'dark' ? 'text-white' : 'text-green-700'}`}>¡Gracias por contactarnos!</h3>
        <p className={`mt-2 text-sm ${variant === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
          Hemos recibido tu solicitud. Un experto te contactará en menos de 1 hora.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl p-6 shadow-2xl backdrop-blur-sm sm:p-8 ${variant === 'dark' ? 'bg-slate-900/80 ring-1 ring-white/10' : 'bg-white ring-1 ring-slate-100'}`}>
      <h3 className={`text-xl font-bold ${variant === 'dark' ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
      <p className={`mt-1 text-sm ${variant === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>
        Respuesta garantizada en menos de 1 hora. Sin compromiso.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
