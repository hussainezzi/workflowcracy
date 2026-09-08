import React, { useMemo, useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import { PROJECT_CATEGORIES, PROJECT_COUNT, type ProjectItem } from '../content/projects';

/** Cloudinary can hand us a smaller, silent, auto-format clip for previews. */
const previewUrl = (url: string) =>
  url.includes('cloudinary.com') && url.includes('/upload/')
    ? url.replace('/upload/', '/upload/w_600,q_auto,f_auto,ac_none/')
    : url;

const ProjectCard: React.FC<{ item: ProjectItem }> = ({ item }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const clip = item.videoUrl ? previewUrl(item.videoUrl) : undefined;
  const isLive = item.link !== '#';

  const play = () => {
    // Ignore rejected play() promises: browsers block autoplay in several
    // legitimate situations and none of them should surface as an error.
    videoRef.current?.play().catch(() => undefined);
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const card = (
    <>
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        {clip ? (
          <video
            ref={videoRef}
            src={clip}
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-brand-deep)] to-[var(--color-brand)]">
            <span className="px-4 text-center text-lg font-bold text-white/90">{item.title}</span>
          </div>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="text-lg font-bold text-[var(--color-brand-deep)]">{item.title}</h3>
        <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">{item.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {tech}
            </li>
          ))}
        </ul>

        {isLive && (
          <span className="mt-4 text-sm font-semibold text-[var(--color-action-strong)]">
            Visit site &rarr;
          </span>
        )}
      </div>
    </>
  );

  const shell =
    'group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/40 hover:shadow-xl';

  // A card with no live link must not pretend to be a link.
  if (!isLive) {
    return (
      <div className={shell} onMouseEnter={play} onMouseLeave={pause}>
        {card}
      </div>
    );
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={shell}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
    >
      {card}
    </a>
  );
};

const Projects: React.FC = () => {
  const [active, setActive] = useState<string>('all');

  const visible = useMemo(
    () =>
      active === 'all'
        ? PROJECT_CATEGORIES
        : PROJECT_CATEGORIES.filter((category) => category.id === active),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={`${PROJECT_COUNT} things we have shipped`}
        intro="Real work for real businesses. Most of these are live — open one and try it."
      />

      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Category filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActive('all')}
              aria-pressed={active === 'all'}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active === 'all'
                  ? 'bg-[var(--color-brand-deep)] text-white'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-[var(--color-brand)]/50'
              }`}
            >
              Everything
            </button>

            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                aria-pressed={active === category.id}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === category.id
                    ? 'bg-[var(--color-brand-deep)] text-white'
                    : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-[var(--color-brand)]/50'
                }`}
              >
                <Icon name={category.icon} className="h-4 w-4" />
                {category.category}
              </button>
            ))}
          </div>

          {visible.map((category) => (
            <div key={category.id} className="mb-16">
              <Reveal className="mb-6">
                <h2 className="text-2xl font-bold text-[var(--color-brand-deep)]">
                  {category.category}
                </h2>
                <p className="mt-1 text-slate-500">{category.blurb}</p>
              </Reveal>

              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, i) => (
                  <Reveal as="li" key={item.title} delay={Math.min(i, 5) * 60}>
                    <ProjectCard item={item} />
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}

          <Reveal className="text-center">
            <Button to="/contact">Talk about your project</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Projects;
