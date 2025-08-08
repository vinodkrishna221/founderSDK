# Technology Stack

## Platform Requirements

### Primary Platform
- Robust, responsive web platform accessible on all devices
- Mobile-first design for Indian users across different device capabilities

### Secondary Platform
- Lightweight mobile app (iOS and Android) for notifications, community access, and on-the-go reading

## Recommended Tech Stack

### Frontend (Digital India Theme)
- **Next.js with TypeScript** - Full-stack React framework optimized for Indian users
- **Material-UI (MUI)** - React component library with Digital India theme customizations
- **MUI X** - Advanced components (DataGrid, DatePicker) with Indian formatting
- **Emotion** - CSS-in-JS styling with Digital India color system
- **React Query/TanStack Query** - Data fetching optimized for Indian connectivity
- **Framer Motion** - Smooth animations with Digital India themed transitions
- **React Hook Form** - Form handling with Hindi/English validation support

### Backend
- **Next.js API Routes** - Full-stack JavaScript ecosystem consistency
- **Supabase** - Backend-as-a-Service with PostgreSQL, authentication, and real-time features
- **NextAuth.js** - Authentication with multiple providers integrated with Supabase

### Database
- **Supabase PostgreSQL** - Managed PostgreSQL with real-time subscriptions
- **Supabase Storage** - File storage with CDN for templates and resources
- **Redis** - Additional caching layer for government scheme data
- **Full-text search** - Built-in PostgreSQL search for knowledge base

### India-Specific Integrations
- **Indian Payment Gateways**: Razorpay, PayU, or Paytm for UPI, Netbanking support
- **SMS/WhatsApp APIs**: For Indian mobile communication preferences
- **Government Data Integration**: Data.gov.in API, web scraping, and RSS monitoring
- **Curated Government Schemes**: Manual curation of top 20 popular schemes for accuracy

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
npx supabase db reset
npx supabase db push
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
# Update curated government schemes
npm run update-curated-schemes

# Sync government data from APIs
npm run sync-government-data

# Monitor RSS feeds for updates
npm run monitor-government-feeds
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

### Digital India Material-UI Theme Configuration
- **Digital India Color Palette**: Deep Blue (#1565C0) + Digital India Orange (#FF6B35)
- **Typography**: Inter (primary), Poppins (secondary), Noto Sans Devanagari (Hindi)
- **Animation Integration**: Framer Motion with Digital India themed transitions
- **Responsive Breakpoints**: Mobile-first (320px+), Tablet (768px+), Desktop (1200px+)
- **Component Overrides**: Custom variants for Indian-specific elements
- **Accessibility**: WCAG 2.1 AA compliance with cultural context

### Digital India UI Components
- **Navigation**: App Bar with Digital India branding, drawer navigation with cultural icons
- **Cards**: Material Cards with hover animations, government scheme styling
- **Data Display**: Tables with ₹ currency formatting, Lists with Indian context
- **Forms**: Text Fields with Hindi/English support, validation with cultural iconography
- **Feedback**: Snackbars with Digital India colors, Progress indicators with celebrations
- **Government Elements**: Official styling components, compliance indicators, trust badges

## Government Data Management Strategy

### Efficient Hybrid Approach
- **Phase 1**: Curated data with top 20 popular government schemes (manual curation)
- **Phase 2**: Data.gov.in API integration for additional scheme data
- **Phase 3**: Respectful web scraping for major government portals
- **Phase 4**: RSS feed monitoring for real-time updates

### Data Sources Priority
1. **Curated Schemes** (Highest accuracy) - Manually verified top schemes
2. **Data.gov.in API** (Official government API) - Supplementary data
3. **Web Scraping** (Fallback) - For portals without APIs
4. **RSS Monitoring** (Updates) - For scheme announcements

### Caching Strategy
- **24-hour cache** for API results to reduce external calls
- **Real-time updates** for user interactions and saved schemes
- **Popular scheme tracking** to identify curation candidates