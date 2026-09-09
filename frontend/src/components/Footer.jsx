import { Link } from 'react-router-dom';
import logo from '../assets/Emblem.jpeg'; // Das Emblem für den Footer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        
       <div className="footer-brand">
          <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.6em' }}>
            <img className="brand-logo" src={logo} alt="Koi-Esports Emblem" width="32" height="32" />
            <span className="brand-name">Koi-Esports</span>
          </Link>
        </div>
        
        <div className="footer-links">
          <nav className="footer-nav" aria-label="Footer-Navigation">
            {/* Wir nutzen <Link> für eigene Seiten und reguläre <a> für Sprungmarken auf der Startseite */}
            <Link to="/team">Team</Link>
            <a href="/#spiele">Spiele</a>
            <a href="/#timeline">Timeline</a>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/impressum">Impressum</Link>
          </nav>
          
          <div className="social-links" aria-label="Social Media Links">
            <a className="social-link" href="https://discord.gg/vxc4mnXukz" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.3 4.8A18.5 18.5 0 0 0 16.7 4l-.4.8a17.1 17.1 0 0 1-9.2 0L6.3 4A18.5 18.5 0 0 0 3.7 4.8C2.7 8.1 2.3 11.3 2.5 14.4c1.9 1.5 3.7 2.4 5.4 3l.6-1c-1-.4-1.9-.9-2.8-1.6l.3-.2c2.1 1 4.3 1.6 6.7 1.6s4.6-.6 6.7-1.6l.3.2c-.9.7-1.8 1.2-2.8 1.6l.6 1c1.7-.6 3.5-1.5 5.4-3 .2-3.1-.2-6.3-1.2-9.6ZM9.6 13.4c-.8 0-1.5-.7-1.5-1.6s.7-1.6 1.5-1.6c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6Zm4.8 0c-.8 0-1.5-.7-1.5-1.6s.7-1.6 1.5-1.6c.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6Z" />
              </svg>
            </a>
            
            <a className="social-link" href="https://twitch.tv/koiesport" target="_blank" rel="noopener noreferrer" aria-label="Twitch">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 3h16v10.5L14.5 17H10l-2.7 2.4V17H4V3Zm2 2v9h3v2.2L10.7 14h3.8L18 10.7V5H6Zm9 2h2v4h-2V7Zm-6 0h2v4H9V7Z" />
              </svg>
            </a>
            
            <a className="social-link instagram" href="https://www.instagram.com/koiesport" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1.1" />
              </svg>
            </a>
            
            <a className="social-link tiktok" href="https://www.tiktok.com/@koiesport?_r=1&_t=ZG-99BAFIF3PMH" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.5 3c.8 1.1 2 1.8 3.3 2v2.5c-1.1-.1-2.2-.5-3.2-1.2v7.1a4.8 4.8 0 1 1-4.7-4.8c.3 0 .7 0 1 .1v2.6a2.3 2.3 0 1 0 1.5 2.2V3h2.1Z" />
              </svg>
            </a>
            
            <a className="social-link x" href="https://x.com/koiesportgg" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2h3.2l-7 8.1L23 22h-6.4l-5-7.1L5.4 22H2.2l7.5-8.6L1 2h6.6l4.5 6.4L18.9 2Zm-1.1 18h1.8L7.1 3.9H5.2L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>
        
        <p className="footer-copy">© {currentYear} Koi-Esports</p>
      </div>
    </footer>
  );
};

export default Footer;