import React from 'react';
import Reveal from './Reveal';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
}

/**
 * The band at the top of every inner page.
 *
 * Light ground, deep-ocean heading, one line of intro — the welcoming
 * counterpart to the old dark hero.
 */
const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, intro, children }) => (
  <header className="relative overflow-hidden border-b border-slate-200/70 bg-white pt-32 pb-16">
    {/* Soft brand wash, kept well behind the text. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full opacity-[0.13] blur-3xl"
      style={{ background: 'radial-gradient(circle, #1A91DA 0%, transparent 70%)' }}
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-[0.10] blur-3xl"
      style={{ background: 'radial-gradient(circle, #F06525 0%, transparent 70%)' }}
    />

    <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
      <Reveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-action-strong)]">
          {eyebrow}
        </p>
        <h1 className="text-4xl font-bold leading-tight text-[var(--color-brand-deep)] md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {intro}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div>}
      </Reveal>
    </div>
  </header>
);

export default PageHeader;
