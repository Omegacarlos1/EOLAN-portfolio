import { Link } from 'react-router-dom';
import { BrandLogo } from '../shared/BrandLogo';
import { Container } from '../ui/Container';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div className="site-footer__brand">
          <Link
            className="brand-link brand-link--footer"
            to="/"
            aria-label="EOLAN DiGITAL home"
          >
            <BrandLogo />
          </Link>
          <p>Building Digital Experience</p>
        </div>
        <p className="site-footer__copyright">
          &copy; {new Date().getFullYear()} EOLAN DiGITAL.
        </p>
      </Container>
    </footer>
  );
}
