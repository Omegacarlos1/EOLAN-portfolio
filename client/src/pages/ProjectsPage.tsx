import { useState } from 'react';
import { PageIntro } from '../components/shared/PageIntro';
import { PageMeta } from '../components/shared/PageMeta';
import { Container } from '../components/ui/Container';
import { filterProjects, projectFilters } from '../data/projects';
import { ProjectCard } from '../features/projects/ProjectCard';
import type { ProjectFilter } from '../types/project';

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const visibleProjects = filterProjects(activeFilter);

  return (
    <>
      <PageMeta title="Projects" />
      <PageIntro
        description="A transparent view of selected work. Unconfirmed details remain marked TBD until supporting information is supplied."
        eyebrow="Projects"
        title="Project showcase"
      />
      <section aria-labelledby="project-gallery-heading" className="page-section page-section--compact">
        <Container>
          <div className="project-gallery__header">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="project-gallery-heading">Browse the project list</h2>
            </div>
            <div
              aria-label="Filter projects by category"
              className="project-filters"
              role="group"
            >
              {projectFilters.map((filter) => (
                <button
                  aria-pressed={activeFilter === filter}
                  className="filter-chip"
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <p aria-live="polite" className="project-results">
            Showing {visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}
            {activeFilter === 'All' ? '.' : ` in ${activeFilter}.`}
          </p>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
