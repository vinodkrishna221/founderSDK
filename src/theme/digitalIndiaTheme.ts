/**
 * Digital India Material-UI Theme Configuration
 * Complete theme setup with typography system and custom variants
 */

import { createTheme, Theme } from '@mui/material/styles';
import { digitalIndiaTypography, fontFamilies, multiLanguageTypography } from './typography';

// Extend Material-UI theme to include custom typography variants
declare module '@mui/material/styles' {
  interface TypographyVariants {
    displayLarge: React.CSSProperties;
    displayMedium: React.CSSProperties;
    displaySmall: React.CSSProperties;
    hindi: React.CSSProperties;
    technical: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    displayLarge?: React.CSSProperties;
    displayMedium?: React.CSSProperties;
    displaySmall?: React.CSSProperties;
    hindi?: React.CSSProperties;
    technical?: React.CSSProperties;
  }
}

// Update Typography component props to include custom variants
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true;
    displayMedium: true;
    displaySmall: true;
    hindi: true;
    technical: true;
  }
}

// Digital India Color Palette
const digitalIndiaColors = {
  primary: {
    light: '#5E92F3',
    main: '#1565C0',
    dark: '#003C8F',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#FF9A66',
    main: '#FF6B35',
    dark: '#C73E02',
    contrastText: '#FFFFFF',
  },
  accent: {
    teal: '#00695C',
    saffron: '#FF9933',
    digital: '#F8FAFF',
  },
  success: {
    light: '#66BB6A',
    main: '#388E3C',
    dark: '#2E7D32',
    contrastText: '#FFFFFF',
  },
  warning: {
    light: '#FF9800',
    main: '#F57C00',
    dark: '#E65100',
    contrastText: '#FFFFFF',
  },
  error: {
    light: '#EF5350',
    main: '#D32F2F',
    dark: '#C62828',
    contrastText: '#FFFFFF',
  },
  info: {
    light: '#42A5F5',
    main: '#1976D2',
    dark: '#1565C0',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FAFAFA',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#BDBDBD',
  },
};

// Create base theme with typography
const baseTheme = createTheme({
  palette: digitalIndiaColors,
  typography: {
    ...digitalIndiaTypography,
    // Add custom variants
    displayLarge: {
      ...digitalIndiaTypography.displayLarge,
      '@media (max-width:1199px)': {
        fontSize: '3rem',
      },
      '@media (max-width:767px)': {
        fontSize: '2.25rem',
      },
    },
    displayMedium: {
      ...digitalIndiaTypography.displayMedium,
      '@media (max-width:1199px)': {
        fontSize: '2.25rem',
      },
      '@media (max-width:767px)': {
        fontSize: '1.75rem',
      },
    },
    displaySmall: {
      ...digitalIndiaTypography.displaySmall,
      '@media (max-width:1199px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:767px)': {
        fontSize: '1.5rem',
      },
    },
    hindi: multiLanguageTypography.hindi,
    technical: multiLanguageTypography.technical,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8, // 8px base unit for consistent spacing
});

// Enhanced theme with responsive typography
const digitalIndiaTheme = createTheme({
  ...baseTheme,
  typography: {
    ...baseTheme.typography,
    // Responsive adjustments for all variants
    h1: {
      ...baseTheme.typography.h1,
      '@media (max-width:1199px)': {
        fontSize: '1.75rem',
      },
      '@media (max-width:767px)': {
        fontSize: '1.5rem',
      },
    },
    h2: {
      ...baseTheme.typography.h2,
      '@media (max-width:1199px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:767px)': {
        fontSize: '1.25rem',
      },
    },
    h3: {
      ...baseTheme.typography.h3,
      '@media (max-width:1199px)': {
        fontSize: '1.25rem',
      },
      '@media (max-width:767px)': {
        fontSize: '1.125rem',
      },
    },
    h4: {
      ...baseTheme.typography.h4,
      '@media (max-width:1199px)': {
        fontSize: '1.125rem',
      },
      '@media (max-width:767px)': {
        fontSize: '1rem',
      },
    },
    h5: {
      ...baseTheme.typography.h5,
      '@media (max-width:1199px)': {
        fontSize: '1rem',
      },
      '@media (max-width:767px)': {
        fontSize: '1rem',
      },
    },
    h6: {
      ...baseTheme.typography.h6,
      '@media (max-width:767px)': {
        fontSize: '0.875rem',
      },
    },
    subtitle1: {
      ...baseTheme.typography.subtitle1,
      '@media (max-width:1199px)': {
        fontSize: '1rem',
      },
    },
  },
  components: {
    // Typography component overrides for better rendering
    MuiTypography: {
      styleOverrides: {
        root: {
          // Ensure proper text rendering
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
    // Button typography
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: fontFamilies.primary,
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: '0.025em',
          textTransform: 'none',
        },
      },
    },
    // Input field typography
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontFamily: fontFamilies.primary,
            fontSize: '1rem',
            lineHeight: 1.5,
          },
          '& .MuiInputLabel-root': {
            fontFamily: fontFamilies.primary,
            fontSize: '1rem',
            fontWeight: 400,
          },
          '& .MuiFormHelperText-root': {
            fontFamily: fontFamilies.primary,
            fontSize: '0.75rem',
            lineHeight: 1.4,
          },
        },
      },
    },
  },
});

export { fontFamilies, multiLanguageTypography };
export default digitalIndiaTheme;