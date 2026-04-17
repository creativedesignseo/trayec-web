import { Helmet } from 'react-helmet-async';

const schemaLocalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'El Recolector',
  image: 'https://elrecolector.es/favicon.png',
  telephone: '+34694266258',
  email: 'info@elrecolector.es',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Saragossa 53, 3-1',
    addressLocality: 'Barcelona',
    addressRegion: 'Cataluña',
    addressCountry: 'ES',
  },
  url: 'https://elrecolector.es',
  priceRange: '€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
};

export default function LocalBusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
    </Helmet>
  );
}
