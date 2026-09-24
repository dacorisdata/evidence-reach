import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { accent, brand } from '@/theme/tokens';
import Section from '@/components/shared/Section';
import { formatNewsDate, type NewsArticle, type NewsParagraph } from '@/content/news';

type NewsArticlePageProps = {
  article: NewsArticle;
};

function renderParagraph(paragraph: NewsParagraph, index: number) {
  if (typeof paragraph === 'string') {
    return (
      <Typography key={index} sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: brand.inkSoft, mb: 2.5 }}>
        {paragraph}
      </Typography>
    );
  }

  return (
    <Typography key={index} sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: brand.inkSoft, mb: 2.5 }}>
      <Box component="span" sx={{ fontWeight: 700, color: brand.ink }}>
        {paragraph.bold}
      </Box>
      {paragraph.after}
    </Typography>
  );
}

export default function NewsArticlePage({ article }: NewsArticlePageProps) {
  return (
    <Section>
      <Box sx={{ maxWidth: 760, mx: 'auto' }}>
        <Typography
          component={Link}
          href="/news"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            mb: 3,
            fontSize: '0.88rem',
            fontWeight: 600,
            color: brand.greenInk,
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          <ArrowBackOutlinedIcon sx={{ fontSize: 16 }} />
          All news
        </Typography>

        <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: accent.amber.main, mb: 0.75 }}>
          {formatNewsDate(article.date)}
        </Typography>
        <Typography sx={{ fontSize: '0.88rem', fontWeight: 600, color: brand.inkSoft, mb: 1.5 }}>
          {article.author}
        </Typography>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}>
          {article.title}
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 3 }}>
          {article.subheading}
        </Typography>

        <Box
          sx={{
            position: 'relative',
            aspectRatio: '16 / 9',
            borderRadius: 3,
            overflow: 'hidden',
            mb: 4,
            border: `1px solid ${brand.line}`,
          }}
        >
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 760px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>

        {article.paragraphs.map(renderParagraph)}
      </Box>
    </Section>
  );
}
