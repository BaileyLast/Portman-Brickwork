# Portman Brickwork Website

## Overview

This is a professional business website for Portman Brickwork, a bricklaying company serving Braintree and surrounding areas. The application features a modern, responsive design built as a single-page application showcasing services, portfolio, testimonials, and contact functionality. The site emphasizes lead generation through multiple contact methods and provides a comprehensive overview of bricklaying services offered.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent, accessible design
- **State Management**: React Query (@tanstack/react-query) for server state management and API calls
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Styling**: Custom CSS variables with Ipswich Town FC color scheme (blue and red) matching company branding

### Backend Architecture
- **Runtime**: Node.js with Express.js RESTful API
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database serverless PostgreSQL
- **Session Management**: In-memory storage with fallback to PostgreSQL sessions using connect-pg-simple
- **Development**: Hot module replacement via Vite integration in development mode

### Data Storage Solutions
- **Primary Database**: PostgreSQL hosted on Neon Database
- **ORM**: Drizzle ORM with migration support via drizzle-kit
- **Schema Management**: Centralized schema definitions in `/shared` directory with automatic TypeScript type generation
- **Development Storage**: In-memory storage implementation for rapid development and testing

### Authentication and Authorization
- **Current Implementation**: Basic user schema defined but authentication not actively implemented
- **Planned Architecture**: Session-based authentication with PostgreSQL session storage
- **Security**: Prepared for secure session management with proper session cookies

### API Structure
- **Contact Submissions**: POST `/api/contact` for form submissions with Zod validation
- **Admin Interface**: GET `/api/contact-submissions` for retrieving all contact submissions
- **Error Handling**: Centralized error handling with proper HTTP status codes and user-friendly error messages
- **Request Logging**: Comprehensive request logging with response time tracking

### Component Architecture
- **Layout Components**: Navigation, Hero, Footer with consistent branding
- **Section Components**: Services, Portfolio, About, Testimonials, Contact as reusable sections
- **UI Components**: Extensive shadcn/ui component library with custom styling
- **Responsive Design**: Mobile-first approach with responsive navigation and floating call-to-action

## External Dependencies

### Development and Build Tools
- **Vite**: Frontend build tool with React plugin and development server
- **TypeScript**: Type safety across frontend, backend, and shared code
- **ESBuild**: Production bundle optimization
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Headless component primitives for accessibility
- **shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Inter font family for modern typography

### Backend Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Express.js**: Web application framework for Node.js
- **Drizzle ORM**: Type-safe SQL ORM with migration support

### Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: Runtime type validation and parsing
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Development Environment
- **Replit Integration**: Vite plugins for Replit development environment
- **Runtime Error Overlay**: Enhanced error reporting in development
- **Hot Module Replacement**: Fast development iteration with file watching