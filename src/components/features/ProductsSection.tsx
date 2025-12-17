import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import { DEMO_PRODUCTS, CATEGORIES } from '@/constants/products';

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredProducts = selectedCategory === 'Todos' 
    ? DEMO_PRODUCTS 
    : DEMO_PRODUCTS.filter(product => product.category === selectedCategory);

  return (
    <section id="productos" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Catálogo de Productos
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 500 productos industriales de las mejores marcas del mercado
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Button
            variant={selectedCategory === 'Todos' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('Todos')}
            className="rounded-full"
          >
            Todos
          </Button>
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Mostrando {filteredProducts.length} de 500+ productos disponibles
          </p>
          <Button size="lg" variant="outline">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
}
