import { Helmet } from 'react-helmet-async';

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://elrecolector.es/#business',
  name: 'VACIADO DE PISOS ELRECOLECTOR.ES',
  image: 'https://elrecolector.es/logo.svg',
  logo: 'https://elrecolector.es/logo.svg',
  telephone: '+34694266258',
  email: 'info@elrecolector.es',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Saragossa 53, 3-1',
    addressLocality: 'Barcelona',
    addressRegion: 'Cataluña',
    postalCode: '08006',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.3956,
    longitude: 2.154,
  },
  url: 'https://elrecolector.es',
  priceRange: '€€',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Cataluña',
  },
};

export default function LocalBusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
    </Helmet>
  );
}
