import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about-the-author', label: 'About the Author' },
  { to: '/indias-first-coinage', label: "India's First Coinage" },
  { to: '/kushana-dynasty', label: 'Kushana Dynasty' },
  { to: '/western-central-indian-dynasty', label: 'Western & Central India' },
  { to: '/southern-indian-dynasty', label: 'Southern India' },
  { to: '/mughals-islamic-dynasties', label: 'Mughals & Islamic' },
  { to: '/deccan-maratha-rulers', label: 'Deccan & Maratha' },
  { to: '/east-india-and-raj', label: 'East India & Raj' },
  { to: '/princely-states', label: 'Princely States' },
  { to: '/independent-kingdoms', label: 'Independent Kingdoms' },
  { to: '/golden-age-gupta', label: 'Golden Age (Gupta)' },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="brand">Coin Site</NavLink>
        <nav className="site-nav" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
