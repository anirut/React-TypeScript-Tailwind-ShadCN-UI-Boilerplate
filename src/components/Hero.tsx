import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'

export function Hero() {
  return (
    <div className="text-center space-y-6 py-16">
      <div className="space-y-2">
        <Badge variant="outline" className="mb-4">
          🚀 Production Ready
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          React TypeScript
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Boilerplate
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern, feature-rich React boilerplate with TypeScript, Tailwind
          CSS, ShadCN/UI components, and Recharts for data visualization.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="gap-2">
          <Github className="w-4 h-4" />
          Get Started
        </Button>
        <Button variant="outline" size="lg" className="gap-2">
          <ExternalLink className="w-4 h-4" />
          View Demo
        </Button>
      </div>

      <div className="flex flex-wrap justify-center gap-2 pt-4">
        <Badge variant="secondary">⚡ Vite</Badge>
        <Badge variant="secondary">⚛️ React 19</Badge>
        <Badge variant="secondary">🎨 Tailwind</Badge>
        <Badge variant="secondary">🎁 ShadCN/UI</Badge>
        <Badge variant="secondary">📊 Recharts</Badge>
        <Badge variant="secondary">🔧 ESLint</Badge>
      </div>
    </div>
  )
}
