import { Helmet } from 'react-helmet-async';

export default function PoliticaPrivacidad() {
  return (
    <div className="bg-white pt-24 lg:pt-28">
      <Helmet>
        <title>Política de Privacidad | ELRECOLECTOR.ES</title>
        <meta name="description" content="Política de privacidad de ELRECOLECTOR.ES. Protección de datos personales conforme al RGPD y la LOPDGDD." />
        <link rel="canonical" href="https://elrecolector.es/politica-privacidad" />
      </Helmet>

      <div className="relative bg-slate-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Política de Privacidad</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Cómo protegemos y gestionamos tus datos personales.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900">1. Responsable del tratamiento</h2>
            <p className="mt-4 text-slate-600">
              El responsable del tratamiento de los datos personales recogidos a través de este sitio web es <strong>VACIADO DE PISOS ELRECOLECTOR.ES</strong>, con CIF <strong>B56321581</strong> y domicilio en Calle Saragossa 53, 3-1, 08006 Barcelona. Puede contactar con nosotros mediante el email <strong>info@elrecolector.es</strong> o el teléfono <strong>694 266 258</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">2. Datos que recogemos</h2>
            <p className="mt-4 text-slate-600">
              A través del formulario de contacto y solicitud de presupuesto recogemos los siguientes datos personales:
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-600">
              <li><strong>Nombre y apellidos</strong></li>
              <li><strong>Teléfono</strong></li>
              <li><strong>Correo electrónico</strong></li>
              <li><strong>Ciudad o población</strong></li>
              <li><strong>Mensaje o descripción del servicio solicitado</strong></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">3. Finalidad y legitimación</h2>
            <p className="mt-4 text-slate-600">
              Los datos personales se tratan con la finalidad de <strong>gestionar su solicitud de información o presupuesto</strong>, contactarle para ofrecerle el servicio solicitado y mantener la relación comercial derivada de la prestación de dicho servicio.
            </p>
            <p className="mt-4 text-slate-600">
              La <strong>base legal</strong> para el tratamiento es el <strong>consentimiento</strong> que el usuario presta al enviar el formulario, así como el interés legítimo en dar respuesta a su solicitud.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">4. Conservación de los datos</h2>
            <p className="mt-4 text-slate-600">
              Los datos personales se conservarán durante el tiempo necesario para atender su solicitud y, posteriormente, durante los plazos legalmente establecidos para atender posibles responsabilidades derivadas del tratamiento. Transcurrido dicho plazo, se procederá a su supresión.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">5. Destinatarios y cesiones</h2>
            <p className="mt-4 text-slate-600">
              Los datos personales <strong>no se cederán a terceros</strong> salvo obligación legal o en los supuestos previstos en la normativa vigente. Únicamente podrán ser accedidos por el personal autorizado de ELRECOLECTOR.ES.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">6. Derechos de los usuarios</h2>
            <p className="mt-4 text-slate-600">
              Conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), el usuario tiene derecho a:
            </p>
            <ul className="mt-4 list-disc pl-5 text-slate-600">
              <li><strong>Acceso</strong> a sus datos personales</li>
              <li><strong>Rectificación</strong> de los datos inexactos</li>
              <li><strong>Supresión</strong> (derecho al olvido)</li>
              <li><strong>Oposición</strong> al tratamiento</li>
              <li><strong>Limitación</strong> del tratamiento</li>
              <li><strong>Portabilidad</strong> de los datos</li>
            </ul>
            <p className="mt-4 text-slate-600">
              Para ejercer estos derechos, puede enviar una solicitud por escrito a <strong>info@elrecolector.es</strong> indicando el derecho que desea ejercer y aportando documento que acredite su identidad. Le responderemos en un plazo máximo de un mes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">7. Seguridad de la información</h2>
            <p className="mt-4 text-slate-600">
              ELRECOLECTOR.ES adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos y los riesgos a los que están expuestos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900">8. Modificaciones</h2>
            <p className="mt-4 text-slate-600">
              ELRECOLECTOR.ES se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. Cualquier cambio será publicado en esta página.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
