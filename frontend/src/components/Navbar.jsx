import { useState } from 'react';
import { Link } from 'react-router-dom';

// In Vite importieren wir Bilder direkt oben, damit der Bundler sie korrekt verarbeitet
import logo from '../assets/Emblem.jpeg';

const Navbar = () => {
  // Das ist unser React-State für das mobile Menü (offen oder zu)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Link ist die React-Router-Version vom <a>-Tag. Sie verhindert das Neuladen der Seite. */}
 <Link to="/" className="brand" onClick={closeMenu}>
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
        
        {/* Wenn isOpen "true" ist, hängen wir die Klasse "is-open" an, sonst nichts */}
        <nav className={`primary-nav ${isOpen ? 'is-open' : ''}`} id="primaryNav">
          <Link to="/team" onClick={closeMenu}>Team</Link>
          <a href="/#spiele" onClick={closeMenu}>Spiele</a>
          <a href="/#timeline" onClick={closeMenu}>Timeline</a>
          <Link to="/kontakt" onClick={closeMenu}>Kontakt</Link>
          <Link to="/impressum" onClick={closeMenu}>Impressum</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;