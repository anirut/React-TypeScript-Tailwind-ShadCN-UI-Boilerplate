import './App.css'
import { Hero } from '@/components/Hero'
import { FeatureCards } from '@/components/FeatureCards'
import { BarChartDemo, LineChartDemo, PieChartDemo } from '@/components/Chart'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Hero />

        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Features</h2>
            <p className="text-muted-foreground">
              Everything you need to build modern React applications
            </p>
          </div>
          <FeatureCards />
        </section>

        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Chart Examples</h2>
            <p className="text-muted-foreground">
              Beautiful data visualizations with Recharts
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <BarChartDemo />
            <LineChartDemo />
            <PieChartDemo />
          </div>
        </section>

        <footer className="py-16 text-center border-t">
          <p className="text-muted-foreground">
            Built with ❤️ using React, TypeScript, Tailwind CSS, ShadCN/UI, and
            Recharts
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
