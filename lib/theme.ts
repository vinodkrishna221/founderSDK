'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1565C0', // Deep Blue - Trust & Professionalism
      light: '#42A5F5',
      dark: '#0D47A1',
    },
    secondary: {
      main: '#FF9933', // Saffron - Indian Identity & Energy
      light: '#FFB74D',
      dark: '#F57C00',
    },
    success: {
      main: '#388E3C', // Green
      light: '#66BB6A',
      dark: '#2E7D32',
    },
    warning: {
      main: '#F57C00', // Orange
      light: '#FFB74D',
      dark: '#E65100',
    },
    error: {
      main: '#D32F2F', // Red
      light: '#EF5350',
      dark: '#C62828',
    },
    info: {
      main: '#00695C', // Teal - Growth & Stability
      light: '#4DB6AC',
      dark: '#004D40',
    },
    background: {
      default: '#FAFAFA', // Light Grey
      paper: '#FFFFFF', // White
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #1565C0 30%, #42A5F5 90%)',
          boxShadow: '0 3px 5px 2px rgba(21, 101, 192, .3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
});