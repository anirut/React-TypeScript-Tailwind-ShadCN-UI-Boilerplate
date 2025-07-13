# React TypeScript Tailwind ShadCN/UI Boilerplate

A modern, production-ready React boilerplate with TypeScript, Tailwind CSS, ShadCN/UI components, and comprehensive tooling.

## ✨ Features

- ⚡ **Vite** - Lightning fast development with Hot Module Replacement
- ⚛️ **React 19** - Latest React with TypeScript for type-safe development
- 🎨 **Tailwind CSS v3.4.1** - Utility-first CSS framework for rapid UI development
- 🎁 **ShadCN/UI** - Beautiful, accessible components built with Radix UI
- 📊 **Recharts** - Composable charting library for React applications
- 🔧 **ESLint** - Code quality and consistency with modern configuration
- 💅 **Prettier** - Code formatting with ESLint integration
- 📁 **Path Aliases** - Clean imports with `@/*` path mapping
- 🏗️ **Sample Components** - Ready-to-use components showcasing all features

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## ⚡ SWC Support

This boilerplate includes SWC support for faster compilation. To enable SWC:

1. Install SWC dependencies:
   ```bash
   npm install @vitejs/plugin-react-swc @swc/core
   ```

2. Update `vite.config.ts`:
   ```typescript
   import react from '@vitejs/plugin-react-swc'
   ```

3. Comment out the regular React plugin import

SWC provides significantly faster compilation times compared to Babel, especially for larger projects.

## 🛠️ Project Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # ShadCN/UI base components
│   ├── Chart.tsx        # Chart examples with Recharts
│   ├── FeatureCards.tsx # Feature showcase cards
│   └── Hero.tsx         # Hero section
├── lib/                 # Utility functions
│   └── utils.ts         # cn() utility for className merging
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind CSS
```

## 🎨 Components

### ShadCN/UI Components
- Button with variants (default, destructive, outline, secondary, ghost, link)
- Card components (Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- Badge with variants (default, secondary, destructive, outline)

### Chart Components
- Bar Chart - Monthly sales data visualization
- Line Chart - Multi-line chart for users and revenue
- Pie Chart - Traffic sources with custom colors

## 🔧 Configuration

### Tailwind CSS
Configured with ShadCN/UI design system including:
- Custom color palette with CSS variables
- Dark mode support
- Custom animations
- Typography plugin

### ESLint & Prettier
- Modern ESLint configuration with TypeScript support
- Prettier integration for consistent formatting
- React-specific rules and best practices

### TypeScript
- Strict TypeScript configuration
- Path aliases configured for clean imports
- Latest React 19 types

## 📝 License

MIT License - feel free to use this boilerplate for your projects!