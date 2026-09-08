import React from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

/**
 * Filled buttons use --color-action-strong rather than the brand orange.
 * White text on the brand orange measures 3.19:1, which fails WCAG AA; the
 * darker fill measures 5.94:1. The brand orange is still used for borders,
 * icons and large display type, where 3:1 is sufficient.
 */
const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-[var(--color-action-strong)] text-white hover:bg-[#9A3412] shadow-sm hover:shadow-md',
  secondary:
    'bg-[var(--color-brand-deep)] text-white hover:bg-[#0B3A67] shadow-sm hover:shadow-md',
  ghost:
    'bg-transparent text-[var(--color-brand-deep)] border border-[var(--color-brand)]/40 hover:border-[var(--color-brand)] hover:bg-[var(--color-brand)]/5',
};

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0';

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  to,
  href,
  variant = 'primary',
  className = '',
  onClick,
  children,
}) => {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
