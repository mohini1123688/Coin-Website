import { Link } from 'react-router-dom';
import './Footer.css';

const collection = [
  { to: '/indias-first-coinage', label: "India's First Coinage" },
  { to: '/golden-age-gupta', label: 'Golden Age (Gupta)' },
  { to: '/kushana-dynasty', label: 'Kushana Dynasty' },
  { to: '/western-central-indian-dynasty', label: 'Western & Central India' },
  { to: '/southern-indian-dynasty', label: 'Southern India' },
  { to: '/mughals-islamic-dynasties', label: 'Mughals & Islamic' },
  { to: '/deccan-maratha-rulers', label: 'Deccan & Maratha' },
  { to: '/east-india-and-raj', label: 'East India & Raj' },
  { to: '/princely-states', label: 'Princely States' },
  { to: '/independent-kingdoms', label: 'Independent Kingdoms' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__coin" aria-hidden="true" />
          <p className="site-footer__name">Nupam's Indian Coins</p>
          <p className="site-footer__blurb">
            A personal collection of Indian coins and the rich history of the subcontinent.
          </p>
        </div>

        <nav className="site-footer__col" aria-label="The Collection">
          <h4>The Collection</h4>
          <ul>
            {collection.map((c) => (
              <li key={c.to}><Link to={c.to}>{c.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav className="site-footer__col" aria-label="About">
          <h4>About</h4>
          <ul>
            <li><Link to="/about-the-author">About the Author</Link></li>
            <li><a href="mailto:nupam@msn.com">Get in touch</a></li>
          </ul>
        </nav>
      </div>

      <div className="site-footer__base">
        <p>© {year} Nupam Mahajan. All coins photographed from the author's collection.</p>
      </div>
    </footer>
  );
}
