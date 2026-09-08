import React from 'react';
import { Link } from 'react-router-dom';
import { GitHubIcon, LinkedInIcon, LogoIcon, YouTubeIcon } from './icons';
import { CONTACT_EMAIL, NAV_LINKS, SITE } from '../content/site';

const Footer: React.FC = () => (
  <footer className="bg-[var(--color-obsidian)] text-slate-400">
    <div className="container mx-auto px-6 py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <LogoIcon className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            {SITE.subPromise}
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-sm font-medium text-[var(--color-gold)] underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Pages</h2>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-[var(--color-brand)]">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/work-policy"
                className="transition-colors hover:text-[var(--color-brand)]"
              >
                Work Policy
              </Link>
            </li>
          </ul>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/hussainezzi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-[var(--color-brand)]"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/hussain-ezzi-67900226a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[var(--color-brand)]"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.youtube.com/channel/UCRBo2PW1AfHl9JHWnu7ArjA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="transition-colors hover:text-[var(--color-brand)]"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-sm md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p>{SITE.tagline}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
