import { useEffect, useCallback, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const carouselImages = [
  {
    src: '/assets/generated/carousel-team.dim_800x600.jpg',
    title: 'Our Team',
    description: 'Meet the talented people behind our success',
  },
  {
    src: '/assets/generated/carousel-workspace.dim_800x600.jpg',
    title: 'Modern Workspace',
    description: 'Where innovation and creativity come together',
  },
  {
    src: '/assets/generated/carousel-meeting.dim_800x600.jpg',
    title: 'Collaboration',
    description: 'Working together to achieve greatness',
  },
  {
    src: '/assets/generated/carousel-cityscape.dim_800x600.jpg',
    title: 'Global Reach',
    description: 'Connecting with clients worldwide',
  },
];

export default function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api || isHovered) {
      return;
    }

    const intervalId = setInterval(() => {
      scrollNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [api, isHovered, scrollNext]);

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Discover Our Story
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the moments that define us and the journey that shapes our vision
            </p>
          </div>

          {/* Carousel */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={image.src}
                              alt={image.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {image.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {image.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="text-center space-y-3 p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-lg">Precision</h3>
              <p className="text-sm text-muted-foreground">
                Every detail matters in our pursuit of excellence
              </p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg">Speed</h3>
              <p className="text-sm text-muted-foreground">
                Fast delivery without compromising on quality
              </p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-semibold text-lg">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Premium solutions that stand the test of time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
