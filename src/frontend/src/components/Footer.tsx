import { Heart } from 'lucide-react';
import { SiFacebook, SiX, SiLinkedin, SiInstagram, SiGithub } from 'react-icons/si';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'API', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

const socialLinks = [
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiX, href: '#', label: 'X (Twitter)' },
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiInstagram, href: '#', label: 'Instagram' },
  { icon: SiGithub, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t bg-muted/30">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Showcase
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building extraordinary digital experiences that inspire and transform. 
              Join us on our journey to innovation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-9 w-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            © 2025. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
