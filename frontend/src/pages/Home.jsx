import { Link } from 'react-router-dom';
import lolImg from "../assets/LOLBanner.png"
import valorantImg from "../assets/VALBanner.png"

const Home = () => {
  return (
    <>
      {/* --- HERO SEKTION --- */}
      <section className="hero" id="top">
        <div className="hero-inner">
          <p className="eyebrow">Est. 2026 </p>
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
              <span className="timeline-date">April 2026</span>
              <h3>Eine Idee wird zum Team</h3>
              <p>Ossi gründete gemeinsam mit Zuschauern aus seinem Twitch-Stream das Team „SAX Gaming“. Zu fünft bewarben sie sich für die Starterliga der TK Prime League – der erste Schritt in ein völlig neues Abenteuer.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">Mai 2026</span>
              <h3>Die ersten Prüfungen</h3>
              <p>Die ersten Spiele in der Prime League waren hart. Ohne feste Strukturen und mit wenig Erfahrung verlor das Team fast alle Partien – doch jede Niederlage zeigte, woran es als Nächstes arbeiten musste.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">Juni 2026</span>
              <h3>Der Mut zum Neustart</h3>
              <p>Nach den schwierigen ersten Wochen verließen mehrere Spieler das Team. Ossi zog sich als aktiver Spieler zurück und konzentrierte sich vollständig auf den organisatorischen Aufbau und die Zukunft des Projekts.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">Juli 2026</span>
              <h3>Aus fünf werden viele</h3>
              <p>Die Neuaufstellung nahm Fahrt auf: Aus dem ursprünglichen Fünferteam wurde eine Gemeinschaft von rund 15 Spielern. Neue Talente kamen hinzu, und der Anspruch wuchs mit jedem Gespräch und jedem Training.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">August 2026</span>
              <h3>Ein neuer Name, eine neue Vision</h3>
              <p>Aus „SAX Gaming“ wurde KOI eSport. Mit dem neuen Namen begann ein neues Kapitel – professioneller, ambitionierter und mit dem klaren Ziel, die besten Spieler zu einem starken Kader zu formen.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">September 2026</span>
              <h3>Der Weg in den Wintersplit</h3>
              <p>Die Vorbereitung auf den Wintersplit der TK Prime League begann. Durch konzentriertes Training, Teamwork und viel Einsatz erarbeitete sich KOI eSport einen Platz in der 7. Division.</p>
            </li>
            <li className="timeline-item panel reveal is-visible">
              <span className="timeline-date">Oktober 2026</span>
              <h3>KOI eSport wird international</h3>
              <p>KOI eSport trat nicht länger nur in League of Legends an: Mit einem talentierten Valorant-Kader aus ganz Europa entstand KOI eSport Valorant International. Die nächste Reise hat begonnen – und ihre Geschichte wartet darauf, geschrieben zu werden.</p>
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
                src={lolImg}
                alt="League of Legends Cover Quelle: https://wallpapers.com/images/high/typeface-of-league-of-legends-logo-as4mpgdim6id9dfl.webp"
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
                src={valorantImg}
                alt="Valorant Cover Quelle: https://wallpapers.com/images/thumbnail/iphone-xs-valorant-background-1440-x-2560-23d0c8kcm5dm5c73.jpg"
                width="300"
                height="400"
                loading="lazy"
              />
              <div className="game-card-body">
                <h3>Valorant</h3>
              </div>
            </article>
            {/* 
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
            </article> */}

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;