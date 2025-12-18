# Bosons Web - Comprehensive Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Dependencies and Libraries](#dependencies-and-libraries)
4. [Architecture and Structure](#architecture-and-structure)
5. [Website Sections](#website-sections)
6. [User Workflow](#user-workflow)
7. [Installation and Setup](#installation-and-setup)
8. [Development Workflow](#development-workflow)
9. [Build and Deployment](#build-and-deployment)
10. [External Resources](#external-resources)

---

## Project Overview

**Bosons** is a modern, bilingual (Spanish/English) e-commerce website for an industrial supplies company operating in Colombia. The platform showcases industrial equipment, specialized materials, automation solutions, and welding services. Built with cutting-edge web technologies, it provides a seamless user experience across devices with support for dark/light themes and internationalization.

### Purpose

The website serves as a digital storefront and information hub for Bosons, enabling customers to:
- Browse industrial products and services
- Request quotations for specialized equipment
- Learn about specialized welding and automation services
- Contact the company for consultation
- Process payments through Stripe integration

### Key Features

- **Bilingual Support**: Full Spanish and English translations
- **Dark/Light Theme**: User-selectable color schemes with system preference detection
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Product Catalog**: Dynamic filtering and categorization
- **Payment Integration**: Stripe payment processing
- **SEO Optimized**: Meta tags, Open Graph, and Schema.org structured data
- **Performance Optimized**: Built with Vite for fast loading times

---

## Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^18.3.1 | Frontend UI library for building component-based interfaces |
| **TypeScript** | ^5.5.3 | Type-safe JavaScript for enhanced development experience |
| **Vite** | ^5.4.1 | Modern build tool providing fast HMR and optimized production builds |
| **Tailwind CSS** | ^3.4.11 | Utility-first CSS framework for rapid UI development |

### Build System

- **Vite**: Lightning-fast development server with Hot Module Replacement (HMR)
- **SWC**: Super-fast TypeScript/JavaScript compiler via `@vitejs/plugin-react-swc`
- **PostCSS**: CSS transformation pipeline with Autoprefixer
- **ESLint**: Code quality and consistency enforcement

### Key Frameworks and Libraries

1. **UI Component Library**: shadcn/ui (Radix UI primitives + Tailwind)
2. **Styling**: Tailwind CSS with custom design tokens
3. **Routing**: React Router DOM for navigation
4. **State Management**: Multiple approaches:
   - React Context API (Language, Theme)
   - Redux Toolkit (Complex state)
   - Zustand (Lightweight global state)
5. **Forms**: React Hook Form with Zod validation
6. **Animations**: Framer Motion for smooth transitions

---

## Dependencies and Libraries

### UI Components (Radix UI)

The project uses [Radix UI](https://www.radix-ui.com/) primitives for accessible, unstyled components:

```json
{
  "@radix-ui/react-accordion": "^1.2.0",
  "@radix-ui/react-alert-dialog": "^1.1.1",
  "@radix-ui/react-avatar": "^1.1.0",
  "@radix-ui/react-checkbox": "^1.1.1",
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-dropdown-menu": "^2.1.1",
  "@radix-ui/react-popover": "^1.1.1",
  "@radix-ui/react-select": "^2.1.1",
  "@radix-ui/react-tabs": "^1.1.0",
  "@radix-ui/react-toast": "^1.2.1",
  "@radix-ui/react-tooltip": "^1.1.4"
}
```

### Payment Processing

- **@stripe/stripe-js** (^7.4.0): Stripe JavaScript SDK
- **@stripe/react-stripe-js** (^3.7.0): React components for Stripe integration

### Data Management

- **@tanstack/react-query** (^5.56.2): Server state management and caching
- **@reduxjs/toolkit** (^2.9.0): Redux state management with modern APIs
- **zustand** (^5.0.8): Lightweight state management
- **axios** (^1.12.2): HTTP client for API requests

### Backend Integration

- **@supabase/supabase-js** (^2.51.0): Supabase client for backend services
- **@google/generative-ai** (^0.24.1): Google Generative AI integration

### Form Management

- **react-hook-form** (^7.53.0): Performant form library
- **@hookform/resolvers** (^3.9.0): Validation resolver integration
- **zod** (^3.23.8): TypeScript-first schema validation

### UI Enhancement Libraries

- **lucide-react** (^0.462.0): Icon library with 1000+ icons
- **framer-motion** (^12.23.24): Animation library
- **next-themes** (^0.3.0): Theme management
- **sonner** (^1.5.0): Toast notifications
- **embla-carousel-react** (^8.3.0): Carousel component

### Specialized Libraries

- **@react-three/fiber** (^8.18.0): React renderer for Three.js (3D graphics)
- **@react-three/drei** (^9.122.0): Helpers for React Three Fiber
- **@react-three/rapier** (^1.5.0): Physics engine integration
- **three** (^0.181.2): 3D graphics library
- **chart.js** (^4.5.0): Charting library
- **recharts** (^2.12.7): React charting components

### Utility Libraries

- **date-fns** (^3.6.0): Date manipulation
- **crypto-js** (^4.2.0): Cryptographic functions
- **uuid** (^13.0.0): UUID generation
- **qrcode** (^1.5.4): QR code generation
- **jspdf** (^3.0.3): PDF generation
- **xlsx** (^0.18.5): Excel file handling

### Development Tools

```json
{
  "@eslint/js": "^9.9.0",
  "eslint": "^9.9.0",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.9",
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@types/node": "^22.5.5",
  "typescript-eslint": "^8.0.1"
}
```

---

## Architecture and Structure

### Project Directory Structure

```
Bosons-web/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── features/    # Feature-specific components
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   └── ui/          # Reusable UI components (shadcn/ui)
│   ├── constants/       # Application constants
│   ├── contexts/        # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── translations/    # i18n translations
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Root application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── components.json      # shadcn/ui configuration
```

### Component Architecture

#### Feature Components

Located in `src/components/features/`:

1. **HeroSection.tsx**: Landing section with call-to-action buttons
2. **ServicesSection.tsx**: Grid of service offerings
3. **ProductsSection.tsx**: Filterable product catalog
4. **PaymentSection.tsx**: Payment information and Stripe integration
5. **ContactSection.tsx**: Contact form and company information

#### Layout Components

Located in `src/components/layout/`:

1. **Header.tsx**: Navigation bar with language toggle, theme switcher, and menu
2. **Footer.tsx**: Site footer with links and company information

#### UI Components

Located in `src/components/ui/`: 40+ reusable shadcn/ui components including buttons, cards, dialogs, forms, and more.

### State Management

The application uses multiple state management approaches:

1. **Context API**: 
   - `LanguageContext`: Manages language selection (Spanish/English)
   - Theme state: Dark/light mode preference

2. **Local State**: Component-level state with React hooks
3. **Form State**: React Hook Form for complex form management
4. **Server State**: TanStack Query for API data caching

### Routing Structure

Simple single-page application with smooth scrolling navigation:

```typescript
- / (HomePage)
  - #servicios (Services Section)
  - #productos (Products Section)
  - #materiales (Materials Section)
  - #automatizacion (Automation Section)
  - #soldadura (Welding Section)
  - #contacto (Contact Section)
```

---

## Website Sections

### 1. Hero Section

**Purpose**: First impression and primary call-to-action

**Features**:
- Prominent headline with company value proposition
- Two CTA buttons: "View Catalog" and "Contact Advisor"
- Trust indicators showing shipping, product count, and support
- Animated gradient background with pattern overlay
- Responsive design with image on desktop view

**Content**:
- Badge: "Leading supplier in Colombia"
- Title: "Industrial equipment and specialized supplies"
- Description: Comprehensive information about product offerings

### 2. Services Section

**Purpose**: Showcase core business services

**Features**:
- Grid layout with 5 service cards
- Hover animations and visual feedback
- Icon-based visual hierarchy
- Feature lists for each service

**Services Offered**:
1. **Supplies and Tools**: 500+ products in stock
2. **Specialized Materials**: Stainless steel, carbon steel, iron
3. **Installation and Consulting**: Professional installation services
4. **Process Automation**: PLC systems and sensors
5. **Specialized Welding**: TIG, MIG, laser welding

### 3. Products Section

**Purpose**: Display product catalog with filtering

**Features**:
- Dynamic category filtering
- Product cards with images and specifications
- Price display in Colombian Pesos (COP)
- Stock status indicators
- Responsive grid layout (1-4 columns)
- Language-specific product display

**Product Categories**:
- All Products (Todos los Productos)
- Tools (Herramientas)
- Materials (Materiales)
- Industrial Welding (Soldadura Industrial)
- Automation (Automatización)
- Specialized (Especializados)

**Product Information**:
- Product images from Unsplash
- Name and description
- Price or quotation request
- Technical specifications
- Stock availability
- "Request Quote" or "Add to Cart" actions

### 4. Payment Section

**Purpose**: Provide payment options and security information

**Features**:
- Stripe payment integration
- Security badges and trust signals
- Payment method icons
- Flexible payment plans information
- Secure checkout process

### 5. Contact Section

**Purpose**: Enable customer communication

**Features**:
- Contact form with validation
- Company contact information
- Location information (Colombia)
- Social media links
- Quick response promise

**Form Fields**:
- Name
- Email
- Phone
- Message
- Form validation with error messages

### 6. Header

**Purpose**: Navigation and global controls

**Features**:
- Sticky positioning (follows scroll)
- Company logo
- Navigation menu with smooth scrolling
- Language toggle (ES/EN)
- Theme toggle (Light/Dark)
- Shopping cart icon
- Mobile-responsive hamburger menu
- Search functionality
- Contact phone number

**Top Bar**:
- Free shipping announcement
- Product count (500+ productos)
- Quick contact number

### 7. Footer

**Purpose**: Secondary navigation and legal information

**Features**:
- Company information
- Quick links to sections
- Social media icons
- Copyright notice
- Additional resources
- Newsletter signup (optional)

---

## User Workflow

### Primary User Journeys

#### 1. Browse and Purchase Flow

```
Landing (Hero) 
  → Browse Services Section
    → Explore Products Section
      → Filter by Category
        → View Product Details
          → Add to Cart / Request Quote
            → Payment Section
              → Checkout via Stripe
```

#### 2. Service Inquiry Flow

```
Landing (Hero)
  → "Contact Advisor" CTA
    → Contact Section
      → Fill Contact Form
        → Submit Inquiry
          → Receive Confirmation
```

#### 3. Product Search Flow

```
Header Search
  → Enter Keywords
    → Filter Results
      → View Product
        → Request Quotation
```

### Interaction Patterns

1. **Smooth Scrolling**: Navigation links trigger smooth scroll to sections
2. **Lazy Loading**: Images load as user scrolls
3. **Form Validation**: Real-time validation with error messages
4. **Toast Notifications**: User feedback for actions
5. **Modal Dialogs**: Product details and checkout flows
6. **Responsive Navigation**: Mobile hamburger menu, desktop full menu

### Language Switching

Users can toggle between Spanish and English:
- Toggle button in header (ES/EN flag or text)
- Preference stored in localStorage
- All UI elements and product descriptions update instantly
- Default language: Spanish (es)

### Theme Switching

Users can toggle between light and dark modes:
- Sun/Moon icon in header
- Preference stored in localStorage
- System preference detection on first visit
- Smooth color transitions

---

## Installation and Setup

### Prerequisites

- **Node.js**: Version 18.x or higher ([Download](https://nodejs.org/))
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))

### Step 1: Clone the Repository

```bash
git clone https://github.com/titanioco/Bosons-web.git
cd Bosons-web
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all dependencies listed in `package.json`, including:
- React, TypeScript, and Vite
- UI component libraries (Radix UI)
- Tailwind CSS and plugins
- Form handling and validation libraries
- Additional utilities

### Step 3: Environment Configuration (Optional)

Create a `.env` file for environment variables if needed:

```env
# Example environment variables
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_GOOGLE_AI_KEY=your_google_ai_key
```

**Note**: Never commit the `.env` file to version control.

### Step 4: Verify Installation

```bash
npm run dev
```

The development server should start at `http://localhost:8080`

---

## Development Workflow

### Available Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "vite build",            // Production build
  "build:dev": "vite build --mode development", // Development build
  "lint": "eslint .",               // Run ESLint
  "preview": "vite preview"         // Preview production build
}
```

### Development Server

```bash
npm run dev
```

Features:
- Hot Module Replacement (HMR)
- Fast refresh for React components
- TypeScript type checking
- Auto-imports and path aliases
- Runs on `http://[::]:8080`

### Code Quality

#### Linting

```bash
npm run lint
```

ESLint configuration (`eslint.config.js`):
- React Hooks rules
- React Refresh rules
- TypeScript ESLint rules
- Custom project rules

#### Type Checking

TypeScript is configured with strict mode:
- `tsconfig.json`: Base configuration
- `tsconfig.app.json`: Application code
- `tsconfig.node.json`: Node.js code (Vite config)

### Path Aliases

Configured in `vite.config.ts`:

```typescript
"@": "/src"           // Import from src directory
```

Usage example:
```typescript
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
```

### Styling Workflow

1. **Tailwind Classes**: Use utility classes for most styling
2. **Component Variants**: Use `class-variance-authority` for component variants
3. **Custom Classes**: Define in `src/index.css` for reusable patterns
4. **CSS Variables**: Theme tokens defined as CSS custom properties

Example component styling:
```typescript
<div className="section-container section-padding bg-background">
  <h1 className="text-4xl font-bold text-foreground">Title</h1>
</div>
```

### Adding New Components

#### Using shadcn/ui CLI

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add select
```

This adds pre-styled, accessible components to `src/components/ui/`.

#### Creating Custom Components

1. Create file in appropriate directory
2. Import necessary dependencies
3. Define TypeScript types
4. Implement component logic
5. Export component

### Adding Translations

Edit `src/translations/translations.ts`:

```typescript
export const translations = {
  newSection: {
    title: {
      es: 'Título en Español',
      en: 'Title in English'
    }
  }
};
```

Usage in component:
```typescript
const { language } = useLanguage();
const title = translations.newSection.title[language];
```

---

## Build and Deployment

### Production Build

```bash
npm run build
```

Output:
- `dist/` directory with optimized files
- Minified JavaScript bundles
- Optimized CSS
- Compressed images
- Source maps (optional)

Build optimizations:
- Code splitting
- Tree shaking
- Asset optimization
- CSS purging via Tailwind

### Build Configuration

Vite configuration (`vite.config.ts`):

```typescript
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

### Deployment Options

#### Option 1: Static Hosting (Vercel, Netlify, etc.)

1. Connect GitHub repository
2. Configure build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

#### Option 2: Traditional Web Server

1. Build the project: `npm run build`
2. Upload `dist/` contents to web server
3. Configure server for SPA routing
4. Set up SSL certificate

#### Option 3: OnSpace (Mentioned in README)

1. Open OnSpace platform
2. Click Share → Publish
3. Automatic deployment and hosting

### Environment Variables

Set environment variables in deployment platform:
- Supabase credentials
- Stripe API keys
- Google AI API keys
- Any custom configuration

### Performance Considerations

- **Lighthouse Score**: Target 90+ on all metrics
- **Bundle Size**: Monitor with `vite-bundle-visualizer`
- **Lazy Loading**: Implement for routes and heavy components
- **Image Optimization**: Use modern formats (WebP, AVIF)
- **Caching Strategy**: Configure service worker (optional)

---

## External Resources

### Official Documentation

- [React Documentation](https://react.dev/) - React library
- [TypeScript Documentation](https://www.typescriptlang.org/) - TypeScript language
- [Vite Documentation](https://vitejs.dev/) - Build tool
- [Tailwind CSS Documentation](https://tailwindcss.com/) - Utility CSS framework
- [Radix UI Documentation](https://www.radix-ui.com/) - Accessible components
- [shadcn/ui Documentation](https://ui.shadcn.com/) - Component library

### Libraries and Tools

- [React Router](https://reactrouter.com/) - Client-side routing
- [React Hook Form](https://react-hook-form.com/) - Form management
- [TanStack Query](https://tanstack.com/query/latest) - Data fetching
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Stripe Documentation](https://stripe.com/docs) - Payment processing
- [Supabase Documentation](https://supabase.com/docs) - Backend services

### Learning Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)
- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

### Community and Support

- [React Community](https://react.dev/community)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)
- [GitHub Issues](https://github.com/titanioco/Bosons-web/issues) - Project issues

### Design Resources

- [Unsplash](https://unsplash.com/) - Product images source
- [Google Fonts](https://fonts.google.com/) - Typography (Inter, Montserrat)
- [Color Hunt](https://colorhunt.co/) - Color palette inspiration
- [Dribbble](https://dribbble.com/) - Design inspiration

### Development Tools

- [VS Code](https://code.visualstudio.com/) - Recommended IDE
- [GitHub](https://github.com/) - Version control hosting
- [npm](https://www.npmjs.com/) - Package registry
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Browser debugging

### Testing Tools

- [React Testing Library](https://testing-library.com/react) - Component testing
- [Vitest](https://vitest.dev/) - Unit testing framework
- [Cypress](https://www.cypress.io/) - E2E testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing

---

## Technical Specifications

### Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 14+, Chrome Android

### Performance Targets

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

### Accessibility

- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels and roles
- Focus management

### SEO Optimization

- Semantic HTML structure
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Schema.org structured data
- Sitemap generation (if needed)
- robots.txt configuration

---

## Maintenance and Updates

### Dependency Updates

Regular maintenance schedule:
1. Check for security updates: Weekly
2. Minor version updates: Monthly
3. Major version updates: Quarterly
4. Review and test all updates before production

Commands:
```bash
npm outdated              # Check outdated packages
npm update               # Update minor versions
npm install package@latest  # Update specific package
```

### Security Practices

- Keep dependencies updated
- Use `.env` for sensitive data
- Implement Content Security Policy
- Enable HTTPS in production
- Regular security audits
- Use `npm audit` for vulnerability scanning

### Monitoring

Recommended monitoring:
- Error tracking (Sentry)
- Performance monitoring (Web Vitals)
- User analytics (Google Analytics, Plausible)
- Uptime monitoring
- Build status monitoring

---

## Contributing Guidelines

### Git Workflow

1. Create feature branch from `main`
2. Make changes with descriptive commits
3. Run linting and tests
4. Submit pull request
5. Code review process
6. Merge to main after approval

### Commit Message Convention

```
type(scope): subject

body (optional)

footer (optional)
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use functional components with hooks
- Implement proper error handling
- Add JSDoc comments for complex functions
- Keep components small and focused

---

## Troubleshooting

### Common Issues

**Issue**: Port 8080 already in use
```bash
# Solution: Use different port
npm run dev -- --port 3000
```

**Issue**: Type errors in IDE
```bash
# Solution: Restart TypeScript server or reinstall dependencies
npm install
```

**Issue**: Styles not updating
```bash
# Solution: Clear Vite cache and restart
rm -rf node_modules/.vite
npm run dev
```

**Issue**: Build fails
```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## License

Please refer to the repository for license information.

---

## Contact and Support

For questions, issues, or contributions:
- GitHub Issues: [Bosons-web Issues](https://github.com/titanioco/Bosons-web/issues)
- Company Website: https://www.bosons.co
- Email: Contact through website form

---

**Last Updated**: December 2025
**Version**: 1.0.0
**Maintained by**: Titanioco/Bosons Development Team
