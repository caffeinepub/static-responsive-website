import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1920x1080.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Welcome to the Future</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into reality with our cutting-edge solutions. 
            Experience innovation, creativity, and excellence in every detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group min-w-[200px]">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
    </section>
  );
}
