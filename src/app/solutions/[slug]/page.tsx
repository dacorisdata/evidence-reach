import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SolutionPage from '@/components/solutions/SolutionPage';
import { getSolution, solutions } from '@/content/solutions';

export const dynamicParams = false;

type SolutionRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: SolutionRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return { title: solution.label, description: solution.metaDescription };
}

export default async function SolutionRoute({ params }: SolutionRouteProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return <SolutionPage solution={solution} />;
}
