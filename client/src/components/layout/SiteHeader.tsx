import { NavLink } from 'react-router-dom';
import { primaryNavigation } from '../../data/navigation';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink className="brand" to="/" aria-label="EOLAN DiGITAL home">
          EOLAN <span>DiGITAL</span>
        </NavLink>
        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {primaryNavigation.map(({ label, path, end }) => (
              <li key={path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                  end={end}
                  to={path}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
