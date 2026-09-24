'use client';

import { createTheme } from '@mui/material/styles';
import { accent, brand } from './tokens';
import { jakartaFontFamily } from './fonts';

const fontStack = jakartaFontFamily;

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: brand.green,
      dark: brand.greenHover,
      contrastText: '#0d0f22',
    },
    secondary: {
      main: brand.footer,
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: brand.ink,
      secondary: brand.inkSoft,
    },
    divider: brand.line,
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: fontStack,
    h1: {
      fontWeight: 800,
      fontSize: 'clamp(2.6rem, 5.4vw, 4.2rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontWeight: 800,
      fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
      lineHeight: 1.14,
      letterSpacing: '-0.02em',
      color: brand.ink,
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.45rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: brand.ink,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.1rem',
      lineHeight: 1.4,
      color: brand.ink,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1rem',
      color: brand.ink,
    },
    h6: {
      fontWeight: 700,
      fontSize: '0.95rem',
      color: brand.ink,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1.1rem',
      lineHeight: 1.65,
      color: brand.inkSoft,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.05rem',
      lineHeight: 1.68,
      color: brand.inkSoft,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.95rem',
      lineHeight: 1.62,
      color: brand.inkSoft,
    },
    overline: {
      fontWeight: 700,
      fontSize: '0.75rem',
      letterSpacing: '0.16em',
      lineHeight: 1.6,
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          backgroundColor: '#ffffff',
        },
        '*:focus-visible': {
          outline: `3px solid ${accent.indigo.main}`,
          outlineOffset: 2,
          borderRadius: 4,
        },
        a: {
          color: 'inherit',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 26,
          paddingBlock: 12,
          fontSize: '0.96rem',
        },
        containedPrimary: {
          color: '#0d0f22',
          backgroundColor: brand.green,
          '&:hover': { backgroundColor: brand.greenHover },
        },
        outlinedPrimary: {
          color: brand.ink,
          borderColor: brand.line,
          '&:hover': {
            borderColor: brand.greenInk,
            backgroundColor: brand.mintWash,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          color: brand.ink,
          transition: 'color 140ms ease',
          '&:hover': { color: brand.greenInk },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#ffffff',
          '& fieldset': { borderColor: brand.line },
          '&:hover fieldset': { borderColor: brand.greenInk },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: brand.inkSoft,
        },
      },
    },
  },
});

export default theme;
