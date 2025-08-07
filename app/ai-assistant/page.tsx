'use client';

import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  Avatar,
  IconButton,
  LinearProgress,
  Grid,
  AppBar,
  Toolbar
} from '@mui/material';
import {
  Send,
  Mic,
  AttachFile,
  SmartToy,
  Person,
  Rocket,
  TrendingUp,
  Assessment,
  Description,
  Download,
  Settings
} from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

export default function AIAssistantPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! I'm your AI startup assistant. How can I help you today?",
      timestamp: new Date()
    },
    {
      id: 2,
      type: 'user',
      content: "I have an idea for a food delivery app. How do I start?",
      timestamp: new Date()
    },
    {
      id: 3,
      type: 'bot',
      content: "Great idea! Let me create a personalized roadmap for you:",
      timestamp: new Date(),
      roadmap: {
        title: "YOUR STARTUP ROADMAP",
        phases: [
          {
            title: "Phase 1: Validation (Week 1-2)",
            tasks: [
              "Market research in India",
              "Customer interviews",
              "MVP wireframes"
            ]
          },
          {
            title: "Phase 2: Legal Setup (Week 3-4)",
            tasks: [
              "Company registration",
              "FSSAI license (food business)",
              "GST registration"
            ]
          }
        ]
      }
    },
    {
      id: 4,
      type: 'user',
      content: "This is perfect! Can you help me with the FSSAI license process?",
      timestamp: new Date()
    },
    {
      id: 5,
      type: 'bot',
      content: "Absolutely! FSSAI registration for food delivery requires specific documentation and follows a structured process. Let me guide you through each step...",
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user' as const,
        content: message,
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'bot' as const,
          content: "I understand your question. Let me help you with that...",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
        <Toolbar>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', mr: 3 }}>
              🧭 Founder's Compass
            </Typography>
          </Link>
          <SmartToy sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'text.primary' }}>
            AI Startup Assistant
          </Typography>
          <IconButton>
            <Settings />
          </IconButton>
        </Toolbar>
        <Box className="indian-accent" />
      </AppBar>

      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* Chat Area */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Messages */}
          <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
            {messages.map((msg) => (
              <Box
                key={msg.id}
                sx={{
                  display: 'flex',
                  justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                  mb: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'flex-start', maxWidth: '70%' }}>
                  {msg.type === 'bot' && (
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 1, mt: 0.5 }}>
                      <SmartToy />
                    </Avatar>
                  )}
                  
                  <Paper
                    sx={{
                      p: 2,
                      backgroundColor: msg.type === 'user' ? 'primary.main' : 'grey.100',
                      color: msg.type === 'user' ? 'white' : 'text.primary',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body1">{msg.content}</Typography>
                    
                    {msg.roadmap && (
                      <Card sx={{ mt: 2, backgroundColor: 'background.paper' }}>
                        <CardContent>
                          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}>
                            📋 {msg.roadmap.title}
                          </Typography>
                          {msg.roadmap.phases.map((phase, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                              <Paper sx={{ p: 2, backgroundColor: 'grey.50' }}>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                  {phase.title}
                                </Typography>
                                <List dense>
                                  {phase.tasks.map((task, taskIndex) => (
                                    <ListItem key={taskIndex} sx={{ py: 0.5 }}>
                                      <ListItemText primary={`• ${task}`} />
                                    </ListItem>
                                  ))}
                                </List>
                              </Paper>
                            </Box>
                          ))}
                          <Button
                            variant="contained"
                            startIcon={<Download />}
                            size="small"
                            sx={{ mt: 1 }}
                          >
                            📥 Download Full Plan
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </Paper>
                  
                  {msg.type === 'user' && (
                    <Avatar sx={{ bgcolor: 'secondary.main', ml: 1, mt: 0.5 }}>
                      <Person />
                    </Avatar>
                  )}
                </Box>
              </Box>
            ))}
          </Box>

          {/* Message Input */}
          <Paper sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
              <TextField
                fullWidth
                multiline
                maxRows={4}
                placeholder="Ask me anything about startups..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                variant="outlined"
                size="small"
              />
              <IconButton color="primary">
                <Mic />
              </IconButton>
              <IconButton color="primary">
                <AttachFile />
              </IconButton>
              <Button
                variant="contained"
                onClick={handleSendMessage}
                endIcon={<Send />}
                disabled={!message.trim()}
              >
                Send
              </Button>
            </Box>
          </Paper>
        </Box>

        {/* Sidebar */}
        <Box sx={{ width: 320, borderLeft: 1, borderColor: 'divider', p: 2 }}>
          {/* Quick Start Templates */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                🚀 Quick Start Templates
              </Typography>
              <List dense>
                <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                  <ListItemText primary="Business Plan Generator" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                  <ListItemText primary="Pitch Deck Builder" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                  <ListItemText primary="Legal Document Templates" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                  <ListItemText primary="Financial Projections" />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Market Research Tools */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                📊 Market Research Tools
              </Typography>
              <List dense>
                <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                  <ListItemText primary="Competitor Analysis" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                  <ListItemText primary="TAM/SAM Calculator" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                  <ListItemText primary="Customer Survey Builder" />
                </ListItem>
                <ListItem button sx={{ borderRadius: 1, mb: 0.5 }}>
                  <ListItemText primary="Industry Reports" />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Funding Readiness */}
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                🎯 Funding Readiness
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Current Score: 45/100
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={45}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>
              
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>
                Missing:
              </Typography>
              <List dense>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText 
                    primary="• Business Plan ❌" 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText 
                    primary="• Financial Model ❌" 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
                <ListItem sx={{ py: 0 }}>
                  <ListItemText 
                    primary="• Team Formation ❌" 
                    primaryTypographyProps={{ variant: 'body2' }}
                  />
                </ListItem>
              </List>
              
              <Button variant="contained" fullWidth sx={{ mt: 2 }} startIcon={<TrendingUp />}>
                📈 Improve Score
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}