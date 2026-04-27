import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'VACIADO DE PISOS ELRECOLECTOR.ES',
      url: 'https://elrecolector.es',
      telephone: '+34694266258',
      email: 'info@elrecolector.es',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Saragossa 53, 3-1',
        addressLocality: 'Barcelona',
        addressRegion: 'Cataluña',
        addressCountry: 'ES',
      },
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Cataluña',
    },
    description,
    url,
    ...(image ? { image } : {}),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
