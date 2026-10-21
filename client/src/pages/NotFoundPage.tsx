import { Link } from 'react-router-dom';
import { PageMeta } from '../components/shared/PageMeta';

export function NotFoundPage() {
  return (
    <section className="placeholder-page container" aria-labelledby="page-title">
      <PageMeta title="Page Not Found" />
      <p className="eyebrow">404</p>
      <h1 id="page-title">Page Not Found</h1>
      <p className="placeholder-page__summary">
        The page you requested does not exist or may have moved.
      </p>
      <Link className="text-link" to="/">
        Return home
      </Link>
    </section>
  );
}
