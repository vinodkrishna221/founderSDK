/**
 * Typography Usage Examples
 * Comprehensive examples showing proper usage of Digital India typography system
 */

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Grid,
  Paper,
} from '@mui/material';
import {
  BilingualTypography,
  HindiTypography,
  TechnicalTypography,
  DisplayTypography,
  ResponsiveTypography,
  GovernmentTypography,
} from '../typography/TypographyComponents';

// Landing Page Typography Example
export const LandingPageExample: React.FC = () => (
  <Box sx={{ p: 4, textAlign: 'center' }}>
    {/* Hero Section */}
    <DisplayTypography size="large" sx={{ color: '#1565C0', mb: 2 }}>
      India's Complete Digital Startup Playbook
    </DisplayTypography>
    
    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
      Navigate Indian regulations, access government schemes, and build your startup 
      with AI-powered guidance tailored for the Indian ecosystem.
    </Typography>
    
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 6 }}>
      <Button variant="contained" size="large">
        Start Your Journey
      </Button>
      <Button variant="outlined" size="large">
        Watch Demo
      </Button>
    </Box>
    
    {/* Feature Section */}
    <DisplayTypography size="small" sx={{ color: '#1565C0', mb: 4 }}>
      Everything you need to build your startup in India
    </DisplayTypography>
    
    <Grid container spacing={4}>
      {[
        { title: 'Government Schemes', desc: 'Find and apply for funding schemes' },
        { title: 'Learning Paths', desc: 'Step-by-step startup guidance' },
        { title: 'Founder\'s Toolkit', desc: 'Templates and resources' },
      ].map((feature, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom color="text.primary">
                {feature.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {feature.desc}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

// Dashboard Typography Example
export const DashboardExample: React.FC = () => (
  <Box sx={{ p: 4 }}>
    {/* Dashboard Header */}
    <BilingualTypography
      hindi="नमस्ते प्रिया!"
      english="Welcome back, Priya!"
      variant="h1"
      sx={{ color: '#1565C0', mb: 1 }}
    />
    
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      You're making great progress on your entrepreneurial journey
    </Typography>
    
    {/* Progress Section */}
    <Typography variant="h2" gutterBottom>
      Your Progress
    </Typography>
    
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {[
        { label: 'Completed Tasks', value: '5', color: '#388E3C' },
        { label: 'Pending Actions', value: '3', color: '#F57C00' },
        { label: 'Available Grants', value: '₹2.5L', color: '#00695C' },
        { label: 'Profile Complete', value: '85%', color: '#1565C0' },
      ].map((stat, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h3" sx={{ color: stat.color, mb: 1 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    
    {/* Quick Actions */}
    <Typography variant="h3" gutterBottom>
      Quick Actions
    </Typography>
    
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          Startup Registration Tracker
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Complete your company registration step by step
        </Typography>
        <Button variant="contained" color="primary">
          Continue Registration
        </Button>
      </CardContent>
    </Card>
  </Box>
);

// Form Typography Example
export const FormExample: React.FC = () => (
  <Box sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
    <Typography variant="h2" color="#1565C0" gutterBottom>
      Company Registration Form
    </Typography>
    
    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
      Fill in your business details to begin the registration process
    </Typography>
    
    {/* Business Information Section */}
    <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
      Business Information
    </Typography>
    
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <TextField
        fullWidth
        label="कंपनी का नाम / Company Name"
        placeholder="Enter your company name"
        helperText="Choose a unique name for your startup"
        sx={{
          '& .MuiInputLabel-root': {
            fontFamily: 'Noto Sans Devanagari, Inter, sans-serif',
          },
        }}
      />
      
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
      
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Business Description"
        placeholder="Describe your business in detail..."
        helperText="Provide a comprehensive description of your business model"
      />
    </Box>
    
    <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
      <Button variant="contained" color="primary">
        Save and Continue
      </Button>
      <Button variant="outlined" color="primary">
        Save as Draft
      </Button>
    </Box>
  </Box>
);

// Government Schemes Typography Example
export const GovernmentSchemesExample: React.FC = () => (
  <Box sx={{ p: 4 }}>
    <GovernmentTypography variant="h1" official sx={{ mb: 2 }}>
      Government Schemes & Policies
    </GovernmentTypography>
    
    <BilingualTypography
      hindi="सरकारी योजनाओं की खोज करें"
      english="Discover funding opportunities from Central and State governments"
      variant="subtitle1"
      sx={{ mb: 4 }}
    />
    
    <Grid container spacing={3}>
      {[
        {
          name: 'Startup India Seed Fund Scheme',
          authority: 'Central Government',
          amount: '₹20 Lakhs',
          description: 'Provides financial assistance to startups for proof of concept, prototype development, product trials, market entry and commercialization.',
        },
        {
          name: 'Maharashtra Startup Policy 2024',
          authority: 'State Government',
          amount: '₹5 Lakhs',
          description: 'State-level incentives including subsidies, tax benefits, and infrastructure support for startups.',
        },
      ].map((scheme, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card sx={{ border: '2px solid #00695C20', borderRadius: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    bgcolor: '#00695C',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: 'white', fontSize: '1.5rem' }}>
                    🏛️
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" color="#00695C" fontWeight={600}>
                    {scheme.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {scheme.authority}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    bgcolor: '#FF993320',
                    color: '#FF9933',
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    fontWeight: 600,
                  }}
                >
                  {scheme.amount}
                </Typography>
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {scheme.description}
              </Typography>
              
              <Button
                variant="contained"
                size="small"
                sx={{ bgcolor: '#00695C', '&:hover': { bgcolor: '#004D40' } }}
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

// Technical Documentation Example
export const TechnicalDocExample: React.FC = () => (
  <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
    <Typography variant="h2" gutterBottom>
      API Integration Guide
    </Typography>
    
    <Typography variant="body1" paragraph>
      Use the following endpoint to validate GST numbers in your application:
    </Typography>
    
    <TechnicalTypography sx={{ mb: 3 }}>
      {`POST /api/validate-gst
Content-Type: application/json

{
  "gstin": "22AAAAA0000A1Z5"
}`}
    </TechnicalTypography>
    
    <Typography variant="h3" gutterBottom>
      Response Format
    </Typography>
    
    <Typography variant="body1" paragraph>
      The API returns a JSON response with the validation result:
    </Typography>
    
    <TechnicalTypography sx={{ mb: 3 }}>
      {`{
  "valid": true,
  "gstin": "22AAAAA0000A1Z5",
  "businessName": "Example Pvt Ltd",
  "state": "Maharashtra",
  "registrationDate": "2024-01-15"
}`}
    </TechnicalTypography>
    
    <Typography variant="h4" gutterBottom>
      Implementation Example
    </Typography>
    
    <Typography variant="body1" paragraph>
      Here's how to implement GST validation in your React component:
    </Typography>
    
    <TechnicalTypography>
      {`const validateGST = async (gstin: string) => {
  try {
    const response = await fetch('/api/validate-gst', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ gstin }),
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('GST validation failed:', error);
    return { valid: false, error: error.message };
  }
};`}
    </TechnicalTypography>
  </Box>
);

// Multi-Language Content Example
export const MultiLanguageExample: React.FC = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h2" gutterBottom color="primary.main">
      Multi-Language Typography Examples
    </Typography>
    
    <Divider sx={{ mb: 4 }} />
    
    {/* Bilingual Headers */}
    <Typography variant="h3" gutterBottom>
      Bilingual Headers
    </Typography>
    
    <BilingualTypography
      hindi="सरकारी योजनाएं"
      english="Government Schemes"
      variant="h2"
      sx={{ mb: 2 }}
    />
    
    <BilingualTypography
      hindi="शिक्षा पथ"
      english="Learning Paths"
      variant="h3"
      hindiFirst={false}
      separator=" | "
      sx={{ mb: 4 }}
    />
    
    {/* Pure Hindi Content */}
    <Typography variant="h3" gutterBottom>
      Hindi Content
    </Typography>
    
    <HindiTypography variant="h4" gutterBottom>
      BuilderBase में आपका स्वागत है
    </HindiTypography>
    
    <HindiTypography variant="body1" paragraph>
      यह प्लेटफॉर्म भारतीय उद्यमियों के लिए विशेष रूप से डिज़ाइन किया गया है। 
      यहाँ आप सरकारी योजनाओं की जानकारी प्राप्त कर सकते हैं, व्यापार पंजीकरण की 
      प्रक्रिया सीख सकते हैं, और अपने स्टार्टअप को सफल बनाने के लिए आवश्यक 
      संसाधन प्राप्त कर सकते हैं।
    </HindiTypography>
    
    {/* Technical Content */}
    <Typography variant="h3" gutterBottom sx={{ mt: 4 }}>
      Technical Content
    </Typography>
    
    <Typography variant="body1" paragraph>
      For inline code references, use{' '}
      <TechnicalTypography inline>
        const apiKey = "your-api-key"
      </TechnicalTypography>
      {' '}to maintain proper formatting.
    </Typography>
    
    <Typography variant="body1" paragraph>
      For code blocks, use the block format:
    </Typography>
    
    <TechnicalTypography>
      {`// Example: GST number validation
const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

function validateGSTNumber(gstin: string): boolean {
  return gstRegex.test(gstin);
}

// Usage
const isValid = validateGSTNumber("22AAAAA0000A1Z5");
console.log(isValid); // true`}
    </TechnicalTypography>
  </Box>
);

// Complete Typography Showcase
export const TypographyShowcase: React.FC = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h1" gutterBottom color="primary.main">
      Digital India Typography System Showcase
    </Typography>
    
    <Typography variant="subtitle1" color="text.secondary" paragraph>
      Complete examples of typography usage across different contexts
    </Typography>
    
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom>
          Landing Page Example
        </Typography>
        <LandingPageExample />
      </Paper>
      
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom>
          Dashboard Example
        </Typography>
        <DashboardExample />
      </Paper>
      
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom>
          Form Example
        </Typography>
        <FormExample />
      </Paper>
      
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom>
          Government Schemes Example
        </Typography>
        <GovernmentSchemesExample />
      </Paper>
      
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom>
          Technical Documentation Example
        </Typography>
        <TechnicalDocExample />
      </Paper>
      
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h2" gutterBottom>
          Multi-Language Example
        </Typography>
        <MultiLanguageExample />
      </Paper>
    </Box>
  </Box>
);

export default TypographyShowcase;