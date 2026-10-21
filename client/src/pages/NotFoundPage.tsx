import { PageMeta } from '../components/shared/PageMeta';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

export function NotFoundPage() {
  return (
    <section className="placeholder-page" aria-labelledby="page-title">
      <PageMeta title="Page Not Found" />
      <Container size="narrow">
        <Card className="placeholder-page__card" tone="accent">
          <SectionHeading
            description="The page you requested does not exist or may have moved."
            eyebrow="404"
            headingLevel={1}
            id="page-title"
            title="Page Not Found"
          />
          <div className="placeholder-page__actions">
            <ButtonLink to="/">Return home</ButtonLink>
          </div>
        </Card>
      </Container>
    </section>
  );
}
