# Design Document

## Overview

The User Core & Dashboard module serves as the foundational authentication and user management system for BuilderBase. Built on Next.js 13+ App Router with TypeScript, it leverages Supabase for backend services (authentication, database, real-time subscriptions) and integrates Razorpay for payment processing. The design follows a mobile-first approach using Material-UI components with the established Indian startup ecosystem color palette.

## Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Next.js API   │    │   Supabase      │
│   (React/MUI)   │◄──►│   Routes        │◄──►│   Backend       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Material-UI   │    │   Middleware    │    │   PostgreSQL    │
│   Components    │    │   & Validation  │    │   Database      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │
         ▼
┌─────────────────┐
│   Razorpay      │
│   Integration   │
└─────────────────┘
```

### Technology Stack

- **Frontend**: Next.js 13+ App Router, React 18, TypeScript, Material-UI v5
- **Backend**: Supabase (Auth, Database, Real-time), Next.js API Routes
- **Database**: PostgreSQL (via Supabase)
- **Authentication**: Supabase Auth with Google OAuth
- **Payments**: Razorpay for Indian market
- **Styling**: Material-UI with custom theme, Emotion CSS-in-JS
- **State Management**: React state + Supabase real-time subscriptions

## Components and Interfaces

### Core Components Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── layout.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   ├── profile/page.tsx
│   │   └── subscription/page.tsx
│   └── api/
│       ├── auth/
│       ├── users/
│       └── payments/
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── GoogleAuthButton.tsx
│   │   └── AuthGuard.tsx
│   ├── dashboard/
│   │   ├── DashboardLayout.tsx
│   │   ├── StatsCards.tsx
│   │   ├── ProgressBar.tsx
│   │   └── QuickActions.tsx
│   ├── profile/
│   │   ├── ProfileForm.tsx
│   │   ├── LocationSelector.tsx
│   │   └── StartupStageSelector.tsx
│   └── payments/
│       ├── SubscriptionPlans.tsx
│       ├── RazorpayButton.tsx
│       └── PaymentSuccess.tsx
└── lib/
    ├── supabase.ts
    ├── auth.ts
    ├── razorpay.ts
    └── validations.ts
```

### Key Interface Definitions

```typescript
// User Profile Interface
interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  phone?: string;
  state: string;
  city: string;
  startup_stage: 'idea' | 'mvp' | 'early' | 'growth' | 'established';
  industry?: string;
  is_premium: boolean;
  profile_completion: number;
  created_at: string;
  updated_at: string;
}

// Subscription Interface
interface Subscription {
  id: string;
  user_id: string;
  plan_type: 'free' | 'premium';
  status: 'active' | 'cancelled' | 'expired';
  razorpay_subscription_id?: string;
  current_period_start: string;
  current_period_end: string;
  created_at: string;
}

// Dashboard Stats Interface
interface DashboardStats {
  completed_tasks: number;
  pending_actions: number;
  available_grants: number;
  profile_completion: number;
}
```

### Authentication Flow Design

```
Registration Flow:
User → Register Form → Supabase Auth → Email Verification → Profile Setup → Dashboard

Login Flow:
User → Login Form → Supabase Auth → Session Creation → Dashboard

Google OAuth Flow:
User → Google Button → OAuth Popup → Supabase Auth → Profile Check → Dashboard/Setup
```

## Data Models

### Supabase Database Schema

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  state TEXT,
  city TEXT,
  startup_stage TEXT CHECK (startup_stage IN ('idea', 'mvp', 'early', 'growth', 'established')),
  industry TEXT,
  is_premium BOOLEAN DEFAULT FALSE,
  profile_completion INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE public.subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.user_profiles(id) NOT NULL,
  plan_type TEXT DEFAULT 'free' CHECK (plan_type IN ('free', 'premium')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'expired')),
  razorpay_subscription_id TEXT,
  razorpay_payment_id TEXT,
  amount INTEGER, -- in paise
  currency TEXT DEFAULT 'INR',
  current_period_start TIMESTAMP WITH TIME ZONE,
  current_period_end TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User progress tracking
CREATE TABLE public.user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.user_profiles(id) NOT NULL,
  completed_tasks INTEGER DEFAULT 0,
  pending_actions INTEGER DEFAULT 0,
  last_login TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security (RLS) Policies
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Users can only access their own data
CREATE POLICY "Users can view own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);
```

### State Management Design

```typescript
// User Context Provider
interface UserContextType {
  user: User | null;
  profile: UserProfile | null;
  subscription: Subscription | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  refreshSubscription: () => Promise<void>;
}

// Custom Hooks
const useAuth = () => useContext(UserContext);
const useProfile = () => useQuery(['profile'], fetchUserProfile);
const useSubscription = () => useQuery(['subscription'], fetchSubscription);
```

## Error Handling

### Error Handling Strategy

```typescript
// Centralized Error Types
enum ErrorType {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  AUTH_ERROR = 'AUTH_ERROR',
  PAYMENT_ERROR = 'PAYMENT_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  SERVER_ERROR = 'SERVER_ERROR'
}

// Error Handler Utility
class AppError extends Error {
  constructor(
    public type: ErrorType,
    public message: string,
    public statusCode: number = 500
  ) {
    super(message);
  }
}

// Form Validation Errors
const handleFormErrors = (error: any) => {
  if (error.code === 'invalid_credentials') {
    return 'Invalid email or password';
  }
  if (error.code === 'email_already_exists') {
    return 'An account with this email already exists';
  }
  return 'An unexpected error occurred. Please try again.';
};

// Payment Error Handling
const handlePaymentErrors = (error: any) => {
  switch (error.code) {
    case 'payment_failed':
      return 'Payment failed. Please check your payment details and try again.';
    case 'insufficient_funds':
      return 'Insufficient funds. Please try a different payment method.';
    default:
      return 'Payment processing failed. Please contact support.';
  }
};
```

### User Feedback Design

```typescript
// Toast Notification System using Material-UI Snackbar
interface NotificationState {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
}

// Loading States
interface LoadingState {
  auth: boolean;
  profile: boolean;
  payment: boolean;
  general: boolean;
}
```

## Testing Strategy

### Testing Approach

```typescript
// Unit Testing with Jest & React Testing Library
describe('Authentication Components', () => {
  test('LoginForm validates email format', () => {
    // Test email validation
  });
  
  test('RegisterForm shows password strength indicator', () => {
    // Test password validation
  });
  
  test('GoogleAuthButton triggers OAuth flow', () => {
    // Test OAuth integration
  });
});

// Integration Testing
describe('Authentication Flow', () => {
  test('User can register and login successfully', async () => {
    // Test complete auth flow
  });
  
  test('Profile setup works after registration', async () => {
    // Test profile creation
  });
});

// API Testing
describe('API Routes', () => {
  test('POST /api/users/profile updates user data', async () => {
    // Test profile update API
  });
  
  test('POST /api/payments/create-subscription processes payment', async () => {
    // Test payment processing
  });
});
```

### Security Testing

- **Authentication**: Test session management, token validation, logout functionality
- **Authorization**: Verify RLS policies, premium content access control
- **Input Validation**: Test form validation, SQL injection prevention, XSS protection
- **Payment Security**: Test Razorpay webhook validation, payment verification

### Performance Testing

- **Page Load Times**: Measure initial load and navigation performance
- **Database Queries**: Optimize Supabase queries and implement caching
- **Mobile Performance**: Test on various device sizes and network conditions
- **Real-time Updates**: Test Supabase real-time subscription performance

## Cross-Module Integration

### Central Hub Architecture

The User Dashboard serves as the central hub that aggregates data from all BuilderBase modules, providing unified user management and progress tracking.

```typescript
// Cross-Module Data Aggregation
interface DashboardCrossModuleIntegration {
  // Knowledge Core Integration
  knowledgeCore: {
    progressData: (userId: string) => LearningProgress[];
    completedPaths: (userId: string) => CompletedPath[];
    bookmarkedContent: (userId: string) => BookmarkedContent[];
    achievements: (userId: string) => LearningAchievement[];
  };
  
  // Founder's Toolkit Integration
  foundersToolkit: {
    templateUsage: (userId: string) => TemplateUsage[];
    checklistProgress: (userId: string) => ChecklistProgress[];
    simulatorResults: (userId: string) => SimulatorResult[];
    toolkitAchievements: (userId: string) => ToolkitAchievement[];
  };
  
  // Government Navigator Integration
  governmentNavigator: {
    savedSchemes: (userId: string) => SavedScheme[];
    applicationProgress: (userId: string) => ApplicationProgress[];
    deadlineReminders: (userId: string) => SchemeDeadline[];
    navigatorAchievements: (userId: string) => NavigatorAchievement[];
  };
}
```

### Unified Premium Management

```typescript
// Unified Premium Feature Implementation
interface PremiumFeatureStandards {
  // Consistent Premium Indicators
  premiumBadges: {
    color: '#FF6B35'; // Digital India Orange
    placement: 'top-right corner of cards';
    animation: 'subtle glow effect';
    icon: 'crown or star icon';
  };
  
  // Standard Upgrade Prompts
  upgradeModal: {
    trigger: 'On premium feature access attempt';
    messaging: {
      title: 'Unlock Premium Features';
      description: 'Get unlimited access to advanced tools and priority support';
      benefits: [
        'Unlimited template downloads',
        'Advanced business simulator',
        'Real-time government scheme data',
        'Priority customer support',
        'Team collaboration features'
      ];
      pricing: '₹499/month or ₹4,999/year';
    };
    styling: {
      primaryColor: '#FF6B35'; // Digital India Orange
      culturalElements: true;
      animations: 'smooth modal transitions';
    };
    conversion: 'A/B tested messaging for Indian market';
  };
  
  // Freemium Limits (consistent across modules)
  freemiumLimits: {
    knowledgeCore: {
      learningPaths: 3;
      articles: 'unlimited basic articles';
      bookmarks: 50;
      certificates: false;
    };
    foundersToolkit: {
      templateDownloads: 5;
      checklists: 'basic checklists only';
      simulator: 'limited scenarios';
      collaboration: false;
    };
    governmentNavigator: {
      schemes: 'curated schemes only';
      realTimeAPI: false;
      comparison: 'basic comparison';
      expertConsultation: false;
    };
    userDashboard: {
      analytics: 'basic analytics';
      teamFeatures: false;
      advancedReports: false;
      prioritySupport: false;
    };
  };
}
```

### Cross-Module Analytics

```typescript
// Unified Analytics and Tracking
interface CrossModuleAnalytics {
  // User Journey Tracking
  userJourney: {
    moduleUsage: (userId: string) => ModuleUsageStats;
    crossModuleFlow: (userId: string) => CrossModuleFlow[];
    conversionFunnel: (userId: string) => ConversionFunnelData;
    engagementMetrics: (userId: string) => EngagementMetrics;
  };
  
  // Progress Aggregation
  progressAggregation: {
    overallProgress: (userId: string) => OverallProgress;
    moduleCompletion: (userId: string) => ModuleCompletion[];
    achievementProgress: (userId: string) => AchievementProgress;
    timeSpentAnalysis: (userId: string) => TimeSpentAnalysis;
  };
  
  // Recommendation Engine
  recommendationEngine: {
    crossModuleRecommendations: (userId: string) => CrossModuleRecommendation[];
    nextBestAction: (userId: string) => NextBestAction;
    personalizedContent: (userId: string) => PersonalizedContent[];
    conversionOpportunities: (userId: string) => ConversionOpportunity[];
  };
}
```

## Integration Points

### Supabase Integration

```typescript
// Supabase Client Configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Real-time Subscriptions
const subscribeToProfileChanges = (userId: string, callback: Function) => {
  return supabase
    .channel('profile-changes')
    .on('postgres_changes', 
        { event: 'UPDATE', schema: 'public', table: 'user_profiles', filter: `id=eq.${userId}` },
        callback
    )
    .subscribe();
};
```

### Razorpay Integration

```typescript
// Razorpay Configuration
const razorpayOptions = {
  key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  amount: 49900, // ₹499 in paise
  currency: 'INR',
  name: "BuilderBase",
  description: 'Premium Subscription',
  theme: {
    color: '#1565C0' // Primary blue color
  },
  prefill: {
    email: user.email,
    contact: user.phone
  },
  handler: async (response: any) => {
    // Verify payment and update subscription
    await verifyPayment(response);
  }
};

// Payment Verification
const verifyPayment = async (paymentData: any) => {
  const response = await fetch('/api/payments/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentData)
  });
  
  if (response.ok) {
    // Update user's premium status
    await updateSubscriptionStatus(user.id, 'premium');
  }
};
```

### Material-UI Theme Integration

```typescript
// Custom Theme Configuration
const theme = createTheme({
  palette: {
    primary: {
      main: '#1565C0', // Deep Blue
    },
    secondary: {
      main: '#FF9933', // Saffron
    },
    success: {
      main: '#00695C', // Teal
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
```

### Unified API Standards

```typescript
// Standard API Patterns Across All Modules
interface UnifiedAPIStandards {
  // Authentication Middleware (consistent across all modules)
  authMiddleware: {
    supabaseAuth: {
      validateSession: (request: Request) => Promise<User | null>;
      checkPremiumAccess: (userId: string, feature: string) => Promise<boolean>;
      rateLimiting: { 
        requests: 100; 
        window: '15m';
        skipSuccessfulAuth: true;
      };
    };
    premiumValidation: {
      validateFeatureAccess: (userId: string, module: string, feature: string) => Promise<boolean>;
      getSubscriptionStatus: (userId: string) => Promise<SubscriptionStatus>;
      trackFeatureUsage: (userId: string, feature: string) => Promise<void>;
    };
  };
  
  // Standard Response Format
  apiResponse: {
    success: boolean;
    data?: any;
    error?: {
      code: string;
      message: string;
      details?: any;
      userMessage?: string; // User-friendly message in Hindi/English
    };
    pagination?: {
      page: number;
      limit: number;
      total: number;
      hasMore: boolean;
    };
    premiumRequired?: boolean;
    metadata?: {
      requestId: string;
      timestamp: string;
      version: string;
    };
  };
  
  // Cross-Module Endpoints
  crossModuleAPIs: {
    '/api/user/progress': {
      method: 'GET';
      description: 'Aggregates progress from all modules';
      response: { 
        knowledgeCore: LearningProgress;
        foundersToolkit: ToolkitProgress;
        governmentNavigator: NavigatorProgress;
        overall: OverallProgress;
      };
    };
    
    '/api/recommendations': {
      method: 'GET';
      description: 'Cross-module content recommendations';
      params: { userId: string; context?: string };
      response: { recommendations: CrossModuleRecommendation[] };
    };
    
    '/api/premium/validate': {
      method: 'POST';
      description: 'Unified premium access validation';
      body: { userId: string; module: string; feature: string };
      response: { hasAccess: boolean; reason?: string };
    };
    
    '/api/analytics/cross-module': {
      method: 'GET';
      description: 'Cross-module usage analytics';
      params: { userId: string; timeRange?: string };
      response: { analytics: CrossModuleAnalytics };
      premiumRequired: true;
    };
  };
}
```

## Digital India Theme Standards

### Dashboard-Specific Digital India Theme

```typescript
// User Dashboard specific Digital India theme implementation
const dashboardDigitalIndiaTheme = {
  // Dashboard Color Palette
  colors: {
    primary: '#1565C0', // Deep Blue - navigation, headers, primary actions
    secondary: '#FF6B35', // Digital India Orange - CTAs, premium features, highlights
    accent: '#00695C', // Teal - success states, completed items, positive metrics
    saffron: '#FF9933', // Indian Identity - achievements, celebrations, cultural elements
    
    // Dashboard-specific colors
    background: '#FAFAFA', // Light grey page background
    surface: '#FFFFFF', // White card and widget backgrounds
    digital: '#F8FAFF', // Subtle blue tint for digital sections
    
    // Status and metric colors
    progress: '#2196F3', // Blue for progress indicators
    achievement: '#4CAF50', // Green for achievements and milestones
    warning: '#FF9800', // Orange for warnings and pending items
    error: '#F44336', // Red for errors and urgent items
    
    // Module-specific accent colors
    knowledgeCore: '#3F51B5', // Indigo for learning content
    foundersToolkit: '#FF5722', // Deep orange for toolkit features
    governmentNavigator: '#1565C0', // Deep blue for government content
    premium: '#9C27B0' // Purple for premium features
  },
  
  // Dashboard Animation Standards
  animations: {
    cardHover: '200ms ease-out', // Widget card hover effects
    progressUpdate: '500ms ease-in-out', // Progress bar animations
    achievementUnlock: '800ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Achievement celebrations
    dataRefresh: '300ms ease-in-out', // Data loading and refresh
    navigationTransition: '250ms ease-out', // Navigation state changes
    modalOpen: '300ms cubic-bezier(0.4, 0, 0.2, 1)', // Modal and drawer animations
    celebration: '1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55)' // Major milestone celebrations
  },
  
  // Cultural Dashboard Elements
  culturalElements: {
    welcomeMessages: {
      morning: 'शुभ प्रभात! Good morning!',
      afternoon: 'नमस्ते! Good afternoon!',
      evening: 'शुभ संध्या! Good evening!'
    },
    achievements: {
      celebrations: 'Diwali-inspired sparkle animations for major milestones',
      badges: 'Lotus-inspired achievement badges with Indian motifs',
      colors: 'Indian flag colors for national holiday celebrations'
    },
    progress: {
      indicators: 'Rangoli-inspired progress patterns',
      celebrations: 'Peacock feather animations for completion',
      milestones: 'Traditional Indian milestone markers'
    }
  }
};
```

### Mobile-First Dashboard Design

```typescript
// Responsive Design Standards for User Dashboard
interface DashboardResponsiveStandards {
  // Dashboard Layout Responsive Behavior
  dashboardLayout: {
    mobile: {
      layout: 'Single column with stacked widgets and bottom navigation',
      navigation: 'Fixed bottom navigation with 5 main sections',
      widgets: 'Full-width cards with touch-optimized interactions',
      header: 'Collapsible header with user profile and notifications',
      quickActions: 'Horizontal scrollable quick action buttons'
    };
    tablet: {
      layout: '2-column widget grid with collapsible sidebar',
      navigation: 'Slide-out sidebar with gesture support',
      widgets: 'Medium-sized cards in 2-column grid layout',
      header: 'Fixed header with expanded user information',
      quickActions: 'Grid layout with larger action buttons'
    };
    desktop: {
      layout: '3-4 column widget grid with fixed sidebar',
      navigation: 'Always-visible sidebar with section grouping',
      widgets: 'Compact cards with hover effects and detailed views',
      header: 'Full header with comprehensive user dashboard',
      quickActions: 'Integrated action panel with advanced options'
    };
  };
  
  // Widget Responsive Behavior
  widgets: {
    progressWidget: {
      mobile: 'Full-width progress bars with large touch targets',
      tablet: 'Medium-sized circular progress indicators',
      desktop: 'Detailed progress charts with hover tooltips'
    };
    statsWidget: {
      mobile: 'Large number displays with icon and description',
      tablet: 'Grid layout with medium-sized stat cards',
      desktop: 'Compact stat cards with trend indicators'
    };
    activityWidget: {
      mobile: 'Vertical timeline with swipe navigation',
      tablet: 'Two-column activity feed with filtering',
      desktop: 'Multi-column activity dashboard with search'
    };
    recommendationWidget: {
      mobile: 'Horizontal scrollable recommendation cards',
      tablet: 'Grid layout with medium-sized recommendation cards',
      desktop: 'Detailed recommendation panel with preview'
    };
  };
  
  // Profile Management Responsive Behavior
  profileManagement: {
    mobile: {
      layout: 'Full-screen profile editor with section navigation',
      forms: 'Single-column forms with large input fields',
      avatar: 'Large avatar with touch-friendly upload',
      settings: 'Grouped settings with expandable sections'
    };
    tablet: {
      layout: 'Two-column layout with profile and settings',
      forms: 'Organized form sections with validation',
      avatar: 'Medium avatar with drag-and-drop upload',
      settings: 'Tabbed settings interface with categories'
    };
    desktop: {
      layout: 'Multi-panel profile dashboard with live preview',
      forms: 'Advanced form layouts with inline validation',
      avatar: 'Professional avatar management with cropping',
      settings: 'Comprehensive settings panel with search'
    };
  };
}
```

### Premium Feature Standards for Dashboard

```typescript
// Premium Feature Implementation for User Dashboard
interface DashboardPremiumStandards {
  // Premium Dashboard Features
  premiumFeatures: {
    analytics: {
      free: 'Basic progress tracking and simple statistics',
      premium: 'Advanced analytics with detailed insights and trends',
      indicators: 'Premium badge on advanced analytics widgets',
      upgrade: 'Upgrade prompt when accessing detailed analytics'
    };
    
    teamFeatures: {
      free: 'Individual account only',
      premium: 'Team collaboration, shared progress, and team analytics',
      indicators: 'Team features section with premium gating',
      upgrade: 'Team collaboration upgrade flow with pricing'
    };
    
    customization: {
      free: 'Basic dashboard layout with limited customization',
      premium: 'Full dashboard customization, custom widgets, and themes',
      indicators: 'Customization options with premium badges',
      upgrade: 'Customization upgrade prompt with preview'
    };
    
    reports: {
      free: 'Basic progress reports',
      premium: 'Advanced reports, export capabilities, and scheduled reports',
      indicators: 'Export buttons with premium gating',
      upgrade: 'Report export upgrade flow with sample preview'
    };
  };
  
  // Premium Upgrade Flow
  upgradeFlow: {
    triggers: [
      'Advanced analytics access',
      'Team feature usage',
      'Report export attempt',
      'Dashboard customization',
      'Premium widget interaction'
    ];
    
    modal: {
      title: 'Unlock Premium Dashboard Features',
      description: 'Get advanced analytics, team collaboration, and unlimited customization',
      benefits: [
        'Advanced analytics and insights',
        'Team collaboration features',
        'Custom dashboard layouts',
        'Unlimited report exports',
        'Priority customer support',
        'Early access to new features'
      ];
      pricing: '₹499/month or ₹4,999/year (Save 17%)';
      trial: '14-day free trial with full access';
      cta: 'Start Free Trial';
    };
    
    styling: {
      primaryColor: '#FF6B35';
      culturalElements: 'Indian business success imagery and testimonials';
      animations: 'Smooth modal entrance with feature previews';
    };
  };
  
  // Freemium Limits
  freemiumLimits: {
    widgets: {
      count: 6, // Maximum widgets on free dashboard
      types: ['progress', 'stats', 'recent_activity', 'quick_actions', 'recommendations', 'notifications'],
      restrictions: 'No custom widgets or advanced analytics widgets'
    };
    
    data: {
      history: '30 days', // Data retention for free users
      exports: 0, // No export capabilities
      sharing: false, // No sharing or collaboration features
      backups: false // No data backup features
    };
    
    customization: {
      themes: 1, // Only default Digital India theme
      layouts: 'Fixed layout only',
      widgets: 'No widget customization',
      branding: 'BuilderBase branding required'
    };
  };
}
```

## Comprehensive Premium Management System

### Advanced Premium Subscription Management

```typescript
// Advanced Premium Management for User Dashboard
interface AdvancedPremiumManagement {
  // Centralized Subscription Management
  subscriptionManagement: {
    dashboard: {
      overview: {
        currentPlan: 'Display current subscription tier and benefits',
        usage: 'Real-time usage statistics across all modules',
        billing: 'Billing history and next payment information',
        features: 'Feature access matrix showing what\'s included'
      },
      
      planComparison: {
        free: {
          features: [
            '3 learning paths',
            '5 template downloads/month',
            'Curated government schemes',
            'Basic analytics',
            'Community access'
          ],
          limitations: 'Clear indication of feature limits'
        },
        premium: {
          features: [
            'Unlimited learning paths with certificates',
            'Unlimited template downloads',
            'Real-time government scheme data',
            'Advanced analytics and insights',
            'Priority support and expert consultation'
          ],
          pricing: '₹499/month or ₹4,999/year (Save 17%)'
        }
      }
    },
    
    billingManagement: {
      paymentMethods: {
        supported: ['UPI', 'Net Banking', 'Credit/Debit Cards', 'Wallets'],
        integration: 'Razorpay payment gateway with Indian payment methods',
        security: 'PCI DSS compliant payment processing',
        receipts: 'GST-compliant invoices and receipts'
      },
      
      subscriptionControls: {
        upgrade: 'Seamless upgrade flow with prorated billing',
        downgrade: 'Graceful downgrade with feature access timeline',
        pause: 'Temporary subscription pause for up to 3 months',
        cancel: 'Retention flow with feedback collection'
      }
    }
  },
  
  // Cross-Module Premium Validation
  premiumValidation: {
    accessControl: {
      realTimeValidation: 'Real-time premium status validation across all modules',
      caching: 'Cached premium status with 5-minute refresh interval',
      fallback: 'Graceful degradation when validation service is unavailable',
      audit: 'Audit trail of premium feature access attempts'
    },
    
    featureGating: {
      softGating: 'Preview premium features with upgrade prompts',
      hardGating: 'Complete blocking of premium features for free users',
      trialAccess: 'Temporary premium access during trial periods',
      gracePeriod: '7-day grace period for expired subscriptions'
    }
  },
  
  // Conversion Optimization
  conversionOptimization: {
    abTesting: {
      pricingDisplay: 'A/B test different pricing presentations',
      upgradePrompts: 'Test different upgrade prompt designs and messaging',
      trialOffers: 'Test trial duration and feature access combinations',
      culturalMessaging: 'Test Indian cultural elements in conversion flows'
    },
    
    personalization: {
      userSegmentation: 'Segment users based on usage patterns and behavior',
      targetedOffers: 'Personalized upgrade offers based on user segments',
      timingOptimization: 'Optimal timing for upgrade prompts based on user activity',
      valueProposition: 'Customized value propositions based on user goals'
    },
    
    retentionStrategies: {
      usageAnalytics: 'Track feature usage to identify at-risk subscribers',
      engagementCampaigns: 'Automated campaigns to increase feature adoption',
      winbackOffers: 'Special offers for cancelled subscribers',
      loyaltyPrograms: 'Rewards for long-term subscribers'
    }
  }
}
```

### Unified Analytics and Reporting

```typescript
// Unified Analytics System for Premium Management
interface UnifiedAnalyticsSystem {
  // Cross-Module Usage Analytics
  usageAnalytics: {
    moduleEngagement: {
      knowledgeCore: 'Learning path completion rates and time spent',
      foundersToolkit: 'Template downloads and checklist completion',
      governmentNavigator: 'Scheme searches and application tracking',
      dashboard: 'Dashboard widget usage and customization'
    },
    
    premiumFeatureUsage: {
      adoption: 'Premium feature adoption rates by user segment',
      engagement: 'Depth of premium feature usage and retention',
      satisfaction: 'User satisfaction scores for premium features',
      churn: 'Premium subscriber churn analysis and prevention'
    },
    
    conversionMetrics: {
      funnelAnalysis: 'Conversion funnel from free to premium users',
      touchpointAnalysis: 'Most effective conversion touchpoints',
      cohortAnalysis: 'User cohort behavior and lifetime value',
      revenueAttribution: 'Revenue attribution to different features and campaigns'
    }
  },
  
  // Business Intelligence Dashboard
  businessIntelligence: {
    revenueMetrics: {
      mrr: 'Monthly Recurring Revenue tracking and projections',
      arr: 'Annual Recurring Revenue and growth trends',
      ltv: 'Customer Lifetime Value by user segment',
      cac: 'Customer Acquisition Cost optimization'
    },
    
    userMetrics: {
      acquisition: 'User acquisition channels and effectiveness',
      activation: 'User activation rates and time-to-value',
      retention: 'User retention curves and churn analysis',
      expansion: 'Revenue expansion from existing users'
    },
    
    productMetrics: {
      featureAdoption: 'Feature adoption rates across all modules',
      userSatisfaction: 'Net Promoter Score and user satisfaction surveys',
      supportMetrics: 'Customer support ticket volume and resolution times',
      platformHealth: 'System performance and reliability metrics'
    }
  }
}
```

### Customer Success and Support Integration

```typescript
// Customer Success Integration for Premium Users
interface CustomerSuccessIntegration {
  // Premium Support Features
  premiumSupport: {
    priorityChannels: {
      chat: 'Priority live chat with <2 minute response time',
      email: 'Priority email support with <4 hour response time',
      phone: 'Dedicated phone support for premium users',
      expert: 'Direct access to domain experts and consultants'
    },
    
    proactiveSupport: {
      onboarding: 'Personalized onboarding for new premium users',
      healthChecks: 'Regular account health checks and optimization',
      successPlanning: 'Quarterly success planning sessions',
      trainingResources: 'Exclusive training materials and webinars'
    }
  },
  
  // Success Metrics and Tracking
  successTracking: {
    userGoals: {
      goalSetting: 'Help users set and track startup milestones',
      progressMonitoring: 'Monitor progress towards user-defined goals',
      successCelebration: 'Celebrate achievements with cultural elements',
      courseCorrection: 'Proactive guidance when users are off-track'
    },
    
    businessOutcomes: {
      startupSuccess: 'Track user startup success rates and milestones',
      fundingSuccess: 'Monitor successful funding applications and amounts',
      complianceSuccess: 'Track successful compliance and registration completions',
      platformROI: 'Measure and demonstrate platform ROI for users'
    }
  }
}
```

## Comprehensive Cross-Module Database Schema

### Central Hub Database Schema

```sql
-- Master Cross-Module Progress Aggregation
CREATE TABLE master_user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  overall_completion_percentage DECIMAL(5,2) DEFAULT 0,
  knowledge_core_progress JSONB DEFAULT '{}',
  founders_toolkit_progress JSONB DEFAULT '{}',
  government_navigator_progress JSONB DEFAULT '{}',
  total_achievements INTEGER DEFAULT 0,
  current_streak INTEGER DEFAULT 0,
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  milestone_history JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id),
  INDEX idx_master_progress_user (user_id),
  INDEX idx_master_progress_completion (overall_completion_percentage),
  INDEX idx_master_progress_activity (last_activity)
);

-- Unified Achievement System
CREATE TABLE unified_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  achievement_type VARCHAR(100) NOT NULL,
  achievement_category VARCHAR(50) NOT NULL, -- 'learning', 'toolkit', 'government', 'cross_module'
  source_module VARCHAR(50) NOT NULL,
  source_content_id UUID,
  achievement_data JSONB NOT NULL,
  cultural_celebration JSONB DEFAULT '{}', -- Indian cultural celebration data
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  displayed_at TIMESTAMP WITH TIME ZONE,
  acknowledged_at TIMESTAMP WITH TIME ZONE,
  INDEX idx_achievements_user (user_id),
  INDEX idx_achievements_type (achievement_type),
  INDEX idx_achievements_category (achievement_category),
  INDEX idx_achievements_earned (earned_at)
);

-- Cross-Module User Journey Tracking
CREATE TABLE user_journey_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id UUID NOT NULL,
  journey_step INTEGER NOT NULL,
  module_name VARCHAR(50) NOT NULL,
  action_type VARCHAR(100) NOT NULL,
  content_id UUID,
  content_type VARCHAR(50),
  time_spent INTEGER, -- seconds
  conversion_event BOOLEAN DEFAULT false,
  premium_interaction BOOLEAN DEFAULT false,
  metadata JSONB DEFAULT '{}',
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_journey_user (user_id),
  INDEX idx_journey_session (session_id),
  INDEX idx_journey_module (module_name),
  INDEX idx_journey_conversion (conversion_event),
  INDEX idx_journey_timestamp (timestamp)
);

-- Unified Notification System
CREATE TABLE unified_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  notification_type VARCHAR(100) NOT NULL,
  source_module VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  action_url TEXT,
  action_label VARCHAR(100),
  priority VARCHAR(20) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  cultural_context JSONB DEFAULT '{}', -- Indian cultural context for notifications
  delivery_channels VARCHAR(50)[] DEFAULT '{"in_app"}', -- 'in_app', 'email', 'sms', 'push'
  scheduled_for TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  delivered_at TIMESTAMP WITH TIME ZONE,
  read_at TIMESTAMP WITH TIME ZONE,
  acted_upon_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_notifications_user (user_id),
  INDEX idx_notifications_type (notification_type),
  INDEX idx_notifications_scheduled (scheduled_for),
  INDEX idx_notifications_priority (priority)
);

-- Premium Subscription Analytics
CREATE TABLE premium_subscription_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  subscription_event VARCHAR(100) NOT NULL, -- 'trial_start', 'upgrade', 'downgrade', 'cancel', 'renew'
  previous_tier VARCHAR(50),
  new_tier VARCHAR(50),
  revenue_impact DECIMAL(10,2), -- in INR
  conversion_source VARCHAR(100), -- which module/feature drove the conversion
  conversion_context JSONB DEFAULT '{}',
  cultural_factors JSONB DEFAULT '{}', -- Indian market specific factors
  event_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_subscription_analytics_user (user_id),
  INDEX idx_subscription_analytics_event (subscription_event),
  INDEX idx_subscription_analytics_source (conversion_source),
  INDEX idx_subscription_analytics_timestamp (event_timestamp)
);
```

### Comprehensive Cross-Module Testing Standards

```typescript
// Comprehensive Testing Standards for User Dashboard
interface DashboardTestingStandards extends CrossModuleTestingStandards {
  // Dashboard Integration Testing
  dashboardIntegrationTests: {
    dataAggregation: {
      progressAggregation: [
        'Progress data from all modules aggregated correctly',
        'Real-time updates reflected in dashboard widgets',
        'Historical progress trends calculated accurately',
        'Achievement milestones triggered appropriately'
      ],
      analyticsAggregation: [
        'Usage statistics aggregated across all modules',
        'Cross-module user journey tracked accurately',
        'Conversion funnel data calculated correctly',
        'Premium feature usage tracked comprehensively'
      ],
      notificationAggregation: [
        'Notifications from all modules displayed uniformly',
        'Notification priorities respected and sorted correctly',
        'Cultural context applied to notification styling',
        'Delivery channels working for all notification types'
      ]
    },
    
    premiumManagement: {
      subscriptionFlow: [
        'Upgrade flow works seamlessly from any module',
        'Payment processing handles Indian payment methods',
        'Premium access granted immediately after payment',
        'Billing information displayed accurately in INR'
      ],
      featureValidation: [
        'Premium features accessible across all modules',
        'Free tier limitations enforced consistently',
        'Trial access granted and revoked properly',
        'Subscription status synchronized in real-time'
      ],
      conversionOptimization: [
        'A/B tests for upgrade prompts working correctly',
        'Conversion tracking accurate across all touchpoints',
        'Cultural messaging variants tested properly',
        'ROI calculations displayed accurately'
      ]
    }
  },
  
  // User Experience Testing
  userExperienceTests: {
    navigationFlow: {
      crossModuleNavigation: [
        'Seamless navigation between modules',
        'Context preserved during module transitions',
        'Back button behavior consistent across modules',
        'Deep linking works for all module content'
      ],
      mobileExperience: [
        'Bottom navigation works on all mobile devices',
        'Touch targets meet accessibility requirements',
        'Swipe gestures work consistently',
        'Mobile performance optimized for Indian devices'
      ],
      responsiveDesign: [
        'Dashboard adapts properly to all screen sizes',
        'Widget layouts responsive across breakpoints',
        'Typography scales appropriately',
        'Images and media optimized for all devices'
      ]
    },
    
    culturalIntegration: {
      digitalIndiaTheme: [
        'Color scheme consistent across all modules',
        'Cultural celebrations trigger appropriately',
        'Hindi/English language switching works',
        'Indian cultural elements display correctly'
      ],
      localization: [
        'Currency displayed in INR format (lakhs, crores)',
        'Date and time formats follow Indian conventions',
        'Regional content adapted for user location',
        'Cultural sensitivity maintained throughout'
      ]
    }
  },
  
  // Performance and Scalability Testing
  performanceScalabilityTests: {
    dashboardPerformance: {
      loadTimes: [
        'Dashboard loads within 2 seconds on 3G connection',
        'Widget data refreshes within 500ms',
        'Cross-module data aggregation completes within 1 second',
        'Real-time updates appear within 100ms'
      ],
      scalability: [
        'Dashboard performs well with 10,000+ concurrent users',
        'Database queries optimized for large datasets',
        'Caching strategies effective for frequently accessed data',
        'Memory usage optimized for long dashboard sessions'
      ]
    },
    
    analyticsPerformance: [
      'Analytics calculations complete within 2 seconds',
      'Large dataset queries optimized with proper indexing',
      'Real-time analytics updates without performance impact',
      'Export generation completes within 5 seconds'
    ]
  },
  
  // Security and Privacy Testing
  securityPrivacyTests: {
    dataProtection: {
      userDataSecurity: [
        'All user data encrypted at rest and in transit',
        'Cross-module data access properly authorized',
        'Sensitive information masked in logs and analytics',
        'Data retention policies enforced automatically'
      ],
      privacyCompliance: [
        'GDPR compliance for data collection and processing',
        'User consent properly managed and tracked',
        'Data deletion requests processed correctly',
        'Privacy settings respected across all modules'
      ]
    },
    
    authenticationSecurity: [
      'Multi-factor authentication working correctly',
      'Session management secure across module boundaries',
      'Password policies enforced consistently',
      'Account lockout mechanisms functional'
    ],
    
    paymentSecurity: [
      'Payment data handled securely with PCI compliance',
      'Indian payment gateway integration secure',
      'Subscription data encrypted and protected',
      'Billing information access properly controlled'
    ]
  }
}
```

### End-to-End Testing Scenarios

```typescript
// Comprehensive End-to-End Testing Scenarios
interface EndToEndTestingScenarios {
  // Complete User Journey Testing
  completeUserJourneys: {
    newUserOnboarding: {
      scenario: 'New user registration through premium conversion',
      steps: [
        'User registers with email/Google OAuth',
        'Completes profile setup with Indian context',
        'Explores Knowledge Core learning paths',
        'Downloads templates from Founder\'s Toolkit',
        'Discovers government schemes in Navigator',
        'Hits freemium limits and upgrades to premium',
        'Accesses premium features across all modules'
      ],
      validations: [
        'Data consistency across all modules',
        'Premium access granted immediately',
        'Progress tracked accurately',
        'Cultural elements displayed correctly'
      ]
    },
    
    expertUserWorkflow: {
      scenario: 'Experienced user leveraging cross-module features',
      steps: [
        'User completes advanced learning path',
        'Receives contextual template recommendations',
        'Uses business simulator with government incentives',
        'Applies for multiple government schemes',
        'Tracks application progress in dashboard',
        'Shares resources with team members'
      ],
      validations: [
        'Cross-module recommendations accurate',
        'Data synchronization seamless',
        'Team collaboration features functional',
        'Analytics data comprehensive'
      ]
    }
  },
  
  // Stress Testing Scenarios
  stressTestingScenarios: {
    highConcurrency: 'Test with 10,000+ concurrent users across all modules',
    dataVolume: 'Test with large datasets (1M+ schemes, 100K+ users)',
    crossModuleLoad: 'Test heavy cross-module data synchronization',
    premiumConversion: 'Test high-volume premium conversion scenarios'
  },
  
  // Disaster Recovery Testing
  disasterRecoveryTests: {
    databaseFailover: 'Test database failover and recovery procedures',
    serviceOutages: 'Test graceful degradation during service outages',
    dataCorruption: 'Test data integrity and recovery mechanisms',
    securityBreaches: 'Test incident response and data protection measures'
  }
}
```

This design provides a solid foundation for the User Core & Dashboard module, ensuring scalability, security, and maintainability while adhering to Indian market requirements and the established design system. The cross-module integration ensures seamless data flow and unified user experience across all BuilderBase modules, with comprehensive Digital India theme implementation, mobile-first responsive design standards, advanced premium management, robust government integration standards, and complete cross-module database schema with unified testing standards.