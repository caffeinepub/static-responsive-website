import { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const servicesMenu = [
  {
    category: 'PAINTINGS',
    items: ['Realistic', 'Portrait', 'Abstract', 'Wall Art (2D & 3D)'],
  },
  {
    category: 'ARTWORKS',
    items: ['Murals', 'Nameplates', 'Gift Articles', 'Interior Artwork'],
  },
  {
    category: 'SIGNAGES',
    items: ['Branding Signs', 'LED Signs', 'Informative Signs', 'Building Names'],
  },
  {
    category: 'SCULPTURES',
    items: ['Mural & Statue', 'Fiber', 'Metal', 'Stone'],
  },
  {
    category: 'PRINT SOLUTION',
    items: ['UV Printing', 'Eco Solvent', 'Transparent', 'One-way Vision', 'Customize Wallpapers'],
  },
  {
    category: 'GRAPHICS (Design)',
    items: [
      'Logo Design',
      'Visiting Card',
      'Company Profile Design',
      'Brochure Design',
      'ID Card Design',
      'Packaging Design',
      'Flyers Design',
      'Poster Design',
      'Menu Card Design',
      'Exhibition Stall Design',
      'Invitation Design',
      'Festival Greeting Design',
    ],
  },
  {
    category: 'GRAPHICS (Digital)',
    items: ['UI/UX', 'Website Design', 'Social Media Post Design'],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Showcase
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </button>
          ))}

          {/* Services Dropdown Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-4 p-6 w-[800px]">
                    {servicesMenu.map((service) => (
                      <div key={service.category} className="space-y-2">
                        <h4 className="font-semibold text-sm text-foreground border-b border-border pb-1">
                          {service.category}
                        </h4>
                        <ul className="space-y-1.5">
                          {service.items.map((item) => (
                            <li key={item}>
                              <NavigationMenuLink asChild>
                                <button
                                  onClick={() => scrollToSection('#services')}
                                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-left py-1 hover:underline"
                                >
                                  {item}
                                </button>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button size="sm" className="ml-2">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] overflow-y-auto">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-2"
                >
                  {link.name}
                </button>
              ))}

              {/* Mobile Services Collapsible */}
              <div className="border-t border-border pt-4">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium text-muted-foreground hover:text-foreground transition-colors text-left py-2">
                    Services
                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3 mt-2 pl-4">
                    {servicesMenu.map((service) => (
                      <Collapsible
                        key={service.category}
                        open={openCategories.includes(service.category)}
                        onOpenChange={() => toggleCategory(service.category)}
                      >
                        <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-semibold text-foreground py-2 border-b border-border/50">
                          {service.category}
                          <ChevronDown
                            className={`h-3 w-3 transition-transform duration-200 ${
                              openCategories.includes(service.category) ? 'rotate-180' : ''
                            }`}
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-1 mt-2 pl-3">
                          {service.items.map((item) => (
                            <button
                              key={item}
                              onClick={() => scrollToSection('#services')}
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors w-full text-left py-1.5"
                            >
                              {item}
                            </button>
                          ))}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>

              <Button className="mt-4 w-full">Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
