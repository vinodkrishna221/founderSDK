# Project Structure

## BuilderBase Architecture

This project follows a Next.js full-stack application structure with Supabase backend, optimized for the Indian startup ecosystem platform with Digital India theme integration.

## Folder Structure

```
builderbase/
├── .kiro/                     # Kiro configuration and steering
│   └── steering/             # AI assistant guidance documents
├── src/
│   ├── app/                  # Next.js 13+ App Router
│   │   ├── (auth)/          # Authentication routes
│   │   ├── dashboard/       # User dashboard pages
│   │   ├── learning/        # Learning path pages
│   │   ├── resources/       # Template and resource pages
│   │   ├── community/       # Forum and Q&A pages
│   │   ├── schemes/         # Government scheme navigator pages
│   │   ├── toolkit/        # Founder's toolkit pages
│   │   ├── api/             # API routes
│   │   │   ├── auth/        # Authentication endpoints
│   │   │   ├── users/       # User management
│   │   │   ├── content/     # Content management
│   │   │   ├── schemes/     # Government scheme navigator API
│   │   │   ├── toolkit/    # Founder's toolkit API
│   │   │   └── payments/    # Payment processing
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (buttons, inputs)
│   │   ├── forms/          # Form components
│   │   ├── layout/         # Layout components (header, footer)
│   │   ├── learning/       # Learning-specific components
│   │   ├── dashboard/      # Dashboard components
│   │   ├── toolkit/        # Founder's toolkit components
│   │   ├── government-navigator/ # Government scheme navigator components
│   │   └── community/      # Community/forum components
│   ├── lib/                # Utility libraries
│   │   ├── auth.ts         # Authentication configuration
│   │   ├── supabase.ts     # Supabase client configuration
│   │   ├── payments.ts     # Payment gateway integration
│   │   ├── utils.ts        # General utilities
│   │   ├── validations.ts  # Form validation schemas
│   │   └── government-data.ts # Government data access utilities
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   │   ├── auth.ts         # Authentication types
│   │   ├── content.ts      # Content management types
│   │   ├── schemes.ts      # Government scheme types
│   │   └── user.ts         # User-related types
│   ├── data/               # Static data and configurations
│   │   ├── states.ts       # Indian states and cities data
│   │   ├── curated-schemes/ # Manually curated government schemes
│   │   ├── templates/      # Founder's toolkit templates metadata
│   │   └── industries.ts   # Industry classifications
│   └── styles/             # Additional styling
├── public/                 # Static assets
│   ├── templates/          # Downloadable templates (PDF, Excel)
│   ├── images/            # Images and icons
│   └── docs/              # Static documentation files
├── supabase/              # Supabase configuration and migrations
│   ├── migrations/        # Database migrations
│   ├── seed.sql          # Database seeding
│   └── config.toml       # Supabase configuration
├── content/               # CMS content (if using file-based CMS)
│   ├── learning-paths/    # Learning module content
│   ├── knowledge-base/    # Wiki articles
│   ├── case-studies/      # Startup case studies
│   └── templates/         # Template descriptions
├── scripts/               # Automation scripts
│   ├── update-curated-schemes.ts # Manual scheme curation updates
│   ├── sync-government-data.ts   # Government API and RSS synchronization
│   ├── scrape-government-portals.ts # Web scraping for scheme data
│   └── content-migration.ts # Content management scripts
├── tests/                 # Test files
│   ├── __mocks__/         # Test mocks
│   ├── components/        # Component tests
│   ├── api/              # API endpoint tests
│   └── e2e/              # End-to-end tests
└── docs/                 # Project documentation
    ├── api/              # API documentation
    ├── deployment/       # Deployment guides
    └── content-guide.md  # Content management guide
```

## Feature-Based Organization

### Core Features Structure (Module-Based)
```
src/components/
├── knowledge-core/        # Module 1: Learning paths, knowledge base, case studies
├── user-dashboard/        # Module 2: Personalized dashboard and progress tracking
├── founders-toolkit/      # Module 3: Templates, checklists, simulator
├── government-navigator/  # Module 4: Scheme locator, policy comparison, application tracking
├── community-forum/       # Additional: Forum and Q&A components
├── expert-directory/      # Additional: Expert listing components
└── shared/               # Shared components across modules
```

## File Naming Conventions

- **kebab-case** for file and folder names
- **PascalCase** for React components (`UserDashboard.tsx`)
- **camelCase** for functions, variables, and hooks (`useUserData.ts`)
- **UPPER_SNAKE_CASE** for constants and environment variables
- **Descriptive prefixes** for API routes (`/api/schemes/search`)

## Code Organization Principles

### Component Structure
- Group components by feature/domain
- Use barrel exports (`index.ts`) for clean imports
- Separate UI components from business logic
- Co-locate related files (component + styles + tests)

### API Organization
- RESTful API structure under `/api/`
- Separate concerns (auth, data, external integrations)
- Use middleware for common functionality
- Version APIs when necessary (`/api/v1/`)

### Data Management
- Centralized type definitions
- Separate static data from dynamic content
- Use proper database relationships
- Cache frequently accessed data

## India-Specific Considerations

### Content Management
- Separate folders for different Indian languages
- State-specific content organization
- Government scheme categorization by ministry/department
- Template organization by business type and state

### Data Structure
- Indian state and city hierarchies
- GST and compliance categorization
- Industry-specific organization following Indian standards
- Currency and date formatting utilities

## Documentation Standards

- **README.md** with setup and contribution guidelines
- **API documentation** using OpenAPI/Swagger
- **Component documentation** using Storybook
- **Deployment guides** for Indian cloud providers
- **Content management guides** for non-technical team members

## Environment Configuration

```
├── .env.local            # Local development
├── .env.staging          # Staging environment
├── .env.production       # Production environment
└── .env.example          # Template for required variables
```

### Required Environment Variables
- Supabase configuration (URL, anon key, service role key)
- Payment gateway credentials (Razorpay, etc.)
- Authentication providers (Google, GitHub)
- External API keys (Data.gov.in API key for government schemes)
- CDN and storage configurations