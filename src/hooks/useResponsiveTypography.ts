/**
 * Responsive Typography Hooks
 * Custom hooks for responsive typography management
 */

import { useTheme, useMediaQuery } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';
import { useState, useEffect } from 'react';

// Hook for responsive typography variant selection
export const useResponsiveTypography = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const getVariant = (
    desktop: TypographyProps['variant'],
    tablet?: TypographyProps['variant'],
    mobile?: TypographyProps['variant']
  ): TypographyProps['variant'] => {
    if (isMobile && mobile) return mobile;
    if (isTablet && tablet) return tablet;
    return desktop;
  };

  const getDisplayVariant = (
    size: 'large' | 'medium' | 'small' = 'medium'
  ): TypographyProps['variant'] => {
    if (isMobile) {
      switch (size) {
        case 'large':
          return 'h1';
        case 'small':
          return 'h3';
        default:
          return 'h2';
      }
    }
    
    if (isTablet) {
      switch (size) {
        case 'large':
          return 'displayMedium' as TypographyProps['variant'];
        case 'small':
          return 'h1';
        default:
          return 'displaySmall' as TypographyProps['variant'];
      }
    }

    // Desktop
    switch (size) {
      case 'large':
        return 'displayLarge' as TypographyProps['variant'];
      case 'small':
        return 'displaySmall' as TypographyProps['variant'];
      default:
        return 'displayMedium' as TypographyProps['variant'];
    }
  };

  return {
    getVariant,
    getDisplayVariant,
    isMobile,
    isTablet,
    isDesktop,
    breakpoint: isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop',
  };
};

// Hook for font loading status
export const useFontLoading = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontLoadingError, setFontLoadingError] = useState<string | null>(null);

  useEffect(() => {
    const checkFonts = async () => {
      try {
        // Check if fonts are available
        const fonts = [
          'Inter',
          'Poppins',
          'Noto Sans Devanagari',
          'Fira Code',
        ];

        const fontChecks = fonts.map(async (font) => {
          if ('fonts' in document) {
            return document.fonts.check(`16px "${font}"`);
          }
          return true; // Fallback for browsers without font loading API
        });

        const results = await Promise.all(fontChecks);
        const allLoaded = results.every(Boolean);
        
        setFontsLoaded(allLoaded);
        
        if (!allLoaded) {
          console.warn('Some fonts failed to load, using fallbacks');
        }
      } catch (error) {
        console.error('Font loading check failed:', error);
        setFontLoadingError(error instanceof Error ? error.message : 'Unknown error');
        setFontsLoaded(true); // Continue with fallback fonts
      }
    };

    // Check fonts after a short delay to allow for loading
    const timer = setTimeout(checkFonts, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return { fontsLoaded, fontLoadingError };
};

// Hook for typography accessibility
export const useTypographyAccessibility = () => {
  const theme = useTheme();
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const prefersHighContrast = useMediaQuery('(prefers-contrast: high)');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const getAccessibleStyles = (baseStyles: React.CSSProperties = {}) => ({
    ...baseStyles,
    // High contrast adjustments
    ...(prefersHighContrast && {
      fontWeight: 600,
      textShadow: 'none',
      color: 'CanvasText',
      backgroundColor: 'Canvas',
    }),
    // Reduced motion adjustments
    ...(prefersReducedMotion && {
      transition: 'none',
      animation: 'none',
    }),
  });

  const getContrastRatio = (foreground: string, background: string): number => {
    // Simplified contrast ratio calculation
    // In a real implementation, you'd use a proper color contrast library
    const getLuminance = (color: string): number => {
      // This is a simplified version - use a proper color library in production
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;
      
      const [rs, gs, bs] = [r, g, b].map(c => 
        c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      );
      
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    };

    const l1 = getLuminance(foreground);
    const l2 = getLuminance(background);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    
    return (lighter + 0.05) / (darker + 0.05);
  };

  const isAccessibleContrast = (foreground: string, background: string, isLargeText = false): boolean => {
    const ratio = getContrastRatio(foreground, background);
    return isLargeText ? ratio >= 3 : ratio >= 4.5;
  };

  return {
    getAccessibleStyles,
    getContrastRatio,
    isAccessibleContrast,
    prefersReducedMotion,
    prefersHighContrast,
    prefersDarkMode,
  };
};

// Hook for multi-language typography
export const useMultiLanguageTypography = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'hi' | 'mixed'>('en');
  const [textDirection, setTextDirection] = useState<'ltr' | 'rtl'>('ltr');

  const getLanguageStyles = (language: 'en' | 'hi' | 'mixed' = currentLanguage) => {
    switch (language) {
      case 'hi':
        return {
          fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
          lineHeight: 1.8,
          letterSpacing: '0.01em',
          direction: 'ltr' as const,
        };
      case 'mixed':
        return {
          fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
          lineHeight: 1.7,
          letterSpacing: '0.005em',
          direction: 'ltr' as const,
        };
      default:
        return {
          fontFamily: 'Inter, Roboto, sans-serif',
          lineHeight: 1.6,
          letterSpacing: '0.015em',
          direction: 'ltr' as const,
        };
    }
  };

  const detectLanguage = (text: string): 'en' | 'hi' | 'mixed' => {
    const hindiRegex = /[\u0900-\u097F]/;
    const englishRegex = /[a-zA-Z]/;
    
    const hasHindi = hindiRegex.test(text);
    const hasEnglish = englishRegex.test(text);
    
    if (hasHindi && hasEnglish) return 'mixed';
    if (hasHindi) return 'hi';
    return 'en';
  };

  return {
    currentLanguage,
    setCurrentLanguage,
    textDirection,
    setTextDirection,
    getLanguageStyles,
    detectLanguage,
  };
};

export default {
  useResponsiveTypography,
  useFontLoading,
  useTypographyAccessibility,
  useMultiLanguageTypography,
};