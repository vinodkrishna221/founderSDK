# Technology Stack

## Platform Requirements

### Primary Platform
- Robust, responsive web platform accessible on all devices
- Mobile-first design for Indian users across different device capabilities

### Secondary Platform
- Lightweight mobile app (iOS and Android) for notifications, community access, and on-the-go reading

## Recommended Tech Stack

### Frontend
- **Next.js with TypeScript** - Full-stack React framework for SEO and performance
- **Material-UI (MUI)** - React component library with Material Design
- **MUI X** - Advanced components (DataGrid, DatePicker, etc.)
- **Emotion** - CSS-in-JS styling (comes with MUI)
- **React Query/TanStack Query** - Data fetching and caching
- **Framer Motion** - Smooth animations and interactions

### Backend
- **Node.js with Express** or **Next.js API Routes** - JavaScript ecosystem consistency
- **Prisma ORM** - Type-safe database operations
- **NextAuth.js** - Authentication with multiple providers

### Database
- **PostgreSQL** - Relational data for structured content and user management
- **Redis** - Caching and session management
- **Full-text search** - For knowledge base and resource search

### India-Specific Integrations
- **Indian Payment Gateways**: Razorpay, PayU, or Paytm for UPI, Netbanking support
- **SMS/WhatsApp APIs**: For Indian mobile communication preferences
- **Government API Integration**: For real-time scheme updates where available

## Development Tools

### Package Management
- **npm** or **yarn** for Node.js dependencies
- **pnpm** for monorepo management if needed

### Code Quality
- **ESLint** with Next.js and TypeScript rules
- **Prettier** for consistent formatting
- **Husky** for pre-commit hooks
- **TypeScript** strict mode for type safety

### Testing
- **Jest** and **React Testing Library** for unit tests
- **Playwright** for E2E testing
- **MSW** for API mocking

## Common Commands

### Development
```bash
# Start development server
npm run dev

# Install dependencies
npm install

# Database operations
npx prisma migrate dev
npx prisma studio
```

### Testing
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

### Build & Deploy
```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel --prod
```

### Content Management
```bash
# Update government schemes data
npm run update-schemes

# Sync state policies
npm run sync-policies
```

## Special Requirements

### Content Management
- **Headless CMS** (Sanity or Strapi) for non-technical team members to update content
- **Automated content updates** for government scheme changes
- **Version control** for legal templates and compliance documents

### Localization
- **i18n support** for multiple Indian languages
- **Currency formatting** for INR display
- **Date/time formatting** for Indian timezone

### Performance
- **CDN** for fast content delivery across India
- **Image optimization** for varying internet speeds
- **Progressive Web App** features for mobile experience

### Security & Compliance
- **Data encryption** for sensitive user information
- **GDPR compliance** for data protection
- **Rate limiting** for API protection
- **Content moderation** for community forum

## UI Design System

### Material-UI Theme Configuration
- **Custom color palette** reflecting Indian startup ecosystem
- **Typography** optimized for multilingual content
- **Responsive breakpoints** for mobile-first design
- **Dark/Light mode** support for user preference

### Key UI Components
- **Navigation**: App Bar with drawer navigation for mobile
- **Cards**: Material Cards for content organization
- **Data Display**: Tables, Lists, and Grids for structured information
- **Forms**: Text Fields, Select, Autocomplete with validation
- **Feedback**: Snackbars, Dialogs, Progress indicators