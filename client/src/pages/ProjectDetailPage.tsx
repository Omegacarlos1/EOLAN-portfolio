import { useParams } from 'react-router-dom';
import { PageIntro } from '../components/shared/PageIntro';
import { PageMeta } from '../components/shared/PageMeta';
import { ButtonLink } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { getProjectBySlug } from '../data/projects';
import { MissingProjectData } from '../features/projects/MissingProjectData';
import { isValidExternalUrl } from '../features/projects/projectLinks';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <PageMeta
          description="The requested EOLAN DiGITAL project entry could not be found."
          noIndex
          title="Project not found"
        />
        <PageIntro
          description="No project entry matches this address. It may have moved or may not be published."
          eyebrow="404"
          title="Project not found"
        />
        <section className="page-section page-section--compact">
          <Container size="narrow">
            <Card className="empty-state" tone="accent">
              <h2>Explore the verified project list</h2>
              <p>
                The requested project slug “{slug ?? 'TBD'}” does not exist in
                the current portfolio data.
              </p>
              <ButtonLink to="/projects">Back to projects</ButtonLink>
            </Card>
          </Container>
        </section>
      </>
    );
  }

  const githubUrl = isValidExternalUrl(project.links.github)
    ? project.links.github
    : null;
  const demoUrl = isValidExternalUrl(project.links.demo)
    ? project.links.demo
    : null;

  return (
    <>
      <PageMeta
        description={`${project.title} case study. Unconfirmed project details remain marked as TBD.`}
        title={project.title}
      />
      <PageIntro
        description="Case-study details are published only when verified. Missing information is clearly marked TBD."
        eyebrow={`${project.category} · Status: ${project.status}`}
        title={project.title}
      />
      <article className="case-study">
        <section aria-labelledby="overview-heading" className="page-section page-section--compact">
          <Container className="case-study__intro">
            <div>
              <p className="eyebrow">Case study</p>
              <h2 id="overview-heading">Overview</h2>
            </div>
            <Card className="case-study__overview" tone="accent">
              {project.overview ? (
                <p>{project.overview}</p>
              ) : (
                <MissingProjectData label="Project overview" />
              )}
            </Card>
          </Container>
        </section>

        <section aria-label="Project context" className="page-section page-section--surface">
          <Container>
            <div className="case-study__facts">
              <Card className="case-study__fact">
                <h2>Role</h2>
                {project.role ? (
                  <p>{project.role}</p>
                ) : (
                  <MissingProjectData label="Role and responsibilities" />
                )}
              </Card>
              <Card className="case-study__fact">
                <h2>Problem</h2>
                {project.problem ? (
                  <p>{project.problem}</p>
                ) : (
                  <MissingProjectData label="Problem statement" />
                )}
              </Card>
              <Card className="case-study__fact">
                <h2>Solution</h2>
                {project.solution ? (
                  <p>{project.solution}</p>
                ) : (
                  <MissingProjectData label="Solution and deliverables" />
                )}
              </Card>
            </div>
          </Container>
        </section>

        <section className="page-section">
          <Container className="case-study__columns">
            <div aria-labelledby="stack-heading">
              <p className="eyebrow">Technology</p>
              <h2 id="stack-heading">Stack</h2>
              {project.stack.length > 0 ? (
                <ul className="tag-list">
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              ) : (
                <MissingProjectData label="Technology stack" />
              )}
            </div>
            <div aria-labelledby="challenges-heading">
              <p className="eyebrow">Process</p>
              <h2 id="challenges-heading">Challenges</h2>
              {project.challenges.length > 0 ? (
                <ul className="case-study__challenge-list">
                  {project.challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              ) : (
                <MissingProjectData label="Challenges and outcomes" />
              )}
            </div>
          </Container>
        </section>

        <section aria-labelledby="screenshots-heading" className="page-section page-section--surface">
          <Container>
            <p className="eyebrow">Gallery</p>
            <h2 id="screenshots-heading">Screenshots</h2>
            {project.screenshots.length > 0 ? (
              <div className="screenshot-grid">
                {project.screenshots.map((screenshot) => (
                  <figure className="project-screenshot" key={screenshot.src}>
                    <img
                      alt={screenshot.alt}
                      decoding="async"
                      loading="lazy"
                      src={screenshot.src}
                    />
                    {screenshot.caption ? (
                      <figcaption>{screenshot.caption}</figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            ) : (
              <div className="screenshot-placeholder">
                <span aria-hidden="true">TBD</span>
                <p>No verified project images have been supplied.</p>
              </div>
            )}
          </Container>
        </section>

        <section aria-labelledby="project-links-heading" className="page-section">
          <Container size="narrow">
            <Card className="project-links" tone="accent">
              <div>
                <p className="eyebrow">Project links</p>
                <h2 id="project-links-heading">Repository and demo</h2>
              </div>
              <div className="project-links__items">
                {githubUrl ? (
                  <a
                    className="button button--secondary"
                    href={githubUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View GitHub repository
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <MissingProjectData label="GitHub repository URL" />
                )}
                {demoUrl ? (
                  <a
                    className="button button--primary"
                    href={demoUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View live demo
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <MissingProjectData label="Live demo URL" />
                )}
              </div>
            </Card>
          </Container>
        </section>
      </article>
    </>
  );
}
