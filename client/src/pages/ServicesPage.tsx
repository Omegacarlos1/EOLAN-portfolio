import { PageIntro } from '../components/shared/PageIntro';
import { PageMeta } from '../components/shared/PageMeta';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { services } from '../data/portfolio';

export function ServicesPage() {
  return (
    <>
      <PageMeta
        description="Explore EOLAN DiGITAL services across full-stack development, APIs, databases, e-commerce and website maintenance."
        title="Services"
      />
      <PageIntro
        description="Development services for businesses and individuals bringing a digital idea to life."
        eyebrow="Services"
        title="Support across the web stack"
      />
      <section aria-label="Available services" className="page-section page-section--compact">
        <Container>
          <div className="card-grid card-grid--two">
            {services.map((service) => (
              <Card className="service-card service-card--full" key={service.title}>
                <span aria-hidden="true" className="service-card__number">{service.number}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card className="cta-panel cta-panel--spaced" tone="accent">
            <div>
              <p className="eyebrow">Project enquiry</p>
              <h2>Need one of these services?</h2>
              <p>Describe the outcome you need and the current stage of your project.</p>
            </div>
            <ButtonLink to="/contact">Discuss your project</ButtonLink>
          </Card>
        </Container>
      </section>
    </>
  );
}
