import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { TIERS } from '../content/site';

const Pricing: React.FC = () => (
  <>
    <PageHeader
      eyebrow="Pricing"
      title="What things cost"
      intro="Starting prices for the work we do most often. Every project is quoted properly after the first call — you will never get an invoice you did not agree to."
    />

    <section className="py-16">
      <div className="container mx-auto px-6">
        <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((tier, i) => (
            <Reveal as="li" key={tier.id} delay={i * 70}>
              <article
                className={`flex h-full flex-col rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  tier.featured
                    ? 'border-[var(--color-action)] ring-2 ring-[var(--color-action)]/20'
                    : 'border-slate-200'
                }`}
              >
                {tier.featured && (
                  <span className="mb-4 self-start rounded-full bg-[var(--color-action-strong)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Most requested
                  </span>
                )}

                <h2 className="text-xl font-bold text-[var(--color-brand-deep)]">{tier.name}</h2>
                <p className="mt-2 text-slate-600">{tier.description}</p>

                <p className="mt-6 flex items-baseline gap-2">
                  {tier.startingAt && (
                    <span className="text-sm text-slate-500">from</span>
                  )}
                  <span className="text-4xl font-bold text-[var(--color-brand)]">{tier.price}</span>
                </p>

                <p className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                  <span className="font-semibold text-[var(--color-brand-deep)]">Best for: </span>
                  {tier.bestFor}
                </p>

                <ul className="mt-6 flex-grow space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-slate-600">
                      <span aria-hidden="true" className="mt-0.5 text-[var(--color-action)]">
                        &#10003;
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {tier.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-500"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button
                    to="/contact"
                    variant={tier.featured ? 'primary' : 'ghost'}
                    className="w-full"
                  >
                    Enquire
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mx-auto mt-14 max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h2 className="text-xl font-bold text-[var(--color-brand-deep)]">
            Something bigger, or something smaller?
          </h2>
          <p className="mt-3 text-slate-600">
            These are starting points, not a menu. Tell us the problem and we will quote the work
            it actually takes.
          </p>
          <div className="mt-6">
            <Button to="/contact">Ask for a quote</Button>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default Pricing;
