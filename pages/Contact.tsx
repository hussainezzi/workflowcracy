import React, { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import ScheduleDemoModal from '../components/ScheduleDemoModal';
import { GitHubIcon, LinkedInIcon, StreamlitIcon, WebsiteIcon, YouTubeIcon } from '../components/icons';
import { CONTACT_EMAIL, FOUNDERS, VIDEOS } from '../content/site';

const WHATSAPP_NUMBER = '923182339392';

const Contact: React.FC = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what eats your week"
        intro="One short call. We will tell you honestly whether we can help, and roughly what it would take."
      >
        <Button onClick={() => setDemoOpen(true)}>Book a free call</Button>
        <Button href={`mailto:${CONTACT_EMAIL}`} variant="ghost">
          Email us
        </Button>
      </PageHeader>

      {/* Ways to reach us */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                label: 'Email',
                value: CONTACT_EMAIL,
                href: `mailto:${CONTACT_EMAIL}`,
                note: 'We reply within a working day',
              },
              {
                label: 'WhatsApp',
                value: 'Message us',
                href: `https://wa.me/${WHATSAPP_NUMBER}`,
                note: 'Fastest for a quick question',
              },
              {
                label: 'Book a call',
                value: 'Pick a time',
                href: '',
                note: 'Free, no obligation',
              },
            ].map((channel, i) => (
              <Reveal as="li" key={channel.label} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 text-center">
                  <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-action-strong)]">
                    {channel.label}
                  </span>

                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="mt-2 font-bold text-[var(--color-brand-deep)] underline-offset-4 hover:underline"
                      {...(channel.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setDemoOpen(true)}
                      className="mt-2 font-bold text-[var(--color-brand-deep)] underline-offset-4 hover:underline"
                    >
                      {channel.value}
                    </button>
                  )}

                  <span className="mt-2 text-sm text-slate-500">{channel.note}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Who you would be working with */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--color-brand-deep)]">
              Who you will be working with
            </h2>
            <p className="mt-3 text-slate-600">
              A small team. The people you speak to are the people who build it.
            </p>
          </Reveal>

          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {FOUNDERS.map((founder, i) => (
              <Reveal as="li" key={founder.name} delay={i * 90}>
                <article className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-[var(--color-ice)] p-8 text-center">
                  <img
                    src={founder.avatar}
                    alt=""
                    loading="lazy"
                    className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
                  />
                  <h3 className="mt-5 text-lg font-bold text-[var(--color-brand-deep)]">
                    {founder.name}
                  </h3>
                  <p className="text-sm text-[var(--color-action-strong)]">{founder.title}</p>
                  <p className="mt-4 flex-grow text-sm leading-relaxed text-slate-600">
                    {founder.bio}
                  </p>

                  <div className="mt-6 flex items-center gap-4 text-slate-400">
                    {founder.linkedin && (
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on LinkedIn`}
                        className="transition-colors hover:text-[var(--color-brand)]"
                      >
                        <LinkedInIcon />
                      </a>
                    )}
                    {founder.github && (
                      <a
                        href={founder.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on GitHub`}
                        className="transition-colors hover:text-[var(--color-brand)]"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    {founder.youtube && (
                      <a
                        href={founder.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on YouTube`}
                        className="transition-colors hover:text-[var(--color-brand)]"
                      >
                        <YouTubeIcon />
                      </a>
                    )}
                    {founder.streamlit && (
                      <a
                        href={founder.streamlit}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} on Streamlit`}
                        className="transition-colors hover:text-[var(--color-brand)]"
                      >
                        <StreamlitIcon />
                      </a>
                    )}
                    {founder.website && (
                      <a
                        href={founder.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${founder.name} website`}
                        className="transition-colors hover:text-[var(--color-brand)]"
                      >
                        <WebsiteIcon />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Watch us build */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[var(--color-brand-deep)]">Watch us build</h2>
            <p className="mt-3 text-slate-600">
              We publish how we do this. Judge the work before you call.
            </p>
          </Reveal>

          <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {VIDEOS.map((video, i) => (
              <Reveal as="li" key={video.id} delay={i * 70}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                  <p className="p-5 font-medium text-[var(--color-brand-deep)]">{video.title}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ScheduleDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Contact;
