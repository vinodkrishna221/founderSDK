/**
 * Digital India Typography Components
 * Reusable typography components with multi-language support
 */

import React from 'react';
import { Typography, TypographyProps, Box, BoxProps } from '@mui/material';
import { fontFamilies } from '../../theme/typography';

// Bilingual Typography Component
interface BilingualTypographyProps extends Omit<TypographyProps, 'children'> {
  hindi: string;
  english: string;
  hindiFirst?: boolean;
  separator?: string;
  hindiProps?: Partial<TypographyProps>;
  englishProps?: Partial<TypographyProps>;
}

export const BilingualTypography: React.FC<BilingualTypographyProps> = ({
  hindi,
  english,
  hindiFirst = true,
  separator = ' / ',
  hindiProps = {},
  englishProps = {},
  ...props
}) => {
  const hindiText = (
    <Box
      component="span"
      sx={{
        fontFamily: fontFamilies.hindi,
        lineHeight: 1.8,
        ...hindiProps.sx,
      }}
      {...hindiProps}
    >
      {hindi}
    </Box>
  );

  const englishText = (
    <Box
      component="span"
      sx={{
        fontFamily: fontFamilies.primary,
        ...englishProps.sx,
      }}
      {...englishProps}
    >
      {english}
    </Box>
  );

  return (
    <Typography {...props}>
      {hindiFirst ? (
        <>
          {hindiText}
          {separator}
          {englishText}
        </>
      ) : (
        <>
          {englishText}
          {separator}
          {hindiText}
        </>
      )}
    </Typography>
  );
};

// Hindi Typography Component
interface HindiTypographyProps extends TypographyProps {
  children: React.ReactNode;
}

export const HindiTypography: React.FC<HindiTypographyProps> = ({
  children,
  sx,
  ...props
}) => (
  <Typography
    {...props}
    lang="hi"
    sx={{
      fontFamily: fontFamilies.hindi,
      lineHeight: 1.8,
      letterSpacing: '0.01em',
      ...sx,
    }}
  >
    {children}
  </Typography>
);

// Technical Typography Component
interface TechnicalTypographyProps extends TypographyProps {
  children: React.ReactNode;
  inline?: boolean;
}

export const TechnicalTypography: React.FC<TechnicalTypographyProps> = ({
  children,
  inline = false,
  sx,
  ...props
}) => (
  <Typography
    {...props}
    component={inline ? 'code' : 'pre'}
    sx={{
      fontFamily: fontFamilies.monospace,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0em',
      backgroundColor: inline ? 'rgba(0, 0, 0, 0.04)' : '#F8F9FA',
      padding: inline ? '0.125em 0.25em' : '1rem',
      borderRadius: inline ? '4px' : '8px',
      border: inline ? 'none' : '1px solid #E9ECEF',
      overflow: inline ? 'visible' : 'auto',
      whiteSpace: inline ? 'nowrap' : 'pre',
      ...sx,
    }}
  >
    {children}
  </Typography>
);

// Display Typography Component for Hero Sections
interface DisplayTypographyProps extends TypographyProps {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
}

export const DisplayTypography: React.FC<DisplayTypographyProps> = ({
  children,
  size = 'medium',
  sx,
  ...props
}) => {
  const getVariant = () => {
    switch (size) {
      case 'large':
        return 'displayLarge' as const;
      case 'small':
        return 'displaySmall' as const;
      default:
        return 'displayMedium' as const;
    }
  };

  return (
    <Typography
      {...props}
      variant={getVariant()}
      sx={{
        fontFamily: fontFamilies.secondary,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

// Responsive Typography Component
interface ResponsiveTypographyProps extends TypographyProps {
  children: React.ReactNode;
  desktopVariant: TypographyProps['variant'];
  tabletVariant?: TypographyProps['variant'];
  mobileVariant?: TypographyProps['variant'];
}

export const ResponsiveTypography: React.FC<ResponsiveTypographyProps> = ({
  children,
  desktopVariant,
  tabletVariant,
  mobileVariant,
  sx,
  ...props
}) => (
  <Typography
    {...props}
    variant={desktopVariant}
    sx={{
      // Tablet override
      ...(tabletVariant && {
        '@media (max-width:1199px)': {
          fontSize: (theme) => theme.typography[tabletVariant]?.fontSize,
          fontWeight: (theme) => theme.typography[tabletVariant]?.fontWeight,
          lineHeight: (theme) => theme.typography[tabletVariant]?.lineHeight,
        },
      }),
      // Mobile override
      ...(mobileVariant && {
        '@media (max-width:767px)': {
          fontSize: (theme) => theme.typography[mobileVariant]?.fontSize,
          fontWeight: (theme) => theme.typography[mobileVariant]?.fontWeight,
          lineHeight: (theme) => theme.typography[mobileVariant]?.lineHeight,
        },
      }),
      ...sx,
    }}
  >
    {children}
  </Typography>
);

// Government Official Typography Component
interface GovernmentTypographyProps extends TypographyProps {
  children: React.ReactNode;
  official?: boolean;
}

export const GovernmentTypography: React.FC<GovernmentTypographyProps> = ({
  children,
  official = false,
  sx,
  ...props
}) => (
  <Typography
    {...props}
    sx={{
      fontFamily: fontFamilies.primary,
      ...(official && {
        color: '#00695C',
        fontWeight: 600,
        '&::before': {
          content: '"🏛️ "',
          marginRight: '0.5em',
        },
      }),
      ...sx,
    }}
  >
    {children}
  </Typography>
);

// Typography Scale Display Component (for documentation)
export const TypographyScale: React.FC = () => (
  <Box sx={{ p: 4, maxWidth: 800 }}>
    <Typography variant="h2" gutterBottom color="primary.main">
      Digital India Typography Scale
    </Typography>
    
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" gutterBottom>
        Display Typography
      </Typography>
      <DisplayTypography size="large" gutterBottom>
        Display Large - Hero Headlines
      </DisplayTypography>
      <DisplayTypography size="medium" gutterBottom>
        Display Medium - Page Titles
      </DisplayTypography>
      <DisplayTypography size="small" gutterBottom>
        Display Small - Section Headers
      </DisplayTypography>
    </Box>

    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" gutterBottom>
        Heading Typography
      </Typography>
      <Typography variant="h1" gutterBottom>
        H1 - Main Page Headings
      </Typography>
      <Typography variant="h2" gutterBottom>
        H2 - Section Headings
      </Typography>
      <Typography variant="h3" gutterBottom>
        H3 - Subsection Headings
      </Typography>
      <Typography variant="h4" gutterBottom>
        H4 - Component Headings
      </Typography>
      <Typography variant="h5" gutterBottom>
        H5 - Small Headings
      </Typography>
      <Typography variant="h6" gutterBottom>
        H6 - Micro Headings
      </Typography>
    </Box>

    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" gutterBottom>
        Body Typography
      </Typography>
      <Typography variant="body1" gutterBottom>
        Body 1 - Primary body text for articles and main content
      </Typography>
      <Typography variant="body2" gutterBottom>
        Body 2 - Secondary text for captions and metadata
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Subtitle 1 - Large supporting text
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Subtitle 2 - Medium supporting text
      </Typography>
    </Box>

    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" gutterBottom>
        Multi-Language Typography
      </Typography>
      <BilingualTypography
        hindi="नमस्ते, BuilderBase में आपका स्वागत है"
        english="Welcome to BuilderBase"
        variant="h4"
        gutterBottom
      />
      <HindiTypography variant="body1" gutterBottom>
        यह हिंदी टाइपोग्राफी का उदाहरण है जो देवनागरी स्क्रिप्ट के लिए अनुकूलित है।
      </HindiTypography>
      <TechnicalTypography inline>
        const example = "Technical typography";
      </TechnicalTypography>
    </Box>

    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" gutterBottom>
        Specialized Typography
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Caption - Fine print and labels
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        Overline - Category labels
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        Button - Interactive elements
      </Typography>
    </Box>
  </Box>
);

export default {
  BilingualTypography,
  HindiTypography,
  TechnicalTypography,
  DisplayTypography,
  ResponsiveTypography,
  GovernmentTypography,
  TypographyScale,
};