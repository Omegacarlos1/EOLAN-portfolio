export const projectCategories = [
  'TBD',
  'Gaming platform',
  'Design',
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectFilter = 'All' | ProjectCategory;
export type ProjectStatus = 'TBD';

export interface ProjectScreenshot {
  alt: string;
  caption?: string;
  src: string;
}

export interface ProjectLinks {
  demo: string | null;
  github: string | null;
}

export interface Project {
  category: ProjectCategory;
  challenges: readonly string[];
  links: ProjectLinks;
  overview: string | null;
  problem: string | null;
  role: string | null;
  screenshots: readonly ProjectScreenshot[];
  slug: string;
  solution: string | null;
  stack: readonly string[];
  status: ProjectStatus;
  title: string;
}
