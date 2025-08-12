# Digital India Landing Page - Detailed UI Mockup

## Page Overview
The landing page serves as the primary entry point for BuilderBase, embodying the Digital India initiative while showcasing the platform's value for Indian entrepreneurs.

## Header Section
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ HEADER (White #FFFFFF, elevation: 1, height: 72px)                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│ [🧭] BuilderBase    Learning  Resources  Community  Schemes  [Login] [Sign Up] │
│ (Logo: 32px, Inter 600, #1565C0)  (Nav: Inter 500, #212121, 16px)             │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ████████████████████████████████████████████████████████████████████████████████ │ ← Saffron accent (#FF9933, 3px)
└─────────────────────────────────────────────────────────────────────────────────┘
```

**Header Specifications:**
- **Background**: White (#FFFFFF) with subtle shadow (elevation: 1)
- **Logo**: BuilderBase with compass icon, Deep Blue (#1565C0), 32px height
- **Navigation**: Inter 500, 16px, Primary Text (#212121)
- **Auth Buttons**: Login (text button), Sign Up (outlined primary)
- **Saffron Accent**: 3px solid line (#FF9933) representing Digital India
- **Mobile**: Collapses to hamburger menu at 768px breakpoint

## Hero Section
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ HERO SECTION (Digital grid background #F8FAFF, padding: 80px 0, min-height: 600px) │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ ← Digital grid overlay
│                                                                                 │
│  LEFT COLUMN (60% desktop, 100% mobile)   │  RIGHT COLUMN (40% desktop, hidden mobile) │
│                                           │                                         │
│  🇮🇳 India's Complete                     │  ┌─────────────────────────────────┐   │
│  Digital Startup Playbook                │  │ 🚀 Quick Start Checklist       │   │
│  (H1: Inter 700, 48px desktop/32px mobile│  │ (Card: elevation 3, rounded 12px)│   │
│   Deep Blue #1565C0, line-height: 1.2)   │  │                                 │   │
│                                           │  │ ✅ Company Registration Guide   │   │
│  Navigate Indian regulations, access      │  │ ✅ GST & Tax Setup              │   │
│  government schemes, and build your       │  │ ✅ Government Scheme Access     │   │
│  startup with AI-powered guidance         │  │ ✅ Digital India Integration    │   │
│  tailored for the Indian ecosystem.       │  │                                 │   │
│  (Body1: Inter 400, 18px, #757575,       │  │ [📱 Download Mobile App]       │   │
│   line-height: 1.6, max-width: 500px)    │  │ (Secondary outlined button)     │   │
│                                           │  │                                 │   │
│  [🚀 Start Your Journey]                  │  │ 💡 "BuilderBase helped me      │   │
│  (Primary button: gradient bg             │  │ navigate GST registration       │   │
│   linear-gradient(135deg,                 │  │ in just 2 days!" - Priya S.    │   │
│   #1565C0 0%, #FF6B35 100%),             │  │ (Testimonial: Inter 400, 14px)  │   │
│   padding: 16px 32px, border-radius: 8px,│  │                                 │   │
│   hover: transform translateY(-2px))      │  │                                 │   │
│                                           │  └─────────────────────────────────┘   │
│  [▶ Watch Demo]                           │                                         │
│  (Text button: #1565C0, Inter 500, 16px, │                                         │
│   hover: background rgba(21,101,192,0.04))│                                         │
│                                           │                                         │
│  ✅ Free to start • No credit card       │                                         │
│  (Caption: Inter 400, 14px, #388E3C)     │                                         │
│                                           │                                         │
│  📊 Trusted by 10,000+ Indian founders   │                                         │
│  (Stats: Inter 600, 16px, #1565C0)       │                                         │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Features Section
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ FEATURES SECTION (White background, padding: 80px 0)                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  🎯 Everything you need to build your startup in India                         │
│  (H2: Inter 700, 36px, #1565C0, text-align: center, margin-bottom: 48px)      │
│                                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐           │
│  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │  │ ┌─────────┐ │           │
│  │ │   🤖    │ │  │ │   🏛️    │ │  │ │   📱    │ │  │ │   🌐    │ │           │
│  │ │(64px,   │ │  │ │(64px,   │ │  │ │(64px,   │ │  │ │(64px,   │ │           │
│  │ │gradient │ │  │ │saffron  │ │  │ │teal bg) │ │  │ │orange   │ │           │
│  │ │bg)      │ │  │ │bg)      │ │  │ │         │ │  │ │bg)      │ │           │
│  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │  │ └─────────┘ │           │
│  │             │  │             │  │             │  │             │           │
│  │ AI-Powered  │  │ Government  │  │ Mobile-First│  │ Community   │           │
│  │ Guidance    │  │ Schemes     │  │ Platform    │  │ Network     │           │
│  │ (H3: Inter │  │ Locator     │  │             │  │             │           │
│  │ 600, 20px,  │  │             │  │ Access on   │  │ Connect with│           │
│  │ #212121)    │  │ Find govt   │  │ any device  │  │ 50,000+     │           │
│  │             │  │ schemes &   │  │ with offline│  │ founders    │           │
│  │ Personalized│  │ grants with │  │ support &   │  │ across India│           │
│  │ guidance    │  │ real-time   │  │ progressive │  │ for advice, │           │
│  │ tailored for│  │ updates and │  │ web app     │  │ networking, │           │
│  │ Indian      │  │ application │  │ features    │  │ and success │           │
│  │ regulations │  │ tracking    │  │             │  │ stories     │           │
│  │ and market  │  │             │  │             │  │             │           │
│  │ conditions  │  │             │  │             │  │             │           │
│  │             │  │             │  │             │  │             │           │
│  │ [Learn More]│  │ [Explore]   │  │ [Download]  │  │ [Join Now]  │           │
│  │ (Text btn)  │  │ (Text btn)  │  │ (Text btn)  │  │ (Text btn)  │           │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘           │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Social Proof Section
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ SOCIAL PROOF SECTION (Light blue background #F8FAFF, padding: 60px 0)         │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  🏆 Trusted by India's most ambitious entrepreneurs                             │
│  (H2: Inter 700, 32px, #1565C0, text-align: center, margin-bottom: 40px)      │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ STATISTICS ROW (Flex layout, justify-content: space-around)                │ │
│  │                                                                             │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │ │
│  │  │    10K+     │  │    ₹50Cr+   │  │     95%     │  │     4.8     │       │ │
│  │  │ (H3: Inter  │  │ (H3: Inter  │  │ (H3: Inter  │  │ (H3: Inter  │       │ │
│  │  │ 700, 36px,  │  │ 700, 36px,  │  │ 700, 36px,  │  │ 700, 36px,  │       │ │
│  │  │ #1565C0)    │  │ #FF6B35)    │  │ #388E3C)    │  │ #FF9933)    │       │ │
│  │  │             │  │             │  │             │  │             │       │ │
│  │  │ Founders    │  │ Funding     │  │ Success     │  │ User Rating │       │ │
│  │  │ Helped      │  │ Facilitated │  │ Rate        │  │             │       │ │
│  │  │ (Body2:     │  │ (Body2:     │  │ (Body2:     │  │ (Body2:     │       │ │
│  │  │ Inter 500,  │  │ Inter 500,  │  │ Inter 500,  │  │ Inter 500,  │       │ │
│  │  │ 16px,       │  │ 16px,       │  │ 16px,       │  │ 16px,       │       │ │
│  │  │ #757575)    │  │ #757575)    │  │ #757575)    │  │ #757575)    │       │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ TESTIMONIALS CAROUSEL (3 testimonials visible, auto-rotate every 5s)       │ │
│  │                                                                             │ │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐             │ │
│  │  │ "BuilderBase    │  │ "The government │  │ "Finally, a     │             │ │
│  │  │ simplified GST  │  │ scheme locator  │  │ platform that   │             │ │
│  │  │ registration    │  │ helped me find  │  │ understands     │             │ │
│  │  │ for my SaaS     │  │ ₹5L funding for │  │ Indian startup  │             │ │
│  │  │ startup."       │  │ my manufacturing│  │ challenges."    │             │ │
│  │  │                 │  │ unit."          │  │                 │             │ │
│  │  │ - Priya Sharma  │  │ - Rajesh Kumar  │  │ - Anita Desai   │             │ │
│  │  │ Founder, TechCo │  │ CEO, MakeCorp   │  │ Co-founder,     │             │ │
│  │  │ Mumbai          │  │ Pune            │  │ EduTech         │             │ │
│  │  │                 │  │                 │  │ Bangalore       │             │ │
│  │  │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │  │ ⭐⭐⭐⭐⭐      │             │ │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────┘             │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Pricing Section
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ PRICING SECTION (White background, padding: 80px 0)                            │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  🚀 Ready to start your entrepreneurial journey?                               │
│  (H2: Inter 700, 36px, #1565C0, text-align: center, margin-bottom: 24px)      │
│                                                                                 │
│  Join thousands of Indian founders who've successfully launched their startups │
│  (Body1: Inter 400, 18px, #757575, text-align: center, margin-bottom: 48px)   │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ PRICING CARDS (Flex layout, justify-content: center, gap: 32px)            │ │
│  │                                                                             │ │
│  │  ┌─────────────────────┐              ┌─────────────────────┐               │ │
│  │  │ FREE TIER           │              │ PREMIUM TIER        │               │ │
│  │  │ (Card: white bg,    │              │ (Card: gradient bg, │               │ │
│  │  │ border: 2px solid   │              │ elevation: 4,       │               │ │
│  │  │ #E0E0E0, padding:   │              │ border: 2px solid   │               │ │
│  │  │ 32px, rounded: 12px)│              │ #1565C0, padding:   │               │ │
│  │  │                     │              │ 32px, rounded: 12px)│               │ │
│  │  │ ₹0/month            │              │ ₹499/month          │               │ │
│  │  │ (H3: Inter 700,     │              │ (H3: Inter 700,     │               │ │
│  │  │ 32px, #1565C0)      │              │ 32px, #1565C0)      │               │ │
│  │  │                     │              │                     │               │ │
│  │  │ Perfect for getting │              │ Everything in Free, │               │ │
│  │  │ started             │              │ plus:               │               │ │
│  │  │                     │              │                     │               │ │
│  │  │ ✅ Basic learning   │              │ ✅ Advanced guides  │               │ │
│  │  │    paths            │              │ ✅ Premium templates│               │ │
│  │  │ ✅ Community access │              │ ✅ Expert consultations             │ │
│  │  │ ✅ Government       │              │ ✅ Priority support │               │ │
│  │  │    scheme database  │              │ ✅ Advanced analytics               │ │
│  │  │ ✅ Basic templates  │              │ ✅ API access       │               │ │
│  │  │                     │              │                     │               │ │
│  │  │ [Get Started Free]  │              │ [Start Premium]     │               │ │
│  │  │ (Outlined button,   │              │ (Contained button,  │               │ │
│  │  │ primary color)      │              │ gradient bg)        │               │ │
│  │  └─────────────────────┘              └─────────────────────┘               │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ PAYMENT INTEGRATION PREVIEW                                                 │ │
│  │                                                                             │ │
│  │  💳 Secure payments powered by Razorpay                                    │ │
│  │  (Body2: Inter 500, 16px, #757575, text-align: center)                     │ │
│  │                                                                             │ │
│  │  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                         │ │
│  │  │ UPI │ │Card │ │ Net │ │Wallet│ │ EMI │ │ QR  │                         │ │
│  │  │ 📱  │ │ 💳  │ │Bank │ │ 👛  │ │ 📊  │ │Code │                         │ │
│  │  │     │ │     │ │ 🏦  │ │     │ │     │ │ 📱  │                         │ │
│  │  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                         │ │
│  │                                                                             │ │
│  │  🔒 256-bit SSL encryption • 🇮🇳 RBI compliant • 💯 100% secure           │ │
│  │  (Caption: Inter 400, 14px, #388E3C, text-align: center)                  │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Footer Section
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ FOOTER (Dark background #212121, color: #FFFFFF, padding: 60px 0 20px)        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ FOOTER CONTENT (Grid layout: 4 columns desktop, 2 columns tablet, 1 mobile)│ │
│  │                                                                             │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐       │ │
│  │  │ BUILDERBASE │  │ PLATFORM    │  │ RESOURCES   │  │ CONNECT     │       │ │
│  │  │             │  │             │  │             │  │             │       │ │
│  │  │ [🧭] Logo   │  │ Learning    │  │ Templates   │  │ Community   │       │ │
│  │  │             │  │ Dashboard   │  │ Case Studies│  │ Twitter     │       │ │
│  │  │ Empowering  │  │ Schemes     │  │ Blog        │  │ LinkedIn    │       │ │
│  │  │ Indian      │  │ Community   │  │ Help Center │  │ YouTube     │       │ │
│  │  │ entrepreneurs│  │ Toolkit     │  │ API Docs    │  │ WhatsApp    │       │ │
│  │  │ through     │  │             │  │             │  │             │       │ │
│  │  │ digital     │  │             │  │             │  │             │       │ │
│  │  │ innovation  │  │             │  │             │  │             │       │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘       │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ DIGITAL INDIA PARTNERSHIP                                                  │ │
│  │                                                                             │ │
│  │  🇮🇳 Proud supporter of Digital India initiative                           │ │
│  │  (Body2: Inter 500, 16px, #FF9933, text-align: center)                     │ │
│  │                                                                             │ │
│  │  [Digital India Logo] [Startup India Logo] [Make in India Logo]            │ │
│  │  (Partner logos: 40px height, grayscale with hover color)                  │ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐ │
│  │ BOTTOM BAR (Border-top: 1px solid #424242, padding-top: 20px)              │ │
│  │                                                                             │ │
│  │  © 2024 BuilderBase. All rights reserved.  │  Privacy • Terms • Security  │ │
│  │  (Caption: Inter 400, 14px, #BDBDBD)       │  (Links: #BDBDBD, hover: #FFF)│ │
│  └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Responsive Breakpoints

### Desktop (1200px+)
- Hero: 60/40 split with side card
- Features: 4-column grid
- Navigation: Full horizontal menu
- Typography: Full scale (48px H1)

### Tablet (768px - 1199px)
- Hero: 70/30 split, smaller side card
- Features: 2-column grid
- Navigation: Condensed menu
- Typography: Medium scale (40px H1)

### Mobile (320px - 767px)
- Hero: Single column, hide side card
- Features: Single column stack
- Navigation: Hamburger menu
- Typography: Small scale (32px H1)
- Buttons: Full-width CTAs

## Animation Specifications

### Page Load Animations
- Hero section: fadeInUp 0.8s ease-out
- Feature cards: Staggered animation (0.1s, 0.2s, 0.3s, 0.4s delays)
- Statistics: Counter animation on scroll into view

### Hover Effects
- Feature cards: translateY(-4px) with shadow increase
- Buttons: translateY(-1px) with shadow enhancement
- Icons: scale(1.05) with color transition

### Scroll Animations
- Parallax background: Subtle movement on hero grid
- Fade-in on scroll: Progressive reveal of sections
- Testimonial carousel: Auto-rotate every 5 seconds

## Performance Considerations

### Image Optimization
- Hero background: WebP format with fallback
- Feature icons: SVG for scalability
- Partner logos: Optimized SVG with proper compression

### Loading Strategy
- Critical CSS: Inline above-the-fold styles
- Font loading: Preload Inter and Noto Sans Devanagari
- JavaScript: Defer non-critical scripts
- Images: Progressive loading with blur-up effect