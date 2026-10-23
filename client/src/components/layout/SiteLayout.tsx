import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function SiteLayout() {
  const { pathname } = useLocation();
  const isInitialRoute = useRef(true);

  useEffect(() => {
    if (isInitialRoute.current) {
      isInitialRoute.current = false;
      return;
    }

    document.getElementById('main-content')?.focus();
  }, [pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <main
        aria-label="Page content"
        className="site-main"
        id="main-content"
        tabIndex={-1}
      >
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
