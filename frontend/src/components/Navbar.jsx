import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/Emblem.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Hilfsfunktion für Anker-Links, die auch von Unterseiten aus funktioniert
  const handleAnchorClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    // Wenn wir nicht auf der Startseite sind, gehen wir erst dorthin
    if (location.pathname !== '/') {
      navigate('/');
      // Kurz warten, bis die Startseite geladen ist, dann scrollen
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Wenn wir schon auf der Startseite sind, direkt sanft hinscrollen
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
       <Link 
          to="/" 
          className="brand" 
          onClick={(e) => {
            closeMenu();
            // Wenn wir schon auf der Startseite sind, verhindern wir den harten Standard-Link 
            // und scrollen stattdessen sanft nach ganz oben
            if (location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img className="brand-logo" src={logo} alt="Koi-Esports Emblem" width="40" height="40" />
          <span className="brand-name">Koi-Esports</span>
        </Link>
        
        <button 
          className="nav-toggle" 
          onClick={toggleMenu}
          aria-expanded={isOpen} 
          aria-controls="primaryNav"
          aria-label="Menü öffnen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`primary-nav ${isOpen ? 'is-open' : ''}`} id="primaryNav">
          <Link to="/team" onClick={closeMenu}>Team</Link>
          {/* Nutzt jetzt die smarte Klick-Funktion statt eines starren hrefs */}
          <a href="/#spiele" onClick={(e) => handleAnchorClick(e, 'spiele')}>Spiele</a>
          <a href="/#timeline" onClick={(e) => handleAnchorClick(e, 'timeline')}>Timeline</a>
          <Link to="/kontakt" onClick={closeMenu}>Kontakt</Link>
          <Link to="/impressum" onClick={closeMenu}>Impressum</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;