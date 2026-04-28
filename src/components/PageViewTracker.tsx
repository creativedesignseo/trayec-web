import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pushDataLayer } from '../lib/dataLayer';

export default function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}${location.hash}`;

    pushDataLayer({
      event: 'page_view',
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
}
