import { PageMeta } from './PageMeta';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

interface PlaceholderPageProps {
  title: string;
  description: string;
  eyebrow?: string;
  heading?: string;
}

export function PlaceholderPage({
  title,
  description,
  eyebrow = 'Portfolio page',
  heading = title,
}: PlaceholderPageProps) {
  return (
    <section className="placeholder-page" aria-labelledby="page-title">
      <PageMeta description={description} title={title} />
      <Container size="narrow">
        <Card className="placeholder-page__card" tone="accent">
          <SectionHeading
            description={description}
            eyebrow={eyebrow}
            headingLevel={1}
            id="page-title"
            title={heading}
          />
        </Card>
      </Container>
    </section>
  );
}
