import { PageMeta } from './PageMeta';

interface PlaceholderPageProps {
  title: string;
  description: string;
  eyebrow?: string;
  heading?: string;
}

export function PlaceholderPage({
  title,
  description,
  eyebrow = 'Milestone 1',
  heading = title,
}: PlaceholderPageProps) {
  return (
    <section className="placeholder-page container" aria-labelledby="page-title">
      <PageMeta title={title} />
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="page-title">{heading}</h1>
      <p className="placeholder-page__summary">{description}</p>
    </section>
  );
}
