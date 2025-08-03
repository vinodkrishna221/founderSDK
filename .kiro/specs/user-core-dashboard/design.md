# Design Document

## Overview

The User Core & Dashboard module serves as the foundational authentication and user management system for Founder's Compass. Built on Next.js 13+ App Router with TypeScript, it leverages Supabase for backend services (authentication, database, real-time subscriptions) and integrates Razorpay for payment processing. The design follows a mobile-first approach using Material-UI components with the established Indian startup ecosystem color palette.

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
  name: "Founder's Compass",
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

This design provides a solid foundation for the User Core & Dashboard module, ensuring scalability, security, and maintainability while adhering to Indian market requirements and the established design system.