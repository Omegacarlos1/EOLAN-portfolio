import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export interface PageIntroProps {
  description: string;
  eyebrow: string;
  title: string;
}

export function PageIntro({ description, eyebrow, title }: PageIntroProps) {
  return (
    <section className="page-intro">
      <Container>
        <SectionHeading
          description={description}
          eyebrow={eyebrow}
          headingLevel={1}
          title={title}
        />
      </Container>
    </section>
  );
}
