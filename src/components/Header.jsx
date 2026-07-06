import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-the-author', label: 'About the Author' },
];

const dynastyLinks = [
  { to: '/indias-first-coinage', label: "India's First Coinage" },
  { to: '/golden-age-gupta', label: 'Golden Age (Gupta)' },
  { to: '/kushana-dynasty', label: 'Kushana Dynasty' },
  { to: '/western-central-indian-dynasty', label: 'Western & Central India' },
  { to: '/southern-indian-dynasty', label: 'Southern India' },
  { to: '/mughals-islamic-dynasties', label: 'Mughals & Islamic Dynasties' },
  { to: '/deccan-maratha-rulers', label: 'Deccan & Maratha Rulers' },
  { to: '/east-india-and-raj', label: 'East India & Raj' },
  { to: '/princely-states', label: 'Princely States' },
  { to: '/independent-kingdoms', label: 'Independent Kingdoms' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef(null);
  const { pathname } = useLocation();

  const isDynastyActive = dynastyLinks.some((l) => l.to === pathname);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setDropOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="brand">
          <img src='/images/uploads/2019/12/vima3.jpg' alt="" className="brand__coin" />
          <span className="brand__text">
            <span className="brand__name">Nupam's Indian Coins</span>
            <span className="brand__tag">A Cabinet of Indian Coinage</span>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-expanded={mobileOpen}
          aria-controls="primary-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="nav-toggle__bar" />
          <span className="visually-hidden">Menu</span>
        </button>

        <nav id="primary-nav" className={`site-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Primary">
          {mainLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}

          <div className="nav-dropdown" ref={dropRef}>
            <button
              className={`nav-dropdown__trigger ${isDynastyActive ? 'is-active' : ''}`}
              onClick={() => setDropOpen((v) => !v)}
              aria-expanded={dropOpen}
              aria-haspopup="true"
            >
              Dynasties
              <span className={`nav-dropdown__arrow ${dropOpen ? 'is-open' : ''}`}>▾</span>
            </button>

            <div className={`nav-dropdown__menu ${dropOpen ? 'is-open' : ''}`}>
              {dynastyLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => `nav-dropdown__item ${isActive ? 'is-active' : ''}`}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
