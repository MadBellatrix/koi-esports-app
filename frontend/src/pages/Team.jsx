// Bilder importieren
import florianImg from '../assets/Florian.jpg';
import kyloImg from '../assets/Kylo.jpeg';
import moImg from '../assets/Mo.jpeg';
import jeyImg from '../assets/Jey.jpeg';
import annoImg from '../assets/Anno-smooth.jpg';
import fabianImg from '../assets/Fabian.png'
import marioImg from '../assets/Mario.png'
import paulImg from '../assets/Paul.png'
import philipImg from '../assets/Philip.png'
import nilsImg from '../assets/Nils.png'
import dennisImg from '../assets/Dennis.png'

// Platzhalter-URL für Spieler ohne eigenes Bild
const placeholderBase = "https://placehold.co/400x400/0F1E30/C89B3C?text=";

// Der aktualisierte Kader, aufgeteilt in Gruppen
const players = [
  // --- MANAGEMENT ---
  {
    name: "Florian 'Ossi' Wolf",
    role: "Owner / Management",
    gamertag: "Ossi",
    twitch: "baertiger_ossi98",
    image: florianImg,
    imagePosition: "50% 35%",
    group: "Management"
  },

  // --- TEAM 1 ---
  {
    name: 'Nils "Noran" Gellenbeck',
    role: "Toplane",
    gamertag: "Dietrich Aden",
    image: nilsImg,
    imagePosition: "40% 45%",
    group: "Team 1"
  },
  {
    name: "Dennis Roelofs",
    role: "Jungler",
    gamertag: "KOI eraZer",
    twitch: "koi_kazer",
    image: dennisImg,
    group: "Team 1"
  },
  {
    name: "Jey",
    role: "Midlane",
    gamertag: "SlimShady",
    image: jeyImg,
    imagePosition: "50% 25%",
    group: "Team 1"
  },
  {
    name: 'Moritz "Mo" Hallmann',
    role: "ADC",
    gamertag: "Shinki Hiiro",
    image: moImg,
    imagePosition: "50% 35%",
    group: "Team 1"
  },
  {
    name: "Anno",
    role: "Supporter",
    gamertag: "BrokenPromises",
    image: annoImg,
    imagePosition: "50% 30%",
    imageFit: "cover",
    group: "Team 1"
  },




  // --- TEAM 2 ---

  {
    name: "Mattes Werner",
    role: "Toplane",
    gamertag: "tarrosilver",
    image: null,
    group: "Team 2"
  },
  {
    name: 'Kyle Steven Tauchmann',
    role: "Toplane",
    gamertag: "Kylo",
    image: kyloImg,
    imagePosition: "50% 30%",
    group: "Team 2"
  },
  {
    name: "Michael Niemann",
    role: "Jungler",
    gamertag: "Hütes des Waldes",
    image: null,
    group: "Team 2"
  },

  {
    name: 'Fabian "Johannes" Prebeck',
    role: "Midlane",
    gamertag: "DönerohneTomate",
    twitch: "lost_maschiene",
    image: fabianImg,
    imagePosition: "50% 25%",
    group: "Team 2"
  },

  {
    name: "Philip Asbeck",
    role: "ADC",
    gamertag: "Stay Aggressive",
    image: philipImg,
    imagePosition: "50% 35%",
    group: "Team 2"
  },

  {
    name: 'Mario Meßmer',
    role: "Supporter",
    gamertag: "CrueLOr",
    image: marioImg,
    imagePosition: "50% 35%",
    group: "Team 2"
  },

];

const Team = () => {

  // Eine kleine Hilfsfunktion, die uns die Spieler-Karten für eine bestimmte Gruppe baut
  const renderPlayerGroup = (groupName, title) => {
    // Filtere alle Spieler heraus, die zu der übergebenen Gruppe gehören
    const groupPlayers = players.filter(player => player.group === groupName);

    if (groupPlayers.length === 0) return null;

    return (
      <div style={{ marginBottom: '4rem' }}>
        <h3 style={{
          color: 'var(--color-gold)',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '0.5rem',
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-display)',
          fontSize: '1.8rem'
        }}>
          {title}
        </h3>

        <div className={`team-grid ${groupName === 'Team 2' ? 'team-grid-team-2' : ''}`}>
          {groupPlayers.map((player, index) => {
            const imgSrc = player.image || `${placeholderBase}${encodeURIComponent(player.name)}`;
            const cardClass = player.name === 'Kyle Steven Tauchmann' ? ' player-card-kyle' : '';

            return (
              <article key={index} className={`player-card panel reveal is-visible${cardClass}`}>
                <img
                  className="player-photo"
                  src={imgSrc}
                  alt={player.name}
                  loading="lazy"
                  style={{
                    objectPosition: player.imagePosition || '50% 50%',
                    objectFit: player.imageFit || 'cover'
                  }}
                  onError={(e) => { e.target.src = `${placeholderBase}${encodeURIComponent(player.name)}` }}
                />
                <div className="player-body">
                  <h3 className="player-name">{player.name}</h3>
                  <p className="player-role">{player.role} {player.gamertag ? `| ${player.gamertag}` : ''}</p>

                  {player.twitch && (
                    <a
                      className="live-status"
                      href={`https://twitch.tv/${player.twitch}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="live-dot" style={{ backgroundColor: '#b7b2a5' }}></span>
                      <span className="live-label">Twitch Kanal</span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="section" id="team">
      <div className="section-inner">
        <p className="eyebrow">Wer wir sind</p>
        <h2 className="section-title">Unser Kader</h2>

        {/* Hier rufen wir unsere Hilfsfunktion für jede Gruppe auf */}
        {renderPlayerGroup("Management", "Management & Owner")}
        {renderPlayerGroup("Team 1", "KOI Gaming")}
        {renderPlayerGroup("Team 2", "KOI Kohaku")}

      </div>
    </section>
  );
};

export default Team;