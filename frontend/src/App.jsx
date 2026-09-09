import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Team from './pages/Team'; // <-- Neuer Import
import './css/style.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Imprint from './pages/Imprint';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<Imprint />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;