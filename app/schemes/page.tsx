'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  AppBar,
  Toolbar,
  Breadcrumbs,
  Link as MuiLink,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  InputAdornment
} from '@mui/material';
import {
  Search,
  FilterList,
  AccountBalance,
  LocationOn,
  Business,
  Schedule,
  AttachMoney,
  CheckCircle,
  Description,
  Forum,
  Phone,
  TrendingUp
} from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

export default function SchemesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedIndustry, setSelectedIndustry] = useState('Technology');
  const [selectedStage, setSelectedStage] = useState('Early');

  const schemes = [
    {
      id: 1,
      title: "Startup India Seed Fund Scheme",
      type: "Central Government",
      amount: "₹20 Lakhs",
      description: "Provides financial assistance to startups for proof of concept, prototype development, product trials, market entry and commercialization.",
      tags: ["Technology", "Early Stage", "All States"],
      deadline: "31 Dec 2024",
      applicants: 1250,
      successRate: 15,
      eligibility: ["Incorporated as Private Limited Company", "Less than 2 years old", "Annual turnover less than ₹25 Cr"],
      benefits: ["Seed funding up to ₹20 Lakhs", "Mentorship support", "Incubation facilities"]
    },
    {
      id: 2,
      title: "Maharashtra Startup Policy 2024",
      type: "State Government",
      amount: "₹5 Lakhs",
      description: "State-level incentives including subsidies, tax benefits, and infrastructure support for startups in Maharashtra.",
      tags: ["Manufacturing", "Growth", "Maharashtra"],
      deadline: "Rolling basis",
      applicants: 890,
      successRate: 25,
      eligibility: ["Registered in Maharashtra", "DPIIT recognized startup", "Innovative business model"],
      benefits: ["Subsidy on electricity", "Tax incentives", "Land allocation support"]
    },
    {
      id: 3,
      title: "MSME Udyam Registration Benefits",
      type: "Central Government",
      amount: "Various",
      description: "Registration benefits including priority lending, tax exemptions and government tender preferences for MSMEs.",
      tags: ["All Industries", "All Stages", "All States"],
      deadline: "Ongoing",
      applicants: 5670,
      successRate: 85,
      eligibility: ["Manufacturing/Service business", "Investment limits as per MSME Act", "Valid business registration"],
      benefits: ["Priority sector lending", "Collateral-free loans", "Tax exemptions"]
    },
    {
      id: 4,
      title: "Digital India Land Records Modernization",
      type: "Central Government",
      amount: "₹10 Lakhs",
      description: "Support for PropTech and AgriTech startups working on land records digitization and agricultural technology.",
      tags: ["PropTech", "AgriTech", "All States"],
      deadline: "15 Jan 2025",
      applicants: 234,
      successRate: 30,
      eligibility: ["Technology-based solution", "Focus on land/agriculture", "Prototype ready"],
      benefits: ["Grant funding", "Government partnership", "Market access"]
    }
  ];

  const filteredSchemes = schemes.filter(scheme =>
    scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Toolbar>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', mr: 3 }}>
              🧭 Founder's Compass
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }}>
            <Breadcrumbs>
              <MuiLink component={Link} href="/dashboard" color="inherit">
                Dashboard
              </MuiLink>
              <Typography color="text.primary">Government Schemes</Typography>
            </Breadcrumbs>
          </Box>
        </Toolbar>
        <Box className="indian-accent" />
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Government Schemes
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4 }}>
            Find and access Central & State government funding and support schemes
          </Typography>

          {/* Search and Filters */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder="Search schemes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <FormControl fullWidth>
                  <InputLabel>State</InputLabel>
                  <Select
                    value={selectedState}
                    label="State"
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                    <MenuItem value="Karnataka">Karnataka</MenuItem>
                    <MenuItem value="Delhi">Delhi</MenuItem>
                    <MenuItem value="All">All States</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Industry</InputLabel>
                  <Select
                    value={selectedIndustry}
                    label="Industry"
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                  >
                    <MenuItem value="Technology">Technology</MenuItem>
                    <MenuItem value="Manufacturing">Manufacturing</MenuItem>
                    <MenuItem value="Healthcare">Healthcare</MenuItem>
                    <MenuItem value="All">All Industries</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <FormControl fullWidth>
                  <InputLabel>Stage</InputLabel>
                  <Select
                    value={selectedStage}
                    label="Stage"
                    onChange={(e) => setSelectedStage(e.target.value)}
                  >
                    <MenuItem value="Early">Early Stage</MenuItem>
                    <MenuItem value="Growth">Growth</MenuItem>
                    <MenuItem value="All">All Stages</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button variant="contained" fullWidth startIcon={<Search />}>
                  Search
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Box>

        <Grid container spacing={4}>
          {/* Main Results */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {filteredSchemes.length} schemes found
              </Typography>
            </Box>

            {filteredSchemes.map((scheme) => (
              <Card key={scheme.id} sx={{ mb: 3, '&:hover': { boxShadow: 4 } }}>
                <CardContent sx={{ p: 3 }}>
                  {/* Header */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {scheme.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Chip 
                          label={scheme.type} 
                          size="small" 
                          color={scheme.type === 'Central Government' ? 'primary' : 'secondary'}
                        />
                        <Chip 
                          label={scheme.amount} 
                          size="small" 
                          sx={{ backgroundColor: 'success.light', color: 'success.dark' }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
                    {scheme.description}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                    {scheme.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Box>

                  {/* Stats */}
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                          {scheme.applicants}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Applicants
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                          {scheme.successRate}%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Success Rate
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Schedule sx={{ fontSize: 16, color: 'text.secondary' }} />
                        <Typography variant="body2" color="text.secondary">
                          Deadline: {scheme.deadline}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant="contained" startIcon={<Description />}>
                      View Details
                    </Button>
                    <Button variant="outlined" startIcon={<CheckCircle />}>
                      Check Eligibility
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button variant="outlined" size="large">
                Load More Results...
              </Button>
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Available for You */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Available for You
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText
                      primary="12 schemes match your profile"
                      secondary="Based on location & industry"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="₹15.5 Lakhs total funding"
                      secondary="Maximum available amount"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="3 applications in progress"
                      secondary="Track your submissions"
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button variant="outlined" fullWidth startIcon={<Description />}>
                    📋 Create Application Checklist
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<Description />}>
                    📄 Download Application Templates
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<Forum />}>
                    💬 Ask Community for Advice
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<Phone />}>
                    📞 Connect with Expert
                  </Button>
                </Box>
              </CardContent>
            </Card>

            {/* Recently Viewed */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Recently Viewed
                </Typography>
                <List dense>
                  <ListItem button>
                    <ListItemText primary="MSME Registration Benefits" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Digital India Land Records" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Export Promotion Schemes" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Success Stories
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: 'primary.main' }}>
                      R
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        Rajesh Kumar
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        EdTech Startup
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                    "Got ₹15L through Startup India scheme. The application process was smooth with Founder's Compass guidance."
                  </Typography>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, mr: 1, bgcolor: 'secondary.main' }}>
                      P
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        Priya Sharma
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        HealthTech Startup
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                    "Maharashtra policy helped us get subsidized office space and tax benefits worth ₹8L annually."
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}