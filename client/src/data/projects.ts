import type { Project, ProjectFilter } from '../types/project';
import { projectCategories } from '../types/project';

export const projects: readonly Project[] = [
  {
    title: 'Ahoden Elite Clean',
    slug: 'ahoden-elite-clean',
    category: 'TBD',
    status: 'TBD',
    overview: null,
    role: null,
    problem: null,
    solution: null,
    stack: [],
    challenges: [],
    screenshots: [],
    links: { github: null, demo: null },
  },
  {
    title: 'Playrush Gaming Platform',
    slug: 'playrush-gaming-platform',
    category: 'Gaming platform',
    status: 'TBD',
    overview: null,
    role: null,
    problem: null,
    solution: null,
    stack: [],
    challenges: [],
    screenshots: [],
    links: { github: null, demo: null },
  },
  {
    title: 'Figma BYC Design',
    slug: 'figma-byc-design',
    category: 'Design',
    status: 'TBD',
    overview: null,
    role: null,
    problem: null,
    solution: null,
    stack: [],
    challenges: [],
    screenshots: [],
    links: { github: null, demo: null },
  },
] as const;

export const projectFilters: readonly ProjectFilter[] = [
  'All',
  ...projectCategories,
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}

export function filterProjects(filter: ProjectFilter) {
  if (filter === 'All') {
    return projects;
  }

  return projects.filter((project) => project.category === filter);
}
