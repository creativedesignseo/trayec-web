import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';
import PageViewTracker from './components/PageViewTracker';
import GoogleTagManager from './components/GoogleTagManager';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import VaciadoPisos from './pages/VaciadoPisos';
import RecogidaMuebles from './pages/RecogidaMuebles';
import Reformas from './pages/Reformas';
import Limpieza from './pages/Limpieza';
import Pintura from './pages/Pintura';
import SobreNosotros from './pages/SobreNosotros';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import { pushDataLayer } from './lib/dataLayer';

function App() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest('a[href*="wa.me/"]');
      if (!link) {
        return;
      }

      pushDataLayer({
        event: 'whatsapp_click',
        click_source: link.getAttribute('aria-label') || link.textContent?.trim() || 'whatsapp_link',
        page_path: window.location.pathname,
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <GoogleTagManager />
      <PageViewTracker />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/vaciado-pisos" element={<VaciadoPisos />} />
          <Route path="/recogida-muebles" element={<RecogidaMuebles />} />
          <Route path="/reformas" element={<Reformas />} />
          <Route path="/limpieza" element={<Limpieza />} />
          <Route path="/pintura" element={<Pintura />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
