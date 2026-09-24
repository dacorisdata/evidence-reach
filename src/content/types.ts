import type { AccentName } from '@/theme/tokens';

export type ImageRef = {
  src: string;
  alt: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Card = {
  title: string;
  subtitle?: string;
  body: string;
  accent?: AccentName;
};

export type NavChild = {
  label: string;
  href: string;
  blurb: string;
};

export type NavFeatured = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
  featured?: NavFeatured;
};
