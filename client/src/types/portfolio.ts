export interface SkillGroup {
  description: string;
  skills: readonly string[];
  title: string;
}

export interface Service {
  description: string;
  number: string;
  title: string;
}

export interface ContactLink {
  href: string;
  label: string;
  value: string;
}
