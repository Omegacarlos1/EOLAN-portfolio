import { PageIntro } from '../components/shared/PageIntro';
import { PageMeta } from '../components/shared/PageMeta';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';

export function ExperiencePage() {
  return (
    <>
      <PageMeta
        description="Verified experience information for Egbedayo Olanrewaju will be published when supporting details are confirmed."
        title="Experience"
      />
      <PageIntro
        description="A factual professional timeline will be published once the supporting details are confirmed."
        eyebrow="Experience"
        title="Verified experience details coming later"
      />
      <section className="page-section page-section--compact">
        <Container size="narrow">
          <Card className="empty-state" tone="accent">
            <p className="eyebrow">TBD</p>
            <h2>No unverified history</h2>
            <p>
              Employment, education, qualifications and achievements are intentionally withheld until their
              exact details are supplied and approved. Nothing here is invented to fill the space.
            </p>
            <ButtonLink to="/contact" variant="secondary">Contact Egbedayo</ButtonLink>
          </Card>
        </Container>
      </section>
    </>
  );
}
