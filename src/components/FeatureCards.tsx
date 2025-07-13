import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Zap,
  Palette,
  Component,
  BarChart3,
  Settings,
  FolderOpen,
} from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: '⚡ Vite',
    description: 'Lightning fast development with Hot Module Replacement',
    badge: 'Fast',
  },
  {
    icon: <Component className="w-6 h-6" />,
    title: '⚛️ React 19',
    description: 'Latest React with TypeScript for type-safe development',
    badge: 'Latest',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: '🎨 Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    badge: 'v3.4.1',
  },
  {
    icon: <Component className="w-6 h-6" />,
    title: '🎁 ShadCN/UI',
    description: 'Beautiful, accessible components built with Radix UI',
    badge: 'Modern',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: '📊 Recharts',
    description: 'Composable charting library for React applications',
    badge: 'Charts',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: '🔧 ESLint',
    description: 'Code quality and consistency with modern configuration',
    badge: 'Quality',
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: '📁 Path Aliases',
    description: 'Clean imports with @/* path mapping configured',
    badge: 'Clean',
  },
  {
    icon: <Component className="w-6 h-6" />,
    title: '🏗️ Sample Components',
    description: 'Ready-to-use components showcasing all features',
    badge: 'Demo',
  },
]

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {features.map((feature, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              {feature.icon}
              <Badge variant="secondary">{feature.badge}</Badge>
            </div>
            <CardTitle className="text-lg">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
