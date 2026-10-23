import type { ContactLink, Service, SkillGroup } from '../types/portfolio';

export const professionalTitle = 'Full-Stack Web Developer';

export const profilePhotoPath = '/images/egbedayo-olanrewaju.jpeg';

export const biography = [
  'I am a passionate Full Stack Web Developer focused on building modern, responsive, and user-friendly web applications. I specialize in React, JavaScript, TypeScript, Node.js, Express, MongoDB and MySQL, developing everything from engaging frontend interfaces to secure and scalable backend systems.',
  'I enjoy turning ideas into practical digital solutions that solve real-world problems. My goal is to help businesses and individuals bring their ideas to life through clean code, thoughtful design and reliable technology.',
] as const;

export const primaryPortfolioStack = [
  'React',
  'TypeScript',
  'Redux Toolkit',
  'React Router',
] as const;

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Frontend',
    description: 'Responsive interfaces and maintainable client-side experiences.',
    skills: ['React', 'JavaScript', 'TypeScript', 'Redux'],
  },
  {
    title: 'Backend',
    description: 'Server-side applications and clear API foundations.',
    skills: ['Node.js', 'Express'],
  },
  {
    title: 'Databases',
    description: 'Relational and document data modelling for application needs.',
    skills: ['MySQL', 'MongoDB'],
  },
] as const;

export const services: readonly Service[] = [
  {
    number: '01',
    title: 'Full-stack development',
    description:
      'Connected frontend and backend delivery shaped around the project’s verified requirements.',
  },
  {
    number: '02',
    title: 'Frontend development',
    description:
      'Responsive, accessible interfaces built with a clear component structure.',
  },
  {
    number: '03',
    title: 'Backend / API development',
    description:
      'Node.js and Express API foundations with validation and maintainable boundaries.',
  },
  {
    number: '04',
    title: 'Database design',
    description:
      'Purposeful relational or document data structures using MySQL or MongoDB.',
  },
  {
    number: '05',
    title: 'E-commerce development',
    description:
      'Commerce experiences scoped around approved catalogue, checkout and operational needs.',
  },
  {
    number: '06',
    title: 'Website maintenance',
    description:
      'Planned updates, fixes and iterative improvements for existing websites.',
  },
] as const;

export const contactLinks: readonly ContactLink[] = [
  {
    label: 'Email',
    value: 'Egbedayoolanrewaju@gmail.com',
    href: 'mailto:Egbedayoolanrewaju@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'Omegacarlos1',
    href: 'https://github.com/Omegacarlos1',
  },
  {
    label: 'LinkedIn',
    value: 'Egbedayo Olanrewaju',
    href: 'https://www.linkedin.com/in/egbedayo-olanrewaju-671730243/',
  },
] as const;
