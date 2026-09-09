import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* --- HERO SEKTION --- */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow">Est. 2019 | League of Legends</p>
          <h1 className="hero-title">KOI<span className="accent">-ESPORTS</span></h1>
          <p className="hero-tagline" aria-label="FOCUS FLOW DOMINATE">
            <span>FOCUS</span>
            <span className="tag-separator" aria-hidden="true">•</span>
            <span>FLOW</span>
            <span className="tag-separator" aria-hidden="true">•</span>
            <span>DOMINATE</span>
          </p>
          <Link className="btn" to="/team">Team kennenlernen</Link>
        </div>
      </section>

      {/* --- TIMELINE SEKTION --- */}
      <section className="section" id="timeline">
        <div className="section-inner">
          <p className="eyebrow">Vereinsgeschichte</p>
          <h2 className="section-title">Timeline</h2>
          <ol className="timeline">
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">2019</span>
              <h3>Anfänge</h3>
              <p>Angefangen auf Twitch zu streamen.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">2024</span>
              <h3>Start mit League of Legend</h3>
              <p>Angefangen League of Legends zu spielen.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">Mai 2026</span>
              <h3>Start der Prime League</h3>
              <p>Erster Start bei der Prime League mit einem eigenen Team.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">August 2026</span>
              <h3>Neuaufstellung</h3>
              <p>Neue und Alte Gesichter starten in der Prime League.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* --- SPIELE SEKTION --- */}
      <section className="section section-alt" id="spiele">
        <div className="section-inner">
          <p className="eyebrow">Wo wir antreten</p>
          <h2 className="section-title">Spiele</h2>
          <div className="games-grid">
            
            <article className="game-card panel reveal is-visible">
              <img 
                src="https://placehold.co/300x400/0F1E30/C89B3C?text=League+of+Legends" 
                alt="League of Legends Cover" 
                width="300" 
                height="400" 
                loading="lazy" 
              />
              <div className="game-card-body">
                <h3>League of Legends</h3>
              </div>
            </article>

            <article className="game-card panel reveal is-visible">
              <img 
                src="https://placehold.co/300x400/0F1E30/C89B3C?text=Clash+Royale" 
                alt="Clash Royale Cover" 
                width="300" 
                height="400" 
                loading="lazy" 
              />
              <div className="game-card-body">
                <h3>Clash Royale</h3>
              </div>
            </article>

            <article className="game-card panel game-card-placeholder">
              <div className="game-card-placeholder-content">
                <span>+</span>
                <p>Weitere Titel folgen</p>
              </div>
            </article>

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;