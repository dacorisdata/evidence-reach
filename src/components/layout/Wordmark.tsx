import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';

type WordmarkProps = {
  onDark?: boolean;
};

export default function Wordmark({ onDark = false }: WordmarkProps) {
  return (
    <Box
      component={Link}
      href="/"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <Image
        src="/logo.jpeg"
        alt="DACORIS Evidence Reach — Evidence into Reach. Data into Action."
        width={300}
        height={83}
        priority
        style={{
          height: onDark ? 44 : 40,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}
