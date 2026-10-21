import type { ElementType } from 'react';

export interface SectionHeadingProps {
  align?: 'start' | 'center';
  description?: string;
  eyebrow?: string;
  headingLevel?: 1 | 2 | 3;
  id?: string;
  title: string;
}

export function SectionHeading({
  align = 'start',
  description,
  eyebrow,
  headingLevel = 2,
  id,
  title,
}: SectionHeadingProps) {
  const Heading = `h${headingLevel}` as ElementType;

  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading className="section-heading__title" id={id}>
        {title}
      </Heading>
      {description ? (
        <p className="section-heading__description">{description}</p>
      ) : null}
    </header>
  );
}
