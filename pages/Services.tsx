import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import { SERVICES } from '../content/site';

const Services: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Services"
      title="Six ways we take work off your desk"
      intro="Every one of these started as a real problem a client brought us. If yours is not listed, ask anyway."
    />

    <section className="py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <ul className="space-y-6">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 60}>
              <article className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-white p-8 transition-colors hover:border-[var(--color-brand)]/40 md:grid-cols-[auto_1fr]">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-brand)]/10 text-[var(--color-brand-deep)]">
                  <Icon name={service.icon} className="h-7 w-7" />
                </span>

                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-brand-deep)]">
                    {service.title}
                  </h2>
                  <p className="mt-1 font-medium text-[var(--color-action-strong)]">
                    {service.summary}
                  </p>
                  <p className="mt-4 leading-relaxed text-slate-600">{service.detail}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.examples.map((example) => (
                      <li
                        key={example}
                        className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 rounded-2xl bg-[var(--color-brand-deep)] p-10 text-center text-white">
          <h2 className="text-2xl font-bold md:text-3xl">Not sure which one you need?</h2>
          <p className="mx-auto mt-3 max-w-xl text-blue-100/80">
            That is what the first call is for. Describe the problem in your own words and we will
            tell you what would fix it.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Button to="/contact">Get in touch</Button>
            <Button to="/how-it-works" variant="ghost" className="!border-white/40 !text-white hover:!bg-white/10">
              See how we work
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Services;
