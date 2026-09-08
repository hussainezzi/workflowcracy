import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon } from './icons';
import { NAV_LINKS, SITE } from '../content/site';
import { useScrolled } from '../hooks/useBrowser';

const Header: React.FC = () => {
  const scrolled = useScrolled(10);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // A menu that covers the page must be dismissible from the keyboard.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors ${
      isActive
        ? 'text-[var(--color-brand)]'
        : 'text-[var(--color-brand-deep)] hover:text-[var(--color-brand)]'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur'
          : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
            <LogoIcon className="h-10 w-auto" />
            <span className="hidden text-xl font-bold text-[var(--color-brand-deep)] sm:inline">
              {SITE.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-[var(--color-action-strong)] px-5 py-2 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#9A3412]"
            >
              Book a call
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-[var(--color-brand-deep)] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" className="pb-4 md:hidden" aria-label="Main">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 font-medium transition-colors ${
                        isActive
                          ? 'bg-[var(--color-brand)]/10 text-[var(--color-brand)]'
                          : 'text-[var(--color-brand-deep)] hover:bg-slate-50'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block rounded-full bg-[var(--color-action-strong)] px-5 py-3 text-center font-semibold text-white"
                >
                  Book a call
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
