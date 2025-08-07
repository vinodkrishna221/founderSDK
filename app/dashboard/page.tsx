'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
  Avatar,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Divider
} from '@mui/material';
import {
  Dashboard,
  School,
  AccountBalance,
  Folder,
  Forum,
  Person,
  Settings,
  ExitToApp,
  CheckCircle,
  Schedule,
  TrendingUp,
  AttachMoney,
  Assessment,
  Notifications,
  Menu as MenuIcon
} from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

const drawerWidth = 280;

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarItems = [
    { icon: <Dashboard />, text: 'Dashboard', active: true, href: '/dashboard' },
    { icon: <School />, text: 'Learning Paths', badge: 3, href: '/learning' },
    { icon: <AccountBalance />, text: 'Government Schemes', href: '/schemes' },
    { icon: <Folder />, text: 'Resources', href: '/resources' },
    { icon: <Forum />, text: 'Community', badge: 5, href: '/community' },
    { icon: <Person />, text: 'Profile', href: '/profile' },
  ];

  const drawer = (
    <Box>
      <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          🧭 Founder's Compass
        </Typography>
      </Box>
      
      <List sx={{ px: 2, py: 1 }}>
        {sidebarItems.map((item) => (
          <Link key={item.text} href={item.href} style={{ textDecoration: 'none' }}>
            <ListItem
              sx={{
                borderRadius: 2,
                mb: 0.5,
                backgroundColor: item.active ? 'primary.main' : 'transparent',
                color: item.active ? 'white' : 'text.primary',
                '&:hover': {
                  backgroundColor: item.active ? 'primary.dark' : 'action.hover',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                {item.badge ? (
                  <Badge badgeContent={item.badge} color="error">
                    {item.icon}
                  </Badge>
                ) : (
                  item.icon
                )}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Link>
        ))}
      </List>
      
      <Divider sx={{ my: 2 }} />
      
      <List sx={{ px: 2 }}>
        <ListItem sx={{ borderRadius: 2, '&:hover': { backgroundColor: 'action.hover' } }}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem sx={{ borderRadius: 2, '&:hover': { backgroundColor: 'action.hover' } }}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Mobile App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: 'none' },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: 8, sm: 0 },
        }}
      >
        {/* Welcome Section */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)', color: 'white' }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Welcome back, Priya! 👋
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
              You're 60% through your startup registration journey
            </Typography>
            <Box sx={{ mb: 2 }}>
              <LinearProgress
                variant="determinate"
                value={60}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'rgba(255,255,255,0.3)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'white',
                  },
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              60% Complete • 3 tasks remaining
            </Typography>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card-hover">
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <CheckCircle sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  5
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Completed Tasks
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card-hover">
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Schedule sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pending Actions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card-hover">
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <AttachMoney sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  ₹2.5L
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Available Grants
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Card className="card-hover">
              <CardContent sx={{ textAlign: 'center', p: 3 }}>
                <Assessment sx={{ fontSize: 40, color: 'info.main', mb: 1 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                  85%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Profile Complete
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {/* To-Do List */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
                  📋 Your Action Items
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          border: 2,
                          borderColor: 'primary.main',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Complete GST registration"
                      secondary="Required for business operations • Due: Dec 15"
                    />
                    <Chip label="High Priority" color="error" size="small" />
                  </ListItem>
                  
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          border: 2,
                          borderColor: 'primary.main',
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Upload PAN card documents"
                      secondary="For company registration • Due: Dec 20"
                    />
                    <Chip label="Medium" color="warning" size="small" />
                  </ListItem>
                  
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Choose company name"
                      secondary="Completed on Dec 5"
                      sx={{ textDecoration: 'line-through', opacity: 0.7 }}
                    />
                    <Chip label="Done" color="success" size="small" />
                  </ListItem>
                  
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Reserve domain name"
                      secondary="Completed on Dec 3"
                      sx={{ textDecoration: 'line-through', opacity: 0.7 }}
                    />
                    <Chip label="Done" color="success" size="small" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Recommendations */}
          <Grid item xs={12} md={4}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  🎯 Recommended for You
                </Typography>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Maharashtra Startup Policy 2024"
                      secondary="New benefits available"
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="MSME Registration Guide"
                      secondary="Get priority lending"
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText
                      primary="Pitch Deck Template for Indian VCs"
                      secondary="Increase funding chances"
                    />
                  </ListItem>
                </List>
                <Button variant="outlined" fullWidth sx={{ mt: 2 }}>
                  View All Recommendations
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                  ⚡ Quick Actions
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Button variant="contained" fullWidth startIcon={<School />}>
                    Continue Learning Path
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<AccountBalance />}>
                    Browse Schemes
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<Forum />}>
                    Ask Community
                  </Button>
                  <Button variant="outlined" fullWidth startIcon={<Assessment />}>
                    Generate Business Plan
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}