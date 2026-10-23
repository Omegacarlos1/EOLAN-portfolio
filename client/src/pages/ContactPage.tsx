import { PageIntro } from '../components/shared/PageIntro';
import { PageMeta } from '../components/shared/PageMeta';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { contactLinks } from '../data/portfolio';
import { ContactForm } from '../features/contact/ContactForm';

export function ContactPage() {
  return (
    <>
      <PageMeta
        description="Contact Egbedayo Olanrewaju about full-stack web development, frontend, API, database or maintenance work."
        title="Contact"
      />
      <PageIntro
        description="Share the idea, challenge or website support you need. Direct contact links are available below."
        eyebrow="Contact"
        title="Let’s talk about your next project"
      />
      <section className="page-section page-section--compact">
        <Container className="contact-grid">
          <aside aria-labelledby="contact-details-heading" className="contact-details">
            <p className="eyebrow">Contact details</p>
            <h2 id="contact-details-heading">Choose the channel that works for you</h2>
            <p>
              The form can validate an enquiry locally, but it cannot send or store messages until the backend is connected.
            </p>
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
          </aside>
          <Card className="contact-form-card">
            <h2>Project enquiry</h2>
            <p>Complete the required fields to check your enquiry.</p>
            <ContactForm />
          </Card>
        </Container>
      </section>
    </>
  );
}
