/**
 * Digital India Typography System
 * Complete multi-language typography system with Material-UI integration
 * Supports English, Hindi/Devanagari, and technical content
 */

import { TypographyOptions } from '@mui/material/styles/createTypography';

// Font Family Selections
export const fontFamilies = {
  // Primary font for English UI text, body content, and interface elements
  primary: [
    'Inter',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif'
  ].join(','),
  
  // Secondary font for headings, marketing content, and emphasis
  secondary: [
    'Poppins',
    'Inter',
    'Roboto',
    'sans-serif'
  ].join(','),
  
  // Hindi/Devanagari font stack with harmonious Latin fallbacks
  hindi: [
    'Noto Sans Devanagari',
    'Inter',
    'Roboto',
    'sans-serif'
  ].join(','),
  
  // Technical content and code blocks
  monospace: [
    'Fira Code',
    'Monaco',
    'Consolas',
    'Courier New',
    'monospace'
  ].join(','),
};

// Base typography scale (Desktop 1200px+)
export const typographyScale = {
  // Display Typography (Marketing & Hero Sections)
  displayLarge: {
    fontSize: '4rem',        // 64px
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
    fontFamily: fontFamilies.secondary,
  },
  
  displayMedium: {
    fontSize: '3rem',        // 48px
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.015em',
    fontFamily: fontFamilies.secondary,
  },
  
  displaySmall: {
    fontSize: '2.25rem',     // 36px
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    fontFamily: fontFamilies.secondary,
  },

  // Heading Typography (Content Hierarchy)
  h1: {
    fontSize: '2rem',        // 32px
    fontWeight: 700,
    lineHeight: 1.25,
    letterSpacing: '-0.01em',
    fontFamily: fontFamilies.primary,
  },
  
  h2: {
    fontSize: '1.75rem',     // 28px
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.005em',
    fontFamily: fontFamilies.primary,
  },
  
  h3: {
    fontSize: '1.5rem',      // 24px
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '0em',
    fontFamily: fontFamilies.primary,
  },
  
  h4: {
    fontSize: '1.25rem',     // 20px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.005em',
    fontFamily: fontFamilies.primary,
  },
  
  h5: {
    fontSize: '1.125rem',    // 18px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
    fontFamily: fontFamilies.primary,
  },
  
  h6: {
    fontSize: '1rem',        // 16px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.015em',
    fontFamily: fontFamilies.primary,
  },

  // Body Typography (Content & Interface)
  body1: {
    fontSize: '1rem',        // 16px
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.015em',
    fontFamily: fontFamilies.primary,
  },
  
  body2: {
    fontSize: '0.875rem',    // 14px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.02em',
    fontFamily: fontFamilies.primary,
  },
  
  // Specialized Typography
  subtitle1: {
    fontSize: '1.125rem',    // 18px
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0.01em',
    fontFamily: fontFamilies.primary,
  },
  
  subtitle2: {
    fontSize: '1rem',        // 16px
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.015em',
    fontFamily: fontFamilies.primary,
  },
  
  caption: {
    fontSize: '0.75rem',     // 12px
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: '0.03em',
    fontFamily: fontFamilies.primary,
  },
  
  overline: {
    fontSize: '0.75rem',     // 12px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
    fontFamily: fontFamilies.primary,
  },
  
  button: {
    fontSize: '0.875rem',    // 14px
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '0.025em',
    textTransform: 'none' as const,
    fontFamily: fontFamilies.primary,
  },
};

// Responsive typography scale adjustments
export const responsiveTypography = {
  // Tablet (768px - 1199px)
  tablet: {
    displayLarge: { fontSize: '3rem' },      // 75% of desktop
    displayMedium: { fontSize: '2.25rem' },  // 75% of desktop
    displaySmall: { fontSize: '1.75rem' },   // 78% of desktop
    h1: { fontSize: '1.75rem' },             // 87.5% of desktop
    h2: { fontSize: '1.5rem' },              // 86% of desktop
    h3: { fontSize: '1.25rem' },             // 83% of desktop
    h4: { fontSize: '1.125rem' },            // 90% of desktop
    h5: { fontSize: '1rem' },                // 89% of desktop
    h6: { fontSize: '1rem' },                // 100% of desktop
    subtitle1: { fontSize: '1rem' },         // 89% of desktop
    body1: { fontSize: '1rem' },             // 100% of desktop
    body2: { fontSize: '0.875rem' },         // 100% of desktop
  },
  
  // Mobile (320px - 767px)
  mobile: {
    displayLarge: { fontSize: '2.25rem' },   // 56% of desktop
    displayMedium: { fontSize: '1.75rem' },  // 58% of desktop
    displaySmall: { fontSize: '1.5rem' },    // 67% of desktop
    h1: { fontSize: '1.5rem' },              // 75% of desktop
    h2: { fontSize: '1.25rem' },             // 71% of desktop
    h3: { fontSize: '1.125rem' },            // 75% of desktop
    h4: { fontSize: '1rem' },                // 80% of desktop
    h5: { fontSize: '1rem' },                // 89% of desktop
    h6: { fontSize: '0.875rem' },            // 87.5% of desktop
    subtitle1: { fontSize: '1rem' },         // 89% of desktop
    body1: { fontSize: '1rem' },             // 100% of desktop
    body2: { fontSize: '0.875rem' },         // 100% of desktop
  },
};

// Multi-language typography variants
export const multiLanguageTypography = {
  // Hindi/Devanagari typography with increased line height
  hindi: {
    fontSize: '1rem',        // 16px
    fontWeight: 400,
    lineHeight: 1.8,         // Increased for Devanagari script
    letterSpacing: '0.01em', // Minimal for script integrity
    fontFamily: fontFamilies.hindi,
  },
  
  // Technical content typography
  technical: {
    fontSize: '0.875rem',    // 14px
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacing: '0em',
    fontFamily: fontFamilies.monospace,
  },
};

// Complete Material-UI Typography Configuration
export const digitalIndiaTypography: TypographyOptions = {
  fontFamily: fontFamilies.primary,
  ...typographyScale,
};

export default digitalIndiaTypography;