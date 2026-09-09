const Imprint = () => {
  return (
    <section className="section legal" id="impressum">
      <div className="section-inner section-inner-narrow">
        <p className="eyebrow">Rechtliches</p>
        <h1 className="section-title">Impressum</h1>
        
        <div className="panel legal-block" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem' }}>Seite im Aufbau</h2>
          
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
            Diese Webseite befindet sich derzeit noch im Aufbau. Ein vollständiges, rechtssicheres Impressum folgt in Kürze, sobald das Projekt offiziell an den Start geht.
          </p>
          
          <p>
            Für sämtliche Anfragen, Kooperationen oder sonstige Anliegen erreichst du uns in der Zwischenzeit jederzeit per E-Mail:
          </p>
          
          <p style={{ marginTop: '1.5rem', fontSize: '1.2rem' }}>
            <strong>E-Mail: </strong> 
            <a 
              href="mailto:koiesportgg@web.de" 
              style={{ color: 'var(--color-gold-light)', textDecoration: 'underline' }}
            >
              koiesportgg@web.de
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Imprint;