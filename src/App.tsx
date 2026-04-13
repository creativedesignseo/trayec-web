import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import VaciadoPisos from './pages/VaciadoPisos';
import RecogidaMuebles from './pages/RecogidaMuebles';
import Reformas from './pages/Reformas';
import Limpieza from './pages/Limpieza';
import Pintura from './pages/Pintura';
import SobreNosotros from './pages/SobreNosotros';
import Legal from './pages/Legal';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/vaciado-pisos" element={<VaciadoPisos />} />
          <Route path="/recogida-muebles" element={<RecogidaMuebles />} />
          <Route path="/reformas" element={<Reformas />} />
          <Route path="/limpieza-post-obra" element={<Limpieza />} />
          <Route path="/pintura" element={<Pintura />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
