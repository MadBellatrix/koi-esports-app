import { useRef } from 'react';

const Contact = () => {
  // Mit useRef greifen wir auf das <dialog> Element zu, um es zu steuern
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) modalRef.current.showModal();
  };

  const closeModal = () => {
    if (modalRef.current) modalRef.current.close();
  };

  // Schließt das Modal, wenn man auf den dunklen Hintergrund klickt
  const handleBackdropClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  // Verarbeitet das Formular, genau wie in deiner alten main.js
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const body = `Name: ${name}\n\n${message}`;
    
    // Öffnet das E-Mail-Programm
    window.location.href = `mailto:koiesportgg@web.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    closeModal();
    event.target.reset(); // Leert das Formular nach dem Absenden
  };

  return (
    <>
      <section className="section legal">
        <div className="section-inner section-inner-narrow">
          <p className="eyebrow">Kontakt</p>
          <h1 className="section-title">Schreibt uns</h1>
          
          <div className="contact-grid">
            <article className="panel contact-card">
              <p className="eyebrow">Allgemein</p>
              <h2>Team & Kooperationen</h2>
              <ul className="contact-list">
                <li>
                  <a className="contact-link" href="mailto:baertigerossi@gmail.com">E-Mail
                    <span className="contact-meta">baertigerossi@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="https://discord.gg/vxc4mnXukz" target="_blank" rel="noopener noreferrer">Discord
                    <span className="contact-meta">Koi-Esports Community</span>
                  </a>
                </li>
              </ul>
            </article>

            <article className="panel contact-card">
              <p className="eyebrow">Socials</p>
              <h2>Folgt uns</h2>
              <div className="contact-socials">
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
            </article>

            <article className="panel contact-card">
              <p className="eyebrow">Direkt</p>
              <h2>Für Anfragen</h2>
              <p>Wenn du mit uns zusammenarbeiten, Sponsoring, Events oder Player-Management besprechen möchtest, nehme direkt Kontakt mit uns auf.</p>
              <button className="btn" type="button" onClick={openModal}>Nachricht senden</button>
            </article>
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      <dialog 
        className="contact-modal" 
        ref={modalRef} 
        onClick={handleBackdropClick}
        aria-labelledby="contactModalTitle"
      >
        <div className="contact-modal-inner">
          <div className="contact-modal-header">
            <div>
              <p className="eyebrow">Direkter Kontakt</p>
              <h2 id="contactModalTitle">Nachricht senden</h2>
            </div>
            <button className="modal-close" type="button" onClick={closeModal} aria-label="Formular schließen">✖</button>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* In React wird aus "for" das Attribut "htmlFor" */}
            <label htmlFor="contactName">Name</label>
            <input id="contactName" name="name" type="text" autoComplete="name" required />
            
            <label htmlFor="contactSubject">Betreff</label>
            <input id="contactSubject" name="subject" type="text" required />
            
            <label htmlFor="contactMessage">Text</label>
            <textarea id="contactMessage" name="message" rows="6" required></textarea>
            
            <button className="btn" type="submit">E-Mail öffnen</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Contact;