# DevJobs Web App - Project Specifications

## Project Overview
A modern job board web application that allows users to browse, filter, and apply for developer jobs. The project is built using Next.js 14 with App Router, TypeScript, and styled using Tailwind CSS with shadcn/ui components.

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - shadcn/ui components
  - CSS Variables for theming
- **State Management**: 
  - React Context API
  - Next.js Server Components
  - React Server Actions
- **Data Source**: Local JSON file (`data.json`)
- **Form Handling**: React Hook Form + Zod
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **Animations**: Framer Motion

## Project Structure
```
frontend-shadcn/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── (auth)/            # Authentication routes
│   │   ├── (dashboard)/       # Dashboard routes
│   │   └── (marketing)/       # Marketing routes
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── forms/            # Form components
│   │   └── shared/           # Shared components
│   ├── data/                 # Data files
│   │   ├── types.ts         # TypeScript types
│   │   └── data.json        # Job listings data
│   ├── lib/                  # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── providers/           # Context providers
│   └── types/               # TypeScript types
```

## Core Features

### 1. Job Listing Page ✅
- [x] Server-side rendered job listings
- [ ] Client-side filtering with React Server Actions
- [ ] Job filtering system using shadcn/ui components:
  - [ ] Filter by job title (Input component)
  - [ ] Filter by location (Select component)
  - [ ] Filter by employment type (Checkbox component)
- [x] Job card components with:
  - [x] Company logo (Next.js Image component)
  - [x] Job title
  - [x] Company name
  - [x] Location
  - [x] Employment type
  - [x] Posted date
  - [x] Contract type
  - [x] Apply button (shadcn/ui Button)

### 2. Job Detail Page
- [ ] Server-side rendered job details
- [ ] Detailed job information display
- [ ] Company information section
- [ ] Job requirements and responsibilities
- [ ] Apply button functionality
- [ ] Back to search navigation
- [ ] Share functionality (shadcn/ui Dropdown)

### 3. Responsive Design
- [x] Mobile-first approach
- [x] Tablet layout optimization
- [x] Desktop layout optimization
- [ ] Dark mode support using next-themes
- [ ] Responsive navigation using shadcn/ui Sheet component

### 4. User Experience
- [ ] Loading states using Next.js loading.tsx
- [ ] Error handling with error.tsx
- [ ] Smooth transitions with Framer Motion
- [ ] Accessible navigation
- [ ] Keyboard navigation support
- [ ] Toast notifications (sonner)

## Implementation Plan

### Phase 1: Project Setup and Basic Structure ✅
- [x] Initialize Next.js project with TypeScript
- [x] Set up Tailwind CSS
- [x] Configure shadcn/ui
- [x] Set up project structure
- [ ] Configure theme provider
- [x] Set up basic routing with App Router

### Phase 2: Core Components Development
- [x] Create shadcn/ui component library
- [x] Implement job card component
- [ ] Build filter components
- [ ] Develop job detail view
- [ ] Create form components with React Hook Form

### Phase 3: Data Integration ✅
- [x] Set up data.json integration
- [ ] Implement filtering logic with Server Actions
- [ ] Add search functionality
- [x] Create data fetching utilities
- [ ] Implement optimistic updates

### Phase 4: Styling and UI Polish
- [x] Implement responsive layouts
- [ ] Add animations with Framer Motion
- [ ] Implement dark mode
- [ ] Polish UI components
- [ ] Add loading skeletons

### Phase 5: Testing and Optimization
- [ ] Add unit tests with Jest
- [ ] Implement error boundaries
- [ ] Optimize performance
- [ ] Add loading states
- [ ] Implement proper caching strategies

## Design System

### Colors (CSS Variables)
```css
:root {
  --primary: 89 100 224;
  --secondary: 110 128 152;
  --background: 242 242 242;
  --text: 25 32 45;
  --white: 255 255 255;
}
```

### Typography
- Font Family: Inter
- Font Sizes:
  - Heading 1: 28px
  - Heading 2: 24px
  - Body: 16px
  - Small: 14px

### Spacing
- Container padding: 24px
- Card padding: 32px
- Grid gap: 24px

### Component Library (shadcn/ui)
- Button
- Card
- Input
- Select
- Checkbox
- Sheet
- Toast (sonner)
- Dropdown
- Dialog
- Tabs

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow Next.js 14 best practices
- Implement proper error handling
- Write clean, maintainable code
- Use Server Components by default
- Use Client Components only when necessary

### Component Structure
- Use functional components
- Implement proper prop typing
- Follow atomic design principles
- Maintain component reusability
- Use shadcn/ui components as base
- Extend shadcn/ui components when needed

### Performance Considerations
- Use Next.js Image component
- Implement proper caching strategies
- Optimize bundle size
- Use Server Components where possible
- Implement proper loading states
- Use React Suspense boundaries

## Deployment
- [ ] Set up GitHub repository
- [ ] Configure deployment pipeline
- [ ] Deploy to Vercel
- [ ] Set up monitoring and analytics
- [ ] Configure environment variables
- [ ] Set up CI/CD pipeline

## Future Enhancements
- [ ] Add user authentication with NextAuth.js
- [ ] Implement job application system
- [ ] Add company profiles
- [ ] Implement job search with API integration
- [ ] Add job bookmarking feature
- [ ] Implement real-time notifications
- [ ] Add job recommendations
- [ ] Implement company dashboard 