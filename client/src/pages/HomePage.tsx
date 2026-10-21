import { ProfilePortrait } from '../components/shared/ProfilePortrait';
import { PageMeta } from '../components/shared/PageMeta';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  biography,
  primaryPortfolioStack,
  profilePhotoPath,
  professionalTitle,
  services,
} from '../data/portfolio';

export function HomePage() {
  return (
    <>
      <PageMeta title="Home" />
      <section className="home-hero">
        <Container className="home-hero__grid">
          <div className="home-hero__content">
            <p className="eyebrow">EOLAN DiGITAL</p>
            <h1>Building Digital Experience</h1>
            <p className="home-hero__role">{professionalTitle}</p>
            <p className="home-hero__lead">{biography[0]}</p>
            <div className="button-row">
              <ButtonLink to="/projects">Explore projects</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Start a conversation</ButtonLink>
            </div>
          </div>
          <ProfilePortrait src={profilePhotoPath} />
        </Container>
      </section>

      <section aria-labelledby="stack-heading" className="page-section">
        <Container>
          <SectionHeading
            description="The client-side foundation currently powering this portfolio. Backend work is reserved for its approved milestone."
            eyebrow="Current build"
            id="stack-heading"
            title="A focused project stack"
          />
          <ul aria-label="Primary portfolio stack" className="tag-list">
            {primaryPortfolioStack.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="services-preview-heading" className="page-section page-section--surface">
        <Container>
          <SectionHeading
            description="Practical development support from interface work through backend foundations."
            eyebrow="Services"
            id="services-preview-heading"
            title="Ideas shaped into useful products"
          />
          <div className="card-grid card-grid--three service-preview">
            {services.slice(0, 3).map((service) => (
              <Card className="service-card" key={service.title}>
                <span aria-hidden="true" className="service-card__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            ))}
          </div>
          <ButtonLink to="/services" variant="secondary">View all services</ButtonLink>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <Card className="cta-panel" tone="accent">
            <div>
              <p className="eyebrow">Let’s connect</p>
              <h2>Have a digital idea in mind?</h2>
              <p>Share what you are planning and the problem you want to solve.</p>
            </div>
            <ButtonLink to="/contact">Contact Egbedayo</ButtonLink>
          </Card>
        </Container>
      </section>
    </>
  );
}
