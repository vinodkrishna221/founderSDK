'use client';

import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  AppBar, 
  Toolbar, 
  Chip,
  LinearProgress,
  Avatar,
  IconButton
} from '@mui/material';
import { 
  School, 
  AccountBalance, 
  Description, 
  Forum,
  PlayArrow,
  CheckCircle,
  Rocket,
  TrendingUp,
  Security,
  Group
} from '@mui/icons-material';
import Link from 'next/link';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', mr: 1 }}>
              🧭 Founder's Compass
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, mr: 3 }}>
            <Link href="/learning" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                Learning
              </Typography>
            </Link>
            <Link href="/schemes" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                Schemes
              </Typography>
            </Link>
            <Link href="/community" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                Community
              </Typography>
            </Link>
            <Link href="/ai-assistant" style={{ textDecoration: 'none' }}>
              <Typography sx={{ color: 'text.primary', '&:hover': { color: 'primary.main' } }}>
                AI Assistant
              </Typography>
            </Link>
          </Box>
          <Button variant="outlined" sx={{ mr: 1 }}>Login</Button>
          <Button variant="contained">Sign Up</Button>
        </Toolbar>
        <Box className="indian-accent" />
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              India's Complete
              <Box component="span" className="gradient-text" sx={{ display: 'block' }}>
                🟠 Startup Playbook
              </Box>
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
              Navigate Indian regulations, access government schemes, and build your startup with AI-powered guidance and confidence.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large" 
                startIcon={<Rocket />}
                className="pulse-animation"
                href="/dashboard"
              >
                🚀 Start Your Journey
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                startIcon={<PlayArrow />}
              >
                ▶ Watch Demo
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ color: 'success.main', fontSize: 20 }} />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Free to start • No credit card required
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Card sx={{ p: 3, backgroundColor: 'primary.main', color: 'white' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                Quick Start Checklist
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircle sx={{ color: 'success.light' }} />
                  <Typography>Company Registration Guide</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircle sx={{ color: 'success.light' }} />
                  <Typography>GST & Tax Setup</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircle sx={{ color: 'success.light' }} />
                  <Typography>Government Scheme Access</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircle sx={{ color: 'success.light' }} />
                  <Typography>AI Business Plan Generator</Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ mb: 6 }}>
            Everything You Need to Build in India
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className="card-hover" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <School sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  📚 Learning Paths
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Step-by-step guides for Indian regulations, from company registration to compliance
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card className="card-hover" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <AccountBalance sx={{ fontSize: 48, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  🏛️ Schemes Locator
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Find government schemes & grants tailored to your startup's industry and location
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card className="card-hover" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <Description sx={{ fontSize: 48, color: 'info.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  📄 AI Document Generator
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  India-compliant legal documents, business plans, and pitch decks with AI assistance
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Card className="card-hover" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <Forum sx={{ fontSize: 48, color: 'warning.main', mb: 2 }} />
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  👥 Founder Community
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Connect with fellow founders, get expert advice, and share your journey
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Stories */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" sx={{ mb: 6 }}>
          Success Stories from Indian Founders
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>P</Avatar>
                <Box>
                  <Typography variant="h6">Priya Sharma</Typography>
                  <Typography variant="body2" color="text.secondary">FoodTech Startup, Mumbai</Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                "Founder's Compass helped me navigate GST registration and find the perfect government scheme. 
                Saved me 3 months of research!"
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="₹15L Funding" size="small" color="success" />
                <Chip label="FSSAI Compliant" size="small" color="info" />
              </Box>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: 'secondary.main' }}>R</Avatar>
                <Box>
                  <Typography variant="h6">Rajesh Kumar</Typography>
                  <Typography variant="body2" color="text.secondary">EdTech Startup, Bangalore</Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                "The AI business plan generator created a comprehensive plan that impressed investors. 
                Raised our seed round in 2 months!"
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="₹50L Raised" size="small" color="success" />
                <Chip label="Series A Ready" size="small" color="primary" />
              </Box>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2, bgcolor: 'info.main' }}>A</Avatar>
                <Box>
                  <Typography variant="h6">Anita Patel</Typography>
                  <Typography variant="body2" color="text.secondary">FinTech Startup, Delhi</Typography>
                </Box>
              </Box>
              <Typography variant="body2" sx={{ mb: 2 }}>
                "From idea to incorporated company in 3 weeks. The legal document generator and 
                compliance checklist were game-changers."
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip label="RBI Approved" size="small" color="success" />
                <Chip label="1000+ Users" size="small" color="warning" />
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 3, color: 'white' }}>
            Ready to Build Your Startup?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Join 10,000+ Indian founders who trust Founder's Compass
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ backgroundColor: 'white', color: 'primary.main', '&:hover': { backgroundColor: 'grey.100' } }}
              href="/dashboard"
            >
              Start Free Today
            </Button>
            <Button 
              variant="outlined" 
              size="large" 
              sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'grey.300' } }}
            >
              Schedule Demo
            </Button>
          </Box>
          <Typography variant="body2" sx={{ mt: 3, opacity: 0.8 }}>
            No credit card required • 14-day free trial • Cancel anytime
          </Typography>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: 'grey.900', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                🧭 Founder's Compass
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                Empowering Indian entrepreneurs with AI-powered guidance from idea to IPO.
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.6 }}>
                Made with ❤️ in India
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ mb: 2 }}>Product</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="/learning" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                    Learning Paths
                  </Typography>
                </Link>
                <Link href="/schemes" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                    Government Schemes
                  </Typography>
                </Link>
                <Link href="/ai-assistant" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                    AI Assistant
                  </Typography>
                </Link>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ mb: 2 }}>Resources</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Blog
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Templates
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Guides
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ mb: 2 }}>Company</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  About Us
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Careers
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Contact
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ mb: 2 }}>Legal</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Privacy Policy
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Terms of Service
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                  Cookie Policy
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ borderTop: 1, borderColor: 'grey.700', mt: 4, pt: 4, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              © 2024 Founder's Compass. All rights reserved. | Built for Indian entrepreneurs 🇮🇳
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}