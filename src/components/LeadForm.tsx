import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface LeadFormProps {
  servicio?: string;
  title?: string;
}

export default function LeadForm({ servicio = 'General', title = 'Solicita tu presupuesto gratis' }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: conectar con backend real (PHP o Supabase)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-trayec-green-light p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-trayec-green" />
        <h3 className="mt-4 text-lg font-bold text-trayec-green">¡Gracias!</h3>
        <p className="mt-2 text-sm text-gray-700">
          Hemos recibido tu solicitud. Te contactaremos en menos de 1 hora.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 sm:p-8">
      <h3 className="text-lg font-bold text-trayec-gray-text">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">
        Respuesta en menos de 1 hora. Sin compromiso.
      </p>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <input type="hidden" name="servicio" value={servicio} />
        <div>
          <label htmlFor="nombre" className="sr-only">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-trayec-green focus:ring-1 focus:ring-trayec-green"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="sr-only">Teléfono</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            placeholder="Teléfono"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-trayec-green focus:ring-1 focus:ring-trayec-green"
          />
        </div>
        <div>
          <label htmlFor="ciudad" className="sr-only">Ciudad / Población</label>
          <input
            id="ciudad"
            name="ciudad"
            type="text"
            required
            placeholder="Ciudad o población"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-trayec-green focus:ring-1 focus:ring-trayec-green"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="sr-only">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={3}
            placeholder="¿Qué necesitas?"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-trayec-green focus:ring-1 focus:ring-trayec-green"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-cta w-full"
        >
          {loading ? 'Enviando...' : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Enviar solicitud
            </>
          )}
        </button>
        <p className="text-center text-xs text-gray-400">
          Al enviar, aceptas nuestra política de privacidad.
        </p>
      </form>
    </div>
  );
}
