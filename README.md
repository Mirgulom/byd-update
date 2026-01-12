# BYD Official Dealer Website

A modern, multilingual website for BYD automotive dealership built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
- **Multilingual Support**: Full support for Russian, Uzbek, and English languages with seamless switching
- **Theme Switching**: Light and dark mode with persistent user preferences
- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Dynamic Model Catalog**: Comprehensive car models showcase with filtering and search
- **Credit Calculator**: Interactive loan calculator with visual representation
- **Test Drive Booking**: Easy-to-use booking system for test drives
- **Service Center**: Service booking and information system
- **Contact Forms**: Multiple contact forms throughout the site

### Pages

#### 1. Home Page (/)
- Hero slider with featured models
- Popular models carousel with Swiper
- Why BYD section with advantages
- Call-to-action section

#### 2. Models Catalog (/models)
- Advanced filtering system (body type, engine type, price range)
- Grid layout with model cards
- Real-time filtering with no page reload
- Detailed specifications display

#### 3. Individual Model Page (/models/[slug])
- Full-screen hero with model showcase
- Tabbed interface (Overview, Specifications, Gallery)
- Sticky sidebar with pricing and CTA buttons
- Feature highlights with icons

#### 4. Test Drive (/test-drive)
- Comprehensive booking form with validation
- Model selection dropdown
- Date picker for scheduling
- Form validation with Zod

#### 5. Credit Calculator (/calculator)
- Interactive sliders for loan parameters
- Real-time calculation updates
- Visual representation with pie charts
- Model selection integration

#### 6. Service Center (/service)
- Service types showcase
- Booking form for appointments
- Service center information

#### 7. About Page (/about)
- Company history timeline
- Mission and values
- Milestones visualization
- Statistics and achievements

#### 8. Contacts (/contacts)
- Contact information display
- Multiple dealer centers
- Interactive map integration placeholder
- Feedback form

### Technical Features

#### Built With
- **Next.js 15.5** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **next-intl** - Internationalization
- **Swiper** - Touch slider for carousels
- **Recharts** - Charts for data visualization
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **Zustand** - State management
- **Sonner** - Toast notifications

#### UI Components
All components built with shadcn/ui and customized:
- Button, Card, Input, Textarea
- Select, Slider, Checkbox
- Dialog, Sheet (mobile menu)
- Tabs, Accordion, Badge
- Form components with validation
- Navigation Menu
- Toast notifications

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies
```bash
npm install
```

2. Run the development server
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── about/
│   │   ├── calculator/
│   │   ├── contacts/
│   │   ├── models/
│   │   ├── service/
│   │   ├── test-drive/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── home/              # Home page components
│   ├── layout/            # Header & Footer
│   ├── shared/            # Reusable components
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── data/              # Static data
│   └── store/             # Zustand stores
└── messages/              # Translation files
    ├── en.json
    ├── ru.json
    └── uz.json
```

## Bug Fixes Applied

1. **Slider Pagination Dots**: Fixed dots overlapping content by adjusting CSS
2. **Toast Notifications**: Added Toaster component to layout
3. **Send Request Modal**: Created reusable modal component
4. **Type Errors**: Fixed TypeScript errors in calculator and model pages
5. **Params Handling**: Updated to use async params (Next.js 15)
6. **Navigation Links**: Added proper Link components for all CTAs

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
All rights reserved © 2026 BYD
