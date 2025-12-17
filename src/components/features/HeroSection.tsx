import { ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-primary-foreground overflow-hidden dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 dark:text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.08"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="section-container section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full text-accent text-sm font-semibold dark:bg-accent-foreground/20">
              🏭 Líderes en Suministros Industriales
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Equipos y Soluciones Industriales de{' '}
                <span className="text-accent dark:text-yellow-400">Calidad Superior</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 text-balance">
              Suministros, materiales especializados, automatización y servicios 
              profesionales para la industria colombiana. Más de 500 productos en stock.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-accent text-base">
                Ver Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base dark:border-primary-foreground dark:text-primary-foreground dark:hover:bg-primary-foreground dark:hover:text-primary"
              >
                Contactar Asesor
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold">Garantía</div>
                  <div className="opacity-75">Certificada</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-8 w-8 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold">Envíos</div>
                  <div className="opacity-75">Nacionales</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-8 w-8 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <div className="font-semibold">Calidad</div>
                  <div className="opacity-75">Premium</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                alt="Equipos Industriales Bosons"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent dark:from-primary-900/60 dark:via-primary-800/30" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground p-6 rounded-xl shadow-xl border border-border max-w-xs dark:bg-white dark:text-foreground">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">
                Productos industriales disponibles
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
