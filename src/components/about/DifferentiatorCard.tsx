import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { brand } from '@/theme/tokens';

type DifferentiatorCardProps = {
  title: string;
  body: string;
};

export default function DifferentiatorCard({ title, body }: DifferentiatorCardProps) {
  return (
    <Box
      sx={{
        flex: '1 1 280px',
        minWidth: 0,
        display: 'flex',
        gap: 1.5,
        p: 3,
        borderRadius: 3,
        border: `1px solid ${brand.line}`,
        backgroundColor: '#ffffff',
        transition: 'border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease',
        '&:hover': {
          borderColor: brand.mintLine,
          transform: 'translateY(-3px)',
          boxShadow: '0 16px 32px rgba(13, 15, 34, 0.08)',
        },
      }}
    >
      <CheckCircleOutlinedIcon sx={{ fontSize: 22, color: brand.greenInk, flexShrink: 0, mt: 0.2 }} />
      <Box>
        <Typography variant="h4" sx={{ mb: 0.75 }}>
          {title}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </Box>
    </Box>
  );
}
