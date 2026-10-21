import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { primaryNavigation } from '../../data/navigation';
import { BrandLogo } from '../shared/BrandLogo';
import { Container } from '../ui/Container';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header" data-menu-open={menuOpen}>
      <Container className="site-header__inner">
        <NavLink className="brand-link" to="/" aria-label="EOLAN DiGITAL home">
          <BrandLogo priority />
        </NavLink>
        <button
          ref={menuButtonRef}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="menu-toggle__line" aria-hidden="true" />
          <span className="menu-toggle__line" aria-hidden="true" />
          <span className="menu-toggle__line" aria-hidden="true" />
        </button>
        <nav
          aria-label="Primary navigation"
          className="site-nav-panel"
          id="primary-navigation"
        >
          <ul className="site-nav">
            {primaryNavigation.map(({ label, path, end }) => (
              <li key={path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                  end={end}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
