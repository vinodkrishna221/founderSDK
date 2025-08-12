# Digital India Typography System - Implementation Guidelines

## Overview

The Digital India Typography System provides comprehensive multi-language support for English, Hindi/Devanagari, and technical content with responsive design and accessibility features.

## Font Family Hierarchy

### 1. Primary Font Stack (English Content)
- **Inter** - Primary font for UI text, body content, and interface elements
- **Usage**: Body text, navigation, forms, buttons, general UI
- **Characteristics**: Excellent legibility, wide character support, optimized for screens
- **Weights Available**: 300, 400, 500, 600, 700, 800

### 2. Secondary Font Stack (Display & Marketing)
- **Poppins** - Secondary font for headings, marketing content, and emphasis
- **Usage**: Hero headlines, section headers, marketing copy, call-to-action elements
- **Characteristics**: Friendly, geometric, strong visual impact
- **Weights Available**: 300, 400, 500, 600, 700, 800

### 3. Hindi/Devanagari Font Stack
- **Noto Sans Devanagari** - Primary font for Hindi and Devanagari script
- **Usage**: Hindi content, bilingual labels, cultural elements
- **Characteristics**: Optimized Devanagari rendering, harmonious with Latin fonts
- **Weights Available**: 400, 500, 600, 700

### 4. Technical Content Font Stack
- **Fira Code** - Monospace font for code and technical documentation
- **Usage**: Code blocks, API documentation, technical specifications
- **Characteristics**: Programming ligatures, clear character distinction
- **Weights Available**: 400, 500

## Typography Scale Implementation

### Display Typography (Hero Sections)
```typescript
// Large hero headlines
<Typography variant="displayLarge" sx={{ color: '#1565C0' }}>
  India's Complete Digital Startup Playbook
</Typography>

// Medium page titles
<Typography variant="displayMedium" sx={{ color: '#1565C0' }}>
  Government Schemes & Policies
</Typography>

// Small section headers
<Typography variant="displaySmall" sx={{ color: '#1565C0' }}>
  Everything you need to build your startup
</Typography>
```

### Heading Hierarchy
```typescript
// Main page headings
<Typography variant="h1" color="text.primary">
  Welcome to BuilderBase
</Typography>

// Section headings
<Typography variant="h2" color="text.primary">
  Your Progress
</Typography>

// Subsection headings
<Typography variant="h3" color="text.primary">
  Startup Registration Tracker
</Typography>

// Component headings
<Typography variant="h4" color="text.primary">
  Business Information
</Typography>

// Small headings
<Typography variant="h5" color="text.primary">
  Contact Details
</Typography>

// Micro headings
<Typography variant="h6" color="text.primary">
  Additional Notes
</Typography>
```

### Body Typography
```typescript
// Primary body text
<Typography variant="body1" color="text.primary">
  Complete guide to registering your company in India with real examples.
</Typography>

// Secondary body text
<Typography variant="body2" color="text.secondary">
  Last updated 2 hours ago
</Typography>

// Large supporting text
<Typography variant="subtitle1" color="text.secondary">
  Navigate Indian regulations with confidence
</Typography>

// Medium supporting text
<Typography variant="subtitle2" color="text.primary">
  Step-by-step guidance
</Typography>
```

## Multi-Language Implementation

### Bilingual Typography
```typescript
import { BilingualTypography } from '@/components/typography/TypographyComponents';

// Hindi first, then English
<BilingualTypography
  hindi="सरकारी योजनाएं"
  english="Government Schemes"
  variant="h2"
  hindiFirst={true}
  separator=" / "
/>

// English first, then Hindi
<BilingualTypography
  hindi="नमस्ते"
  english="Welcome"
  variant="h3"
  hindiFirst={false}
  separator=" | "
/>
```

### Pure Hindi Content
```typescript
import { HindiTypography } from '@/components/typography/TypographyComponents';

<HindiTypography variant="h4" gutterBottom>
  BuilderBase में आपका स्वागत है
</HindiTypography>

<HindiTypography variant="body1" paragraph>
  यह प्लेटफॉर्म भारतीय उद्यमियों के लिए विशेष रूप से डिज़ाइन किया गया है।
</HindiTypography>
```

### Script Mixing Guidelines
```typescript
// Inline script mixing
<Typography variant="body1">
  <Box component="span" sx={{ fontFamily: 'Noto Sans Devanagari, Inter, sans-serif' }}>
    कंपनी का नाम
  </Box>
  {' / '}
  <Box component="span" sx={{ fontFamily: 'Inter, sans-serif' }}>
    Company Name
  </Box>
</Typography>

// Form labels with bilingual support
<TextField
  label="कंपनी का नाम / Company Name"
  sx={{
    '& .MuiInputLabel-root': {
      fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
    },
  }}
/>
```

## Technical Content Typography

### Inline Code
```typescript
import { TechnicalTypography } from '@/components/typography/TypographyComponents';

<Typography variant="body1">
  Use the{' '}
  <TechnicalTypography inline>
    validateGST()
  </TechnicalTypography>
  {' '}function to validate GST numbers.
</Typography>
```

### Code Blocks
```typescript
<TechnicalTypography>
{`const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

function validateGSTNumber(gstin: string): boolean {
  return gstRegex.test(gstin);
}

// Usage
const isValid = validateGSTNumber("22AAAAA0000A1Z5");`}
</TechnicalTypography>
```

## Responsive Typography Usage

### Responsive Variant Selection
```typescript
import { useResponsiveTypography } from '@/hooks/useResponsiveTypography';

const ResponsiveHeading = ({ children }) => {
  const { getVariant } = useResponsiveTypography();
  
  return (
    <Typography 
      variant={getVariant('h1', 'h2', 'h3')}
      color="#1565C0"
    >
      {children}
    </Typography>
  );
};
```

### Display Typography Responsive
```typescript
import { ResponsiveTypography } from '@/components/typography/TypographyComponents';

<ResponsiveTypography
  desktopVariant="displayLarge"
  tabletVariant="displayMedium"
  mobileVariant="h1"
  sx={{ color: '#1565C0' }}
>
  Hero Headline
</ResponsiveTypography>
```

## Government Content Typography

### Official Government Styling
```typescript
import { GovernmentTypography } from '@/components/typography/TypographyComponents';

<GovernmentTypography variant="h3" official>
  Startup India Seed Fund Scheme
</GovernmentTypography>

// Custom government styling
<Typography 
  variant="h4" 
  sx={{ 
    color: '#00695C',
    fontWeight: 600,
    '&::before': {
      content: '"🏛️ "',
      marginRight: '0.5em',
    },
  }}
>
  Central Government Scheme
</Typography>
```

### Government Form Typography
```typescript
// GST number field with monospace
<TextField
  label="GST Number"
  placeholder="22AAAAA0000A1Z5"
  InputProps={{
    sx: {
      fontFamily: 'Fira Code, monospace',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
  }}
/>

// PAN number field
<TextField
  label="PAN Number"
  placeholder="ABCDE1234F"
  InputProps={{
    sx: {
      fontFamily: 'Fira Code, monospace',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  }}
/>
```

## Accessibility Implementation

### WCAG Compliance
```typescript
// Ensure proper contrast ratios
<Typography 
  variant="body1" 
  sx={{ 
    color: '#212121', // 16.26:1 contrast on white
    backgroundColor: '#FFFFFF',
  }}
>
  High contrast text for accessibility
</Typography>

// Large text with minimum contrast
<Typography 
  variant="h2" 
  sx={{ 
    color: '#757575', // 4.54:1 contrast (acceptable for large text)
    backgroundColor: '#FFFFFF',
  }}
>
  Large heading with accessible contrast
</Typography>
```

### Screen Reader Support
```typescript
// Proper language attributes
<Typography variant="body1" lang="hi">
  यह हिंदी में लिखा गया है
</Typography>

<Typography variant="body1" lang="en">
  This is written in English
</Typography>

// ARIA labels for complex content
<Typography 
  variant="h3" 
  role="heading" 
  aria-level={3}
  aria-label="Government schemes section"
>
  🏛️ Government Schemes
</Typography>
```

### Keyboard Navigation
```typescript
// Focusable typography elements
<Typography 
  variant="button"
  component="button"
  tabIndex={0}
  sx={{ 
    cursor: 'pointer',
    '&:focus': {
      outline: '2px solid #1565C0',
      outlineOffset: '2px',
    },
  }}
  onClick={handleClick}
>
  Clickable Typography
</Typography>
```

## Performance Optimization

### Font Loading Strategy
```typescript
// Critical font loading
import { useFontLoader } from '@/utils/fontLoading';

const App = () => {
  const { isReady, loaded, total } = useFontLoader();
  
  if (!isReady) {
    return <div>Loading fonts... ({loaded.length}/{total})</div>;
  }
  
  return <MainApp />;
};
```

### Lazy Loading for Secondary Fonts
```typescript
// Load Hindi fonts only when needed
const LazyHindiContent = lazy(() => import('./HindiContent'));

<Suspense fallback={<Typography>Loading Hindi content...</Typography>}>
  <LazyHindiContent />
</Suspense>
```

## Common Usage Patterns

### Dashboard Headers
```typescript
// Welcome message with cultural context
<BilingualTypography
  hindi="नमस्ते {userName}!"
  english="Welcome back, {userName}!"
  variant="h1"
  sx={{ color: '#1565C0', mb: 2 }}
/>
```

### Form Sections
```typescript
// Section headers
<Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
  Business Information
</Typography>

// Field labels with bilingual support
<TextField
  label="कंपनी का नाम / Company Name"
  sx={{
    '& .MuiInputLabel-root': {
      fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
    },
  }}
/>
```

### Government Scheme Cards
```typescript
// Scheme title with official styling
<Typography variant="h6" sx={{ color: '#00695C', fontWeight: 600 }}>
  🏛️ {schemeName}
</Typography>

// Authority information
<Typography variant="caption" color="text.secondary">
  {authority} • {schemeType}
</Typography>

// Amount display with Indian formatting
<Typography variant="h6" sx={{ 
  bgcolor: '#FF993320', 
  color: '#FF9933',
  px: 2,
  py: 0.5,
  borderRadius: 2,
  fontWeight: 600,
}}>
  ₹{amount.toLocaleString('en-IN')}
</Typography>
```

### Learning Path Cards
```typescript
// Course title
<Typography variant="h6" fontWeight={600} gutterBottom>
  {courseTitle}
</Typography>

// Course description
<Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
  {courseDescription}
</Typography>

// Duration and metadata
<Typography variant="caption" color="text.secondary">
  ⏱️ {duration} • 🌟 {rating} ({reviewCount} reviews)
</Typography>
```

## Error Handling and Fallbacks

### Font Loading Failures
```typescript
// Graceful degradation
const TypographyWithFallback = ({ children, ...props }) => {
  const { fontsLoaded } = useFontLoader();
  
  return (
    <Typography 
      {...props}
      sx={{
        fontFamily: fontsLoaded 
          ? 'Inter, Roboto, sans-serif'
          : 'system-ui, -apple-system, sans-serif',
        ...props.sx,
      }}
    >
      {children}
    </Typography>
  );
};
```

### Browser Compatibility
```css
/* Fallback for older browsers */
@supports not (font-display: swap) {
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-400.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
}
```

## Testing Guidelines

### Visual Regression Testing
- Test typography rendering across different browsers
- Verify Hindi/Devanagari script rendering
- Check responsive scaling at all breakpoints
- Validate contrast ratios for accessibility

### Performance Testing
- Monitor font loading times
- Test with slow network connections
- Verify fallback font behavior
- Check bundle size impact

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation
- High contrast mode support
- Color blindness considerations

## Best Practices

### Do's
- ✅ Use semantic HTML elements with proper typography variants
- ✅ Implement proper language attributes for screen readers
- ✅ Test typography with real Hindi content
- ✅ Maintain consistent spacing using the 8px grid system
- ✅ Use appropriate font weights for hierarchy
- ✅ Implement responsive typography for all breakpoints

### Don'ts
- ❌ Don't use more than 3 font families on a single page
- ❌ Don't ignore line height adjustments for Devanagari script
- ❌ Don't use font weights below 400 for body text
- ❌ Don't mix too many typography variants in a single component
- ❌ Don't forget to test with actual Hindi content
- ❌ Don't ignore accessibility requirements for contrast ratios

## Troubleshooting

### Common Issues
1. **Hindi text not rendering properly**: Check Noto Sans Devanagari font loading
2. **Inconsistent spacing**: Verify line-height adjustments for mixed scripts
3. **Poor mobile readability**: Ensure minimum 16px font size on mobile
4. **Slow font loading**: Implement proper preloading and font-display: swap

### Solutions
1. **Font Loading Issues**: Use font loading hooks and fallback strategies
2. **Performance Problems**: Implement font subsetting and lazy loading
3. **Accessibility Failures**: Use contrast checking tools and screen reader testing
4. **Cross-browser Issues**: Test with comprehensive browser matrix

This typography system provides a solid foundation for creating accessible, performant, and culturally relevant text experiences throughout the BuilderBase platform.