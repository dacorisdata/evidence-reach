import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsArticlePage from '@/components/news/NewsArticlePage';
import { getNewsArticle, newsArticles } from '@/content/news';

export const dynamicParams = false;

type NewsArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: NewsArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.metaDescription };
}

export default async function NewsArticleRoute({ params }: NewsArticleRouteProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();
  return <NewsArticlePage article={article} />;
}
