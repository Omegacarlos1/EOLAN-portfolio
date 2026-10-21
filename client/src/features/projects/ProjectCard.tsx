import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';
import { Card } from '../../components/ui/Card';

export interface ProjectCardProps {
  project: Project;
}

function getProjectMonogram(title: string) {
  return title
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('');
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card">
      <div aria-hidden="true" className="project-card__visual">
        <span>{getProjectMonogram(project.title)}</span>
        <small>Screenshot TBD</small>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="status-badge">Status: {project.status}</span>
          <span>{project.category}</span>
        </div>
        <h2>{project.title}</h2>
        <p>
          Verified overview, responsibilities and project outcome are awaiting confirmation.
        </p>
        <Link className="project-card__link" to={`/projects/${project.slug}`}>
          View case study <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Card>
  );
}
