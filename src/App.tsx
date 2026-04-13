import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Placeholder routes for SEO landings */}
          <Route path="/vaciado-pisos" element={<Home />} />
          <Route path="/recogida-muebles" element={<Home />} />
          <Route path="/reformas" element={<Home />} />
          <Route path="/limpieza-post-obra" element={<Home />} />
          <Route path="/pintura" element={<Home />} />
          <Route path="/sobre-nosotros" element={<Home />} />
          <Route path="/legal" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
