import type { HTMLAttributes, ReactNode } from 'react';

export type CardTone = 'default' | 'accent';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: CardTone;
}

export function Card({
  children,
  className,
  tone = 'default',
  ...props
}: CardProps) {
  const classes = ['card', `card--${tone}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
