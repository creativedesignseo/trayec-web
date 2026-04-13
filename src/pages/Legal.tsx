import { Mail, Phone, MapPin } from 'lucide-react';

export default function Legal() {
  return (
    <div className="bg-white">
      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Información Legal</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Aviso legal, política de privacidad y política de cookies.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-slate-900">Aviso Legal</h2>
          <p className="mt-4 text-slate-600">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa que el titular de esta web es:
          </p>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-green-600" /> <strong>Razón social:</strong> Trayec 2024 S.L</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-green-600" /> <strong>CIF:</strong> B56321581</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-green-600" /> <strong>Dirección:</strong> Calle Saragossa 53, 3-1, Barcelona</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-green-600" /> <strong>Teléfono:</strong> 694 266 258</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-green-600" /> <strong>Email:</strong> trayec2024sl@gmail.com</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">Política de Privacidad</h2>
          <p className="mt-4 text-slate-600">
            Trayec 2024 S.L se compromete a proteger la información personal de los usuarios. Los datos recogidos a través del formulario de contacto serán utilizados exclusivamente para gestionar su solicitud y nunca serán cedidos a terceros sin su consentimiento.
          </p>
          <p className="mt-4 text-slate-600">
            Puede ejercer sus derechos de acceso, rectificación, cancelación y oposición contactando con nosotros a través del email trayec2024sl@gmail.com.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">Política de Cookies</h2>
          <p className="mt-4 text-slate-600">
            Este sitio web utiliza cookies técnicas necesarias para su correcto funcionamiento. No se utilizan cookies de terceros para publicidad ni seguimiento de usuario.
          </p>
          <p className="mt-4 text-slate-600">
            Al navegar por este sitio, acepta el uso de dichas cookies. Puede configurar su navegador para rechazarlas, aunque esto podría afectar a algunas funcionalidades.
          </p>
        </div>
      </div>
    </div>
  );
}
