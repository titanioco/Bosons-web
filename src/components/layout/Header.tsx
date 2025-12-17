import { useEffect, useState, type MouseEvent } from 'react';
import { Search, ShoppingCart, Menu, Phone, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
  event.preventDefault();
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Header() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage === 'en') {
      setIsEnglish(true);
    }

    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldUseDark);
    setIsDarkMode(shouldUseDark);
  }, []);

  const toggleLanguage = () => {
    setIsEnglish((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', next ? 'en' : 'es');
      }
      return next;
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
      }
      return next;
    });
  };

  const navItems = [
    { href: '#servicios', label: isEnglish ? 'Services' : 'Servicios', smooth: true },
    { href: '#productos', label: isEnglish ? 'Products' : 'Productos', smooth: true },
    { href: '#materiales', label: isEnglish ? 'Materials' : 'Materiales' },
    { href: '#automatizacion', label: isEnglish ? 'Automation' : 'Automatización' },
    { href: '#soldadura', label: isEnglish ? 'Welding' : 'Soldadura' },
    { href: '#contacto', label: isEnglish ? 'Contact' : 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="section-container">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">
                {isEnglish ? '🇨🇴 Shipping across Colombia' : '🇨🇴 Envíos a toda Colombia'}
              </span>
              <span className="text-xs sm:text-sm">
                {isEnglish ? 'Over 500 industrial products' : 'Más de 500 productos industriales'}
              </span>
            </div>
            <a href="tel:+57" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">{isEnglish ? 'Contact' : 'Contacto'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src="https://cdn-ai.onspace.ai/onspace/project/uploads/mqp2KphbPzvTPCB5c9ztXB/Asset_1@2x.png" 
              alt="Bosons Logo" 
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-foreground">BOSONS</h1>
              <p className="text-xs text-muted-foreground">
                {isEnglish ? 'Industrial Equipment' : 'Equipos Industriales'}
              </p>
            </div>
          </a>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={
                  isEnglish
                    ? 'Search products, materials, services...'
                    : 'Buscar productos, materiales, servicios...'
                }
                className="w-full px-4 py-2 pl-10 bg-muted border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="hidden md:inline-flex" onClick={toggleLanguage}>
              {isEnglish ? 'ES' : 'EN'}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 pb-4 text-sm font-medium border-t border-border pt-4">
          {navItems.map(({ href, label, smooth }) => (
            <a
              key={href}
              href={href}
              onClick={smooth ? (event) => handleNavClick(event, href) : undefined}
              className="text-foreground hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
