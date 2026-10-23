import { PageIntro } from '../components/shared/PageIntro';
import { PageMeta } from '../components/shared/PageMeta';
import { ProfilePortrait } from '../components/shared/ProfilePortrait';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  biography,
  contactLinks,
  professionalTitle,
  profilePhotoPath,
} from '../data/portfolio';

const approach = [
  { title: 'Clean code', description: 'Maintainable structure that keeps future changes understandable.' },
  { title: 'Thoughtful design', description: 'Clear, responsive experiences shaped around real user needs.' },
  { title: 'Reliable technology', description: 'Practical technical choices aligned with the problem and scope.' },
] as const;

export function AboutPage() {
  return (
    <>
      <PageMeta
        description="Learn about Egbedayo Olanrewaju's approach to full-stack web development and practical digital solutions."
        title="About"
      />
      <PageIntro
        description={`${professionalTitle} focused on modern, responsive and useful web products.`}
        eyebrow="About"
        title="Turning ideas into practical digital solutions"
      />
      <section aria-labelledby="story-heading" className="page-section page-section--compact">
        <Container className="about-grid">
          <ProfilePortrait src={profilePhotoPath} />
          <div className="prose-block">
            <SectionHeading eyebrow="My story" id="story-heading" title="Hello, I’m Egbedayo Olanrewaju" />
            {biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Container>
      </section>
      <section aria-labelledby="approach-heading" className="page-section page-section--surface">
        <Container>
          <SectionHeading
            description="The principles stated in the portfolio brief guide how each engagement is approached."
            eyebrow="Approach"
            id="approach-heading"
            title="Built with purpose"
          />
          <div className="card-grid card-grid--three">
            {approach.map((item) => (
              <Card className="content-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <section aria-labelledby="connect-heading" className="page-section">
        <Container className="about-details-grid">
          <div>
            <SectionHeading eyebrow="Online" id="connect-heading" title="Connect with me" />
            <ul className="contact-link-list">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <span>{link.label}</span>
                  <a href={link.href} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} target={link.href.startsWith('http') ? '_blank' : undefined}>
                    {link.value}
                    {link.href.startsWith('http') ? (
                      <span className="sr-only"> (opens in a new tab)</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Card className="cv-card" tone="accent">
            <p className="eyebrow">Curriculum vitae</p>
            <h2>CV coming later</h2>
            <p>The verified CV file has not been supplied, so no download is available yet.</p>
          </Card>
        </Container>
      </section>
    </>
  );
}
