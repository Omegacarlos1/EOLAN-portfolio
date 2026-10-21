import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface SharedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> &
  SharedButtonProps;

export interface ButtonLinkProps extends SharedButtonProps {
  to: string;
}

function getButtonClassName(
  variant: ButtonVariant,
  className?: string,
) {
  return ['button', `button--${variant}`, className].filter(Boolean).join(' ');
}

export function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={getButtonClassName(variant, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  to,
  variant = 'primary',
}: ButtonLinkProps) {
  return (
    <Link className={getButtonClassName(variant, className)} to={to}>
      {children}
    </Link>
  );
}
