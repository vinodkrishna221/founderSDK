# Digital India Typography System - Complete Multi-Language Support

## Font Family Selections

### Primary Font Stack (English Content)
- **Inter** - Primary font for UI text, body content, and interface elements
  - Excellent legibility across all sizes
  - Wide character support including Indian English variations
  - Optimized for digital screens and mobile devices
  - Available weights: 300, 400, 500, 600, 700, 800

### Secondary Font Stack (Headings & Display)
- **Poppins** - Secondary font for headings, marketing content, and emphasis
  - Friendly, approachable character for user-facing content
  - Strong geometric foundation with Indian design sensibilities
  - Excellent for large display text and call-to-action elements
  - Available weights: 300, 400, 500, 600, 700, 800

### Hindi/Devanagari Font Stack
- **Noto Sans Devanagari** - Primary font for Hindi and Devanagari script
  - Designed specifically for optimal Devanagari rendering
  - Harmonious pairing with Latin fonts
  - Comprehensive character coverage for Hindi, Marathi, Nepali
  - Available weights: 400, 500, 600, 700

### Technical Content Font Stack
- **Fira Code** - Monospace font for code, technical documentation
  - Programming ligatures for enhanced code readability
  - Clear distinction between similar characters (0/O, 1/l/I)
  - Optimized for technical content and API documentation
  - Available weights: 300, 400, 500, 600, 700

### Fallback Font Stack
```css
font-family: 'Inter', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
font-family: 'Poppins', 'Inter', 'Roboto', sans-serif;
font-family: 'Noto Sans Devanagari', 'Inter', 'Roboto', sans-serif;
font-family: 'Fira Code', 'Monaco', 'Consolas', 'Courier New', monospace;
```

## Comprehensive Typography Scale

### Base Typography Scale (Desktop 1200px+)###
# Display Typography (Marketing & Hero Sections)
- **Display Large**: 64px / 4rem - Hero headlines, major announcements
  - Font: Poppins 700, Line Height: 1.1, Letter Spacing: -0.02em
  - Usage: Landing page heroes, major section headers
  
- **Display Medium**: 48px / 3rem - Page titles, section headers
  - Font: Poppins 700, Line Height: 1.2, Letter Spacing: -0.015em
  - Usage: Page titles, major feature announcements

- **Display Small**: 36px / 2.25rem - Subsection headers
  - Font: Poppins 600, Line Height: 1.3, Letter Spacing: -0.01em
  - Usage: Card titles, modal headers, dashboard sections

#### Heading Typography (Content Hierarchy)
- **H1**: 32px / 2rem - Main page headings
  - Font: Inter 700, Line Height: 1.25, Letter Spacing: -0.01em
  - Usage: Article titles, main content headers

- **H2**: 28px / 1.75rem - Section headings
  - Font: Inter 600, Line Height: 1.3, Letter Spacing: -0.005em
  - Usage: Content sections, feature descriptions

- **H3**: 24px / 1.5rem - Subsection headings
  - Font: Inter 600, Line Height: 1.4, Letter Spacing: 0em
  - Usage: Card titles, form sections, list headers

- **H4**: 20px / 1.25rem - Component headings
  - Font: Inter 500, Line Height: 1.4, Letter Spacing: 0.005em
  - Usage: Component titles, sidebar headers

- **H5**: 18px / 1.125rem - Small headings
  - Font: Inter 500, Line Height: 1.5, Letter Spacing: 0.01em
  - Usage: Table headers, small component titles

- **H6**: 16px / 1rem - Micro headings
  - Font: Inter 500, Line Height: 1.5, Letter Spacing: 0.015em
  - Usage: Form labels, metadata headers

#### Body Typography (Content & Interface)
- **Body Large**: 18px / 1.125rem - Primary body text
  - Font: Inter 400, Line Height: 1.6, Letter Spacing: 0.01em
  - Usage: Article content, important descriptions

- **Body Medium**: 16px / 1rem - Standard body text
  - Font: Inter 400, Line Height: 1.6, Letter Spacing: 0.015em
  - Usage: General content, form inputs, navigation

- **Body Small**: 14px / 0.875rem - Secondary text
  - Font: Inter 400, Line Height: 1.5, Letter Spacing: 0.02em
  - Usage: Captions, metadata, helper text

#### Specialized Typography
- **Caption**: 12px / 0.75rem - Fine print and labels
  - Font: Inter 400, Line Height: 1.4, Letter Spacing: 0.03em
  - Usage: Image captions, timestamps, legal text

- **Overline**: 12px / 0.75rem - Category labels
  - Font: Inter 500, Line Height: 1.4, Letter Spacing: 0.08em, Uppercase
  - Usage: Category tags, section labels, breadcrumbs

- **Button Text**: 14px / 0.875rem - Interactive elements
  - Font: Inter 500, Line Height: 1.4, Letter Spacing: 0.025em
  - Usage: Button labels, link text, call-to-action text#
## Responsive Typography Scale

#### Tablet (768px - 1199px)
- **Display Large**: 48px / 3rem (75% of desktop)
- **Display Medium**: 36px / 2.25rem (75% of desktop)
- **Display Small**: 28px / 1.75rem (78% of desktop)
- **H1**: 28px / 1.75rem (87.5% of desktop)
- **H2**: 24px / 1.5rem (86% of desktop)
- **H3**: 20px / 1.25rem (83% of desktop)
- **H4**: 18px / 1.125rem (90% of desktop)
- **H5**: 16px / 1rem (89% of desktop)
- **H6**: 16px / 1rem (100% of desktop)
- **Body Large**: 16px / 1rem (89% of desktop)
- **Body Medium**: 16px / 1rem (100% of desktop)
- **Body Small**: 14px / 0.875rem (100% of desktop)

#### Mobile (320px - 767px)
- **Display Large**: 36px / 2.25rem (56% of desktop)
- **Display Medium**: 28px / 1.75rem (58% of desktop)
- **Display Small**: 24px / 1.5rem (67% of desktop)
- **H1**: 24px / 1.5rem (75% of desktop)
- **H2**: 20px / 1.25rem (71% of desktop)
- **H3**: 18px / 1.125rem (75% of desktop)
- **H4**: 16px / 1rem (80% of desktop)
- **H5**: 16px / 1rem (89% of desktop)
- **H6**: 14px / 0.875rem (87.5% of desktop)
- **Body Large**: 16px / 1rem (89% of desktop)
- **Body Medium**: 16px / 1rem (100% of desktop)
- **Body Small**: 14px / 0.875rem (100% of desktop)

## Font Weights, Line Heights, and Letter Spacing

### Font Weight Guidelines
- **300 (Light)**: Reserved for large display text where elegance is needed
- **400 (Regular)**: Primary weight for body text and general content
- **500 (Medium)**: Emphasis within body text, button labels, form labels
- **600 (Semi-Bold)**: Headings, important UI elements, navigation
- **700 (Bold)**: Major headings, hero text, strong emphasis
- **800 (Extra-Bold)**: Reserved for brand elements and special emphasis

### Line Height Guidelines
- **Display Text (1.1-1.3)**: Tight line height for impact and readability
- **Headings (1.25-1.5)**: Balanced spacing for hierarchy and readability
- **Body Text (1.5-1.6)**: Comfortable reading with adequate white space
- **UI Elements (1.4-1.5)**: Compact spacing for interface efficiency
- **Devanagari Text (1.6-1.8)**: Extra spacing for complex script rendering

### Letter Spacing Guidelines
- **Large Text (-0.02em to -0.005em)**: Tighter spacing for better visual cohesion
- **Body Text (0em to 0.02em)**: Neutral to slightly open for readability
- **Small Text (0.02em to 0.08em)**: More open spacing for legibility
- **Uppercase Text (0.05em to 0.1em)**: Increased spacing for all-caps text
- **Devanagari Text (0em to 0.01em)**: Minimal adjustment to preserve script integrity##
 Material-UI Typography Variant Mappings

### Complete Material-UI Theme Configuration

```typescript
import { createTheme } from '@mui/material/styles';

const digitalIndiaTypographyTheme = createTheme({
  typography: {
    // Font family configuration
    fontFamily: [
      'Inter',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif'
    ].join(','),
    
    // Display variants (custom)
    displayLarge: {
      fontFamily: 'Poppins, Inter, sans-serif',
      fontSize: '4rem',        // 64px
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:1199px)': {
        fontSize: '3rem',      // 48px tablet
      },
      '@media (max-width:767px)': {
        fontSize: '2.25rem',   // 36px mobile
      },
    },
    
    displayMedium: {
      fontFamily: 'Poppins, Inter, sans-serif',
      fontSize: '3rem',        // 48px
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      '@media (max-width:1199px)': {
        fontSize: '2.25rem',   // 36px tablet
      },
      '@media (max-width:767px)': {
        fontSize: '1.75rem',   // 28px mobile
      },
    },
    
    displaySmall: {
      fontFamily: 'Poppins, Inter, sans-serif',
      fontSize: '2.25rem',    // 36px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:1199px)': {
        fontSize: '1.75rem',   // 28px tablet
      },
      '@media (max-width:767px)': {
        fontSize: '1.5rem',    // 24px mobile
      },
    },

    // Standard Material-UI variants
    h1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '2rem',        // 32px
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      '@media (max-width:1199px)': {
        fontSize: '1.75rem',   // 28px tablet
      },
      '@media (max-width:767px)': {
        fontSize: '1.5rem',    // 24px mobile
      },
    },
    
    h2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.75rem',    // 28px
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.005em',
      '@media (max-width:1199px)': {
        fontSize: '1.5rem',    // 24px tablet
      },
      '@media (max-width:767px)': {
        fontSize: '1.25rem',   // 20px mobile
      },
    },
    
    h3: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.5rem',     // 24px
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '0em',
      '@media (max-width:1199px)': {
        fontSize: '1.25rem',   // 20px tablet
      },
      '@media (max-width:767px)': {
        fontSize: '1.125rem',  // 18px mobile
      },
    },
    
    h4: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.25rem',    // 20px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.005em',
      '@media (max-width:1199px)': {
        fontSize: '1.125rem',  // 18px tablet
      },
      '@media (max-width:767px)': {
        fontSize: '1rem',      // 16px mobile
      },
    },
    
    h5: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.125rem',   // 18px
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.01em',
      '@media (max-width:1199px)': {
        fontSize: '1rem',      // 16px tablet
      },
      '@media (max-width:767px)': {
        fontSize: '1rem',      // 16px mobile
      },
    },
    
    h6: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',       // 16px
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.015em',
      '@media (max-width:767px)': {
        fontSize: '0.875rem',  // 14px mobile
      },
    }, 
   // Body text variants
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',       // 16px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.015em',
    },
    
    body2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.875rem',   // 14px
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.02em',
    },
    
    // Specialized variants
    subtitle1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.125rem',   // 18px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    
    subtitle2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',       // 16px
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.015em',
    },
    
    caption: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.75rem',    // 12px
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '0.03em',
    },
    
    overline: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.75rem',    // 12px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    
    button: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.875rem',   // 14px
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.025em',
      textTransform: 'none',   // Preserve original case
    },
  },
});

// Custom typography variants for Digital India theme
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

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true;
    displayMedium: true;
    displaySmall: true;
    hindi: true;
    technical: true;
  }
}

// Extended theme with custom variants
const extendedDigitalIndiaTheme = createTheme({
  ...digitalIndiaTypographyTheme,
  typography: {
    ...digitalIndiaTypographyTheme.typography,
    
    // Hindi/Devanagari typography
    hindi: {
      fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
      fontSize: '1rem',       // 16px
      fontWeight: 400,
      lineHeight: 1.8,        // Increased for Devanagari script
      letterSpacing: '0.01em',
    },
    
    // Technical content typography
    technical: {
      fontFamily: 'Fira Code, Monaco, Consolas, Courier New, monospace',
      fontSize: '0.875rem',   // 14px
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0em',
    },
  },
});

export default extendedDigitalIndiaTheme;
```## Typogra
phy Hierarchy Guidelines

### Information Architecture Hierarchy

#### Level 1: Page Identity
- **Display Large/Medium**: Landing page heroes, major announcements
- **Usage**: Once per page, establishes primary context
- **Color**: Deep Blue (#1565C0) for trust and authority
- **Examples**: "India's Complete Digital Startup Playbook"

#### Level 2: Section Identity  
- **Display Small/H1**: Major page sections, feature areas
- **Usage**: 2-3 times per page, creates content sections
- **Color**: Deep Blue (#1565C0) or Digital India Orange (#FF6B35)
- **Examples**: "Government Schemes", "Learning Paths", "Founder's Toolkit"

#### Level 3: Content Organization
- **H2/H3**: Content subsections, card titles, modal headers
- **Usage**: Multiple times per section, organizes related content
- **Color**: Primary Text (#212121) with occasional accent colors
- **Examples**: "Company Registration Process", "GST Compliance Guide"

#### Level 4: Component Structure
- **H4/H5/H6**: Form sections, list headers, component titles
- **Usage**: Within components and forms, creates micro-hierarchy
- **Color**: Primary Text (#212121) or Secondary Text (#757575)
- **Examples**: "Personal Information", "Business Details", "Contact Info"

#### Level 5: Content Body
- **Body1/Body2**: Paragraph text, descriptions, explanations
- **Usage**: Main content consumption, detailed information
- **Color**: Primary Text (#212121) for main content, Secondary Text (#757575) for supporting
- **Examples**: Article content, form descriptions, help text

#### Level 6: Metadata & Labels
- **Caption/Overline**: Timestamps, categories, fine print
- **Usage**: Supporting information, categorization, legal text
- **Color**: Secondary Text (#757575) or Disabled Text (#BDBDBD)
- **Examples**: "Last updated", "Required field", "Terms and conditions"

### Usage Examples by Context

#### Landing Page Typography
```typescript
// Hero section
<Typography variant="displayLarge" color="#1565C0">
  India's Complete Digital Startup Playbook
</Typography>

// Hero subtitle
<Typography variant="subtitle1" color="text.secondary">
  Navigate Indian regulations, access government schemes, and build your startup
</Typography>

// Feature section header
<Typography variant="displaySmall" color="#1565C0">
  Everything you need to build your startup in India
</Typography>

// Feature card title
<Typography variant="h3" color="text.primary">
  Government Scheme Locator
</Typography>

// Feature description
<Typography variant="body1" color="text.secondary">
  Find and apply for funding schemes from Central and State governments
</Typography>
```

#### Dashboard Typography
```typescript
// Dashboard welcome
<Typography variant="h1" color="#1565C0">
  Welcome back, Priya!
</Typography>

// Section headers
<Typography variant="h2" color="text.primary">
  Your Progress
</Typography>

// Card titles
<Typography variant="h4" color="text.primary">
  Startup Registration Tracker
</Typography>

// Status text
<Typography variant="body2" color="text.secondary">
  3 of 5 steps completed
</Typography>

// Metadata
<Typography variant="caption" color="text.secondary">
  Last updated 2 hours ago
</Typography>
```

#### Form Typography
```typescript
// Form title
<Typography variant="h2" color="text.primary">
  Company Registration Details
</Typography>

// Section headers
<Typography variant="h4" color="text.primary">
  Business Information
</Typography>

// Field labels (using Material-UI InputLabel)
<InputLabel sx={{ typography: 'subtitle2' }}>
  Company Name
</InputLabel>

// Helper text
<Typography variant="caption" color="text.secondary">
  Choose a unique name for your startup
</Typography>

// Error text
<Typography variant="caption" color="error.main">
  Company name is required
</Typography>
```#
# Multi-Language Text Styling Guidelines

### Hindi/Devanagari Script Specifications

#### Font Selection for Hindi Content
- **Primary**: Noto Sans Devanagari - Optimized for digital screens
- **Fallback**: System Devanagari fonts (Mangal, Kokila, Aparajita)
- **Web Font Loading**: Preload Noto Sans Devanagari for critical Hindi content

#### Hindi Typography Adjustments
- **Line Height**: 1.8x (increased from 1.6x for Latin) for proper Devanagari rendering
- **Letter Spacing**: Minimal (0em to 0.01em) to preserve script integrity
- **Font Weight**: Regular (400) for body text, Medium (500) for emphasis
- **Baseline Alignment**: Careful attention to mixed-script baseline alignment

#### Hindi Text Implementation
```typescript
// Hindi-specific typography variant
const hindiTypography = {
  fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.8,        // Increased for Devanagari
  letterSpacing: '0.01em',
};

// Usage in components
<Typography 
  variant="hindi" 
  sx={{ 
    fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
    lineHeight: 1.8 
  }}
>
  आपकी उद्यमिता यात्रा यहाँ से शुरू होती है
</Typography>
```

### Script Mixing Guidelines

#### Bilingual Text Patterns
1. **Hindi First, English Second**: `नमस्ते / Welcome`
2. **English First, Hindi Second**: `Welcome / नमस्ते`
3. **Contextual Mixing**: Use appropriate script for primary audience

#### Mixed Script Typography
```typescript
// Bilingual heading component
const BilingualHeading = ({ hindi, english, variant = "h2" }) => (
  <Box>
    <Typography 
      variant={variant}
      sx={{ 
        fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
        lineHeight: 1.8,
        mb: 0.5
      }}
    >
      {hindi}
    </Typography>
    <Typography 
      variant={variant}
      color="text.secondary"
      sx={{ 
        fontFamily: 'Inter, sans-serif',
        lineHeight: 1.4,
        fontSize: '0.9em' // Slightly smaller for secondary language
      }}
    >
      {english}
    </Typography>
  </Box>
);

// Usage
<BilingualHeading 
  hindi="सरकारी योजनाएं" 
  english="Government Schemes"
  variant="h2"
/>
```

#### Inline Script Mixing
```typescript
// Mixed script in single line
<Typography variant="body1">
  <Box component="span" sx={{ fontFamily: 'Noto Sans Devanagari, Inter, sans-serif' }}>
    कंपनी का नाम
  </Box>
  {' / '}
  <Box component="span" sx={{ fontFamily: 'Inter, sans-serif' }}>
    Company Name
  </Box>
</Typography>
```

### Technical Content Typography

#### Code and Technical Documentation
```typescript
// Technical content styling
const technicalTypography = {
  fontFamily: 'Fira Code, Monaco, Consolas, Courier New, monospace',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: '0em',
  backgroundColor: '#F5F5F5',
  padding: '0.25em 0.5em',
  borderRadius: '4px',
};

// Inline code
<Typography variant="body1">
  Use the{' '}
  <Box component="code" sx={technicalTypography}>
    gstin
  </Box>
  {' '}parameter for GST validation
</Typography>

// Code blocks
<Box 
  component="pre" 
  sx={{
    ...technicalTypography,
    display: 'block',
    padding: '1rem',
    overflow: 'auto',
    backgroundColor: '#F8F9FA',
    border: '1px solid #E9ECEF',
  }}
>
  <code>
    {`const gstNumber = "22AAAAA0000A1Z5";
const isValid = validateGST(gstNumber);`}
  </code>
</Box>
```

### Accessibility Considerations for Multi-Language Typography

#### Screen Reader Support
```typescript
// Language attribute for proper pronunciation
<Typography 
  variant="hindi"
  lang="hi"
  sx={{ fontFamily: 'Noto Sans Devanagari, Inter, sans-serif' }}
>
  आपका स्वागत है
</Typography>

<Typography 
  variant="body1"
  lang="en"
  sx={{ fontFamily: 'Inter, sans-serif' }}
>
  Welcome to BuilderBase
</Typography>
```

#### Font Loading Strategy
```css
/* Preload critical fonts */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-display: swap;
  font-weight: 300 800;
}

@font-face {
  font-family: 'Noto Sans Devanagari';
  src: url('/fonts/noto-sans-devanagari.woff2') format('woff2');
  font-display: swap;
  font-weight: 400 700;
}

@font-face {
  font-family: 'Poppins';
  src: url('/fonts/poppins-var.woff2') format('woff2');
  font-display: swap;
  font-weight: 300 800;
}
```

#### Performance Optimization
- **Font Subsetting**: Include only required character sets for each language
- **Progressive Enhancement**: Load Hindi fonts after critical Latin fonts
- **Fallback Strategy**: Ensure readable fallbacks for all scripts
- **Caching Strategy**: Long-term caching for font files with proper versioning#
# Implementation Examples

### Complete Material-UI Typography Setup

#### 1. Theme Provider Setup
```typescript
// theme/typography.ts
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const digitalIndiaTheme = createTheme({
  typography: {
    // Base configuration
    fontFamily: 'Inter, Roboto, Helvetica Neue, Arial, sans-serif',
    
    // Custom variants
    displayLarge: {
      fontFamily: 'Poppins, Inter, sans-serif',
      fontSize: '4rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:1199px)': { fontSize: '3rem' },
      '@media (max-width:767px)': { fontSize: '2.25rem' },
    },
    
    // Hindi variant
    hindi: {
      fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.8,
      letterSpacing: '0.01em',
    },
    
    // Technical variant
    technical: {
      fontFamily: 'Fira Code, Monaco, Consolas, monospace',
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: '0em',
    },
  },
});

// App.tsx
function App() {
  return (
    <ThemeProvider theme={digitalIndiaTheme}>
      <CssBaseline />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

#### 2. Component Usage Examples
```typescript
// Landing page hero
const LandingHero = () => (
  <Box sx={{ textAlign: 'center', py: 8 }}>
    <Typography variant="displayLarge" color="#1565C0" gutterBottom>
      India's Complete Digital Startup Playbook
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" maxWidth={600} mx="auto">
      Navigate Indian regulations, access government schemes, and build your startup 
      with AI-powered guidance tailored for the Indian ecosystem.
    </Typography>
  </Box>
);

// Bilingual section header
const BilingualSection = () => (
  <Box sx={{ mb: 4 }}>
    <Typography 
      variant="h2" 
      sx={{ 
        fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
        lineHeight: 1.8,
        mb: 1
      }}
    >
      सरकारी योजनाएं
    </Typography>
    <Typography variant="h2" color="text.secondary">
      Government Schemes
    </Typography>
  </Box>
);

// Technical documentation
const TechnicalDoc = () => (
  <Box>
    <Typography variant="h3" gutterBottom>
      API Integration Guide
    </Typography>
    <Typography variant="body1" paragraph>
      Use the following endpoint to validate GST numbers:
    </Typography>
    <Typography 
      variant="technical"
      component="pre"
      sx={{
        backgroundColor: '#F8F9FA',
        p: 2,
        borderRadius: 1,
        border: '1px solid #E9ECEF',
        overflow: 'auto'
      }}
    >
      {`POST /api/validate-gst
Content-Type: application/json

{
  "gstin": "22AAAAA0000A1Z5"
}`}
    </Typography>
  </Box>
);
```

#### 3. Form Typography Implementation
```typescript
// Government form with bilingual labels
const GovernmentForm = () => (
  <Box component="form" sx={{ maxWidth: 600, mx: 'auto' }}>
    <Typography variant="h2" color="#1565C0" gutterBottom>
      Company Registration Form
    </Typography>
    
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" gutterBottom>
        Business Information
      </Typography>
      
      <TextField
        fullWidth
        label="कंपनी का नाम / Company Name"
        helperText="Choose a unique name for your startup"
        sx={{
          '& .MuiInputLabel-root': {
            fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
          },
        }}
      />
    </Box>
    
    <Box sx={{ mb: 3 }}>
      <TextField
        fullWidth
        label="GST Number"
        placeholder="22AAAAA0000A1Z5"
        helperText="Enter your 15-digit GST identification number"
        InputProps={{
          sx: {
            fontFamily: 'Fira Code, monospace',
            letterSpacing: '0.05em',
          },
        }}
      />
    </Box>
  </Box>
);
```

#### 4. Responsive Typography Hook
```typescript
// Custom hook for responsive typography
import { useTheme, useMediaQuery } from '@mui/material';

const useResponsiveTypography = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  
  const getVariant = (desktop: string, tablet?: string, mobile?: string) => {
    if (isMobile && mobile) return mobile;
    if (isTablet && tablet) return tablet;
    return desktop;
  };
  
  return { getVariant, isMobile, isTablet };
};

// Usage in components
const ResponsiveHeading = ({ children }) => {
  const { getVariant } = useResponsiveTypography();
  
  return (
    <Typography 
      variant={getVariant('displayLarge', 'displayMedium', 'h1')}
      color="#1565C0"
    >
      {children}
    </Typography>
  );
};
```

This comprehensive typography system provides complete multi-language support with proper Material-UI integration, responsive scaling, and cultural sensitivity for the Digital India theme. The system ensures consistent, accessible, and beautiful typography across all devices and languages while maintaining the professional and trustworthy aesthetic required for the BuilderBase platform.