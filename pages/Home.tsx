import React, { useRef, useState } from 'react';
import ScrollStage from '../components/three/ScrollStage';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import Icon from '../components/ui/Icon';
import ScheduleDemoModal from '../components/ScheduleDemoModal';
import { SERVICES, SITE, STEPS, TESTIMONIALS } from '../content/site';
import { PROJECT_COUNT } from '../content/projects';

/**
 * The home page is deliberately short: it says what we do, proves it, and
 * sends the visitor to the page that answers their actual question.
 */
const Home: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      {/*
        The tall element below is what the 3D mark reads its progress from.
        The canvas is sticky inside it, so the mark stays on screen and turns
        as the visitor scrolls through the opening of the page.
      */}
      <section ref={stageRef} className="relative h-[220vh] bg-white">
        <div className="sticky top-0 h-screen overflow-hidden">
          <ScrollStage targetRef={stageRef} />

          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-2xl">
                <Reveal>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-action-strong)]">
                    {SITE.tagline}
                  </p>
                  <h1 className="text-5xl font-bold leading-[1.08] text-[var(--color-brand-deep)] md:text-7xl">
                    {SITE.promise}
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                    {SITE.subPromise}
                  </p>
                  <div className="mt-9 flex flex-wrap gap-4">
                    <Button onClick={() => setDemoOpen(true)}>Book a free call</Button>
                    <Button to="/projects" variant="ghost">
                      See our work
                    </Button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-slate-400"
          >
            Scroll
          </div>
        </div>
      </section>

      {/* Proof before pitch. */}
      <section className="border-y border-slate-200/70 bg-[var(--color-ice)] py-14">
        <div className="container mx-auto grid max-w-4xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-3">
          {[
            { figure: `${PROJECT_COUNT}+`, label: 'Projects delivered' },
            { figure: '8', label: 'Industries served' },
            { figure: '3', label: 'Founders, no middlemen' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="text-4xl font-bold text-[var(--color-brand)]">{stat.figure}</div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do — three lines, not six paragraphs. */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--color-brand-deep)] md:text-4xl">
              What we build
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Six things, in plain terms. Pick the one that sounds like your problem.
            </p>
          </Reveal>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal as="li" key={service.id} delay={i * 70}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-brand)]/40 hover:shadow-lg">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-brand)]/10 text-[var(--color-brand-deep)] transition-colors group-hover:bg-[var(--color-brand)] group-hover:text-white">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-brand-deep)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{service.summary}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12 text-center">
            <Button to="/services" variant="ghost">
              More about each service
            </Button>
          </Reveal>
        </div>
      </section>

      {/* How it works, compressed to four lines. */}
      <section className="bg-[var(--color-brand-deep)] py-24 text-white">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">How working with us goes</h2>
            <p className="mt-4 text-lg text-blue-100/80">
              No jargon, no surprises. You see the plan before anything is built.
            </p>
          </Reveal>

          <ol className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.id} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-gold)] font-bold text-[var(--color-obsidian)]">
                    {step.id}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-blue-100/75">{step.summary}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-12 text-center">
            <Button to="/how-it-works" variant="primary">
              See the full process
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Clients speaking for themselves. */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--color-brand-deep)] md:text-4xl">
              What our clients say
            </h2>
          </Reveal>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal as="li" key={t.author} delay={i * 90}>
                <figure className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8">
                  <blockquote className="flex-grow text-slate-600">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                    <img
                      src={t.avatar}
                      alt=""
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--color-action)]/30"
                    />
                    <span>
                      <span className="block font-bold text-[var(--color-brand-deep)]">
                        {t.author}
                      </span>
                      <span className="block text-sm text-slate-500">{t.title}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* One closing ask. */}
      <section className="bg-[var(--color-ice)] py-20">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-[var(--color-brand-deep)] md:text-4xl">
              Tell us what eats your week
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A short call, no charge, no obligation. If we cannot help, we will say so.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button onClick={() => setDemoOpen(true)}>Book a free call</Button>
              <Button to="/pricing" variant="ghost">
                See pricing
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ScheduleDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Home;
