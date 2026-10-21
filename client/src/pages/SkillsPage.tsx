import { PageIntro } from '../components/shared/PageIntro';
import { PageMeta } from '../components/shared/PageMeta';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { primaryPortfolioStack, skillGroups } from '../data/portfolio';

export function SkillsPage() {
  return (
    <>
      <PageMeta title="Skills" />
      <PageIntro
        description="A practical toolkit spanning interactive frontends, backend services and data foundations."
        eyebrow="Skills"
        title="Technology used with intention"
      />
      <section aria-label="Skill groups" className="page-section page-section--compact">
        <Container>
          <div className="card-grid card-grid--three">
            {skillGroups.map((group) => (
              <Card className="skill-card" key={group.title}>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <ul className="tag-list tag-list--compact">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </Card>
            ))}
          </div>
          <Card className="stack-note" tone="accent">
            <div>
              <p className="eyebrow">Primary portfolio stack</p>
              <h2>This project and the wider toolkit are not the same thing.</h2>
              <p>
                This portfolio currently uses React, TypeScript, Redux Toolkit and React Router on the client.
                Express and MySQL are planned for the approved backend milestone. MongoDB is a broader skill,
                not this portfolio’s project database.
              </p>
            </div>
            <ul aria-label="Primary project technologies" className="tag-list tag-list--compact">
              {primaryPortfolioStack.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </Card>
        </Container>
      </section>
    </>
  );
}
