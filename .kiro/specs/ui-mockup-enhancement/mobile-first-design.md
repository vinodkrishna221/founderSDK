# Mobile-First Digital India Design - Comprehensive UI Mockup

## Mobile Design Philosophy
The mobile-first approach ensures BuilderBase is optimized for Indian users who primarily access the platform via smartphones, with progressive enhancement for larger screens.

## Mobile Navigation System
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ MOBILE NAVIGATION ARCHITECTURE                                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ TOP APP BAR (Fixed, elevation: 2, height: 64px)                            │ │
│ │                                                                             │ │
│ │ ☰ [🧭] BuilderBase                                    🔔 👤               │ │
│ │ (Menu: 24px) (Logo: 28px) (Title: Inter 600, 18px)   (Icons: 24px each)   │ │
│ │                                                                             │ │
│ │ ████████████████████████████████████████████████████████████████████████████ │ │
│ │ ↑ Saffron accent line (#FF9933, 3px) - Digital India branding              │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ DRAWER NAVIGATION (280px width, slide from left)                           │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ USER PROFILE SECTION                                                    │ │ │
│ │ │                                                                         │ │ │
│ │ │ 👤 Priya Sharma                                                         │ │ │
│ │ │    (Avatar: 48px, Name: Inter 600, 16px)                               │ │ │
│ │ │                                                                         │ │ │
│ │ │    Tech Startup • Mumbai                                                │ │ │
│ │ │    (Subtitle: Inter 400, 14px, text.secondary)                         │ │ │
│ │ │                                                                         │ │ │
│ │ │    Profile 85% Complete                                                 │ │ │
│ │ │    ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ │ │
│ │ │    (Progress: #1565C0, 4px height, rounded)                            │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ MAIN NAVIGATION                                                         │ │ │
│ │ │                                                                         │ │ │
│ │ │ 🏠 Dashboard                                                            │ │ │
│ │ │ 📚 Learning Paths                                    ③                  │ │ │
│ │ │ 🏛️ Government Schemes                               ⑫                  │ │ │
│ │ │ 📁 Founder's Toolkit                                                    │ │ │
│ │ │ 💬 Community Forum                                   ⑤                  │ │ │
│ │ │ 👤 Profile & Settings                                                   │ │ │
│ │ │                                                                         │ │ │
│ │ │ (List items: 48px height, Inter 500, 16px, with notification badges)   │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ QUICK ACTIONS                                                           │ │ │
│ │ │                                                                         │ │ │
│ │ │ ─────────────────────────────────────────────────────────────────────── │ │ │
│ │ │                                                                         │ │ │
│ │ │ 🚀 Continue Registration                                                │ │ │
│ │ │ 📋 Pending Compliance                                                   │ │ │
│ │ │ 💰 New Schemes Available                                                │ │ │
│ │ │ 🎯 Complete Profile                                                     │ │ │
│ │ │                                                                         │ │ │
│ │ │ (Action items: 40px height, with status indicators)                    │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │ │
│ │ │ FOOTER ACTIONS                                                          │ │ │
│ │ │                                                                         │ │ │
│ │ │ 🔧 Settings                                                             │ │ │
│ │ │ 💬 Help & Support                                                       │ │ │
│ │ │ 🚪 Logout                                                               │ │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ BOTTOM NAVIGATION (Fixed, elevation: 8, height: 64px)                      │ │
│ │                                                                             │ │
│ │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐               │ │
│ │ │   🏠    │ │   📚    │ │   🏛️    │ │   💬    │ │   👤    │               │ │
│ │ │  Home   │ │  Learn  │ │ Schemes │ │Community│ │ Profile │               │ │
│ │ │         │ │    ③    │ │   ⑫    │ │    ⑤    │ │         │               │ │
│ │ │(Active: │ │(Inactive│ │(Inactive│ │(Inactive│ │(Inactive│               │ │
│ │ │#1565C0) │ │#9E9E9E) │ │#9E9E9E) │ │#9E9E9E) │ │#9E9E9E) │               │ │
│ │ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘               │ │
│ │                                                                             │ │
│ │ (Icons: 24px, Labels: Inter 400, 12px, Badge indicators for notifications) │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Mobile Dashboard Layout
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ MOBILE DASHBOARD CONTENT (Scrollable, padding: 16px)                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ WELCOME CARD (Gradient background, rounded: 12px, margin-bottom: 16px)     │ │
│ │                                                                             │ │
│ │ नमस्ते Priya! 🇮🇳 Welcome back!                                             │ │
│ │ (H5: Inter 700, 20px, white, margin-bottom: 8px)                           │ │
│ │                                                                             │ │
│ │ Your startup journey is progressing well                                    │ │
│ │ (Body2: Inter 400, 14px, rgba(255,255,255,0.9), margin-bottom: 12px)      │ │
│ │                                                                             │ │
│ │ 🚀 Registration Progress: 60%                                              │ │
│ │ (Caption: Inter 400, 12px, rgba(255,255,255,0.8))                         │ │
│ │                                                                             │ │
│ │ ████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ │
│ │ (Progress bar: White overlay, rounded, height: 6px, margin-bottom: 8px)    │ │
│ │                                                                             │ │
│ │ 🎯 Next: Complete GST Registration                                         │ │
│ │ (Caption: Inter 400, 12px, rgba(255,255,255,0.8))                         │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─────────────────────────────────────────────────────────────────────────────┐ │
│ │ STATS GRID (2x2 layout, gap: 12px, margin-bottom: 16px)                   │ │
│ │                                                                             │ │
│ │ ┌─────────────────────┐ ┌─────────────────────┐                           │ │
│ │ │ ┌─────────────────┐ │ │ ┌─────────────────┐ │                           │ │
│ │ │ │       ✅        │ │ │ │       ⏳        │ │                           │ │
│ │ │ │    (32px,       │ │ │ │    (32px,       │ │                           │ │
│ │ │ │    #388E3C      │ │ │ │    #F57C00      │ │                           │ │
│ │ │ │    circle bg)   │ │ │ │    circle bg)   │ │                           │ │
│ │ │ └─────────────────┘ │ │ └─────────────────┘ │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │         5           │ │         3           │                           │ │
│ │ │ (H4: Inter 700,     │ │ (H4: Inter 700,     │                           │ │
│ │ │  24px, #388E3C)     │ │  24px, #F57C00)     │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │ Completed Tasks     │ │ Pending Actions     │                           │ │
│ │ │ (Body2: Inter 500,  │ │ (Body2: Inter 500,  │                           │ │
│ │ │  12px, text.second) │ │  12px, text.second) │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │ +2 this week        │ │ Due this week       │                           │ │
│ │ │ (Caption: Inter 400,│ │ (Caption: Inter 400,│                           │ │
│ │ │  10px, #388E3C)     │ │  10px, #F57C00)     │                           │ │
│ │ └─────────────────────┘ └─────────────────────┘                           │ │
│ │                                                                             │ │
│ │ ┌─────────────────────┐ ┌─────────────────────┐                           │ │
│ │ │ ┌─────────────────┐ │ │ ┌─────────────────┐ │                           │ │
│ │ │ │       💰        │ │ │ │       📊        │ │                           │ │
│ │ │ │    (32px,       │ │ │ │    (32px,       │ │                           │ │
│ │ │ │    #00695C      │ │ │ │    #1565C0      │ │                           │ │
│ │ │ │    circle bg)   │ │ │ │    circle bg)   │ │                           │ │
│ │ │ └─────────────────┘ │ │ └─────────────────┘ │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │       ₹2.5L         │ │        85%          │                           │ │
│ │ │ (H4: Inter 700,     │ │ (H4: Inter 700,     │                           │ │
│ │ │  24px, #00695C)     │ │  24px, #1565C0)     │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │ Available Grants    │ │ Profile Complete    │                           │ │
│ │ │ (Body2: Inter 500,  │ │ (Body2: Inter 500,  │                           │ │
│ │ │  12px, text.second) │ │  12px, text.second) │                           │ │
│ │ │                     │ │                     │                           │ │
│ │ │ 2 new schemes       │ │ Almost done!        │                           │ │
│ │ │ (Caption: Inter 400,│ │ (Caption: Inter 400,│                           │ │
│ │ │  10px, #00695C)     │ │  10px, #1565C0)     │                           │ │
│ │ └─────────────────────┘ └─────────────────────┘                           │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────────┘
```