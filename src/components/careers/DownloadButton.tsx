import Button, { type ButtonProps } from '@mui/material/Button';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import type { OpportunityDocument } from '@/content/careers';

type DownloadButtonProps = {
  document: OpportunityDocument;
  label?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  fullWidth?: boolean;
  sx?: ButtonProps['sx'];
};

export default function DownloadButton({
  document,
  label = 'Download advert',
  variant = 'outlined',
  size = 'medium',
  fullWidth = false,
  sx,
}: DownloadButtonProps) {
  return (
    <Button
      component="a"
      href={document.href}
      download={document.fileName}
      variant={variant}
      color="primary"
      size={size}
      fullWidth={fullWidth}
      startIcon={<FileDownloadOutlinedIcon />}
      aria-label={`${label}: ${document.fileName}, PDF, ${document.size}`}
      sx={sx}
    >
      {label}
    </Button>
  );
}
