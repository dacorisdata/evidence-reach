import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OpportunityPage from '@/components/careers/OpportunityPage';
import { getOpportunity, opportunities } from '@/content/careers';

export const dynamicParams = false;

type OpportunityRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return opportunities.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: OpportunityRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getOpportunity(slug);
  if (!item) return {};
  return {
    title: `${item.title} - Careers`,
    description: item.metaDescription,
    openGraph: { title: item.title, description: item.metaDescription, type: 'website' },
  };
}

export default async function OpportunityRoute({ params }: OpportunityRouteProps) {
  const { slug } = await params;
  const item = getOpportunity(slug);
  if (!item) notFound();
  return <OpportunityPage opportunity={item} />;
}
