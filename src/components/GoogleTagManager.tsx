import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { pushDataLayer } from '../lib/dataLayer';

const GTM_ID = 'GTM-M4T7WT5N';

export default function GoogleTagManager() {
  useEffect(() => {
    TagManager.initialize({
      gtmId: GTM_ID,
      dataLayerName: 'dataLayer',
      events: {
        event: 'gtm_init',
        gtm_container_id: GTM_ID,
      },
    });

    pushDataLayer({
      event: 'default_consent',
      gtm_container_id: GTM_ID,
    });
  }, []);

  return null;
}
