import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { STEPS } from '../content/site';

const HowItWorks: React.FC = () => (
  <>
    <PageHeader
      eyebrow="How it works"
      title="Four steps, and you see the plan before we build"
      intro="Most of our clients have never commissioned software before. This is what the whole thing looks like, start to finish."
    />

    <section className="py-20">
      <div className="container mx-auto max-w-3xl px-6">
        <ol className="relative space-y-12 border-l-2 border-slate-200 pl-8">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.id} delay={i * 80} className="relative">
              {/* The step marker sits on the timeline itself. */}
              <span
                aria-hidden="true"
                className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand)] text-sm font-bold text-white ring-4 ring-[var(--color-ice)]"
              >
                {step.id}
              </span>

              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action-strong)]">
                {step.duration}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-[var(--color-brand-deep)]">
                {step.title}
              </h2>
              <p className="mt-1 font-medium text-slate-500">{step.summary}</p>
              <p className="mt-4 leading-relaxed text-slate-600">{step.detail}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-bold text-[var(--color-brand-deep)]">
            What you get at the end
          </h2>
          <ul className="mt-5 space-y-3 text-slate-600">
            {[
              'Working software, running on your own accounts',
              'A written explanation of how it works',
              'Training for whoever will use it day to day',
              'A direct line to us when something needs changing',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-1 text-[var(--color-action)]">
                  &#10003;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/contact">Start with a free call</Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default HowItWorks;
