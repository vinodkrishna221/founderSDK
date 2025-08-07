'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  LinearProgress,
  AppBar,
  Toolbar,
  Breadcrumbs,
  Link as MuiLink,
  Tabs,
  Tab,
  Avatar
} from '@mui/material';
import {
  Business,
  AccountBalance,
  AttachMoney,
  Assessment,
  TrendingUp,
  Group,
  AccessTime,
  PlayArrow,
  CheckCircle
} from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

export default function LearningPage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const learningPaths = [
    {
      id: 1,
      title: "Company Registration in India",
      description: "Complete guide to registering Pvt Ltd, LLP or Partnership companies with step-by-step instructions",
      level: "Beginner",
      modules: 5,
      duration: "2-3 hrs",
      progress: 40,
      icon: <Business sx={{ fontSize: 48, color: 'white' }} />,
      bgColor: '#1565C0',
      category: 'Legal & Compliance',
      students: 1250,
      rating: 4.8
    },
    {
      id: 2,
      title: "GST Registration & Compliance",
      description: "Master GST filing, returns & staying compliant with Indian tax regulations with practical examples",
      level: "Intermediate",
      modules: 7,
      duration: "4-5 hrs",
      progress: 0,
      icon: <AccountBalance sx={{ fontSize: 48, color: 'white' }} />,
      bgColor: '#FF9933',
      category: 'Legal & Compliance',
      students: 890,
      rating: 4.7
    },
    {
      id: 3,
      title: "Fundraising from Indian VCs",
      description: "Navigate the Indian VC ecosystem and raise your first round of funding with proven strategies",
      level: "Advanced",
      modules: 4,
      duration: "3-4 hrs",
      progress: 0,
      icon: <AttachMoney sx={{ fontSize: 48, color: 'white' }} />,
      bgColor: '#00695C',
      category: 'Funding',
      students: 567,
      rating: 4.9
    },
    {
      id: 4,
      title: "Financial Planning & Projections",
      description: "Create comprehensive financial models and projections that impress investors and guide decisions",
      level: "Intermediate",
      modules: 6,
      duration: "3-4 hrs",
      progress: 0,
      icon: <Assessment sx={{ fontSize: 48, color: 'white' }} />,
      bgColor: '#7B1FA2',
      category: 'Business Planning',
      students: 723,
      rating: 4.6
    },
    {
      id: 5,
      title: "MSME Registration & Benefits",
      description: "Understand MSME classification, registration process, and unlock government benefits and schemes",
      level: "Beginner",
      modules: 3,
      duration: "1-2 hrs",
      progress: 0,
      icon: <TrendingUp sx={{ fontSize: 48, color: 'white' }} />,
      bgColor: '#388E3C',
      category: 'Government Schemes',
      students: 934,
      rating: 4.5
    },
    {
      id: 6,
      title: "Building Your Team & Culture",
      description: "Hire the right people, build strong culture, and scale your team effectively in the Indian context",
      level: "All Levels",
      modules: 8,
      duration: "5-6 hrs",
      progress: 0,
      icon: <Group sx={{ fontSize: 48, color: 'white' }} />,
      bgColor: '#F57C00',
      category: 'Operations',
      students: 445,
      rating: 4.7
    }
  ];

  const categories = ['All Paths', 'Beginner', 'Legal & Compliance', 'Funding', 'Operations'];

  const filteredPaths = selectedTab === 0 ? learningPaths : 
    selectedTab === 1 ? learningPaths.filter(path => path.level === 'Beginner') :
    learningPaths.filter(path => path.category === categories[selectedTab]);

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
              <Typography color="text.primary">Learning Paths</Typography>
            </Breadcrumbs>
          </Box>
        </Toolbar>
        <Box className="indian-accent" />
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Learning Paths
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
            Step-by-step guides tailored for the Indian startup ecosystem
          </Typography>

          {/* Category Tabs */}
          <Tabs
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            {categories.map((category, index) => (
              <Tab key={category} label={category} />
            ))}
          </Tabs>
        </Box>

        {/* Learning Path Cards */}
        <Grid container spacing={4}>
          {filteredPaths.map((path) => (
            <Grid item xs={12} md={6} lg={4} key={path.id}>
              <Card className="card-hover" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Card Header with Icon */}
                <Box
                  sx={{
                    height: 120,
                    backgroundColor: path.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  {path.icon}
                  {path.progress > 0 && (
                    <Chip
                      label={`${path.progress}% Complete`}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        color: path.bgColor
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Level and Module Count */}
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip 
                      label={path.level} 
                      size="small" 
                      color={path.level === 'Beginner' ? 'success' : path.level === 'Intermediate' ? 'warning' : 'error'}
                    />
                    <Chip label={`${path.modules} modules`} size="small" variant="outlined" />
                  </Box>

                  {/* Title and Description */}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {path.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, flexGrow: 1 }}>
                    {path.description}
                  </Typography>

                  {/* Progress Bar (if started) */}
                  {path.progress > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={path.progress}
                        sx={{ height: 6, borderRadius: 3 }}
                      />
                    </Box>
                  )}

                  {/* Stats */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, fontSize: '0.875rem', color: 'text.secondary' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <AccessTime sx={{ fontSize: 16 }} />
                      <Typography variant="body2">{path.duration}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Group sx={{ fontSize: 16 }} />
                      <Typography variant="body2">{path.students}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Typography variant="body2">⭐ {path.rating}</Typography>
                    </Box>
                  </Box>

                  {/* Action Button */}
                  <Button
                    variant={path.progress > 0 ? "contained" : "outlined"}
                    fullWidth
                    startIcon={path.progress > 0 ? <PlayArrow /> : <PlayArrow />}
                    sx={{ mt: 'auto' }}
                  >
                    {path.progress > 0 ? 'Continue' : 'Start Learning'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Featured Instructors */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
            Learn from Industry Experts
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Avatar
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}
                >
                  CA
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  CA Rajesh Kumar
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  Chartered Accountant • 15+ years experience
                </Typography>
                <Typography variant="body2">
                  Expert in Indian taxation, GST compliance, and startup financial planning
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Avatar
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'secondary.main' }}
                >
                  AS
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Adv. Sneha Reddy
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  Corporate Lawyer • Startup Legal Expert
                </Typography>
                <Typography variant="body2">
                  Specializes in company formation, compliance, and startup legal frameworks
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center', p: 3 }}>
                <Avatar
                  sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'info.main' }}
                >
                  VP
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Vikram Patel
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                  Serial Entrepreneur • VC Partner
                </Typography>
                <Typography variant="body2">
                  Founded 3 startups, raised $50M+, now helps founders navigate funding
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}