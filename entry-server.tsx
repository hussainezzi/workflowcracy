import React from 'react';
import { renderToString } from 'react-dom/server';
// react-router v7 merged the DOM package: StaticRouter now lives here, and
// the old 'react-router-dom/server' entry point no longer exists.
import { StaticRouter } from 'react-router';
import App from './App';

/** Renders one route to HTML at build time. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}

/** The routes that get their own static HTML file. */
export const ROUTES = [
  '/',
  '/services',
  '/how-it-works',
  '/projects',
  '/pricing',
  '/contact',
  '/work-policy',
];

/** Per-route <title> and meta description. */
export const META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'AI with Ezzi — We build AI that does your busywork',
    description:
      'Automations, dashboards and custom tools for small businesses. Built quickly, explained plainly, and handed over working.',
  },
  '/services': {
    title: 'Services — AI with Ezzi',
    description:
      'Workflow automation, document processing, chatbots, dashboards, custom tools and websites for small businesses.',
  },
  '/how-it-works': {
    title: 'How it works — AI with Ezzi',
    description:
      'Four steps from first conversation to working software. You see the plan and the price before anything is built.',
  },
  '/projects': {
    title: 'Projects — AI with Ezzi',
    description:
      'Websites, enterprise apps, AI tools, dashboards and automation workflows we have built and shipped.',
  },
  '/pricing': {
    title: 'Pricing — AI with Ezzi',
    description:
      'Starting prices for websites, Google Workspace tools, dashboards, content, automation and AI agents.',
  },
  '/contact': {
    title: 'Contact — AI with Ezzi',
    description:
      'Book a free call, email us, or message on WhatsApp. Meet the three founders who do the work.',
  },
  '/work-policy': {
    title: 'Work policy — AI with Ezzi',
    description: 'How we work with clients: scope, communication and delivery.',
  },
};
