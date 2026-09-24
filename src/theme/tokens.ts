export const brand = {
  green: '#42c686',
  greenHover: '#2e9a68',
  greenInk: '#1b8a58',
  ink: '#0f1115',
  inkSoft: '#3d4148',
  footer: '#0d0f22',
  footerSoft: 'rgba(255, 255, 255, 0.68)',
  footerLine: 'rgba(255, 255, 255, 0.12)',
  line: '#e6e8ee',
  surface: '#f6f8fa',
  mintWash: 'rgba(66, 198, 134, 0.10)',
  mintLine: 'rgba(66, 198, 134, 0.34)',
} as const;

export type AccentName = 'green' | 'indigo' | 'teal' | 'amber' | 'coral' | 'violet';

export const accent: Record<AccentName, { main: string; wash: string; line: string }> = {
  green: { main: '#1b8a58', wash: 'rgba(66, 198, 134, 0.12)', line: 'rgba(27, 138, 88, 0.30)' },
  indigo: { main: '#3a44a8', wash: 'rgba(58, 68, 168, 0.09)', line: 'rgba(58, 68, 168, 0.26)' },
  teal: { main: '#0d7f81', wash: 'rgba(13, 127, 129, 0.10)', line: 'rgba(13, 127, 129, 0.26)' },
  amber: { main: '#a86a12', wash: 'rgba(232, 163, 61, 0.14)', line: 'rgba(168, 106, 18, 0.26)' },
  coral: { main: '#c0492c', wash: 'rgba(224, 103, 74, 0.12)', line: 'rgba(192, 73, 44, 0.24)' },
  violet: { main: '#6a3fb5', wash: 'rgba(106, 63, 181, 0.09)', line: 'rgba(106, 63, 181, 0.24)' },
};

export const accentCycle: AccentName[] = ['green', 'indigo', 'teal', 'amber', 'violet', 'coral'];

export function accentAt(index: number) {
  return accent[accentCycle[index % accentCycle.length]];
}
